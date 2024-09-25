
import Link from "next/link";
import { Category } from "../../Category";
import { Container } from "./styles";

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

interface ReleasesProps {
  post: Post;
}

export function Releases({ post }: ReleasesProps) {
  return (
    <Container>
      <div>
        <span>
          <Category title={post.category} />
        </span>

        <h2>{post.title}</h2>

        <p>{post.resume}</p>

        <Link href={`/posts/${post.id}`}>Ler mais</Link>
      </div>
    </Container>
  );
}
