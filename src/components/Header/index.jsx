import { useState } from 'react';

import { Container, Wrapper, Logo, Nav, NavItem, Hamburger } from './styles';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Logo>Logo</Logo>

        <Nav showMenu={showMenu}>
          <NavItem href="www.google.com">Início</NavItem>
          <NavItem>Sobre mim</NavItem>
          <NavItem>Projetos</NavItem>
          <NavItem>Habilidades</NavItem>
        </Nav>

        <Hamburger onClick={() => setShowMenu(!showMenu)}>
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>
      </Wrapper>
    </Container>
  );
}