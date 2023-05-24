import styles from './Conteiner.module.css'

export default function Conteiner({children}) {
  return (
    <section className={styles.conteiner}>
        {children}
    </section>
  )
}
