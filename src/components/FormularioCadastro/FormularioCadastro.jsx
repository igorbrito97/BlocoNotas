import React from "react";
import "./styles.css";

export default class FormularioCadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      nota: "",
      categoria: "Sem categoria",
    };
  }
  _handleTextChange(event, state) {
    this.setState({
      [state]: event.target.value,
    });
  }

  _criarNota(evento) {
    evento.preventDefault();
    this.props.criarNota(
      this.state.titulo,
      this.state.nota,
      this.state.categoria
    );
    this.setState({
      titulo: "",
      nota: "",
      categoria: "Sem categoria",
    });
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <select
          className="form-cadastro_input"
          onChange={(e) => {
            e.stopPropagation();
            this.setState({ categoria: e.target.value });
          }}
        >
          <option>Sem categoria</option>
          {this.props.categorias.map((categoria) => {
            return <option>{categoria.cat}</option>;
          })}
        </select>
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
