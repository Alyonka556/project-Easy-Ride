import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  background-image: ${props => props.$url || 'none'};
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-bottom: 0px;
  margin-top: 0px;
  height: 100vh;

  @media only screen and (min-width: 768px) {
    padding: 0px 128px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 100%;
  border-radius: 20px;
  height: 100%;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: transparent;
  text-transform: uppercase;
  color: #3470ff;
  @media only screen and (min-width: 768px) {
    font-size: 60px;
    font-weight: 900;
  }
`;
export const NameTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  color: #fff;
  @media only screen and (min-width: 768px) {
    font-size: 30px;
    font-weight: 700;
  }
`;
export const Paragraph = styled.h3`
  font-weight: 300;
  font-size: 20px;
  color: #fff;
  @media only screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 20px;
  }
`;

export const OrderBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  margin-bottom: 35px;
  width: 180px;
  height: 48px;
  outline: none;
  text-decoration: none;
  padding: 10px;
  background: #3470ff;
  border: none;
  border-radius: 22px;
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
  max-width: 100%;
  @media only screen and (min-width: 768px) {
    font-weight: 900;
    font-size: 18px;
  }
`;
export const Warning = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 600;
  font-size: 24px;
`;
