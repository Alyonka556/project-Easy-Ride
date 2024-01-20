import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";

export const Backdrop = styled.div`
  position: fixed;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 8;

  &::before {
    background: rgba(18, 20, 23, 0.5);
    content: "";
    inset: 0;
    z-index: -1;
  }

  @media only screen and (min-width: 768px) {
    justify-content: center;
  }
`;

export const StyledWrapper = styled.div`
  position: relative;
  width: 541px;
  height: 752px;
  border-radius: 24px;
  background: #fff;
`;

export const StyledClose = styled(IoCloseOutline)`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  font-size: 24px;

  color: black;
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
