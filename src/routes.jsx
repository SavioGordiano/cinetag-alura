import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Favoritos from "./pages/favioritos";
import Player from "./pages/Player";
import NaoEncontrada from "./pages/favioritos/naoEncontrada";
import PaginaBase from "./pages/PaginaBase";

function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase/>}>
          <Route index element={<Inicio/>}/>
          <Route path="favoritos" element={<Favoritos/>}/> 
          <Route path="video/:id" element={<Player/>}/>
          <Route path="dasd" element={<Favoritos/>}/>
          <Route path="*" element={<NaoEncontrada/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
