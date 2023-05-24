import { useParams } from "react-router-dom";
import Banner from "../../components/Header/Banner";
import Titulo from "../../components/Titulo";
import styles from "./Player.module.css"
import { useEffect, useState } from "react";
function Player() {
    const [videoInfo, setVideoInfo] = useState(null);
    const parametros = useParams()
    useEffect(() => {
      const fetchVideoInfo = async () => {
        try {
          const response = await fetch(`https://my-json-server.typicode.com/Saviogordiano/cinetag-api/videos?id=${parametros.id}`);
          const reponseConvertida = await response.json();
          console.log(reponseConvertida[0])
          setVideoInfo(reponseConvertida[0])
          
        } catch (error) {
          console.error('Erro ao buscar informações do vídeo:', error);
        }
      };
  
      fetchVideoInfo();
    }, []);
    if (!videoInfo) {
        return <div>Carregando informações do vídeo...</div>;
      }

    return (
        <>
            <Banner imagem="Player" />
            <Titulo>
                Player
            </Titulo>
            <section className={styles.container}>
                <iframe
                    src={videoInfo.link}
                    width="100%"
                    height="100%"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </section>
        </>
    )
}

export default Player;