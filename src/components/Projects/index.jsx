import { Container, Wrapper, Nav, NavItem, Grid } from './styles';

import Title from '../Title';
import ProjectCard from './components/ProjectCard';

import { useState } from 'react';

export default function Projects() {
  const [navItemSelected, setNavItemSelected] = useState();
  
  return (
    <Container>
      <Wrapper>
        <Title>Projetos</Title>

        <Nav>
          <NavItem selected={true}>Todos</NavItem>
          <NavItem>Next.js</NavItem>
          <NavItem>React</NavItem>
          <NavItem>Vanilla</NavItem>
        </Nav>

        <Grid>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Grid>
      </Wrapper>
    </Container>
  );
}