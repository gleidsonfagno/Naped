import { Button } from "./styles";

interface ButtonTextProps {
    title: string;
}

export function Category( {title} : ButtonTextProps){
    return(
        <Button >
            {title}
        </Button>
    )
}