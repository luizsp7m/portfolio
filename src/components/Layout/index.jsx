import Head from 'next/head';

import { Container } from './styles';

import Header from '../Header';
import Hero from '../Hero';
import Projects from '../Projects';
import Technologies from '../Technologies';
import About from '../About';

export default function Layout() {
  return (
    <Container>
      <Head>
        <title>Luiz Oliveira | Portfólio</title>
      </Head>

      <Header />
      <Hero />
      <About />
      <Projects />
      <Technologies />
    </Container>
  );
}