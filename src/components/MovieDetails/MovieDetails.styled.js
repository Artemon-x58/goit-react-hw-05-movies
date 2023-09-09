import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ImgMovie = styled.img`
  width: 300px;
  height: auto;
  margin-left: 20px;
`;
export const Title = styled.h2``;
export const UserScore = styled.p``;
export const UserScoreText = styled.p``;
export const Overview = styled.h3``;
export const OverviewText = styled.p``;
export const Genres = styled.h3``;
export const GenresText = styled.p``;
export const AdditionalInfo = styled.p``;

export const ListLinks = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const CastItem = styled.li``;
export const CastLink = styled(Link)``;
export const ReviewsItem = styled.li``;
export const ReviewsLink = styled(Link)``;
export const ScoreBox = styled.div`
  display: flex;
  gap: 10px;
`;
export const Wrapper = styled.div`
  max-width: 400px;
`;
export const GenresBox = styled.div`
  display: flex;
  gap: 20px;
`;
export const Container = styled.div`
  display: flex;
  gap: 50px;
`;
