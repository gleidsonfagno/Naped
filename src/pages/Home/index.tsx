import { Card } from "../../components/Card";
import { Cardes } from "../../components/Cardes";
import { Content, Header, Section, SectionCard } from "./styles";

const movies = [
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. ',

        backgroundImage: '/public/assets/19.png',
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

const destaques = [
    {
        Img: "/public/assets/21.png",
        category: "Animes",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque.",
    },
    {
        Img: "/public/assets/17.png",
        category: "Animes",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque.",
    },
    {
        Img: "/public/assets/08.png",
        category: "Animes",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque.",
    },
]

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

            <SectionCard>
                <h2>Notícias mais recentes</h2>

                <div>
                    {destaques.map( (destaque, index) => (
                        <Cardes key={index} destaque={destaque}/>
                    ))}
                    {/* <Cardes />
                    <Cardes />
                    <Cardes /> */}
                </div>

            </SectionCard>
        </Content>
    )
}