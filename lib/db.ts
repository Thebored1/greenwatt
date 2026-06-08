import postgres from "postgres";

// Singleton — reused across hot-reloads in dev and across requests in prod
const globalForDb = globalThis as unknown as { db?: ReturnType<typeof postgres> };

export const db =
  globalForDb.db ??
  postgres(process.env.DATABASE_URL!, {
    ssl: "require",
    max: 5,
    idle_timeout: 20,
    connect_timeout: 10,
  });

if (process.env.NODE_ENV !== "production") globalForDb.db = db;
