import Link from "next/link";
import { Button } from "./styles";

interface ButtonTextProps {
    title: string;
    to?: string
}

export function ButtonText({title, to = "/", } : ButtonTextProps) {
    return(
        <Link href={to}>
            <Button>
                {title}
            </Button>
        </Link>
    )
}