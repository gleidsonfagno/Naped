import { StyledLink } from "./styles";

interface LinkProps {
  isActive?: boolean;
  href: string;
  children?: React.ReactNode;
}

export function Link({ isActive, href, children }: LinkProps) {
  return (
    <StyledLink href={href} isActive={isActive || false}>
      {children}
    </StyledLink>
  );
}