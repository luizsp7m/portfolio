import {
  Container,
  Wrapper,
  Grid,
  Technology,
  IconHTML,
  IconCSS,
  IconJS,
  IconNode,
  IconReact,
  IconNext,
  IconFirebase,
  IconSC,
} from './styles';

import Title from '../Title';

import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { SiNextdotjs, SiFirebase, SiStyledcomponents } from 'react-icons/si';

export default function Technologies() {
  return (
    <Container>
      <Wrapper>
        <Title>Tecnologias</Title>

        <Grid>
          <Technology color="red">
            <IconHTML size={64} />
          </Technology>

          <Technology>
            <IconCSS size={64} />
          </Technology>

          <Technology>
            <IconJS size={64} />
          </Technology>

          <Technology>
            <IconNode size={64} />
          </Technology>

          <Technology>
            <IconReact size={64} />
          </Technology>

          <Technology>
            <IconNext size={64} />
          </Technology>

          <Technology>
            <IconFirebase size={64} />
          </Technology>

          <Technology>
            <IconSC size={64} />
          </Technology>
        </Grid>
      </Wrapper>
    </Container>
  );
}