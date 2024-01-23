import styled from 'styled-components';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 29px;
  margin-top: 50px;
  margin-bottom: 100px;

  @media only screen and (min-width: 768px) {
    gap: 50px;
    margin-bottom: 100px;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 425px;
  position: relative;
  img {
    border-radius: 14px;
    margin-bottom: 8px;
    position: relative;
    z-index: -1;
  }
`;

export const StyledImg = styled.img`
  object-fit: cover;
  border-radius: 12px;
  width: auto;
  min-height: 268px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    url(<path-to-image>), lightgray 50% / cover no-repeat;
  margin-bottom: 12px;
`;

export const SpyledSpan = styled.span`
  color: #3470ff;
`;

export const StyledButtonHeart = styled.button`
  border: none;
  outline: none;
  background: none;
`;

export const StyledIsFavorit = styled(FaHeart)`
  position: absolute;
  color: #3470ff;
  top: 14px;
  right: 14px;
  font-size: 18px;
`;

export const StyledFavorit = styled(FaRegHeart)`
  position: absolute;
  top: 14px;
  right: 14px;
  color: #ffffffcc;
  font-size: 18px;
  &:hover {
    color: #3470ff;
  }
`;

export const StyledSpan = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #121417;
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

export const StyledText = styled.p`
  color: rgba(18, 20, 23, 0.5);

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  display: flex;
  width: 270px;
  height: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  overflow: hidden;
`;

export const StyledButton = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background-color: #3470ff;
  border: none;
  color: var(--White, #fff);
  font-size: 14px;

  line-height: 20px;
  margin-top: 28px;

  &:hover {
    background-color: #0b44cd;
  }
`;
