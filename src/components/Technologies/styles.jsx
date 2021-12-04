import styled from 'styled-components';

import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { SiNextdotjs, SiFirebase, SiStyledcomponents } from 'react-icons/si';

export const Container = styled.div`
  margin: 12rem 0;
`;

export const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 3rem;

  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media(max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 465px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const IconHTML = styled(FaHtml5)`
  &:hover {
    color: #ffa801;
  }
`;

export const IconCSS = styled(FaCss3Alt)`
  &:hover {
    color: #0fbcf9;
  }
`;

export const IconJS = styled(SiJavascript)`
  &:hover {
    color: #ffd32a;
  }
`;

export const IconNode = styled(FaNode)`
  &:hover {
    color: #05c46b;
  }
`;

export const IconReact = styled(FaReact)`
  &:hover {
    color: #0fbcf9;
  }
`;

export const IconNext = styled(SiNextdotjs)`
  &:hover {
    color: #1e272e;
  }
`;

export const IconFirebase = styled(SiFirebase)`
  &:hover {
    color: #ffd32a;
  }
`;

export const IconSC = styled(SiStyledcomponents)`
  &:hover {
    color: #f53b57;
  }
`;

export const Technology = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #717087;
  padding: 4rem;

  > ${IconHTML}, ${IconCSS}, ${IconJS}, 
    ${IconNode}, ${IconReact}, ${IconNext}, 
    ${IconFirebase}, ${IconSC} {
      cursor: pointer;
      transition: transform 1s ease-in-out, color .5s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }
  }
`;