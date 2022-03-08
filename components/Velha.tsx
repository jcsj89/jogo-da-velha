import { useState } from "react";
import VelhaModel from "../models/VelhaModel";
import styles from "../styles/Velha.module.css";

export default function Velha(props) {
  const [marcado, setMarcado] = useState(false);
  const [marcador, setMarcador] = useState<string>("");
  const velha = props.value;
  const id = props.id;

  const jogar = (e) => {
    if (!marcado && !velha.vencedor) {
        props.onChange(velha.jogar(id));      
      setMarcador(velha.marcadores ? "X" : "O");
      setMarcado(true);
    }    
  };

  return (
    <div className={styles.velha} onClick={jogar}>
      {marcado ? marcador : ""}
    </div>
  );
}
