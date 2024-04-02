import { STRAPI_ENDPOINT } from "./constants";
import { unstable_noStore as noStore } from 'next/cache';


export async function getGastos() {
    noStore();
    try {
        const fetchRes = await fetch(`${STRAPI_ENDPOINT}/gastos?pagination[pageSize]=100&populate=*`)
        const rta = await fetchRes.json(); 
    
        const gastos = rta.data.map((gasto:any) => ({
            item: gasto.attributes.Gasto,
            valor: gasto.attributes.Valor,
            fecha: `${gasto.attributes.Fecha.split('-')[2]}-${gasto.attributes.Fecha.split('-')[1]}-${gasto.attributes.Fecha.split('-')[0]}`,
            categoria: gasto.attributes.tipos_de_gasto.data.attributes.Tipo
        }));
    
        return gastos.sort((a:any, b:any) => {
            if (a.fecha.split('-')[2] > b.fecha.split('-')[2]) return -1
            if (a.fecha.split('-')[2] < b.fecha.split('-')[2]) return 1
    
            if (a.fecha.split('-')[1] > b.fecha.split('-')[1]) return -1
            if (a.fecha.split('-')[1] < b.fecha.split('-')[1]) return 1
    
            if (a.fecha.split('-')[0] > b.fecha.split('-')[0]) return -1
            if (a.fecha.split('-')[0] < b.fecha.split('-')[0]) return 1
    
            if (a.fecha.split('-')[0] === b.fecha.split('-')[0]) return -1
        });
    } catch (e) {
        console.error('Error en getGastos', e)
        return [];
    }
}

export async function getGastosPorTipo(mes:string|null=null) {
    noStore();
    try {
        const fetchRes = await fetch(`${STRAPI_ENDPOINT}/tipos-de-gastos?populate=*`)
        const rta = await fetchRes.json();
    
        const tiposDeGasto = rta.data.map((tipo:any) => ({
            id: tipo.id,
            category: tipo.attributes.Tipo,
            gastos: tipo.attributes.gastos.data.length > 0 ?
                tipo.attributes.gastos.data
                    .filter((item:any) => item.attributes.Fecha.split('-')[1] == mes)
                    .map((gasto:any) => ({
                        item: gasto.attributes.Gasto,
                        valor: gasto.attributes.Valor
                    }))
            : []
        }))
    
        const orderedGastos = tiposDeGasto.sort((a:any, b:any) => {
            let totalGastosA = 0;
            let totalGastosB = 0;
    
            a.gastos.forEach((gasto:any) => {
                totalGastosA += gasto.valor;
            });
    
            b.gastos.forEach((gasto:any) => {
                totalGastosB += gasto.valor;
            });
    
            return totalGastosB - totalGastosA
        })
          
        return orderedGastos;
    } catch (e) {
        console.error('Error en getGastosPorTipo', e)
        return [];
    }
}

export function getMesesConGastos(gastos:any) {
    const mesActual = (new Date()).getMonth() + 1 < 10 ? `0${(new Date()).getMonth() + 1}` : `${(new Date()).getMonth() + 1}`;
    const meses:Array<string> = [];

    gastos.forEach((gasto:any) => {
        const mes:string = gasto.fecha.split('-')[1];

        !meses.includes(mes) && meses.push(mes);
    });

    if(!meses.includes(mesActual)) meses.push(mesActual)
    
    return meses.sort();
}
