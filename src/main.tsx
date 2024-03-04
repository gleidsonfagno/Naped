import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { Globalstyle } from "./styles/global"

import { Header } from "./components/Header"
// import { Erro404 } from "./pages/Erro404"
import { Sigin } from "./pages/Sigin"
import { Footer } from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
    <Header/>
     <Sigin/>
     <Footer/>
     <Globalstyle/>
   </ThemeProvider>
  </React.StrictMode>
)
