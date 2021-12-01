import styled, { css } from 'styled-components';

import { BiMenu } from 'react-icons/bi';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  /* background-color: #0f0f0f; */
  background-color: rgba(0, 0, 0, .1);
  z-index: 100;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  width: 95%;
  margin: 0 auto;
  height: 70px;
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #fafafa;
`;

export const Nav = styled.nav`
  @media(max-width: 425px) {
    position: absolute;
    right: 0;
    top: 70px;
    height: calc(100vh - 70px);
    width: 50vw;
    transform: ${({ showMenu }) => showMenu ? "translateX(0)" : "translateX(100%)"}; 
    transition: transform .3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #082032;
  }
`;

export const NavItem = styled.a`
  font-size: 1.30rem;
  text-decoration: none;
  color: #fafafa;
  font-weight: 500;

  & + & {
    margin-left: 2rem;
    padding-left: 2rem;
    border-left: 1px solid rgba(255, 255, 255, .1);
  }

  &:hover {
    filter: brightness(.85);
  }

  @media(max-width: 425px) {
    & + & {
      margin: 0;
      padding: 0;
      border: none;
    }
  }
`;

export const HamburgerMenu = styled(BiMenu)`
  cursor: pointer;
  display: none;
  color: #fafafa;

  &:hover {
    filter: brightness(.75);
  }

  @media(max-width: 425px) {
    display: block;
  }
`