import { useState } from 'react'
import VelhaModel from '../models/VelhaModel';
import styles from '../styles/Velha.module.css'

export default function Velha(props) {
    const [marcado, setMarcado] = useState(false);
    const [marcador, setMarcador] = useState<string>('');
    const velha = props.value;

    const jogar = e => {        
        if(!marcado){
            console.log(velha.marcadores)
            setMarcador(velha.marcadores ? 'X' : 'O')
            props.onChange(velha.jogar());
            setMarcado(true);
            console.log('joguei velha.tsx')
        }
    }

    return (
        <div className={styles.velha} onClick={jogar}>
            {marcado ? marcador : ''}
        </div>
    )
}