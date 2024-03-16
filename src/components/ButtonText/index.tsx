import { Link } from "react-router-dom";
import { Button } from "./styles";

interface ButtonTextProps {
    title: string;
    to?: string
}

export function ButtonText({title, to = "/", } : ButtonTextProps) {
    return(
        <Link to={to}>
            <Button>
                {title}
            </Button>
        </Link>
    )
}