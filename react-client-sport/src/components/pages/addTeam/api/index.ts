import axios from "axios";
import { ITeam } from "../../teams/api";

export async function addNewTeamService(newTeam: ITeam) {
  try {
    await axios.post(`http://localhost:5001/teams/new`, {
      teamName: newTeam.teamName,
      city: newTeam.city,
      mainColor: newTeam.mainColor,
      secondaryColor: newTeam.secondaryColor,
      semel: newTeam.semel,
    });
    return alert("New Team Added");
  } catch (error) {
    console.log(error);
    throw new Error("problem");
  }
}
