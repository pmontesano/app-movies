import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { blueGrey } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import Skeleton from '../skeleton';
import { Link } from 'react-router-dom';
import Bookmarks from '../bookmarks/bookmarks';

export default function RecipeReviewCard({
  cardTitle,
  cardDescription,
  cardImage,
  cardImageHeight,
  cardRate,
  cardSubheader,
  cardWidth,
  cardTitleTypographyProps,
  loading,
  handleLinkClick,
  linkParam,
  bookmarksId,
  handleAddBookmarks,
  handleRevomeBookmarks,
  isBookmarked,
}) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ width: cardWidth }}>
      {loading === true ? (
        <Skeleton />
      ) : (
        <Link to={linkParam} onClick={handleLinkClick}>
          <CardHeader
            sx={{ height: 100 }}
            avatar={
              <Avatar sx={{ bgcolor: blueGrey[700] }} aria-label="recipe">
                {cardRate}
              </Avatar>
            }
            title={cardTitle}
            titleTypographyProps={{ ...cardTitleTypographyProps }}
            subheader={cardSubheader}
          />
          <CardMedia
            component="img"
            height={cardImageHeight}
            image={cardImage}
            alt={cardTitle}
          />
        </Link>
      )}
      <CardActions disableSpacing>
        <Bookmarks
          id={bookmarksId}
          handleAddBookmarks={handleAddBookmarks}
          handleRevomeBookmarks={handleRevomeBookmarks}
          isBookmarked={isBookmarked}
        />
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
