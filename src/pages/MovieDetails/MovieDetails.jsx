import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieInfo } from 'api/getMovieInfo';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Loader } from 'components/ui/Loader/Loader';
import { Box } from 'styles/Box';
import AddictionalInfo from 'components/AddictionalInfo/AddictionalInfo';
import { BackLink } from 'components/ui/BackLink/BackLink';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState();

  useEffect(() => {
    async function onMovieInfo() {
      const { data } = await getMovieInfo(movieId);
      setMovieInfo(data);
    }
    onMovieInfo();
  }, [movieId]);

  return (
    <Box max-width="768px">
      <BackLink>Go Back</BackLink>
      {movieInfo && (
        <div>
          <MovieInfo movie={movieInfo} />
          <AddictionalInfo />

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </Box>
  );
};

export default MovieDetails;
