import { useEffect, useState } from 'react';
import Linha from '../components/Linha';
import Velha from '../components/Velha';
import VelhaModel from '../models/VelhaModel';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [velha, setVelha] = useState<VelhaModel>(new VelhaModel());
  
  console.log(velha.jogadas);

  return (
    <>
      <div className={styles.container}>
        <h1>JOGO DA VELHA</h1>

      </div>
      <div className={styles.main}>

        <Linha>
          <Velha value={velha} onChange={jogada => setVelha(jogada)} />
          <Velha value={velha} onChange={jogada => setVelha(jogada)} />
          <Velha value={velha} onChange={jogada => setVelha(jogada)} />
        </Linha>
        <Linha>
          <Velha value={velha} onChange={jogada => setVelha(jogada)}/>
          <Velha value={velha} onChange={jogada => setVelha(jogada)}/>
          <Velha value={velha} onChange={jogada => setVelha(jogada)}/>
        </Linha>
        <Linha>
          <Velha value={velha} onChange={jogada => setVelha(jogada)}/>
          <Velha value={velha} onChange={jogada => setVelha(jogada)}/>
          <Velha value={velha} onChange={jogada => setVelha(jogada)}/>
        </Linha>

      </div>
    </>
  )
}
