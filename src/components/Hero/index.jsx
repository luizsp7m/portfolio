import { Container, Wrapper, Image, Text } from './styles';

export default function Hero() {
  return (
    <Container>
      <Wrapper>
        <Text>
          <h1>Luiz <br /> Oliveira</h1>
          <h2>Desenvolvedor Front-end</h2>
          <p>
            Similique dolores omnis molestias esse ducimus, fuga assumenda numquam dicta, officia iure repudiandae explicabo placeat porro dolor!
          </p>

          <div className="button-group">
            <button className="default">Default</button>
            <button className="outline">Outline</button>
          </div>
        </Text>

        <Image>
          <img src="/assets/hero.svg" alt="Hero" />
        </Image>
      </Wrapper>
    </Container>
  );
}