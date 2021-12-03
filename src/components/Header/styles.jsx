import styled from 'styled-components';

export const Container = styled.div`
  background-color: #2E4C6D;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, .05);
  z-index: 10;
`;

export const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 3rem;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  font-size: 3.6rem;
  font-weight: 600;
  color: #fafafa;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 4rem;

  @media (max-width: 768px) {
    position: absolute;
    width: 50vw;
    background-color: #2E4C6D;
    right: 0;
    top: 81px;
    height: calc(100vh - 81px);

    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-left: 1px solid rgba(255, 255, 255, .05);

    transform: ${({ showMenu }) => showMenu ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform .3s ease-in-out;
  }
`;

export const NavItem = styled.a`
  color: #fafafa;
  font-size: 1.45rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
`;

export const Hamburger = styled.div`
  cursor: pointer;

  display: none;

  > div {
    height: .3rem;
    width: 3.2rem;
    background-color: #fafafa;
    margin: .6rem;
  }

  @media (max-width: 768px) {
    display: block;
  }
`