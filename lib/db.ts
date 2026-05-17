import postgres from "postgres";

const connectionString =
  process.env.POSTGRES_URL! ||
  "postgresql://postgres:elefant4@localhost:5432/summary-context";
const sql = postgres(connectionString);

export default sql;
