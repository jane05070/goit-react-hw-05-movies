import { useLocation } from 'react-router-dom';
import { BackLinkIcon, StyledLink } from './BackLink.styled';

export const BackLink = ({ children }) => {
  const location = useLocation().state?.from ?? '/';
  return (
    <StyledLink to={location}>
      <BackLinkIcon />
      {children}
    </StyledLink>
  );
};
