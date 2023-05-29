import styled from '@emotion/styled';

export const CastListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  margin: -5px;
`;

export const CastListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  max-width: 80px;
  margin: ${p => p.theme.space.m};
  flex-grow: 1;
`;

export const CastListPoster = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin-bottom: ${p => p.theme.space.m};
`;

export const CastListName = styled.p`
  display: block;
  text-align: center;
  font-size: 10px;
  color: ${p => p.theme.colors.primaryColor};
`;
