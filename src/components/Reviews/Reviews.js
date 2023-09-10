import { useEffect, useState } from 'react';
import { ItemListReviews, ItemText, ListReviews } from './Reviews.styled';
import { apiResults } from '../../API/api';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  const urlReviews = `movie/${movieId}/reviews`;

  useEffect(() => {
    setIsLoading(true);
    apiResults(undefined, urlReviews)
      .then(({ results }) => setReviews(results))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, [urlReviews]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};
