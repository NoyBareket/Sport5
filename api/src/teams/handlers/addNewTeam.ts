import { pool } from "../../database";

interface ITeam {
  teamName: string;
  city: string;
  mainColor: string;
  secondaryColor: string;
  semel: string;
}

async function addNewTeam(NewTeam: ITeam): Promise<any> {
  const { teamName, city, mainColor, secondaryColor, semel } = NewTeam;

  const query = `INSERT INTO sport5.teams( teamName, city, mainColor, secondaryColor, semel) VALUES (?,?,?,?,?)`;
  const result = await pool.execute(query, [
    teamName,
    city,
    mainColor,
    secondaryColor,
    semel,
  ]);
  const [data] = result;
  return data;
}

export { addNewTeam };
