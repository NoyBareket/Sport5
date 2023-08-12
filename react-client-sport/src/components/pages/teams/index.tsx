import { useState, useEffect } from "react";
import { ITeam, getTeamsService } from "./api";
import TeamsTable from "./table";

export default function TeamPage() {
  const [teams, setTeams] = useState<Array<ITeam>>([]);

  async function getTeams() {
    try {
      const result = await getTeamsService();
      setTeams(result);
    } catch (error) {
      alert("error");
    }
  }
  useEffect(() => {
    getTeams();
    return () => {
      console.log("Unmount!");
    };
  }, []);
  return (
    <div>
      <h1>Teams</h1> <TeamsTable key={"TeamsTable"} teams={teams} />
    </div>
  );
}
