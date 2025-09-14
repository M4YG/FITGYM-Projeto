import React from "react";
import { Route, Routes } from "react-router-dom";
import MatriculaPage from "../pages/matriculapage/matricula";

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