import { FiSearch } from "react-icons/fi";


import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Main ,Baner } from "./styles";

export function Series() {
    return (
        <>
            <Header />

            <Main>
                <Baner>
                    <div>
                        <h2>Séries</h2>
                        <p>O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</p>
                    </div>
                </Baner>
                <Input
                        placeholder="Quer ajuda na procura? Pesquise aqui"
                        type="text"
                        icon={FiSearch}
                    />
            </Main>
        </>
    )
}