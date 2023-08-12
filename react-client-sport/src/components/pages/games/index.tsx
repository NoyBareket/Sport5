import { useState, useEffect } from "react";
import { IGame, getGamesService } from "./api";
import GamesTable from "./table";

export default function GamesPage() {
  const [games, setGames] = useState<Array<IGame>>([]);

  async function getGames() {
    try {
      const result = await getGamesService();
      setGames(result);
    } catch (error) {
      alert("error");
    }
  }
  useEffect(() => {
    getGames();
    return () => {
      console.log("Unmount!");
    };
  }, []);
  return (
    <div>
      <h1>Games</h1> <GamesTable key={"GamesTable"} games={games} />
    </div>
  );
}
