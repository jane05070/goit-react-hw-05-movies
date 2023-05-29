 import { ReviewsListItem, ReviewerName } from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <ReviewsListItem key={review.id}>
            <ReviewerName>{review.author}</ReviewerName>
            <p>{review.content}</p>
          </ReviewsListItem>
        ))
      ) : (
        <p>No Reviews</p>
      )}
    </ul>
  );
};



