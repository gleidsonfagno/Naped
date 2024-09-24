// import Image from "next/image";

import { Post } from "@/app/types/post";
import { notFound } from "next/navigation";

// funçao que pega o id do post
async function getPost(id: string): Promise<Post | null> {
  try {
    const data = await fetch(`https://naped-red.vercel.app/api/posts/${id}`);
    if (!data.ok) {
      notFound();
    }
    const postId: Post = await data.json();
    if (!postId) notFound();
    return postId;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
}

export default async function Home({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  console.log(post?.title)

  if(!post) {
    return <p>Post not_Found</p>
  }
  // console.log(post)
  return (
    <div>
      <h1>Hello {params.id}</h1>;<h2>{post.title}</h2>
      <p>{post.category}</p>
    </div>
  );
}
