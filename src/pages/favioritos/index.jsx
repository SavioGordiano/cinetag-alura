import styles from "./Favoritos.module.css"
import Banner from "../../components/Header/Banner";
import Titulo from "../../components/Titulo";
import { useFavoritoContext } from "../../common/context/favorito";
import Card from "../../components/Card";

export default function Favoritos() {
  const {favorito} = useFavoritoContext();
  return (
  <div>
        <Banner imagem={'Favoritos'}/>
        <Titulo>
        Meus Favoritos
        </Titulo>
        <section className={styles.conteiner}>
        {favorito.map(fav => {
            return (<Card id={fav.id} capa={fav.capa} titulo={fav.titulo} key={fav.id} />)
          })}
        </section>

    </div>
  )
}
