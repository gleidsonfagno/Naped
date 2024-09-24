// import Image from "next/image";

import Link from "next/link";
import { Post } from "../types/post";

export const revalidate = 60;

export default async function Home({}) {
  const data = await fetch("https://naped-red.vercel.app/api/posts");
  const posts: Post[] = await data.json();

  // localStorage.setItem("cachedPosts", JSON.stringify(posts));

  // console.log(posts);
  return (
    <div>
      <h1>Hello word</h1>
      <ul>
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <li >{post.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
