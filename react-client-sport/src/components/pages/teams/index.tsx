import { useState } from "react";
import TeamsTable from "./table";
import { ITeam, getAllTeams } from "./api";

export default function TeamsPage() {
  const [teams, setTeams] = useState<Array<ITeam>>([]);

  async function getAllTeamsAction() {
    try {
      const result = await getAllTeams();
      console.log(result, "teams");
      setTeams(result);
    } catch (error) {
      alert("error");
    }
  }

  //   async function handleSearchApi(searchText: string) {
  //     try {
  //       const result = await searchCustomersService(searchText);
  //       setTeams(result);
  //     } catch (error) {
  //       alert("error");
  //     }
  //   }
  return (
    <div>
      <h1>"Teams Page"</h1>
      <TeamsTable teams={teams} />
    </div>
  );
}

export { getAllTeamsAction };
