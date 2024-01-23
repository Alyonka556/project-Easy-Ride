import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  LogoWrapper,
  StyledDiv,
  StyledHeader,
  StyledLogoCar,
  StyledNav,
  StyledNavLink,
  StyledOutlet,
} from './Layout.styled';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <StyledDiv>
          <LogoWrapper to={'/'}>
            <StyledLogoCar width={32} height={32} />
            <p>Easy Ride</p>
          </LogoWrapper>

          <StyledNav>
            <StyledNavLink to={'/'}>Home</StyledNavLink>
            <StyledNavLink to={'/catalog'}>Catalog</StyledNavLink>
            <StyledNavLink to={'/favorites'}>Favorites</StyledNavLink>
          </StyledNav>
        </StyledDiv>
      </StyledHeader>
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
    </>
  );
};

export default Layout;
