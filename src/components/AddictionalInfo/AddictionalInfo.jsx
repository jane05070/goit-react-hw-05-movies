import { Link, useLocation } from 'react-router-dom';
import { MovieInfoBlock } from 'components/MovieInfo/MovieInfo.styled';
import { MovieItem } from './AddictionalInfo.styled';

const AddictionalInfo = () => {
  const location = useLocation().state?.from ?? '/';

  return (
    <div>
      <MovieInfoBlock>
        Addictional information:
        <ul>
          <MovieItem>
            <Link to="credits" state={{ from: location }}>
              Cast
            </Link>
          </MovieItem>
          <MovieItem>
            <Link to="reviews" state={{ from: location }}>
              Reviews
            </Link>
          </MovieItem>
        </ul>
      </MovieInfoBlock>
    </div>
  );
};

export default AddictionalInfo;
