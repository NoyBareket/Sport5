import { useEffect, useState } from "react";
import { addNewTeamService } from "./api";

export default function AddNewTeamPage() {
  const [teamName, setTeamName] = useState("");
  const [city, setCity] = useState("");
  const [mainColor, setMainColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [semel, setSemel] = useState("");

  useEffect(() => {
    return () => {
      console.log("Unmount Login Component Now!!!!");
    };
  }, []);

  async function teamsService() {
    const teamsPayload = {
      teamName,
      city,
      mainColor,
      secondaryColor,
      semel,
    };
    try {
      await addNewTeamService(teamsPayload);
    } catch (ex) {
      alert("Something went wrong!");
    }
  }

  return (
    <form>
      <h2>Add New Team</h2>
      <div>
        <label>Team Name</label>
        <input
          type="text"
          id="teamName"
          value={teamName}
          onChange={(e: any) => setTeamName(e.target.value)}
        />
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e: any) => setCity(e.target.value)}
        />
      </div>
      <div>
        <label>Main Color</label>
        <input
          type="text"
          id="mainColor"
          value={mainColor}
          onChange={(e: any) => setMainColor(e.target.value)}
        />
      </div>
      <div>
        <label>Secondary Color</label>
        <input
          type="text"
          id="secondaryColor"
          value={secondaryColor}
          onChange={(e: any) => setSecondaryColor(e.target.value)}
        />
      </div>
      <div>
        <label>Semel</label>
        <input
          type="text"
          id="semel"
          value={semel}
          onChange={(e: any) => setSemel(e.target.value)}
        />
      </div>

      <button type="button" onClick={teamsService}>
        Add New Team
      </button>
    </form>
  );
}
