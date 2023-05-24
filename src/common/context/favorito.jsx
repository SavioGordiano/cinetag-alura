/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
export const FavoritoContext = createContext();
FavoritoContext.displayName = 'Favorito';

export const FavoritoProvider = ({children}) =>{
    const [favorito, setFavorito] = useState([]);
    return (
        <FavoritoContext.Provider value={{favorito,setFavorito}}>
            {children}
        </FavoritoContext.Provider>
    )
}
export const useFavoritoContext = () => {
    const {favorito, setFavorito} = useContext(FavoritoContext);
    const [filmes, setFilmes] = useState([])


    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

        let novaLista = [...favorito];

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }

        return setFavorito(novaLista.filter(fav => fav.id !== novoFavorito.id));
    }
    return {
        favorito,
        adicionarFavorito,
        filmes,
        setFilmes,
    }
}
