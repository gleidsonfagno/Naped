import { Button } from "./styles";

interface ButtonTextProps {
    title: string;
}

export function ButtonText({title} : ButtonTextProps) {
    return(
        <Button>
            {title}
        </Button>
    )
}