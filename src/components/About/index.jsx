import { Container, Text, Animation, Image, Rotate, Technology } from './styles';

export default function About() {
  return (
    <Container>
      <Animation>
        <Image>
          <img src="assets/programming.svg" alt="Programming" />
        </Image>

        <Rotate>
          <Technology>
            <img src="assets/html-5.png" alt="HTML" />
          </Technology>

          <Technology>
            <img src="assets/css-3.png" alt="CSS" />
          </Technology>

          <Technology>
            <img src="assets/js.png" alt="JS" />
          </Technology>

          <Technology>
            <img src="assets/node-js.png" alt="Node" />
          </Technology>

          <Technology>
            <img src="assets/physics.png" alt="React" />
          </Technology>
        </Rotate>
      </Animation>

      <Text>
        <h1>What is Lorem Ipsum?</h1>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </Text>
    </Container>
  );
}