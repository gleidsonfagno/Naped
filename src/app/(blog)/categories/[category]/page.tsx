"use client";

import Image from "next/image";

import { FiSearch } from "react-icons/fi";
// styled-components
import { Container, Content, Main, Render } from "./styles";
// API


import { useEffect, useState } from "react";
// comnponents
import { Recentes } from "@/components/Posts/Recentes";
import { Post } from "@/app/types/post";
// fetch da api
async function getPosts(): Promise<Post[]> {
  const response = await fetch("https://naped-red.vercel.app/api/posts", {
  });

  return response.json();
}



export default function Page({ params }: { params: { category: string } }) {
  const [posts, setPosts] = useState<Post[]>([]); // todo os posts
  const [query, setQuery] = useState(""); // termo da busca
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  const categoryImage = `/images/${params.category}.png`;
  //todos os posts
  // console.log(setPosts)
  // console.log(posts);

  useEffect(() => {
    async function fetPosts() {
      const allPosts = await getPosts();
      // filtrano os posts
      const animePost = allPosts.filter(
        (post) => post.category === params.category
      );
      setPosts(animePost); //salva aos posts da categoria Animes

      // console.log(animePost);
      // console.log(allPosts)
    }
    fetPosts();
  }, [params.category]);

  // funcao que filtra os posts conforme o usuario digita
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);

    // filtrar os que contem o termo  da busca no titulo ou no conteudo
    const filtered = posts.filter(
      (post) =>
        post.title
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase()) ||
        post.resume
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase()) ||
        post.content.toLocaleLowerCase()
        .includes(searchQuery.toLocaleLowerCase()) 
    );

    setFilteredPosts(filtered); //Atualizando os posts filtrados
  };

  return (
    <Main>
      <Content>
        <article>
          <div className="gradient" />
          <Image src={categoryImage} width={1216} height={300} alt="" />
          <div>
            <h2>{params.category}</h2>
            <p>
              O Naped pode ser sua fonte de informações sobre o mundo nerd e
              outros assuntos relacionados.
            </p>
          </div>
        </article>
      </Content>

      <Container>
        <FiSearch size={30} />
        <input
          className="search"
          type="text"
          placeholder="Quer ajuda na procura? Pesquise aqui"
          value={query}
          onChange={handleSearch}
        />
      </Container>

      <Render>
        {/* Renderizando os posts filtrados */}
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <Recentes key={post.id} post={post} />)
        ) : (
          <p>Nenhum post encontrado.</p>
        )}
      </Render>
    </Main>
  );
}

// import { FiSearch } from "react-icons/fi";
