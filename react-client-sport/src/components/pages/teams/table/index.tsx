import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ITeam } from "../api";

export default function TeamsTable(props: { teams: Array<ITeam> }) {
  if (!props.teams[0]) return null;

  return (
    <div>
      <div className="card">
        <DataTable value={props.teams} tableStyle={{ minWidth: "50rem" }}>
          {Object.keys(props.teams[0]).map((key) => {
            if (key === "image") {
              return (
                <Column
                  key={key}
                  field={key}
                  header={key}
                  body={(rowData) => (
                    <img
                      width={"50px"}
                      height={"50px"}
                      src={rowData[key]}
                      alt="Car Image"
                    />
                  )}
                />
              );
            } else if (key === "id") {
              return null;
            } else {
              return <Column key={key} field={key} header={key} />;
            }
          })}
        </DataTable>
      </div>
    </div>
  );
}
