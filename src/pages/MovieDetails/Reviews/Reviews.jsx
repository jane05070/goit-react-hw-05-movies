import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'api/getReviews';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function onReviews() {
      const {
        data: { results },
      } = await getReviews(movieId);
      setReviews(results);
    }
    onReviews();
  }, [movieId]);

  return <div>{reviews.length > 0 && <ReviewsList reviews={reviews} />}</div>;
};

export default Reviews;
