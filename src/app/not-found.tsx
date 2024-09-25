"use client"
// import Link from 'next/link'
import eRRor404 from '../../public/404.svg';

// import { ButtonText } from "../../components/ButtonText";
import { Section, Left, Right } from "./styles/not-found";
// import { Header } from '../../components/Header';
import Image from 'next/image';


export default function NotFound() {
    return (
       <>
        {/* <Header/> */}
        <Section>
            <Left>
                <h2>Tenho más notícias
                    para você!</h2>

                <p>A página que você está procurando pode ter sido removida ou está temporariamente indisponível.</p>

                <div>
                {/* <ButtonText title="Voltar para o início" to="/"/> */}
                </div>
            </Left>

            <Right>
                <Image src={eRRor404} width={500} height={250} alt="Erro 404" />
                <p>Ups! Você chegou no espaço...
                    volte para o mundo nerd!</p>
            </Right>
        </Section>
       </>
    )
}