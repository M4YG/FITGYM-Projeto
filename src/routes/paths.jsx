import React from "react";
import { Route, Routes } from "react-router-dom";
//import Planospage from "../pages/Planos/Planos.jsx";
import MatriculaPage from "../pages/Matricula/Matricula.jsx";

const Paths = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={""} />
                <Route path="/planos" element={""} />
                <Route path="/matriculas" element={<MatriculaPage/>} />
            </Routes>
        </>
    )
}

export default Paths;