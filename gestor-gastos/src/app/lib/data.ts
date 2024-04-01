import { STRAPI_ENDPOINT } from "./constants";
import { unstable_noStore as noStore } from 'next/cache';


export async function getGastos() {
    noStore();
    const fetchRes = await fetch(`${STRAPI_ENDPOINT}/gastos?populate=*`)
    const rta = await fetchRes.json(); 

    const gastos = rta.data.map((gasto:any) => ({
        item: gasto.attributes.Gasto,
        valor: gasto.attributes.Valor,
        fecha: gasto.attributes.Fecha,
        categoria: gasto.attributes.tipos_de_gasto.data.attributes.Tipo
    }));
  
    return gastos.reverse();
}

export async function getGastosPorTipo() {
    noStore();
    const fetchRes = await fetch(`${STRAPI_ENDPOINT}/tipos-de-gastos?populate=*`)
    const rta = await fetchRes.json();

    const tiposDeGasto = rta.data.map((tipo:any) => ({
        id: tipo.id,
        category: tipo.attributes.Tipo,
        gastos: tipo.attributes.gastos.data.length > 0 ? tipo.attributes.gastos.data.map((gasto:any) => ({
            item: gasto.attributes.Gasto,
            valor: gasto.attributes.Valor
        })) : []
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
}
