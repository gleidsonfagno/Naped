import { Category } from "../Category";
import { Content } from "./style";

interface Movie {
    title: string;
    description: string;
    backgroundImage: string;
    category: string;
}

interface CardProps {
    movie: Movie;
}

export function Card({ movie }: CardProps) {
    return (
        <Content>
            <a href="">
                <article>
                    <img src={movie.backgroundImage} alt="" />
                    <div>
                        <span><Category title={movie.category} /></span>
                        <h2> {movie.title} </h2>
                        {/* <p>  {movie.description} </p> */}
                    </div>
                </article>
            </a>
        </Content>
    )
}