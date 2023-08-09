import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ITeam } from "../api";

export default function TeamsTable(props: { teams: Array<ITeam> }) {
  if (!props.teams[0]) return null;
  const semelImage = (teamDate: ITeam) => {
    return (
      <img
        width={"30 px"}
        src={teamDate.semel}
        alt={`semel ${teamDate.teamName}`}
      />
    );
  };
  return (
    <div>
      <div className="card">
        <DataTable value={props.teams} tableStyle={{ minWidth: "50rem" }}>
          {Object.keys(props.teams[0]).map((key) => {
            return (
              <Column
                field={key}
                style={{
                  border: "2px solid blue",
                  backgroundColor: props.teams[0].mainColor,
                }}
                header={key}
                body={key === "semel" ? semelImage : undefined}
              ></Column>
            );
          })}
        </DataTable>
      </div>
          
    </div>
  );
}
