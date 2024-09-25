'use client';
import { ButtonText } from "../ButtonText";

import { Cabecalho, Container, Nav, Span, MenuBar } from "./styles";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { RiMenuLine } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";

export default function Header() {
  // controlar a abertura do menu
  const [menuOpen, setMenuOpen] = useState(false);

  // funçao para alterar o  menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <Cabecalho>
        <Span>
          <Image
            src={"/Logo_naped.png"}
            width={40}
            height={40}
            alt="logo naped"
          />
          <strong>Naped</strong>
        </Span>

        <Nav $menuOpen={menuOpen}>
          <ul className={menuOpen ? "menu-open" : ""}>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/categories/Series" onClick={toggleMenu} >Séries</Link>
            </li>
            <li>
              <Link href="/categories/Filmes" onClick={toggleMenu}>Filmes</Link>
            </li>
            <li>
              <Link href="/categories/Animes" onClick={toggleMenu}>Animes</Link>
            </li>
            <li>
              <Link href="/categories/Jogos" onClick={toggleMenu}>Jogos</Link>
            </li>
            <li>
              <MenuBar className="open_menu" onClick={toggleMenu}>
                {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
              </MenuBar>
            </li>
            <ButtonText title="Minha conta" to="/Signin" />
          </ul>
        </Nav>

        <MenuBar className="open_menu" onClick={toggleMenu}>
          {menuOpen ? <RiCloseLine size={25} /> : <RiMenuLine size={25} />}
        </MenuBar>
      </Cabecalho>
    </Container>
  );
}
