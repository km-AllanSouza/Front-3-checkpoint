
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
import { useState } from 'react'
import "./style.scss"
import { Card } from "./Card"

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs

  // const listaFilme = [
  //   {
  //     nomeFilme: "filmeTest",
  //     filmeUrl: "https://i.ytimg.com/vi/YF1eYbfbH5k/maxresdefault.jpg"
  //   }
  // ]

  const [formularioErro, setFormularioErro] = useState(false)

  const [nomeFilme, setNomefilme] = useState('')
  const [capaFilme, setCapaFilme] = useState('')

  const [ListaFilme, setListaFilme] = useState([
    {
      nomeFilme: "Intersterllar",
      filmeUrl: "https://i.ytimg.com/vi/YF1eYbfbH5k/maxresdefault.jpg"
    }
  ])

  function cadastrarFilme(event) {

    event.preventDefault()

    const novoFilmeCadastrado = {
      nomeFilme: nomeFilme,
      filmeUrl: capaFilme
    }


    if (nomeFilme === '' || nomeFilme.length <= 2 || nomeFilme.indexOf(' ') === 0
      || capaFilme === '' || capaFilme.length <= 6 || capaFilme.indexOf(' ') === 0) {

      // alert("Existem erros no nome do filme.")
      setFormularioErro(true)

    } else {

      setListaFilme([...ListaFilme, novoFilmeCadastrado])

      setNomefilme('')
      setCapaFilme('')
      setFormularioErro(false)

    }
    //console.log(ListaFilme)
  }

  return (
    <main>
      <div className="App">
        <h1>Adicionar filme</h1>
        <form className={formularioErro ? 'form-erro' : ''} onSubmit={event => cadastrarFilme(event)}>
          <div>
            <label htmlFor="nomeFilme">Nome do Filme </label>
            <input type="text" id="nomeFilme" value={nomeFilme} onChange={event => setNomefilme(event.target.value)} />
          </div>
          <div>
            <label htmlFor="capaFilme">Capa do Filme(URL) </label>
            <input type="text" id="capaFilme" value={capaFilme} onChange={event => setCapaFilme(event.target.value)} />
          </div>
          <div>
            <button type='submit'>Cadastrar Filme</button>
            {/* <button type='reset'>Limpar formulário</button> */}
          </div>
        </form>
      </div>
      {
        formularioErro ? (
          <span>Por favor, verifique os dados inseridos no formulário</span>
        ) : null
      }
      <div>
        <h1>Filmes Favoritos</h1>
        <ul className="filmes-listados">
          {ListaFilme.map(
            component => {
              return (
                < Card
                  //key={component.id}
                  item={component}
                />
              )
            }
          )}
        </ul>
      </div>
    </main>
  )
}

export default App