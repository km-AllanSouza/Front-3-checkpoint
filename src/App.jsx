
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
import "./style.scss"
import { Card } from "./Card"

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs

    
  const listaFilme = [
    {
      nomeFilme: "filmeTest",
      filmeUrl: "https://i.ytimg.com/vi/YF1eYbfbH5k/maxresdefault.jpg"
    }
  ]



  return (
    <main>
      <div className="App">
        <h1>Adicionar filme</h1>
        <form>
          <div>
            <label htmlFor="nomeFilme">Nome do Filme </label>
            <input type="text" id="nomeFilme" />
          </div>
          <div>
            <label htmlFor="capaFilme">Capa do Filme </label>
            <input type="text" id="capaFilme" />
          </div>
          <div>
            <button type='submit'>Cadastrar Filme</button>
            <button type='reset'>Limpar formulário</button>
          </div>
        </form>
      </div>

      <div>
        <h1>Filmes Favoritos</h1>
        <ul className="filmes-listados">
          {listaFilme.map(
            component => {
              return (
                < Card
                  key={component.id}
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