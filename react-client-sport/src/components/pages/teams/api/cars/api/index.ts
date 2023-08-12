import axios from "axios";

export interface ICar {
  car: string;
  lp: number;
  color: string;
  engine: string;
  company: string;
  image?: string;
}

async function getCarsService(): Promise<Array<ICar>> {
  const { data } = await axios.get(`http://localhost:5002/cars`);
  if (!Array.isArray(data)) throw new Error(`Error Please contact support`);
  const cars: Array<ICar> = data.map((c) => {
    return {
      car: c.car,
      lp: c.lp,
      color: c.color,
      engine: c.engine,
      company: c.company,
      image: c.image,
    };
  });
  console.log(cars);
  return cars;
}

export { getCarsService };
