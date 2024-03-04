import { Container } from "./styles";

interface InputProps {
    placeholder?: string;
    type?: string;
    icon?: React.ElementType;
}

export function Input({ icon: Icon, ...rest }: InputProps) {
    return (
        <Container>
            {Icon && <Icon size={20} />}
            <input {...rest} />
        </Container>
    );
}