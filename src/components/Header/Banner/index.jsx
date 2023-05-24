import styles from './Banner.module.css'
// eslint-disable-next-line react/prop-types
export default function Banner({imagem}) {
  return (
    <div 
        className={styles.banner}
        style={{backgroundImage: `url('/imagem/Banner-${imagem}.png')`}}>

    </div>
    )
}
