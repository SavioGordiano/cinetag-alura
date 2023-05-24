import styles from './Card.module.css'
import favoritarImg from './favoritar.png'
import desfavoritarImg from './desfavoritar.png'
import { useFavoritoContext } from '../../common/context/favorito'
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Card({id, titulo, capa}) {
  const navegate = useNavigate()
  const {adicionarFavorito,favorito} = useFavoritoContext()
  const ehFavorito = favorito.some(fav=> fav.id === id)
  const icone = !ehFavorito? favoritarImg : desfavoritarImg;
  return (
    <div className={styles.card}>
        <img src={capa} alt={titulo} className={styles.capa} onClick={() => navegate(`/video/${id}`)}/>
        <div className={styles.infos}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <img onClick={()=>{adicionarFavorito({id, titulo, capa})}} src={icone} alt='favoritar' className={styles.favoritar}/>
        </div>
        
    </div>
  )
}
