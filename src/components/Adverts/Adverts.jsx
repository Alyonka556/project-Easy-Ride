import React, { useEffect, useState } from 'react';

import {
  SpyledSpan,
  StyledButton,
  StyledButtonHeart,
  StyledFavorit,
  StyledImg,
  StyledIsFavorit,
  StyledItem,
  StyledSpan,
  StyledText,
} from './Adverts.styled';
import Modal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorites, setFavorites } from '../../redux/slice';
import { selectFavorites } from '../../redux/selector';
// import { getFavorites } from '../../redux/operations';

const Adverts = ({ advert }) => {
  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    rentalCompany,
    type,
    functionalities,
    address,
  } = advert || {};

  // const dispatch = useDispatch();
  const [isModalLearnMoreOpen, setIsModalLearnMoreOpen] = useState(false);

  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(favorites.includes(id));

  // useEffect(() => {
  //   setIsFavorite(favorites.some(advert => advert.id === id));
  // }, [favorites, id]);

  // const onFavoriteBtnClick = () => {
  //   setIsFavorite(!isFavorite);
  //   if (!isFavorite) {
  //     dispatch(setFavorites(advert));
  //   } else {
  //     dispatch(removeFavorites(id));
  //   }
  // };

  // const favorites = useSelector(selectFavorites);

  // const [isChecked, setIsChecked] = useState(favorites.includes(id));

  // const [isChecked, setIsChecked] = useState(() => {
  //   return favorites.some((favorite) => favorite.id === id);
  // });

  const dispatch = useDispatch();

  useEffect(() => {
    setIsFavorite(favorites.some(favorite => favorite.id === id));
  }, [favorites, id]);

  function onFavoriteBtnClick() {
    if (isFavorite) {
      dispatch(removeFavorites(id));
    } else {
      dispatch(setFavorites(advert));
    }
  }

  return (
    <>
      <StyledItem>
        <StyledButtonHeart onClick={onFavoriteBtnClick}>
          {isFavorite ? <StyledIsFavorit /> : <StyledFavorit />}
        </StyledButtonHeart>
        <StyledImg src={img} width={320} alt={make} />
        <StyledSpan>
          <p>
            {make} <SpyledSpan>{model}</SpyledSpan>, {year}
          </p>
          {rentalPrice}
        </StyledSpan>
        <StyledText>
          {address?.split(', ')[1]} | {address?.split(', ')[2]} |{' '}
          {rentalCompany} | {type} | {make} | {id} | {functionalities[0]}
        </StyledText>
        <StyledButton onClick={() => setIsModalLearnMoreOpen(true)}>
          Learn more
        </StyledButton>
      </StyledItem>

      {isModalLearnMoreOpen && (
        <Modal onClose={() => setIsModalLearnMoreOpen(false)} advert={advert} />
      )}
    </>
  );
};

export default Adverts;
