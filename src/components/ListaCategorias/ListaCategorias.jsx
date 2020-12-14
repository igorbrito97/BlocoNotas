import React, { Component } from "react";
import "./styles.css";

class ListaCategorias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoria: "",
    };
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias &&
            this.props.categorias.map((item, index) => {
              return (
                <li key={index} className="lista-categorias_item">
                  {item.cat}
                </li>
              );
            })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar categoria"
          onChange={(e) => this.setState({ categoria: e.target.value })}
          value={this.state.categoria}
          onKeyUp={(e) => {
            if (e.key === "Enter" && this.state.categoria !== "") {
              this.props.criarCategoria(this.state.categoria);
              this.setState({ categoria: "" });
            }
          }}
        />
      </section>
    );
  }
}

export default ListaCategorias;
