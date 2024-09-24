// import Image from "next/image";

export default function Page({params}: {params: {
  category: string
}}) {
  return (
    <h1>Hello {params.category}</h1>
  );
}
