import React, { Component } from "react";
import deleteIcon from "../../assets/img/delete.svg";
import "./styles.css";

class CardNota extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <img
            src={deleteIcon}
            alt="Deletar"
            onClick={() => {
              this.props.deletarNota(this.props.index);
            }}
          />
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.nota}</p>
      </section>
    );
  }
}

export default CardNota;
