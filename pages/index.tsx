import { useEffect, useState } from "react";
import Linha from "../components/Linha";
import Velha from "../components/Velha";
import VelhaModel from "../models/VelhaModel";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [velha, setVelha] = useState<VelhaModel>(new VelhaModel());

  useEffect(() => {
    if (velha.vencedor) {
      console.log("vencedor: ", velha);
    }
  }, [velha.vencedor, velha.jogador]);

  return (
    <>
      <div className={styles.container}>
        <h1>JOGO DA VELHA</h1>
      </div>

      <div className={styles.main}>
        
        <div className="">
          {velha.vencedor ? (
            <h1>O jogador: {velha.jogador} venceu.</h1>
          ) : (
            <h1>Esta dando velha!</h1>
          )}
        </div>

        <Linha>
          <Velha id={0} value={velha} onChange={(jogada) => setVelha(jogada)} />
          <Velha id={1} value={velha} onChange={(jogada) => setVelha(jogada)} />
          <Velha id={2} value={velha} onChange={(jogada) => setVelha(jogada)} />
        </Linha>
        <Linha>
          <Velha id={3} value={velha} onChange={(jogada) => setVelha(jogada)} />
          <Velha id={4} value={velha} onChange={(jogada) => setVelha(jogada)} />
          <Velha id={5} value={velha} onChange={(jogada) => setVelha(jogada)} />
        </Linha>
        <Linha>
          <Velha id={6} value={velha} onChange={(jogada) => setVelha(jogada)} />
          <Velha id={7} value={velha} onChange={(jogada) => setVelha(jogada)} />
          <Velha id={8} value={velha} onChange={(jogada) => setVelha(jogada)} />
        </Linha>
      </div>
    </>
  );
}
