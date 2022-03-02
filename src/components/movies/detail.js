import React, { useState, useEffect } from 'react';
import { url } from '../../config/url';
import { useDispatch } from 'react-redux';
import BodyClassName from 'react-body-classname';
import { ShimmerPostItem } from 'react-shimmer-effects';
import { useParams, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
  fetchMovieDetails,
  fetchMovieSimilar,
  fetchMovieVideo,
} from '../../actions';
import { addBookmarks, removeBookmarks } from '../../actions';
import {
  handleAddSingleBookmarksFunc,
  handleRemoveBookmarksFunc,
} from '../bookmarks/bookmarksHandles';
import useBookmarks from '../../bookmarks/useBookmarks';
import Bookmarks from '../bookmarks/bookmarks';
import Loading from '../loading';
import Rating from '../rating';
import KeepMountedModal from '../modal';
import Video from '../video';

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
    movieVideo,
  } = props;
  const { imgBackground, imgPicture, imgPictureHorizontal } = url.images;

  const dispatch = useDispatch();
  const { moviename } = useParams();
  const bookmarksContext = useBookmarks();
  const movieId = parseInt(moviename);

  const [modalOpen, setmodalOpen] = useState(false);
  const handleModalOpen = () => setmodalOpen(true);

  const videoStyles = {
    width: 1155,
    height: 649,
  };

  const movieVideoDetail = {
    id: movieVideo.id,
    key: movieVideo.results[0]?.key,
    name: movieVideo.results[0]?.name,
  };

  const handleModalClose = () => {
    return setmodalOpen(false);
  };

  const results = [
    {
      id: moviename,
      title,
      overview,
      vote_average,
      backdrop_path,
    },
  ];

  const handleDispatch = (id) => {
    dispatch(fetchMovieDetails(id));
    dispatch(fetchMovieSimilar(id));
    dispatch(fetchMovieVideo(id));
  };

  useEffect(() => {
    handleDispatch(moviename);
  }, []);

  const handleAddBookmarks = (id) => {
    const newState = handleAddSingleBookmarksFunc(
      id,
      results,
      bookmarksContext
    );
    bookmarksContext.addBookmark(newState);
    dispatch(addBookmarks(newState));
  };

  const handleRevomeBookmarks = (id) => {
    const newState = handleRemoveBookmarksFunc(id, bookmarksContext);
    bookmarksContext.removeBookmark(newState);
    dispatch(removeBookmarks(newState));
  };

  const namespace = 'movie-detail';

  console.log('movieVideoDetail', movieVideoDetail);
  const MovieData = () => {
    const { key, name } = movieVideoDetail;
    return (
      <>
        <div className={`${namespace}__picture`}>
          <img src={`${imgPicture}/${poster_path}`} />
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
          <div className={`${namespace}__aditional-info`}>
            <Rating text="Puntuación de usuario" value={vote_average}></Rating>
            <span className="bullets">
              <Bookmarks
                variant="inherit"
                id={movieId}
                color="default"
                handleAddBookmarks={handleAddBookmarks}
                handleRevomeBookmarks={handleRevomeBookmarks}
              />
            </span>
            <div className={`${namespace}__video`}>
              {key !== undefined ? (
                <>
                  <Button onClick={handleModalOpen} sx={{ color: '#fff' }}>
                    <ArrowRightIcon />
                    Ver trailer
                  </Button>
                  <KeepMountedModal
                    modalOpen={modalOpen}
                    handleModalClose={handleModalClose}
                    {...videoStyles}
                  >
                    <Video id={key} name={name} {...videoStyles} />
                  </KeepMountedModal>
                </>
              ) : (
                ''
              )}
            </div>
          </div>

          <h4 className={`${namespace}__info-subtitle`}>Descripción:</h4>
          <p>{overview}</p>
        </div>
      </>
    );
  };

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
