import Head from 'next/head';

import { Container } from './styles';

import Header from '../Header';
import Hero from '../Hero';

export default function Layout() {
  return (
    <Container>
      <Head>
        <title>Luiz Oliveira | Portfólio</title>
      </Head>

      <Header />
      <Hero />

    </Container>
  );
}