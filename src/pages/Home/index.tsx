
import { Card } from "../../components/Card";
import { Cardes } from "../../components/Cardes";
import { Category } from "../../components/Category";
import { Footer } from "../../components/Footer";
import { Content, Header, Section, SectionCard, Sectionlanc, Container } from "./styles";

const movies = [
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. ',

        backgroundImage: '/assets/19.png',
        category: 'Filmes' // Adicione a categoria do filme
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. ',
        backgroundImage: '/assets/11.png',
        category: 'Animes' // Adicione a categoria do filme
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. ',
        backgroundImage: '/assets/03.png',
        category: 'Jogos' // Adicione a categoria do filme
    },
    // Adicione mais filmes conforme necessário
];

const destaques = [
    {
        Img: "/assets/21.png",
        category: "Animes",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque.",
    },
    {
        Img: "/assets/17.png",
        category: "Animes",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque.",
    },
    {
        Img: "/assets/08.png",
        category: "Animes",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque.",
    },
]

export function Home() {
    return (
        <>
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
                    {destaques.map((destaque, index) => (
                        <Cardes key={index} destaque={destaque} />
                    ))}
                    {/* <Cardes />
                    <Cardes />
                    <Cardes /> */}
                </div>

            </SectionCard>

            <Sectionlanc>
                <h2>
                    Lançamentos
                </h2>
                <Container>
                    <div>
                        <Category title="Filmes" />

                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eaque hic labore assumenda quia iste quos corrupti harum quis.</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda totam doloribus magni eligendi, vero voluptas possimus neque!!</p>

                        <a href="">Ler mais</a>
                    </div>

                    <div>
                        <Category title="Filmes" />

                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eaque hic labore assumenda quia iste quos corrupti harum quis.</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda totam doloribus magni eligendi, vero voluptas possimus neque!!</p>

                        <a href="">Ler mais</a>
                    </div>
                </Container>
            </Sectionlanc>
        </Content>
        <Footer/>
        </>
    )
}