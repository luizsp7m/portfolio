import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 1.57rem;

  > h1 {
    color: #fafafa;
    font-size: 3.2rem;
    position: relative;
    background-color: #2E4C6D;

    &::before {
      content: "";
      position: absolute;
      height: 3rem;
      width: 3rem;
      background: url('/assets/points.svg') no-repeat;
      background-size: contain;
      left: -1.7rem;
      top: -1.3rem;
      z-index: -10;
    }
  }
`;
