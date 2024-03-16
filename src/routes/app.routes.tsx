import { Routes, Route } from "react-router-dom"

import { Erro404 } from "../pages/Erro404"
import { Home } from "../pages/Home"
import { Series } from "../pages/Series"
import { Filmes } from "../pages/Filmes"
import { Animes } from "../pages/Animes"
import { Jogos } from "../pages/Jogos"
import { Details } from "../pages/Details"
import { Signin } from "../pages/Signin"
import { SignUp } from '../pages/SignUp'

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/series" element={ <Series/> }/>
            <Route path="/filmes" element={ <Filmes/> }/>
            <Route path="/animes" element={ <Animes/> }/>
            <Route path="/jogos" element={ <Jogos/> }/>
            <Route path="/detalhe/:id" element={ <Details/>} />
            <Route path="/register" element={ <SignUp/> }/>
            <Route path="/login" element={ <Signin/> }/>
            <Route path="*" element={<Erro404 />} />
        </Routes>
    )
}