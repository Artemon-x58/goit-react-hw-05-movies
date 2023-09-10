import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ImgMovie = styled.img`
  width: 300px;
  height: auto;
  margin-left: 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const UserScore = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const UserScoreText = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Overview = styled.h3`
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const OverviewText = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

export const Genres = styled.h3`
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const GenresText = styled.p`
  font-size: 16px;
`;

export const AdditionalInfo = styled.p`
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const BackBtn = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: transparent;
  color: #007bff;
  text-decoration: none;
  border: 1px solid #007bff;
  margin: 15px auto 15px 20px;

  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

export const ListLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CastItem = styled.li``;

export const CastLink = styled(Link)`
  text-decoration: none;
  background-color: #f5f5f5;
  padding: 10px;
  display: block;
  border-radius: 5px;
  color: #333;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

export const ReviewsItem = styled.li``;

export const ReviewsLink = styled(Link)`
  text-decoration: none;
  background-color: #f5f5f5;
  padding: 10px;
  display: block;
  border-radius: 5px;
  color: #333;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

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
export const TitleReturn = styled.h2``;

export const WrapperReturn = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const LinkReturn = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border: 1px solid #007bff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
