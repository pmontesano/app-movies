import React, { useState } from 'react';
import { fetchThunk } from '../actions';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import Stack from './stack';
import List from './list';
import { Category } from '@mui/icons-material';

const listMovies = (props) => {
  const dispatch = useDispatch();
  const fecthCategory = (cat, newTitle) => {
    setTitle(newTitle);
    dispatch(fetchThunk(cat));
  };
  const arrayTitle = [
    {
      text: 'Lo más popular',
      cat: 'popular',
    },
    {
      text: 'En cartelera',
      cat: 'now_playing',
    },
    {
      text: 'Proximamente',
      cat: 'upcoming',
    },
    {
      text: 'Mejor ranqueadas',
      cat: 'top_rated',
    },
  ];
  const [title, setTitle] = useState(arrayTitle[0].text);

  return (
    <div>
      <h3>Listado de películas: {title}</h3>
      <Stack direction="row" spacing={2}>
        {arrayTitle.map((category, i) => (
          <Button
            key={i}
            className="button--grey"
            variant="outlined"
            onClick={() => fecthCategory(category.cat, category.text)}
          >
            {category.text}
          </Button>
        ))}
      </Stack>
      <List {...props} />
    </div>
  );
};

export default listMovies;
