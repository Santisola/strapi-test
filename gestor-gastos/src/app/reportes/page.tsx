import { MonthFilter } from "../homeDashboard/components/MonthFilter";
import { TiposDeGastoList } from "../homeDashboard/components/TiposDeGastoList/TiposDeGastoList";
import { getGastos, getGastosPorTipo, getMesesConGastos } from "../lib/data";
import { Header } from "../ui/Header";
import PieChart from "./components/PieChart";
import './styles.css'

export default async function Reportes({
	searchParams
  }: {
	searchParams?: {
	  mes?: string;
	};
  }) {
	const gastos = await getGastos();
	const meses = getMesesConGastos(gastos);

	const mesActual = (new Date()).getMonth() + 1 < 10 ? `0${(new Date()).getMonth() + 1}` : `${(new Date()).getMonth() + 1}`;
  	const mes = searchParams?.mes || mesActual;
	
	const gastosPorTipo = await getGastosPorTipo(mes);
	
	const chartData = {
		labels: gastosPorTipo.map((data:any) => data.category), 
		datasets: [
		  {
			label: "Total",
			data: gastosPorTipo.map((data:any) => {
				let categoryTotal = 0;
				data.gastos.forEach((item:any) => {
					categoryTotal += item.valor;
				});
				
				return `${categoryTotal}`
			}),
			backgroundColor: [
				'#8BC1F7',
				'#BDE2B9',
				'#A2D9D9',
				'#B2B0EA',
				'#F9E0A2',
				'#F4B678',
				'#C9190B',
				'#F0F0F0'
			],
			borderColor: "#262626",
			borderWidth: 1
		  }
		]
	  }
	
	const gastosPorMes = (mes: number) => gastos.filter((gasto:any) => gasto.fecha.split('-')[1] == mes);

	const totalPorMes = (mes:number) => {
		const filteredGastos = gastosPorMes(mes)

		let acum = 0;
		filteredGastos.forEach((gasto:any) => {
			if (gasto) {
			acum += gasto.valor
			}
		});

		return acum;
	}
	
    return (
      <section>
        <Header>
          	Reportes
        </Header>

		<div className="container form-group monthFilterContainer">
			<MonthFilter meses={meses} />
		</div>
		
		<div className="container">
		{mesActual === mes ? 
			<>
			Este mes gastaste: <br />
			<h2><strong>${totalPorMes(parseInt(mes))}</strong></h2>
			</>
			:
			<>
			En el mes &apos;{mes}&apos; gastaste: <br />
			<h2><strong>${totalPorMes(parseInt(mes))}</strong></h2>
			</>
		}
		</div>

		<PieChart chartData={chartData} />
		
		<TiposDeGastoList mes={mes} />
      </section>
    );
  }
  