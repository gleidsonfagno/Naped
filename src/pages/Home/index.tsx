import { Card } from "../../components/Card";
import { Content, Header, Section } from "./styles";

const movies = [
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. ',

        backgroundImage: '../../assets/19.png',
        category: 'Filmes' // Adicione a categoria do filme
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. ',
        backgroundImage: '../../assets/11.png',
        category: 'Animes' // Adicione a categoria do filme
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. ',
        backgroundImage: '../../assets/03.png',
        category: 'Jogos' // Adicione a categoria do filme
    },
    // Adicione mais filmes conforme necessário
];

export function Home() {
    return (
        <Content>
            <Header>
                <h1>
                    Mundo nerd? <br /> Naped!
                </h1>
                <p>O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</p>
            </Header>

            <Section>
                {movies.map((movie, index) => (
                    // Para cada 'movie' na array 'movies', criamos um componente 'Card'
                    // A propriedade 'key' é usada para identificar de forma única cada componente na lista
                    <Card key={index} movie={movie} />

                ))}
            </Section>
        </Content>
    )
}