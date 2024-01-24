import React from 'react';
import {
  Backdrop,
  StyledButton,
  StyledClose,
  StyledColorSpan,
  StyledColorSpanConditions,
  StyledDescription,
  StyledImg,
  StyledItemConditions,
  StyledModalContainer,
  StyledText,
  StyledTitle,
  StyledWrapper,
  TextInfo,
} from './Modal.styled';

const Modal = ({ advert, onClose }) => {
  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    type,
    fuelConsumption,
    engineSize,
    functionalities,
    address,
    description,
    accessories,
    mileage,
  } = advert;
  const position = address?.split(', ');

  const handleClose = () => {
    onClose();
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleRentalButtonClick = () => {
    window.location.href = 'tel:+380730000000';
  };
  return (
    <Backdrop onClick={handleBackdropClick} onKeyDown={handleKeyDown}>
      <StyledWrapper key={id}>
        <StyledModalContainer>
          <StyledClose onClick={handleClose} />
          <StyledImg src={img} width={320} alt={make} />
          <StyledTitle>
            {make} <StyledColorSpan>{model}</StyledColorSpan>, {year}
          </StyledTitle>
          <StyledText>
            {position[1]} | {position[2]} | Id: {id} | Year: {year} | Type:{' '}
            {type} | Fuel Consumption: {fuelConsumption} | Engine Size:{' '}
            {engineSize}
          </StyledText>
          <StyledDescription>{description}</StyledDescription>
          <TextInfo>Accessories and functionalities:</TextInfo>
          <StyledText>
            {accessories[0]} | {accessories[1]} | {functionalities[0]} |
            {accessories[2]} | {functionalities[1]} | {functionalities[2]}
          </StyledText>

          <TextInfo>Rental Conditions: </TextInfo>
          <div>
            <StyledItemConditions>
              Minimum age:{' '}
              <StyledColorSpanConditions>25</StyledColorSpanConditions>
            </StyledItemConditions>
            <StyledItemConditions>
              Valid driver{'\u2019'}s license{' '}
            </StyledItemConditions>
            <StyledItemConditions>
              Security deposite required{' '}
            </StyledItemConditions>{' '}
            <StyledItemConditions>
              Mileage:
              <StyledColorSpanConditions>{mileage}</StyledColorSpanConditions>
            </StyledItemConditions>{' '}
            <StyledItemConditions>
              Price:{' '}
              <StyledColorSpanConditions>
                {rentalPrice}
              </StyledColorSpanConditions>
            </StyledItemConditions>
          </div>

          <StyledButton onClick={handleRentalButtonClick}>
            Rental car
          </StyledButton>
        </StyledModalContainer>
      </StyledWrapper>
    </Backdrop>
  );
};

export default Modal;
