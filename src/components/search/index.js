import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Search = () => {
  const searchState = useSelector((state) => state.fetchData.results);
  const [labelState, setLabelState] = useState('');
  const movieList = searchState.map((x) => ({
    title: x.title,
    id: x.id,
  }));

  const history = useHistory();

  const handleSearch = (queryParam) => {
    history.push({ pathname: '/search', search: `?query=${queryParam}` });
  };

  const handleChange = (value) => {
    setLabelState(value);
  };

  return (
    <Stack spacing={2} className="search-box">
      <Autocomplete
        className="search-box__input"
        id="free-solo-demo"
        onKeyDown={(e) => e.key === 'Enter' && handleSearch(labelState)}
        freeSolo
        options={movieList.map((option) => option.title)}
        renderInput={(params) => {
          const { value } = params.inputProps;
          return (
            <TextField
              {...params}
              label="...Buscar"
              onChange={handleChange(value)}
            />
          );
        }}
      />
      <Button
        disabled={labelState === '' ? true : ''}
        variant="contained"
        className="search-box__button"
        onClick={() => handleSearch(labelState)}
      >
        Buscar
      </Button>
    </Stack>
  );
};

export default Search;
