import { Container } from './styles';

export default function Title({ children }) {
  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  );
}