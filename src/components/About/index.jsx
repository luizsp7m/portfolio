import { Container, Wrapper, Main, Image, Text } from './styles';

import Title from '../Title';

export default function About() {
  return (
    <Container>
      <Wrapper>
        <Title>Sobre mim</Title>

        <Main>
          <Image>
            <img src="/assets/person.svg" alt="Person Image" />
          </Image>

          <Text>
            <p>Lorem ipsum dolor sit, amet consectetur <span>adipisicing</span> elit. Esse impedit, provident cupiditate dolorem rerum vel quisquam autem distinctio voluptas maxime maiores saepe <span>adipisci</span> nobis laboriosam numquam fuga ad non ratione?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse impedit, provident <span>cupiditate</span> dolorem rerum vel quisquam autem distinctio voluptas maxime maiores saepe adipisci nobis laboriosam numquam fuga ad non ratione?</p>
          </Text>
        </Main>
      </Wrapper>
    </Container>
  );
}