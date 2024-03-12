import { getGastos } from "../lib/data";
import { GastosTable } from "./components/GastosTable/GastosTable";

export default async function Gastos() {
  const gastos = await getGastos();

  return (
    <div className="container">
      <h1>Gastos</h1>
      {gastos && <GastosTable gastos={gastos} />}
    </div>
  );
}
