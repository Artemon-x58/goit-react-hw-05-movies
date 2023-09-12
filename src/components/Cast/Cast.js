import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  ItemCast,
  ListCast,
  NameActor,
  NameCharacter,
  PhotoActor,
} from './Cast.styled';
import { apiResults } from '../../API/api';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    apiResults(`movie/${movieId}/credits`)
      .then(data => setCast(data.cast))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}

      {cast.length === 0 ? (
        <p>We don't have any cast list for this movie</p>
      ) : (
        <ListCast>
          {cast.map(({ cast_id, profile_path, name, character }) => (
            <ItemCast key={cast_id}>
              <PhotoActor
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
                }
              />
              <NameActor>{name}</NameActor>
              <NameCharacter>{character}</NameCharacter>
            </ItemCast>
          ))}
        </ListCast>
      )}
    </>
  );
};
export default Cast;
