import styled from 'styled-components';
import { GiRaceCar } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

export const StyledBox = styled.div`
  width: 100%;
`;

export const StyledHeader = styled.header`
  display: flex;

  justify-content: space-between;
  align-items: center;
  gap: 25px;
  background-color: #3470ff;

  margin: 0 auto;
  font-size: 18px;

  @media only screen and (min-width: 768px) {
    gap: 50px;
    font-size: 28px;
  }
`;

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 25px;

  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media only screen and (min-width: 768px) {
    padding: 0 128px;
  }
`;

export const LogoWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 20px 0 20px 0;
`;
export const StyledLogoCar = styled(GiRaceCar)`
  font-size: 48px;
`;

export const StyledNav = styled.nav`
  display: flex;

  align-items: center;
  text-decoration: none;
  gap: 10px;
  max-width: 100%;
  flex-wrap: wrap;
  @media only screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const StyledOutlet = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  &.active {
    color: #0b44cd;
    text-decoration: underline;
  }
`;
