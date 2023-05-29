import { Formik } from 'formik';
import { ImSearch } from 'react-icons/im';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit, value }) => {
  return (
    <Formik
      initialValues={{ query: value ?? '' }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      <SearchForm>
        <SearchFormButton type="submit">
          <ImSearch size="20px" />
        </SearchFormButton>

        <SearchFormInput
          name="query"
          type="text"
          autoFocus
          placeholder="Enter a keyword"
        />
      </SearchForm>
    </Formik>
  );
};
