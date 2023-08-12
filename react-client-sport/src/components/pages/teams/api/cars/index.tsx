import { useState, useEffect } from "react";
import { ICar, getCarsService } from "./api";
import CarsTable from "./table";

export default function CarPage() {
  const [cars, setCars] = useState<Array<ICar>>([]);

  async function getCars() {
    try {
      const result = await getCarsService();
      setCars(result);
    } catch (error) {
      alert("error");
    }
  }
  useEffect(() => {
    getCars();
    return () => {
      console.log("Unmount!");
    };
  }, []);
  return (
    <div>
      <h1>Cars</h1> <CarsTable key={"CarsTable"} cars={cars} />
    </div>
  );
}
