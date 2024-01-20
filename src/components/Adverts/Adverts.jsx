import React, { useEffect, useState } from "react";
import { fetchAdverts } from "../../services/api";
import {
  StyledButton,
  StyledButtonHear,
  StyledDiv,
  StyledHeart,
  StyledImg,
  StyledItem,
  StyledList,
  StyledSpan,
  StyledText,
} from "./Adverts.styled";
import Modal from "../Modal/Modal";

const Adverts = () => {
  const [adverts, setAdverts] = useState([]);
  const [selectedAdvert, setSelectedAdvert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchAdverts().then((res) => setAdverts(res));
  }, []);

  const handleLearnMore = (advert) => {
    setSelectedAdvert(advert);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledDiv>
      <StyledList>
        {adverts?.map((advert, index) => (
          <StyledItem key={`${advert.id}-${index}`}>
            <StyledButtonHear>
              <StyledHeart />
            </StyledButtonHear>

            <StyledImg src={advert.img} width={320} alt={advert.type} />

            <StyledSpan>
              <p>
                {advert.make} <span>{advert.model}</span>, {advert.year}
              </p>
              {advert.rentalPrice}
            </StyledSpan>
            <StyledText>
              {advert.address} | {advert.rentalCompany} | {advert.type} |
              {advert.make} |{advert.mileage} | {advert.accessories}
            </StyledText>
            <StyledButton onClick={() => handleLearnMore(advert)}>
              Loarn more
            </StyledButton>
          </StyledItem>
        ))}
      </StyledList>

      {isModalOpen && (
        <Modal onClose={handleCloseModal} advertDetails={selectedAdvert} />
      )}
    </StyledDiv>
  );
};

export default Adverts;
