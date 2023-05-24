import { useEffect } from 'react'
import { useFavoritoContext } from '../../common/context/favorito'
import Card from '../../components/Card'
import Banner from '../../components/Header/Banner'
import Titulo from '../../components/Titulo'
import styles from './Inicio.module.css'
export default function Inicio() {
  const {filmes, setFilmes} = useFavoritoContext()
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/SavioGordiano/cinetag-api/videos')
    .then(resposta => resposta.json())
    .then(dados => {setFilmes(dados)})
},[])
  return (
    <><div className={styles.conteiner}>
      <Banner imagem="Home" />
      <Titulo>
        Um lugar para guardar seus vídeos e filmes!
      </Titulo>
      <div className={styles.filmes}>
        {filmes.map(filme => {
          return <Card id={filme.id} capa={filme.capa} titulo={filme.titulo} key={filme.id} />
        })}
      </div>
    </div></>
  )
}
