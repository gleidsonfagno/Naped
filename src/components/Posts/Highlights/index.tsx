
import Link from "next/link";
import { Category } from "../../Category";
import { Content } from "./style";
import Image from "next/image";

interface Post {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  resume: string;
  date: string;
  content: string;
  star: string;
  new: string;
}

interface HighlightsProps  {
  post: Post;
}

export function Highlights({ post }: HighlightsProps ) {
  return (
    <Content>
      <Link href={`/posts/${post.id}`}>
        <article>
          <div className="gradient" />
          <Image src={post.imageUrl} width={1000} height={1000} alt="" />
          <div>
            <span>
              <Category title={post.category} />
            </span>
            <h2> {post.title} </h2>
          </div>
        </article>
      </Link>
    </Content>
  );
}
