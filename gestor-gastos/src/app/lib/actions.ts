'use server'

import { revalidatePath } from "next/cache";
import { STRAPI_ENDPOINT } from "./constants";

export async function newGasto(formData: FormData) {
    const rawData = {
        data: {
            Gasto: formData.get('gasto'),
            Valor: formData.get('monto'),
            Fecha: formData.get('fechaGasto'),
            tipos_de_gasto: formData.get('tipoGasto'),
        }
    }

    console.log('data', rawData);
    try {
        const fetchRes = await fetch(`${STRAPI_ENDPOINT}/gastos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rawData)
        });
        const res = await fetchRes.json();

        console.log('RESPONSE', res);
        
        revalidatePath('/');
    } catch (e) {
        console.error('Error creando gasto en Strapi', e)
    }
}
