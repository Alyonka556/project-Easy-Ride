import React from "react";
import { Outlet } from "react-router-dom";
import {
  LogoWrapper,
  StyledHeader,
  StyledLogoCar,
  StyledNav,
  StyledNavLink,
} from "./Layout.styled";

const Layout = () => {
  return (
    <div>
      <StyledHeader>
        <LogoWrapper to={"/"}>
          <StyledLogoCar width={32} height={32} />
          <p>Easy Ride</p>
        </LogoWrapper>

        <StyledNav>
          <StyledNavLink to={"/"}>Home</StyledNavLink>
          <StyledNavLink to={"/catalog"}>Catalog</StyledNavLink>
          <StyledNavLink to={"/favorites"}>Favorites</StyledNavLink>
        </StyledNav>
      </StyledHeader>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
