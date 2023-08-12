import { pool } from "../../database";

async function getAllGames() {
  const query = `SELECT * FROM sport5.games;`;
  const results = await pool.execute(query);
  const [data] = results;
  return data;
}

export { getAllGames };
