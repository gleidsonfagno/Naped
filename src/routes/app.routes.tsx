import { Routes, Route } from "react-router-dom"

import { Erro404 } from "../pages/Erro404"
import { Home } from "../pages/Home"
import { Signin } from "../pages/Signin"
import { SignUp } from '../pages/SignUp'

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/register" element={ <SignUp/> }/>
            <Route path="/login" element={ <Signin/> }/>
            <Route path="*" element={<Erro404 />} />
        </Routes>
    )
}