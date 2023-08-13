import axios from "axios";
export interface ITeam {
  teamName: string;
  city: string;
  mainColor: string;
  secondaryColor: string;
  semel: string;
}
async function getTeamsService(): Promise<Array<ITeam>> {
  const { data } = await axios.get(`http://localhost:5001/teams`);
  if (!Array.isArray(data)) throw new Error(`Error Please contact support`);
  const teams: Array<ITeam> = data.map((t) => {
    return {
      teamName: t.teamName,
      city: t.city,
      mainColor: t.mainColor,
      secondaryColor: t.secondaryColor,
      semel: t.semel,
    };
  });
  console.log(teams);
  return teams;
}
async function searchTeamsService(value: string): Promise<Array<ITeam>> {
  const { data, headers } = await axios.get(
    `http://localhost:5001/teams/search?q=${value}`
  );
  if (!Array.isArray(data))
    throw new Error(`Error Please contact support ${headers["x-request-id"]}`);

  const teams: Array<ITeam> = data.map((t) => {
    return {
      teamName: t.teamName,
      city: t.city,
      mainColor: t.mainColor,
      secondaryColor: t.secondaryColor,
      semel: t.semel,
    };
  });
  return teams;
}

export { getTeamsService, searchTeamsService };
