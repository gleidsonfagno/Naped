import logoImg from '/assets/Logo_naped.png';

import { ButtonText } from '../ButtonText';
import { Link } from '../Links';
import { Cabecalho, Container, Nav, Span, MenuBar} from './styles';



export function Header( ) {
    return (
        <Container>

            <Cabecalho>
                <Span>
                    <img src={logoImg} alt="logo naped" />
                    <strong>Naped</strong>
                </Span>

                <Nav>
                    <ul>
                        <li><Link isActive to="/">Inicio</Link></li>
                        <li><Link to="/series">Séries</Link></li>
                        <li><Link to="/filmes">Filmes</Link></li>
                        <li><Link to="/animes">Animes</Link></li>
                        <li><Link to="/jogos">Jogos</Link></li>
                    </ul>
                <ButtonText title="Minha conta" to="/register" />
                </Nav>


                <MenuBar>
                    abri
                </MenuBar>
            </Cabecalho>
        </Container>
    )
}