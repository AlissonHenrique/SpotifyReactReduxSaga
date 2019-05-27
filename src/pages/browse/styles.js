import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin-top: 110px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #fff;
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const PlayList = styled(Link)`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-left: 20px;
  width: 250px;
  text-decoration: none;

  &:hover img {
    opacity: 0.4;
  }

  &:first-child {
    margin: 0;
  }

  img {
    height: 250px;
  }

  strong {
    font-size: 13px;
    margin-top: 10px;
  }

  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }
`;