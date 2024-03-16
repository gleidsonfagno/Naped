// import { StyledLink } from "./styles";

// interface LinkProps {
//   isActive?: boolean;
//   href: string;
//   children?: React.ReactNode;
// }

// export function Link({ isActive, href, children }: LinkProps) {
//   return (
//     <StyledLink href={href} isActive={isActive || false}>
//       {children}
//     </StyledLink>
//   );
// }

import { Link as RouterLink } from 'react-router-dom'; // Renomeando para evitar conflito de nomes

interface LinkProps {
  isActive?: boolean;
  to: string;
  children?: React.ReactNode;
}

export function Links({  to, children }: LinkProps) {
  return (
    <RouterLink to={to} >
      {children}
    </RouterLink>
  );
}
