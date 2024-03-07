import eRRor404 from '/assets/404.svg';

import { ButtonText } from "../../components/ButtonText";
import { Section, Left, Right } from "./styles";


export function Erro404() {
    return (
        <Section>
            <Left>
                <h2>Tenho más notícias
                    para você!</h2>

                <p>A página que você está procurando pode ter sido removida ou está temporariamente indisponível.</p>

                <div>
                <ButtonText title="Voltar para o início" />
                </div>
            </Left>

            <Right>
                <img src={eRRor404} alt="Erro 404" />
                <p>Ups! Você chegou no espaço...
                    volte para o mundo nerd!</p>
            </Right>
        </Section>
    )
}