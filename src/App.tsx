import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { Globalstyle } from "./styles/global"

import { Header } from "./components/Header"
import { Erro404 } from "./pages/Erro404"


export function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
    <Header/>
     <Erro404/>
     <Globalstyle/>
   </ThemeProvider>
  )
}