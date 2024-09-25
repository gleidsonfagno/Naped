
import Link from "next/link";
import { Content } from "./styles";
import Image from "next/image";

interface Recentes {
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

interface CardesProps {
    post: Recentes;
}

export function Recentes( {post}: CardesProps) {
    return (
        <Content>
            <Image src={post.imageUrl}  width={1000} height={1000} alt="" />
            <div>
                <span> {post.category} </span>
                <h2> {post.title}  </h2>
                <p> {post.resume} </p>
                <Link href={`/posts/${post.id}`}>Ler mais</Link>
            </div>
        </Content>
    )
}