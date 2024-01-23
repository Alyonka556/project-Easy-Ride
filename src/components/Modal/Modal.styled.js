import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: rgba(18, 20, 23, 0.5);
`;

export const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;
  width: 541px;
  height: 752px;
  max-height: 90%;
`;

export const StyledModalContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  color: black;
  z-index: 1;
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
  width: auto;
  height: 314px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    url(<path-to-image>), lightgray 50% / cover no-repeat;
  margin-bottom: 12px;
`;

export const StyledTitle = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const StyledColorSpan = styled.span`
  color: #3470ff;
`;
export const StyledDescription = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const TextInfo = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const StyledText = styled.span`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const StyledItemConditions = styled.span`
  color: #363535;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
  padding: 7px 14px;
`;

export const StyledColorSpanConditions = styled.span`
  color: #3470ff;
  font-weight: 600;
`;

export const StyledButton = styled.button`
  display: flex;
  padding: 12px 50px;
  width: 168px;
  height: 44px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background-color: #3470ff;
  border: none;
  color: var(--White, #fff);
  font-size: 14px;
  font-weight: 600;

  line-height: 20px;
  margin-top: 28px;

  &:hover {
    background-color: #0b44cd;
  }
`;
