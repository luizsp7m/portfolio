import styled, { keyframes } from 'styled-components';

const Jump = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  height: 100vh;
  padding-top: 70px;
  cursor: default;
  /* background: url('assets/blob.svg') no-repeat, #192a56; */
  /* background: url('assets/blob.svg') no-repeat, linear-gradient(to right, #2c73d2, #2c73d2, #2c73d2, #2c73d2, #2c73d2); */
  background: url('assets/blob.svg') no-repeat, #2c73d2;
  background-size: 190% 200%;
  background-position: right;
`;

export const Wrapper = styled.div`
  max-width: 1024px;
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  height: 100%;

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 10;

  > h1 {
    color: #f0f0f5;
    font-size: 6rem;
    text-transform: uppercase;
    font-weight: 900;
  }

  > h2 {
    color: #f0f0f5;
    font-size: 2.55rem;
    font-weight: bold;
  }

  > p {
    color: #f0f0f5;
    font-size: 1.65rem;
    line-height: 3.30rem;
    font-weight: 400;
    margin: 1rem 0;
  }

  > div.button-group {
    display: flex;
    gap: 1rem;

    > button {
      outline: 0;
      border: 0;
      height: 4.8rem;
      width: 14.6rem;
      font-size: 1.25rem;
      font-weight: 600;
      border-radius: .5rem;
      cursor: pointer;
      transition: all .3s ease-in-out;
    }

    > button.default {
      color: #fafafa;
      background-color: #0f0f0f;
      transition: background-color .3s ease-in-out;

      &:hover {
        background-color: #151515;
      }
    }

    > button.outline {
      color: #fafafa;
      border: 1px solid #fafafa;
      background-color: transparent;

      &:hover {
        background-color: #fafafa;
        color: #0f0f0f;
      }
    }
  }

  @media(max-width: 768px) {
    align-items: center;

    > h1 {
      text-align: center;
    }

    > p {
      text-align: center;
    }
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${Jump} 8s infinite;

  > img {
    width: 90%;
    height: auto;
  }

  @media(max-width: 768px) {
    display: none;
  }
`;