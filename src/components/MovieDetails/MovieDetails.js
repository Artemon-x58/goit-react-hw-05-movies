import { Suspense, useEffect, useState } from 'react';
import {
  AdditionalInfo,
  BackBtn,
  CastItem,
  CastLink,
  Container,
  Genres,
  GenresBox,
  GenresText,
  ImgMovie,
  LinkReturn,
  ListLinks,
  Overview,
  OverviewText,
  ReviewsItem,
  ReviewsLink,
  ScoreBox,
  Title,
  TitleReturn,
  UserScore,
  UserScoreText,
  Wrapper,
  WrapperReturn,
} from './MovieDetails.styled';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { apiResults } from '../../API/api';
import { Loader } from 'components/Loader/Loader';

export const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  const { movieId } = useParams();
  const urlDetails = `movie/${movieId}`;

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    apiResults(undefined, urlDetails)
      .then(data => {
        setDetails(data);
      })
      .catch(err => {
        setError(err);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [urlDetails]);
  const backLink = location?.state?.from ?? '/';

  return (
    <>
      {error ? (
        <WrapperReturn>
          <TitleReturn>Movie not found</TitleReturn>
          <LinkReturn to="/">Return to home page</LinkReturn>
        </WrapperReturn>
      ) : (
        <>
          <BackBtn to={backLink}>Go Back</BackBtn>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Container>
                <ImgMovie
                  src={
                    details.poster_path
                      ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
                      : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
                  }
                  alt={details.name ?? details.title}
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
                  <ReviewsLink to="reviews">Reviews</ReviewsLink>
                </ReviewsItem>
              </ListLinks>
              <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
              </Suspense>
            </>
          )}
        </>
      )}
    </>
  );
};
