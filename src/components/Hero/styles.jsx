import styled, { keyframes } from 'styled-components';

import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const Container = styled.div`
  padding-top: 81px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  position: relative;
  cursor: default;
`;

export const Avatar = styled.div`
  > img {

  }
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > h1 {
    color: #fafafa;
    font-size: 3.2rem;
  }

  > span {
    color: #fafafa;
    font-size: 1.65rem;
  }
`;

export const IconGitHub = styled(AiFillGithub)`
`

export const IconLinkedIn = styled(FaLinkedin)`
`

export const IconEmail = styled(MdEmail)`
`

export const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 2.25rem;

  > ${IconGitHub}, ${IconLinkedIn}, ${IconEmail} {
    color: #fafafa;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  background-color: #FF4C60;
  color: #fafafa;
  padding: 1.6rem 3.6rem;
  font-weight: 600;
  font-size: 1.6rem;
  border-radius: 1rem;
  border: 0;
  outline: 0;
  cursor: pointer;
`;

const moveMouseWheel = keyframes`
  25% {
    transform: translateY(4px);
  }

  50% {
    transform: translateY(0px);
  }

  75% {
    transform: translateY(-4px);
  }

  100% {
    transform: translateY(0px);
  }
`;

export const ScrollDown = styled.div`
  position: absolute;
  bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.25rem;

  > span {
    font-size: 1.35rem;
    color: #fafafa;
  }

  > div.mouse {
    width: 2rem;
    height: 3rem;
    border: 2px solid #fafafa;
    border-radius: 1rem;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    > div.wheel {
      width: .35rem;
      height: .35rem;
      background-color: #fafafa;
      border-radius: 50%;

      animation: ${moveMouseWheel} 5s linear infinite;
    }
  }
`;

export const Mouse = styled.div`
`;