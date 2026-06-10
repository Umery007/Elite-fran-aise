import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Reserva from "./Pages/Reserva";
import Galeria from "./components/Galeria"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Reserva" element={<Reserva />} />
         <Route path="/Galeria" element={<Galeria />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;