//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {
  return (
    // <div>

    // </div>

    <li>
      <h1>{props.item.nomeFilme}</h1>
      <img src={props.item.filmeUrl}  />
    </li>
  )
}