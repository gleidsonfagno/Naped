import { StyledLink } from "./styles";

interface LinkProps {
  isActive?: boolean;
  to: string;
  children?: React.ReactNode;
}

export function Links({ isActive, to, children }: LinkProps) {
  return (
    <StyledLink href={to} isActive={isActive || false}>
      {children}
    </StyledLink>
  );
}