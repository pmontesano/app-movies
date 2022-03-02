import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch, useSelector } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { searchMovies } from '../../actions';
import { url } from '../../config/url';
import Image from '../image';
import Loading from '../loading';

const SearchList = () => {
  const { search } = useLocation();
  const searchQuery = new URLSearchParams(search);
  const query = searchQuery.get('query');
  const { imgUrl } = url.images;

  const dispatch = useDispatch();

  const [filter, setFilter] = React.useState('');

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    dispatch(searchMovies(query));
  }, []);

  const searchState = useSelector((state) => state.search) || [];

  const results = searchState.results;

  const { loading } = searchState;

  const SearchListItem = ({
    id,
    backdrop_path,
    title,
    overview: description,
  }) => (
    <ListItem key={id}>
      <div className="search-list__info">
        <Link to={`/movie/${id}`}>
          <span className="search-list__img">
            <Image
              img={backdrop_path}
              src={`${imgUrl}/${backdrop_path}`}
              alt={title}
            />
          </span>
          <ListItemText id={id} primary={title} secondary={description} />
        </Link>
      </div>
    </ListItem>
  );

  const Filter = () => (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label"></InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={filter}
        onChange={handleChange}
        label="Filter"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Mejor valoradas</MenuItem>
        <MenuItem value={20}>Por fecha de estreno</MenuItem>
      </Select>
    </FormControl>
  );

  return (
    <div className="search-content">
      <div className="search-top">
        <h3 className="search__title">Resultados de búsqueda</h3>
        <div className="search-filter">
          <span className="search-filter__text">Ordenar por</span> <Filter />
        </div>
      </div>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        className="search-list"
      >
        {loading ? (
          <Loading />
        ) : results?.length === 0 ? (
          <ListItem
            sx={{ flexDirection: 'column' }}
            className="search-list__empty"
          >
            <h4>No encontramos lo que buscabas...</h4>
          </ListItem>
        ) : (
          results.map((movie) => <SearchListItem {...movie} />)
        )}
      </List>
    </div>
  );
};

export default SearchList;
