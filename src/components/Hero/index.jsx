import {
  Container,
  Avatar,
  Presentation,
  Social,
  Button,
  IconGitHub,
  IconLinkedIn,
  IconEmail,
  ScrollDown,
} from './styles';

export default function Hero() {
  return (
    <Container>
      <Avatar>
        <img src="/assets/avatar.svg" alt="Avatar Image" />
      </Avatar>

      <Presentation>
        <h1>Luiz Oliveira</h1>
        <span>I'm Front-end developer</span>
      </Presentation>

      <Social>
        <IconGitHub size={24} />
        <IconLinkedIn size={24} />
        <IconEmail size={24} />
      </Social>

      <Button>
        Hire me
      </Button>

      <ScrollDown>
        <span>Scroll down</span>

        <div className="mouse">
          <div className="wheel" />
        </div>
      </ScrollDown>
    </Container>
  );
}