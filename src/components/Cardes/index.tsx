import { Link } from 'react-router-dom';
import { Content } from "./styles";

interface Destaque {
    Img: string;
    category: string;
    title: string;
    description: string;
}

interface CardesProps {
    destaque: Destaque;
}

export function Cardes( {destaque}: CardesProps) {
    return (
        <Content>
            <img src={destaque.Img} alt="" />
            <div>
                <span> {destaque.category} </span>
                <h2> {destaque.description}  </h2>
                <p> {destaque.title} </p>
                {/* <a href="">Ler mais</a> */}
                <Link to={`/detalhe/${destaque.id}`}>Ler mais</Link>
            </div>
        </Content>
    )
}