import { pool } from "../../database";

interface IGame {
  teamA_ID: number;
  teamB_ID: number;
  teamA_Score: number;
  teamB_Score: number;
  gameTime: any;
}

async function addNewGame(NewGame: IGame): Promise<any> {
  const { teamA_ID, teamB_ID, teamA_Score, teamB_Score, gameTime } = NewGame;
  const query = `INSERT INTO sport5.games( teamA_ID, teamb_ID, teamA_Score, teamB_Score, gameTime) VALUES (?,?,?,?,?)`;
  const result = await pool.execute(query, [
    teamA_ID,
    teamB_ID,
    teamA_Score,
    teamB_Score,
    gameTime,
  ]);
  const [data] = result;
  return data;
}

export { addNewGame };
