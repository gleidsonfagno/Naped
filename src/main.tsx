import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { Globalstyle } from "./styles/global"

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Globalstyle />
      <Routes/>
    </ThemeProvider>
  </React.StrictMode>
)

