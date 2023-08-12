import { useEffect, useState } from "react";
import { addNewGameService } from "./api";
import { IGame } from "../games/api";

export default function AddNewGamePage() {
  const [teamA_ID, setTeamA_ID] = useState("");
  const [teamB_ID, setTeamB_ID] = useState("");
  const [teamA_Score, setTeamA_Score] = useState("");
  const [teamB_Score, setTeamB_Score] = useState("");
  const [gameTime, setGameTime] = useState("");

  useEffect(() => {
    return () => {
      console.log("Unmount Login Component Now!!!!");
    };
  }, []);

  async function gamesService(): Promise<any> {
    const gamesPayload: IGame = {
      teamA_ID: parseInt(teamA_ID, 10), // Convert string to number
      teamB_ID: parseInt(teamB_ID, 10),
      teamA_Score: parseInt(teamA_Score, 10), // Convert string to number
      teamB_Score: parseInt(teamB_Score, 10), // Convert string to number
      gameTime,
    };
    try {
      await addNewGameService(gamesPayload);
    } catch (ex) {
      alert("Something went wrong!");
    }
  }

  return (
    <form>
      <h2>Add New Game</h2>
      <div>
        <label>Team A</label>
        <input
          type="text"
          id="teamA_ID"
          value={teamA_ID}
          onChange={(e: any) => setTeamA_ID(e.target.value)}
        />
      </div>
      <div>
        <label>Team B</label>
        <input
          type="text"
          id="teamB_ID"
          value={teamB_ID}
          onChange={(e: any) => setTeamB_ID(e.target.value)}
        />
      </div>
      <div>
        <label>Team A Score</label>
        <input
          type="text"
          id="teamA_Score"
          value={teamA_Score}
          onChange={(e: any) => setTeamA_Score(e.target.value)}
        />
      </div>
      <div>
        <label>Team B Score</label>
        <input
          type="text"
          id="teamB_Score"
          value={teamB_Score}
          onChange={(e: any) => setTeamB_Score(e.target.value)}
        />
      </div>
      <div>
        <label>Semel</label>
        <input
          type="date"
          id="gameTime"
          value={gameTime}
          onChange={(e: any) => setGameTime(e.target.value)}
        />
      </div>

      <button type="button" onClick={gamesService}>
        Add New Game
      </button>
    </form>
  );
}
