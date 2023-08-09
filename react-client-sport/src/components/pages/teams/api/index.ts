import axios from "axios";

export interface ITeam {
  teamID: number;
  teamName: string;
  city: string;
  mainColor: string;
  secondaryColor: string;
  semel: String;
}

async function getAllTeams(): Promise<Array<ITeam>> {
  const { data } = await axios.get(`http://localhost:5001/teams`);
  if (!Array.isArray(data)) throw new Error(`Error Please contact support `);

  const teams: Array<ITeam> = data.map((c) => {
    return {
      teamID: c.teamID,
      teamName: c.teamName,
      city: c.city,
      mainColor: c.mainColor,
      secondaryColor: c.secondaryColor,
      semel: c.semel,
    };
  });
  return teams;
}

// async function searchTeamService(value: string): Promise<Array<ITeam>> {
//   const { data, headers } = await axios.get(
//     `http://localhost:5001/teams/search?q=${value}`
//   );
//   if (!Array.isArray(data))
//     throw new Error(`Error Please contact support ${headers["x-request-id"]}`);

//   const teams: Array<ITeam> = data.map((c) => {
//     return {
//       teamID: c.teamID,
//       teamName: c.teamName,
//       city: c.city,
//       mainColor: c.mainColor,
//       secondaryColor: c.secondaryColor,
//       semel: c.semel,
//     };
//   });
//   return customers;
// }

export { getAllTeams };
