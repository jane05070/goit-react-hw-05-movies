import styled from '@emotion/styled';

export const MovieInfoCard = styled.div`
  display: flex;
  max-width: 800px;
  margin-bottom: ${p => p.theme.space.l};
  color: ${p => p.theme.colors.primaryColor};
`;

export const MovieInfoPoster = styled.img`
  display: block;
  width: 200px;
  margin-right: ${p => p.theme.space.l};
`;

export const MovieInfoTitle = styled.h3`
  margin-bottom: ${p => p.theme.space.ml};
  color: ${p => p.theme.colors.secondaryColorBlue};
`;

export const MovieInfoBlock = styled.div`
  margin-bottom: ${p => p.theme.space.ml};
  color: ${p => p.theme.colors.primaryColor};
`;
