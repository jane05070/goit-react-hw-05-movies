import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  background-color: ${p => p.theme.colors.secondaryColor};
  border-radius: ${p => p.theme.radii.small};
  margin-bottom: ${p => p.theme.space.l};
  overflow: hidden;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
`;

export const SearchFormInput = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.l};
  border: none;
  outline: none;
  padding-left: ${p => p.theme.space.m};
  padding-right: ${p => p.theme.space.m};

  ::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

export const SearchFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space.ml};
  border: ${p => p.theme.radii.none};
  color: ${p => p.theme.colors.primaryColor};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    color: ${p => p.theme.colors.secondaryColorBlue};
  }
`;
