import { useParams } from 'react-router-dom';
import { useState } from 'react';
import {
  ItemCast,
  ListCast,
  NameActor,
  NameCharacter,
  PhotoActor,
} from './Cast.styled';
import { addTopList } from '../../API/api';

export const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();
  const urlCast = `movie/${movieId}/credits`;
  addTopList(undefined, urlCast)
    .then(data => setCast(data.cast))
    .catch(err => console.log(err));

  return (
    <ListCast>
      {cast.map(item => (
        <ItemCast key={item.cast_id}>
          <PhotoActor
            src={
              item.profile_path
                ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                : 'https://placeholder.com/placeholder.jpg'
            }
          />
          <NameActor>{item.name}</NameActor>
          <NameCharacter>{item.character}</NameCharacter>
        </ItemCast>
      ))}
    </ListCast>
  );
};
