"use client";

import Image from "next/image";
import { Container } from "./styles";

import { useEffect, useState } from "react";
import { SectionCard } from "../../styles";
import { Recentes } from "@/components/Posts/Recentes";;
import NotFound from "@/app/not-found";
import { Post } from "@/app/types/post";

// Função para buscar o post específico pelo id
async function getPostsid(id: number): Promise<Post | undefined> {
  const response = await fetch("https://naped-red.vercel.app/api/posts");
  const posts: Post[] = await response.json();
  const post = posts.find((postid: Post) => postid.id === id);
  return post;
}

// Função para buscar posts relacionados pela categoria
async function getPostRelacionados(category: string): Promise<Post[]> {
  const response = await fetch("https://naped-red.vercel.app/api/posts");
  const posts: Post[] = await response.json();

  // Filtrar os posts pela mesma categoria
  const postsRelacionados = posts.filter((post) => post.category === category);

  return postsRelacionados;
}

export default function Posts({ params: { id } }: { params: { id: number } }) {
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [postsRelacionados, setPostsRelacionados] = useState<Post[]>([]);
  
  useEffect(() => {
    async function fetchPost() {
      const fetchedPost = await getPostsid(Number(id));
      setPost(fetchedPost);

      // Após carregar o post, buscar os relacionados pela categoria
      if (fetchedPost?.category) {
        const relacionados = await getPostRelacionados(fetchedPost.category);
        setPostsRelacionados(relacionados);
      }
    }
    fetchPost();
  }, [id]);

  if (!post) {
    return <NotFound />;
  }

  return (
    <>
      <Container>
        <span className="category">{post.category}</span>
        <h2>{post.title}</h2>
        <p>{post.resume}</p>

        <Image
          className="imageUrl"
          src={post.imageUrl}
          width={700}
          height={400}
          alt=""
        />

        <p>{post.content}</p>

        <article>
          <SectionCard>
            <h3>Outras notícias parecidas</h3>

            <div>
         {postsRelacionados.map((post) => (
            <Recentes key={post.id} post={post} />
          ))}
         </div>

            
          </SectionCard>
        </article>
      </Container>
    </>
  );
}
