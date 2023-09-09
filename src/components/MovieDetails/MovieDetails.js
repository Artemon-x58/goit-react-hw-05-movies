import { useEffect, useState } from 'react';
import {
  AdditionalInfo,
  AdditionalInfoText,
  Cast,
  Container,
  Genres,
  GenresText,
  ImgMovie,
  Overview,
  OverviewText,
  Reviews,
  Title,
  UserScore,
  UserScoreText,
  Wrapper,
} from './MovieDetails.styled';
import { useParams } from 'react-router-dom';
import { addTopList } from '../../API/api';

export const MovieDetails = () => {
  const [details, setDetailis] = useState({});

  const { movieId } = useParams();
  const urlDetails = `movie/${movieId}`;

  //   console.log(movieId);

  useEffect(() => {
    addTopList(undefined, urlDetails)
      .then(data => setDetailis(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Container>
      <ImgMovie src={details.backdrop_path} />
      <Wrapper>
        <Title></Title>
        <UserScore>UserScore</UserScore>
        <UserScoreText></UserScoreText>
        <Overview>Overview</Overview>
        <OverviewText>{details.overview}</OverviewText>
        <Genres>Genres</Genres>
        <GenresText></GenresText>
      </Wrapper>
      <AdditionalInfo>AdditionalInfo</AdditionalInfo>
      <AdditionalInfoText></AdditionalInfoText>
      <Cast>Cast</Cast>
      <Reviews>Reviews</Reviews>
    </Container>
  );
};
