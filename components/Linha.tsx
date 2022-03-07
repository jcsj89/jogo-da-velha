import styles from '../styles/Linha.module.css'

export default function Linha(props) {
    return (
        <div className={styles.linha}>
            {props.children}
        </div>
    )
}