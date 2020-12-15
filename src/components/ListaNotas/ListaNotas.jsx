import React from "react";
import CardNota from "../CardNota/CardNota";
import "./styles.css";

export default class ListaNotas extends React.Component {
  constructor(props) {
    super(props);
    this.setState({});
  }
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((item, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                index={index}
                titulo={item.titulo}
                nota={item.texto}
                deletarNota={this.props.deletarNota}
                categoria={item.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
