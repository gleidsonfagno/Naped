import logoImg from '/assets/Logo_naped.png';

import { ButtonText } from '../ButtonText';
import { Link } from '../Link';
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
                        <li><Link isActive href="/">Inicio</Link></li>
                        <li><Link href="#">Séries</Link></li>
                        <li><Link href="#">Filmes</Link></li>
                        <li><Link href="#">Animes</Link></li>
                        <li><Link href="#">Jogos</Link></li>
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