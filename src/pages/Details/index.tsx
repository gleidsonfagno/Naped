import { Header } from "../../components/Header";
import { DetailsContent,  Destaque } from "./styles";
// import { useParams } from 'react-router-dom';

export function Details() {
    // const {id } = useParams();
    return (
        <>
            <Header/>
            <DetailsContent>
                <span>Anime</span>
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quae unde inventore </h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim placeat explicabo numquam porro facere earum sunt inventore sapiente quae culpa iusto ipsa, dolorum alias, qui magni rem nihil aperiam hic?</p>

                <div>
                    <img src="/assets/03.png" alt="" />
                </div>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatem quasi deserunt cum, aut maiores fugit ipsa nobis provident ducimus odio accusantium dolor, autem temporibus explicabo quo error aliquid dignissimos?
                </p>
            </DetailsContent>

            <Destaque>
                <h2>Outras noticioas parecidas</h2>
                {/* <Cardes/> */}
            </Destaque>
        </>
    )
}