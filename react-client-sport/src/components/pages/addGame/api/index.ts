import axios from "axios";
import { IGame } from "../../games/api";

export async function addNewGameService(newGame: IGame) {
  try {
    await axios.post(`http://localhost:5001/games/new`, {
      teamA_ID: newGame.teamA_ID,
      teamB_ID: newGame.teamB_ID,
      teamA_Score: newGame.teamA_Score,
      teamB_Score: newGame.teamB_Score,
      gameTime: newGame.gameTime,
    });
    return alert("New Game Added");
  } catch (error) {
    console.log(error);
    throw new Error("problem");
  }
}
