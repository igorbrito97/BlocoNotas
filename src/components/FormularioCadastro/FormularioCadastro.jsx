import React from "react";
import "./styles.css";

export default class FormularioCadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      nota: "",
    };
  }
  _handleTextChange(event, state) {
    this.setState({
      [state]: event.target.value,
    });
  }

  _criarNota(evento) {
    evento.preventDefault();
    console.log(this.state);
    this.props.criarNota(this.state.titulo, this.state.nota);
    this.setState({
      titulo: "",
      nota: "",
    });
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={(event) => this._handleTextChange(event, "titulo")}
          value={this.state.titulo}
        />
        <textarea
          placeholder="Escreva sua nota....."
          className="form-cadastro_input"
          onChange={(event) => this._handleTextChange(event, "nota")}
          value={this.state.nota}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar nota
        </button>
      </form>
    );
  }
}
