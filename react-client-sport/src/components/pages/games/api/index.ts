import axios from "axios";

export interface IGame {
  teamA_ID: number;
  teamB_ID: number;
  teamA_Score: number;
  teamB_Score: number;
  gameTime: any;
}

async function getGamesService(): Promise<Array<IGame>> {
  const { data } = await axios.get(`http://localhost:5001/games`);
  if (!Array.isArray(data)) throw new Error(`Error Please contact support`);
  const games: Array<IGame> = data.map((g) => {
    return {
      teamA_ID: g.teamA_ID,
      teamB_ID: g.teamB_ID,
      teamA_Score: g.teamA_Score,
      teamB_Score: g.teamB_Score,
      gameTime: g.gameTime,
    };
  });
  console.log(games);
  return games;
}

export { getGamesService };
