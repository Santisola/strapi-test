import { GastosTable } from "./components/GastosTable/GastosTable";

export default async function Gastos() {
  const fetchRes = await fetch('http://localhost:1337/api/gastos?populate=*')
  const rta = await fetchRes.json()

  return (
    <div className="container">
      <h1>Gastos</h1>
      {rta && <GastosTable gastos={rta.data} />}
    </div>
  );
}
