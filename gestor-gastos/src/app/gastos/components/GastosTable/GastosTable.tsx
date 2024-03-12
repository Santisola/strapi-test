import './styles.css'

export const GastosTable = ({gastos}:any) => {
    return (
        <ul>
            {gastos.map((gasto:any, index:number) => (
                <li key={index}>
                    <strong>${gasto.valor} </strong>
                    - {gasto.item} - {gasto.categoria}
                </li>
            ))}
        </ul>
    )
}
