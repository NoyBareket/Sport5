import { pool } from "../../database";

async function getTeamByName(name: string) {
  if (!name) throw new Error("Mising search input");
  const query = `SELECT * FROM sport5.teams where teamName like ?`;
  const result = await pool.execute(query, [`%${name}%`]);
  const [data] = result;
  return data;
}

export { getTeamByName };
