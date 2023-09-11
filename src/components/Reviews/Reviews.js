import { useEffect, useState } from 'react';
import { ItemListReviews, ItemText, ListReviews } from './Reviews.styled';
import { apiResults } from '../../API/api';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    apiResults(`movie/${movieId}/reviews`)
      .then(({ results }) => setReviews(results))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <ListReviews>
        {reviews.length === 0 ? (
          <ItemText>We don't have any reviews for this movie</ItemText>
        ) : (
          reviews.map(({ id, author, content }) => (
            <ItemListReviews key={id}>
              {author}
              <ItemText>{content}</ItemText>
            </ItemListReviews>
          ))
        )}
      </ListReviews>
    </>
  );
};
export default Reviews;
