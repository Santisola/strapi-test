import { Header } from "./ui/Header";
import { HomeDashboard } from "./homeDashboard/HomeDashboard";

export default function Home({
  searchParams
}: {
  searchParams?: {
    mes?: string;
  };
}) {
  const mesActual = (new Date()).getMonth() + 1 < 10 ? `0${(new Date()).getMonth() + 1}` : `${(new Date()).getMonth() + 1}`;
  const mes = searchParams?.mes || mesActual;

  return (
    <div>
      <Header>
        <h1>Hola, <strong>Gastador Compulsivo</strong></h1>
      </Header>
      <HomeDashboard mes={mes} />
    </div>
  );
}
