import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ICar } from "../api";

export default function CarsTable(props: { cars: Array<ICar> }) {
  if (!props.cars[0]) return null;

  return (
    <div>
      <div className="card">
        <DataTable value={props.cars} tableStyle={{ minWidth: "50rem" }}>
          {Object.keys(props.cars[0]).map((key) => {
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
