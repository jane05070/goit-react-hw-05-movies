import { BASE_IMG_URL } from '../../constants/constantsApi';
import {
  MovieInfoCard,
  MovieInfoPoster,
  MovieInfoTitle,
  MovieInfoBlock,
} from './MovieInfo.styled';
import { ratingNormalize, releaseDataNormalize } from 'utils/movieDataNormaliz';

export const MovieInfo = ({ movie }) => {
  return (
    <MovieInfoCard>
      <MovieInfoPoster
        src={
          movie.poster_path
            ? BASE_IMG_URL + '/w500' + movie.poster_path
            : '../../../assets/No-Image-Placeholder.png'
        }
        alt=""
        width="100px"
      />
      <div>
        <MovieInfoTitle>
          {movie.title}
          {'  '}
          <span>({releaseDataNormalize(movie.release_date)})</span>
        </MovieInfoTitle>
        <MovieInfoBlock>
          Rating: <span>{ratingNormalize(movie.vote_average)}</span>
        </MovieInfoBlock>
        <MovieInfoBlock>Overview: {movie.overview}</MovieInfoBlock>
        <MovieInfoBlock>
          Genres:
          <ul>
            {movie.genres.map(genre => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>
        </MovieInfoBlock>
      </div>
    </MovieInfoCard>
  );
};
