import { useEffect, useState } from 'react';

import { Container, Wrapper, Logo, Nav, NavItem, HamburgerMenu } from './styles';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Logo>Logo</Logo>

        <Nav showMenu={showMenu}>
          <NavItem href="#">Início</NavItem>
          <NavItem href="#">Sobre</NavItem>
          <NavItem href="#">Habilidades</NavItem>
          <NavItem href="#">Projetos</NavItem>
        </Nav>

        <HamburgerMenu
          size={28}
          onClick={() => setShowMenu(!showMenu)}
        />
      </Wrapper>
    </Container>
  );
}