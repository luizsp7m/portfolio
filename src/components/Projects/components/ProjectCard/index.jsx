import { Container, Image, Content } from './styles';

import { AiOutlineLink } from 'react-icons/ai';

export default function ProjectCard() {
  return (
    <Container>
      <Image>
        <img src="https://github.com/luizsp7m/frontend-mentor-challenges/raw/master/sunnyside-agency-landing/design/desktop-preview.jpg" alt="#" />
      </Image>

      <Content>
        <div className="tag">Next.js</div>
        <h1>Nome do projeto</h1>
        <a href="#">
          <AiOutlineLink size={18} />
        </a>
      </Content>
    </Container>
  );
}