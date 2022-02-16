import React, { useEffect } from 'react';
import { url } from '../../config/url';
import { useDispatch } from 'react-redux';
import BodyClassName from 'react-body-classname';
import { ShimmerPostItem } from 'react-shimmer-effects';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieSimilar } from '../../actions';
import Loading from '../loading';

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
    movieSimilar,
  } = props;
  const { imgBackground, imgPicture, imgPictureHorizontal } = url.images;

  const dispatch = useDispatch();
  const { moviename } = useParams();

  const handleDispatch = (id) => {
    dispatch(fetchMovieDetails(id));
    dispatch(fetchMovieSimilar(id));
  };

  useEffect(() => {
    handleDispatch(moviename);
  }, []);

  console.log('movieSimilar', movieSimilar);

  const namespace = 'movie-detail';

  const MovieData = () => (
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

  const MovieSimilarData = ({ results, loading }) => {
    return (
      <div className="scroller_wrap should_fade is_fading">
        <div className="item-block scroller">
          {results?.map((movie) => {
            const { original_title, poster_path, popularity, id } = movie;

            return (
              <div className="item item__mini" key={id}>
                {loading ? (
                  <ShimmerPostItem card imageHeight={141} />
                ) : (
                  <>
                    <Link
                      to={`/movie/${id}`}
                      onClick={() => handleDispatch(id)}
                    >
                      <img
                        src={`${imgPictureHorizontal}${poster_path}`}
                        className="img"
                        loading="lazy"
                        alt={original_title}
                      />
                      <div className="info">
                        <h4 className="title">{original_title}</h4>
                        <div className="rating">{popularity}</div>
                      </div>
                    </Link>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <BodyClassName className="body-white-bg">
      <div className={namespace}>
        <div
          className={`${namespace}__box`}
          style={{ backgroundImage: `url(${imgBackground}${backdrop_path})` }}
        >
          <div className={`${namespace}__custom-bg`}>
            <div
              className={`${namespace}__inner-box`}
              style={{ minHeight: loading ? 500 : '' }}
            >
              {loading ? <Loading /> : <MovieData />}
            </div>
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="recomendation-section">
            <h3 className="recomendation__title">Recomendaciones</h3>
            <MovieSimilarData {...movieSimilar} />
          </div>
        )}
      </div>
    </BodyClassName>
  );
};

export default MovieDetail;
