import React from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaNotas from "./components/ListaNotas/ListaNotas";
import "./assets/App.css";
import "./assets/index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notas: [],
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    let arr = [...this.state.notas, novaNota];
    this.setState({
      notas: arr,
    });

    console.log("Nova nota criada!!!");
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
