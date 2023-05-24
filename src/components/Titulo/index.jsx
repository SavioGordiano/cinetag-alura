/* eslint-disable react/prop-types */
import styles from './Titulo.module.css'
export default function Titulo({children}){
    return(
        <div className={styles.conteiner}>
            <h2 className={styles.titulo}>{children}</h2>
        </div>
    )
}