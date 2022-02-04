import React, { useEffect } from 'react';
import { url } from '../../config/url';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../actions';
import { Skeleton } from '@mui/material';

const MovieDetail = (props) => {
  const {
    title,
    overview,
    backdrop_path,
    poster_path,
    vote_average,
    video,
    release_date,
    genres,
    loading,
    runtime,
  } = props;
  const { imgBackground, imgPicture } = url.images;

  const dispatch = useDispatch();
  const { moviename } = useParams();

  useEffect(() => {
    dispatch(fetchMovieDetails(moviename));
  }, []);

  const namespace = 'movie-detail';

  const movieData = (
    <>
      <div className={`${namespace}__picture`}>
        <img src={`${imgPicture}${poster_path}`} />
      </div>
      <div className={`${namespace}__info`}>
        <h3 className={`${namespace}__info-title`}>{title}</h3>
        <div className={`${namespace}__facts`}>
          <span className={`${namespace}__certification`}>PG</span>
          <span className={`${namespace}__release'`}>{release_date}</span>
          <ul className={`${namespace}__genres`}>
            {genres?.map((gen) => (
              <li key={gen.id}>
                {gen.name}
                <span>,&nbsp;</span>
              </li>
            ))}
          </ul>
          <span className={`${namespace}__runtime`}>{runtime} m</span>
        </div>
        <div>
          <p>Puntuación {vote_average}</p>
        </div>
        <h4 className={`${namespace}__info-subtitle`}>Descripción:</h4>
        <p>{overview}</p>
      </div>
    </>
  );

  return (
    <div className={namespace}>
      <div
        className={`${namespace}__box`}
        style={{ backgroundImage: `url(${imgBackground}${backdrop_path})` }}
      >
        <div className={`${namespace}__custom-bg`}>
          <div className={`${namespace}__inner-box`}>
            {loading === true ? <div>loading...</div> : movieData}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
