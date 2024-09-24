"use client"

import Head from 'next/head';
import "./globals.css";
import Header from "@/components/Header";
import StyledComponentsRegistry from "./lib/registry";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./types/themes/default";
import { Globalstyle } from './types/global';

// Componente de Metadados separado para facilitar futuras atualizações dinâmicas
const Metadata = ({ title, description }: { title: string; description: string }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
);

export default function RootLayout({
  title = "Naped | Blog", // Títulos padrão que você pode modificar
  description = "Blog naped para Fans", // Descrição padrão
  children,
}: Readonly<{
  children: React.ReactNode;
  title?: string;
  description?: string;
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
            <Metadata title={title} description={description} />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
