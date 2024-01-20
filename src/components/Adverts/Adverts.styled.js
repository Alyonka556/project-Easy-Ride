import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa6";

export const StyledDiv = styled.div`
  margin: 50px 0;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
`;

export const StyledItem = styled.li`
  position: relative;
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 14px;
`;

export const StyledImg = styled.img`
  object-fit: cover;
  border-radius: 12px;
  width: 401px;
  min-height: 268px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    url(<path-to-image>), lightgray 50% / cover no-repeat;
  margin-bottom: 12px;
`;

export const StyledButtonHear = styled.button`
  border: none;
  outline: none;
  background: none;
`;

export const StyledHeart = styled(FaRegHeart)`
  position: absolute;
  top: 14px;
  right: 14px;
  color: #ffffffcc;
  font-size: 18px;
  &:hover {
    color: #3470ff;
  }
  &:active {
    background: #3470ff;
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
