'use server'

import { revalidatePath } from "next/cache";
import { STRAPI_ENDPOINT } from "./constants";

export async function newGasto(formData: FormData) {
    let hasNewTipo:any = false;

    if (formData.get('newCategory') !== null) {
        const newTipo = await createTipoDeGasto(formData.get('newCategory'));

        hasNewTipo = newTipo;
    }
    
    const rawData = {
        data: {
            Gasto: formData.get('gasto'),
            Valor: formData.get('monto'),
            Fecha: formData.get('fechaGasto'),
            tipos_de_gasto: hasNewTipo !== false ? hasNewTipo.data.id : formData.get('tipoGasto'),
        }
    }

    try {
        const fetchRes = await fetch(`${STRAPI_ENDPOINT}/gastos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rawData)
        });
        const res = await fetchRes.json();
        
        revalidatePath('/');
    } catch (e) {
        console.error('Error creando gasto en Strapi', e)
    }
}


const createTipoDeGasto = async (value: any) => {
    const tipoGastoData = {
        data: {
            Tipo: value,
        }
    }

    try {
        const fetchRes = await fetch(`${STRAPI_ENDPOINT}/tipos-de-gastos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tipoGastoData)
        });
        const res = await fetchRes.json();

        return res;
    } catch (e) {
        console.error('Error creando tipo de gasto en Strapi', e)
        return false;
    }
}