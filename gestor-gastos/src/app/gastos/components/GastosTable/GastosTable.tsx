import './styles.css'

export const GastosTable = ({gastos}:any) => {
    const data = gastos.map((gasto:any) => {
        return {
            item: gasto.attributes.Gasto,
            valor: gasto.attributes.Valor,
            fecha: gasto.attributes.Fecha,
            categoria: gasto.attributes.tipos_de_gasto.data.attributes.Tipo
        }
    })

    return (
        <ul>
            {data.map((gasto:any, index:number) => (
                <li key={index}>
                    <strong>${gasto.valor} </strong>
                    - {gasto.item} - {gasto.categoria}
                </li>
            ))}
        </ul>
    )
}
