"use client"

import "./globals.css";
import Header from "@/components/Header";
import StyledComponentsRegistry from "./lib/registry";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./types/themes/default";
import { Globalstyle } from './types/global';
import { Footer } from "@/components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <StyledComponentsRegistry>
          <ThemeProvider theme={defaultTheme}>
            <Globalstyle />
            <Header />
           
            {children}
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
