import React from "react";
import { Route, Routes } from "react-router-dom";
import Avaliacao from "../pages/avaliacao";
import Fluxograma from "../pages/fluxograma";

//pages
import Home from "../pages/home";
import Tematicas from "../pages/tematicas";



const Routers = () => {
  return (
    <>
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/fluxograma" element={<Fluxograma />} />
            <Route path="/avaliacaosemanal" element={<Avaliacao />} />
            <Route path="/tematicas" element={<Tematicas />} />
            
        </Routes>
    </>
  );
};

export default Routers;