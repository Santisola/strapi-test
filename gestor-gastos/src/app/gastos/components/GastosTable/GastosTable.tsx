import './styles.css'

export const GastosTable = ({gastos}:any) => {
    return (
        <ul>
            {gastos.map((gasto:any, index:number) => (
                <li key={index} className='container gastoItem'>
                    <article>
                        <p>{gasto.fecha} - {gasto.categoria}</p>
                        <div>
                            <h2>{gasto.item}</h2>
                            <strong>${gasto.valor}</strong>
                        </div>
                    </article>
                </li>
            ))}
        </ul>
    )
}
