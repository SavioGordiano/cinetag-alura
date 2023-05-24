import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../../public/imagem/Logo-cinetag-branco 1.png'
export default function Header() {
  return (
    <div className={styles.conteiner}>
        <Link to={'/'}>
            <img alt='logo' src={logo}/>
        </Link>
        <nav className={styles.nav}>
            <Link to={'/'} className={styles.link}>
                Home
            </Link>
            <Link to={'/favoritos'} className={styles.link}>
                Favoritos
            </Link>
        </nav>
    </div>
  )
}
