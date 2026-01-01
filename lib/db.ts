import { neon, NeonQueryFunction } from "@neondatabase/serverless";

let dbInstance: NeonQueryFunction<false, false> | null = null;

export function getDb(): NeonQueryFunction<false, false> {
  if (!dbInstance) {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      throw new Error("DATABASE_URL environment variable is not set");
    }
    dbInstance = neon(databaseUrl);
  }
  return dbInstance;
}

// Re-export sql template literal helper
export const sql = getDb;

// Helper to get first row from query result
function getFirstRow<T>(result: unknown): T | null {
  if (Array.isArray(result) && result.length > 0) {
    return result[0] as T;
  }
  return null;
}

// Helper to get all rows from query result
function getAllRows<T>(result: unknown): T[] {
  if (Array.isArray(result)) {
    return result as T[];
  }
  return [];
}

// ============= Users =============
export async function getUserById(id: string) {
  const sql = getDb();
  const rows = await sql`
    SELECT * FROM users WHERE id = ${id} LIMIT 1
  `;
  return getFirstRow(rows);
}

export async function getUserByNeonAuthId(neonAuthId: string) {
  const sql = getDb();
  const rows = await sql`
    SELECT * FROM users WHERE neon_auth_id = ${neonAuthId} LIMIT 1
  `;
  return getFirstRow(rows);
}

export async function getUserByEmail(email: string) {
  const sql = getDb();
  const rows = await sql`
    SELECT * FROM users WHERE email = ${email} LIMIT 1
  `;
  return getFirstRow(rows);
}

interface CreateUserInput {
  neon_auth_id: string;
  email: string;
  first_name?: string;
  last_name?: string;
}

export async function createUser(data: CreateUserInput) {
  const sql = getDb();
  const rows = await sql`
    INSERT INTO users (neon_auth_id, email, first_name, last_name)
    VALUES (${data.neon_auth_id}, ${data.email}, ${data.first_name ?? null}, ${data.last_name ?? null})
    RETURNING *
  `;
  return getFirstRow(rows);
}

export async function getOrCreateUser(data: CreateUserInput) {
  const existing = await getUserByNeonAuthId(data.neon_auth_id);
  if (existing) return existing;
  return createUser(data);
}

// ============= Voice Sessions =============
interface CreateVoiceSessionInput {
  session_id: string;
  user_profile_id?: string;
  stack_user_id?: string;
}

export async function createVoiceSession(data: CreateVoiceSessionInput) {
  const sql = getDb();
  const rows = await sql`
    INSERT INTO voice_sessions (session_id, user_profile_id, stack_user_id)
    VALUES (${data.session_id}, ${data.user_profile_id ?? null}, ${data.stack_user_id ?? null})
    RETURNING *
  `;
  return getFirstRow(rows);
}

export async function getVoiceSession(sessionId: string) {
  const sql = getDb();
  const rows = await sql`
    SELECT * FROM voice_sessions WHERE session_id = ${sessionId} LIMIT 1
  `;
  return getFirstRow(rows);
}

export async function getVoiceSessionsByUser(stackUserId: string) {
  const sql = getDb();
  const rows = await sql`
    SELECT * FROM voice_sessions
    WHERE stack_user_id = ${stackUserId}
    ORDER BY created_at DESC
  `;
  return getAllRows(rows);
}

interface AddMessageInput {
  role: "user" | "assistant";
  content: string;
  emotion_scores?: Record<string, number>;
}

export async function addMessageToSession(sessionId: string, message: AddMessageInput) {
  const sql = getDb();
  const messageWithTimestamp = {
    ...message,
    timestamp: new Date().toISOString(),
  };
  const rows = await sql`
    UPDATE voice_sessions
    SET
      messages = messages || ${JSON.stringify(messageWithTimestamp)}::jsonb,
      message_count = message_count + 1,
      updated_at = NOW()
    WHERE session_id = ${sessionId}
    RETURNING *
  `;
  return getFirstRow(rows);
}

export async function endVoiceSession(sessionId: string, durationSeconds?: number) {
  const sql = getDb();
  const rows = await sql`
    UPDATE voice_sessions
    SET
      status = 'ended',
      ended_at = NOW(),
      duration_seconds = ${durationSeconds ?? null},
      updated_at = NOW()
    WHERE session_id = ${sessionId}
    RETURNING *
  `;
  return getFirstRow(rows);
}

// ============= Conversation Facts =============
export async function getUserFactsByStackId(stackUserId: string, category?: string) {
  const sql = getDb();
  if (category && category !== "all") {
    const rows = await sql`
      SELECT * FROM conversation_facts
      WHERE stack_user_id = ${stackUserId}
        AND category = ${category}
      ORDER BY created_at DESC
      LIMIT 20
    `;
    return getAllRows(rows);
  }
  const rows = await sql`
    SELECT * FROM conversation_facts
    WHERE stack_user_id = ${stackUserId}
    ORDER BY created_at DESC
    LIMIT 20
  `;
  return getAllRows(rows);
}

export async function saveUserFact(stackUserId: string, fact: string, category: string, sourceSessionId?: string) {
  const sql = getDb();
  const rows = await sql`
    INSERT INTO conversation_facts (stack_user_id, fact, category, source_session_id)
    VALUES (${stackUserId}, ${fact}, ${category}, ${sourceSessionId ?? null})
    RETURNING *
  `;
  return getFirstRow(rows);
}

// ============= Articles =============
export interface Article {
  id: number;
  slug: string;
  title: string;
  content: string;
  content_html: string | null;
  status: string;
  app: string;
  meta_description: string | null;
  hero_asset_url: string | null;
  hero_asset_alt: string | null;
  featured_asset_url: string | null;
  excerpt: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  category: string | null;
  country: string | null;
  country_code: string | null;
}

export async function getArticleBySlug(slug: string, app: string = 'rainmakrr'): Promise<Article | null> {
  const sql = getDb();
  const rows = await sql`
    SELECT id, slug, title, content, content_html, status, app, meta_description,
           hero_asset_url, hero_asset_alt, featured_asset_url, excerpt,
           published_at, created_at, updated_at, category, country, country_code
    FROM articles
    WHERE slug = ${slug}
      AND app = ${app}
      AND status = 'published'
    LIMIT 1
  `;
  return getFirstRow<Article>(rows);
}

export async function getAllPublishedArticles(app: string = 'rainmakrr'): Promise<Article[]> {
  const sql = getDb();
  const rows = await sql`
    SELECT id, slug, title, content, content_html, status, app, meta_description,
           hero_asset_url, hero_asset_alt, featured_asset_url, excerpt,
           published_at, created_at, updated_at, category, country, country_code
    FROM articles
    WHERE app = ${app}
      AND status = 'published'
    ORDER BY published_at DESC NULLS LAST, created_at DESC
  `;
  return getAllRows<Article>(rows);
}

export async function getArticleSlugs(app: string = 'rainmakrr'): Promise<{ slug: string }[]> {
  const sql = getDb();
  const rows = await sql`
    SELECT slug FROM articles
    WHERE app = ${app} AND status = 'published'
  `;
  return getAllRows<{ slug: string }>(rows);
}
