import { neon } from "@neondatabase/serverless";
import { marked } from "marked";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error("DATABASE_URL not set");
  process.exit(1);
}

const sql = neon(DATABASE_URL);

async function backfillHtml() {
  console.log("Fetching articles without content_html...");

  // Get all articles that need backfilling
  const articles = await sql`
    SELECT id, slug, content
    FROM articles
    WHERE content_html IS NULL AND content IS NOT NULL
  `;

  console.log(`Found ${articles.length} articles to backfill`);

  let updated = 0;
  let errors = 0;

  for (const article of articles) {
    try {
      // Convert markdown to HTML
      const html = await marked(article.content);

      // Update the article
      await sql`
        UPDATE articles
        SET content_html = ${html}
        WHERE id = ${article.id}
      `;

      updated++;
      console.log(`✓ Updated: ${article.slug}`);
    } catch (err) {
      errors++;
      console.error(`✗ Error updating ${article.slug}:`, err.message);
    }
  }

  console.log(`\nBackfill complete: ${updated} updated, ${errors} errors`);
}

backfillHtml().catch(console.error);
