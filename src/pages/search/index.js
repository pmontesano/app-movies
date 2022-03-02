import React from 'react';
import ContainerPage from '../../components/layout/container';
import SearchList from '../../components/search/searchList';

const Search = () => (
  <ContainerPage sx={{ mt: '100px', mb: '100px' }}>
    <SearchList />
  </ContainerPage>
);

export default Search;
