import styled from 'styled-components';

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 100%;
    height: 275px;
    transition: transform .5s;
  }
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  padding: 0 2rem;
  opacity: 0;
  transition: opacity .25s linear;

  > div.tag {
    position: absolute;
    background-color: #FF4C60;
    padding: 1rem;
    color: #fafafa;
    font-size: 1.35rem;
    font-weight: 500;
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
    transform: translateY(-100%);
    transition: transform .3s ease-in-out;
  }

  > h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #fafafa;
    margin-top: 8rem;
    transform: translateY(50%);
    opacity: 0;
    transition: transform .3s ease-in-out, opacity .3s ease-in-out;
  }

  > a {
    height: 3.6rem;
    width: 3.6rem;
    border-radius: 50%;
    background-color: #FFD15C;
    position: absolute;
    bottom: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(0);
    opacity: 0;
    transition: transform .3s ease-in-out, opacity .3s ease-in-out;
    color: #fafafa;
  }
`;

export const Container = styled.div`
  border-radius: 1rem;
  height: 275px;
  overflow: hidden;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    > ${Content} {
      opacity: 1;

      > div.tag {
        transform: translateY(0);
      }

      > h1 {
        transform: translateY(0);
        opacity: 1;
      }

      > a {
        transform: scale(1);
        opacity: 1;
      }
    }
    
    > ${Image} {
      > img {
        transform: scale(1.025);
      }
    }
  }
`;