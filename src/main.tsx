import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { Globalstyle } from "./styles/global"

import { Header } from "./components/Header"
// // import { Erro404 } from "./pages/Erro404"
// import { Home } from "./pages/Home"
// import { Signin } from "./pages/Signin"
import { Footer } from './components/Footer'
// import { SignUp } from './pages/SignUp'
import { Signin } from './pages/Signin'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Signin/>
      <Footer/>
      <Globalstyle />
    </ThemeProvider>
  </React.StrictMode>
)

