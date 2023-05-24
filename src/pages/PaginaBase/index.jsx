import { Outlet } from "react-router-dom";
import { FavoritoProvider } from "../../common/context/favorito";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function PaginaBase() {
  return (
    <main>
        <Header/>
            <FavoritoProvider>
             <Outlet/>
            </FavoritoProvider>
        <Footer/>
    </main>
  )
}
