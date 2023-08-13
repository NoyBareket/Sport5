import { useState, useEffect } from "react";
import { ITeam, getTeamsService, searchTeamsService } from "./api";
import TeamsTable from "./table";
import SearchTeams from "./search";

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
  async function handleSearchApi(searchText: string) {
    try {
      const result = await searchTeamsService(searchText);
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
      <SearchTeams searchAction={handleSearchApi} allAction={getTeamsService} />
      <h1>Teams</h1> <TeamsTable key={"TeamsTable"} teams={teams} />
    </div>
  );
}
