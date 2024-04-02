import { getGastos } from "../lib/data";
import { Header } from "../ui/Header";
import { GastosTable } from "./components/GastosTable/GastosTable";

export default async function Gastos() {
  const gastos = await getGastos();

  return (
    <section className="gastosContainer">
      <Header>
        Gastos
      </Header>
      {gastos && <GastosTable gastos={gastos} />}
    </section>
  );
}
