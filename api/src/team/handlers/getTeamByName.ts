import { pool } from "../../database";

async function getTeamByName(teamName: string) {
  if (typeof teamName !== "string") throw new Error("Id is not a valid Name");
  const query = `SELECT * FROM sport5.teams where teamName like ?`;
  const results = await pool.execute(query, [teamName]);
  const [data] = results;
  return data;
}

export { getTeamByName };
