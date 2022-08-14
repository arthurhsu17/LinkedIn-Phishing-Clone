import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    const Join = styled.a`
      font-size: 16px;
      padding: 10px 12px;
      text-decoration: none;
      color: rgba(0, 0, 0, 0.6);
      margin-right: 12px;
      border-radius: 10px;
      cursor: pointer;


      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;
      }
    `;

    const Nav = styled.nav`
      max-width: 1128px;
      margin: auto;
      padding: 12px 0 16px;
      display: flex;
      align-items: center;
      position: relative;
      justify-content: space-between;
      flex-wrap: nowrap;

      & > a {
        width: 135px;
      }
    `;

    const SignIn = styled.a`
      box-shadow: inset 0 0 0 1px #0a66c2;
      color: #0a66c2;
      border-radius: 24px;
      transition-duration: 167ms;
      font-size: 16px;
      font-weight: 600;
      line-height: 40px;
      padding: 10px 24px;
      text-align: center;
      background-color: rgba(0, 0, 0, 0);
      text-decoration: none;

      &:hover {
        background-color: rgba(112, 181, 249, 0.15);
        text-decoration: none;
      }
    `;

    return (
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join as={Link} to= "/join">
            Join Now
            </Join>

          <SignIn as={Link} to="/signin">
            Sign in
          </SignIn>
        </div>
      </Nav>
    );
  }
}

export default NavBar;
