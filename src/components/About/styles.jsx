import styled from 'styled-components';

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

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  
  > img {
    width: 100%;
    height: auto;
  }

  @media(max-width: 768px) {
    > img {
      max-width: 425px;
      width: 90%;
    }
  }
`;

export const Text = styled.div`
  > p {
    font-size: 1.6rem;
    color: #fafafa;
    line-height: 3.2rem;

    > span {
      color: #FFD15C;
      font-weight: 500;
    }
  }
`;
