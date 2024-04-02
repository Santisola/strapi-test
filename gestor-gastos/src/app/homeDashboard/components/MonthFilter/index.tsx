'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React from 'react'

export const MonthFilter = ({meses}:any) => {
    const mesActual = (new Date()).getMonth() + 1 < 10 ? `0${(new Date()).getMonth() + 1}` : `${(new Date()).getMonth() + 1}`;
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleMonthFilter = (e:any) => {
        const { value } = e.target;
        const params = new URLSearchParams(searchParams);

        if(value !== mesActual) {
            params.set('mes', value);
        } else {
            params.delete('mes');
        }

        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <>
            <label htmlFor="mes">Mes</label>
            <select
                name="mes"
                id="mes"
                onChange={(e) => handleMonthFilter(e)}
                defaultValue={searchParams.get('mes') ? searchParams.get('mes')?.toString() : mesActual}
            >
                {meses.map((mes: any, index: number) => (
                    <option key={index} value={mes}>{mes}</option>
                ))}
            </select>
        </>
    )
}
