import { NextResponse } from "next/server";
import data from "../data.json";

// Função para lidar com o método GET
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const postId = Number(params.id); // Converte o ID da URL para número
  const post = data.posts.find((p) => p.id === postId); // Filtra o post pelo ID

  if (!post) {
    return NextResponse.json({ message: "Post não encontrado" }, { status: 404 });
  }

  return NextResponse.json(post, { status: 200 });
}
