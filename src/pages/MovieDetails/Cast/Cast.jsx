import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CastList } from '../../../components/CastList/CastList';
import { getMovieCast } from 'api/getMovieCast';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function onMovieCast() {
      const {
        data: { cast },
      } = await getMovieCast(movieId);
      setCasts(cast);
    }
    onMovieCast();
  }, [movieId]);

  return <>{casts && <CastList credits={casts} />}</>;
};

export default Cast;
