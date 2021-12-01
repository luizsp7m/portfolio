import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 95%;
  margin: 0 auto;
  padding: 8rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  overflow: hidden;

  @media(max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const Text = styled.div`
  > h1 {
    font-size: 3.20rem;
    color: #DADDFC;
    margin-bottom: 2.25rem;
  }

  > p {
    font-size: 1.60rem;
    margin: 1rem 0;
    line-height: 3.20rem;
    font-weight: 500;
    color: #DADDFC;
  }
`

export const Animation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media(max-width: 1100px) {
    display: none;
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  height: 425px;
  width: 425px;

  background-image: radial-gradient(circle, #f956b3, #ff4f8c, #ff5765, #ff683e, #eb7d0e, transparent 50%, #FC997C);

  > img {
    width: 100%;
    height: auto;
  }
`;

export const Rotate = styled.div`
  position: absolute;
  height: 445px;
  width: 445px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${rotation} 60s linear infinite;
`;

export const Technology = styled.div`
  position: absolute;
  animation: ${rotation} 20s alternate-reverse infinite;
  cursor: pointer;

  height: 60px;
  width: 60px;
  background: #f5f6fa;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .5rem;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .3);

  &:nth-of-type(1) {
    top: 0;
  }

  &:nth-of-type(2) {
    right: 0;
    top: 14rem;
  }

  &:nth-of-type(3) {
    left: 0;
    top: 14rem;
  }

  &:nth-of-type(4) {
    bottom: 0;
    left: 9rem;
  }

  &:nth-of-type(5) {
    bottom: 0;
    right: 9rem;
  }

  > img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;