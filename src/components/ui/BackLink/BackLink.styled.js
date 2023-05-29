import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  margin-bottom: 40px;
  padding: ${p => p.theme.space.m};
  color: ${p => p.theme.colors.primaryColor};
  background-color: #dde1e7;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 2px 2px 5px #babecc, -5px -5px 10px #ffffff73;
  transition: color 250ms ease-in-out;
  :hover {
    color: ${p => p.theme.colors.secondaryColorBlue};
  }
`;

export const BackLinkIcon = styled(TiArrowBackOutline)`
  width: 20px;
  height: 20px;
  margin-right: ${p => p.theme.space.ml};
`;
