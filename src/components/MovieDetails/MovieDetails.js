import { useEffect, useState } from 'react';
import {
  AdditionalInfo,
  CastItem,
  CastLink,
  Container,
  Genres,
  GenresBox,
  GenresText,
  ImgMovie,
  ListLinks,
  Overview,
  OverviewText,
  ReviewsItem,
  ReviewsLink,
  ScoreBox,
  Title,
  UserScore,
  UserScoreText,
  Wrapper,
} from './MovieDetails.styled';
import { Outlet, useParams } from 'react-router-dom';
import { addTopList } from '../../API/api';

export const MovieDetails = () => {
  const [details, setDetailis] = useState({});

  const { movieId } = useParams();
  const urlDetails = `movie/${movieId}`;

  useEffect(() => {
    addTopList(undefined, urlDetails)
      .then(data => setDetailis(data))
      .catch(err => console.log(err));
  }, [urlDetails]);

  return (
    <>
      <Container>
        <ImgMovie
          src={
            details.poster_path
              ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
              : 'https://placeholder.com/placeholder.jpg'
          }
        />
        <Wrapper>
          <Title>
            {details.name ?? details.title} (
            {details.release_date
              ? details.release_date.substring(0, 4)
              : 'N/A'}
            )
          </Title>
          <ScoreBox>
            <UserScore>UserScore: </UserScore>
            <UserScoreText>
              {((100 * details.vote_average) / 10).toFixed(0)}%
            </UserScoreText>
          </ScoreBox>
          <Overview>Overview</Overview>
          <OverviewText>{details.overview}</OverviewText>
          <Genres>Genres</Genres>
          <GenresBox>
            {details.genres &&
              details.genres.map(item => (
                <GenresText key={item.id}>{item.name}</GenresText>
              ))}
          </GenresBox>
        </Wrapper>
      </Container>
      <AdditionalInfo>Additional information</AdditionalInfo>

      <ListLinks>
        <CastItem>
          <CastLink to="cast">Cast</CastLink>
        </CastItem>
        <ReviewsItem>
          <ReviewsLink>Reviews</ReviewsLink>
        </ReviewsItem>
      </ListLinks>
      <Outlet />
    </>
  );
};
