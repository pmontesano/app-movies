import React, { useState, useEffect } from 'react';
import { fetchThunk } from '../../actions';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { url } from '../../config/url';
import { config } from '../../config/default-config';
import Stack from '../layout/stack';
import List from '../list';

const listMovies = ({ fetchData, bookmarks }) => {
  const { results, loading } = fetchData;
  const dispatch = useDispatch();

  const {
    categories: { movie },
  } = url;

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

  const data = {
    resultsMovies: [],
    page: 1,
    title: arrayTitle[0].text,
    category: data?.category ? category : 'popular',
    isSelected: true,
  };

  const [showResults, setShowResults] = useState(data);
  const [page, setPage] = useState(1);
  const { category, title } = showResults;

  useEffect(() => {
    dispatch(fetchThunk());
    setShowResults({
      ...data,
    });
  }, []);

  const fecthCategory = (pathParam, movieParam, page, newTitle) => {
    dispatch(fetchThunk(pathParam, movieParam, page));
    setShowResults({
      ...data,
      title: newTitle,
      category: movieParam,
      page: page,
    });

    setPage(page);
  };

  const handleChangePage = (pathParam, movieParam) => (e, value) => {
    setPage(value);
    dispatch(fetchThunk(pathParam, movieParam, value));
    setShowResults({
      ...data,
      page: value,
    });
  };

  return (
    <div>
      <div className="">
        <h3>Listado de películas: {title}</h3>
        <Stack direction="row" spacing={2}>
          {arrayTitle.map((category, i) => (
            <Button
              category={category.cat}
              key={i}
              className={`${category === category.cat} ? "button--grey": ''`}
              variant="outlined"
              onClick={() =>
                fecthCategory(movie, category.cat, 1, category.text)
              }
            >
              {category.text}
            </Button>
          ))}
        </Stack>
      </div>
      <List results={results} loading={loading} bookmarks={bookmarks} />
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        m={4}
        spacing={2}
      >
        <Pagination
          count={10}
          shape="rounded"
          size="large"
          page={page}
          color="primary"
          onChange={handleChangePage(movie, category)}
        />
      </Stack>
    </div>
  );
};

export default listMovies;
