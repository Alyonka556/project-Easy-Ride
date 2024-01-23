import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selector';
import Adverts from 'components/Adverts/Adverts';
import { StyledList } from 'components/Adverts/Adverts.styled';
import styled from 'styled-components';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <StyledWrapper>
      <StyledList>
        {favorites.length === 0 && (
          <h2>
            Add car to <span style={{ color: '#3470ff' }}>Favorites</span>.
          </h2>
        )}
        {favorites?.map((advert, index) => (
          <Adverts advert={advert} key={index} />
        ))}
      </StyledList>
    </StyledWrapper>
  );
};

export default Favorites;

const StyledWrapper = styled.div`
  height: 100vh;
`;
