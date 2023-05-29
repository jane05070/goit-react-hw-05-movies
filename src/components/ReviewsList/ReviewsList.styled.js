import styled from '@emotion/styled';

export const ReviewsListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space.ml};
  }
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.primaryColor};
`;

export const ReviewerName = styled.p`
  color: ${p => p.theme.colors.secondaryColorBlue};
`;
