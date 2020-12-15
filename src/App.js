import React from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaNotas from "./components/ListaNotas/ListaNotas";
import ListaCategorias from "./components/ListaCategorias/ListaCategorias";
import "./assets/App.css";
import "./assets/index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notas: [],
      categorias: [],
    };
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    let arr = [...this.state.notas, novaNota];
    this.setState({
      notas: arr,
    });

    console.log("Nova nota criada!!!");
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  criarCategoria(texto) {
    let arr = [...this.state.categorias, { cat: texto }];
    this.setState({ categorias: arr });
  }

  render() {
    console.log(this.state);
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)}
        />
        <main className="conteudo-principal">
          <ListaCategorias
            categorias={this.state.categorias}
            criarCategoria={this.criarCategoria.bind(this)}
          />
          <ListaNotas
            notas={this.state.notas}
            deletarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
