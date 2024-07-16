import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaBase from "./pages/PaginaBase";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada";
import Inicio from "./pages/Inicio";
import NuevoVideo from "./pages/NuevoVideo";
import Player from "./pages/Player";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />} />
          <Route path="addvideo" element={<NuevoVideo />} />
          <Route path=":id" element={<Player/>} />
          <Route path="*" element={<PaginaNoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
