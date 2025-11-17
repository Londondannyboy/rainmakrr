/**
 * API endpoint to fetch Zep knowledge graph data for a company
 *
 * Returns nodes and edges for vis-network visualization
 */

import type { APIRoute } from 'astro';
import { sql } from '../../../lib/db';

export const GET: APIRoute = async ({ params }) => {
  const { id } = params;

  if (!id) {
    return new Response(JSON.stringify({ error: 'Company ID required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // Fetch company data
    const companies = await sql`
      SELECT id, name, slug, payload
      FROM companies
      WHERE id = ${id}
      LIMIT 1
    `;

    if (companies.length === 0) {
      return new Response(JSON.stringify({ error: 'Company not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const company = companies[0];
    const payload = company.payload || {};

    // Check if we have a screenshot URL (preferred method)
    const screenshotUrl = payload.zep_graph_screenshot_url;

    if (screenshotUrl) {
      // Return screenshot URL
      return new Response(JSON.stringify({
        type: 'screenshot',
        screenshot_url: screenshotUrl,
        message: 'Graph visualization from Zep'
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
        }
      });
    }

    // Check if we have zep_graph_data in payload (fallback)
    const graphData = payload.zep_graph_data;

    if (graphData && graphData.nodes && graphData.nodes.length > 0) {
      // Return stored graph data
      return new Response(JSON.stringify({
        type: 'data',
        nodes: graphData.nodes,
        edges: graphData.edges
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
        }
      });
    }

    // No graph data available yet
    return new Response(JSON.stringify({
      type: 'none',
      message: 'Graph data will be available after next company update'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error fetching graph data:', error);
    return new Response(JSON.stringify({
      error: 'Failed to fetch graph data',
      details: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
