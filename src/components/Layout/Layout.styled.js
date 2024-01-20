import styled from "styled-components";
import { IoCarSportOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export const StyledBox = styled.div`
  width: 100%;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  background-color: #3470ff;
  font-size: 32px;
  max-width: 100%;
`;

export const LogoWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
export const StyledLogoCar = styled(IoCarSportOutline)`
  color: #0b44cd;
  font-size: 42px;
`;

export const StyledNav = styled.nav`
  display: flex;

  align-items: center;
  text-decoration: none;
  gap: 20px;
  max-width: 100%;
`;

export const StyledOutlet = styled.div`
  margin: 0 auto;
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
