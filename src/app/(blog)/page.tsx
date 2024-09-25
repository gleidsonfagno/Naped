"use client";

import { useEffect, useState } from "react";

import { Post } from "../types/post";
import { Cabecalho, Container, Content, Section, SectionCard, Sectionlanc } from "./styles";
import { Skeleton } from "@/components/Skeleton/Skeleton";
import { Recentes } from "@/components/Posts/Recentes";
import { Releases } from "@/components/Posts/Releases";
import { Highlights } from "@/components/Posts/Highlights";

// export const metadata = {
//   title: "Naped | Blog",
//   description: "Blog naped para Fans",
// };


export default function Home() {
  // export const revalidate = 60;
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://naped-red.vercel.app/api/posts");
      const posts: Post[] = await data.json();
      setLoading(false); // Remove o estado de carregamento
      setPosts(posts);
    };

    fetchData();
  }, []);

  return (
    <Content>
        <Cabecalho>
          <h1>
            Mundo nerd? <br /> Naped!
          </h1>
          <p>
            O Naped pode ser sua fonte de informações sobre o mundo nerd e
            outros assuntos relacionados.
          </p>
        </Cabecalho>

        <Section>
          {loading
            ? Array(3) // Renderiza 3 esqueletos enquanto está carregando
                .fill(0)
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                .map((_, index) => <Skeleton key={index} />)
            : posts
                .slice(0, 3)
                .map((post) => <Highlights key={post.id} post={post} />)}

          {/* {posts.slice(0, 3).map((post) => (
            <Highlights key={post.id} post={post} />
          ))} */}
        </Section>

        <SectionCard>
          <h2>Notícias mais recentes</h2>

          <div>
            {/* {posts.slice(0, 3).map((post) => (
            <Recentes key={post.id} post={post} />
          ))} */}
            {loading
              ? Array(3)
                  .fill(0)
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  .map((_, index) => <Skeleton key={index} />)
              : posts
                  .slice(0, 3)
                  .map((post) => <Recentes key={post.id} post={post} />)}
          </div>
        </SectionCard>

        <Sectionlanc>
          <h2>Lançamentos</h2>
          <Container>
            {/* {posts.slice(0, 2).map((post) => (
              <Releases key={post.id} post={post} />
            ))} */}

            {loading
              ? Array(2)
                  .fill(0)
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  .map((_, index) => <Skeleton key={index} />)
              : posts
                  .slice(0, 2)
                  .map((post) => <Releases key={post.id} post={post} />)}
          </Container>
        </Sectionlanc>
      </Content>
  );
}
