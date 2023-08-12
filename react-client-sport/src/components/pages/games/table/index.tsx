import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { IGame } from "../api";

export default function GamesTable(props: { games: Array<IGame> }) {
  if (!props.games[0]) return null;

  return (
    <div>
      <div className="card">
        <DataTable value={props.games} tableStyle={{ minWidth: "50rem" }}>
          {Object.keys(props.games[0]).map((key) => {
            if (key === "semel") {
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
                      alt="Game Image"
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
