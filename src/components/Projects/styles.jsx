import styled from 'styled-components';

export const Container = styled.div`
  padding: 6rem 0;
  cursor: default;
`;

export const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 3rem;
`;

export const Nav = styled.div`
  display: flex;
  padding: 6rem 0;
  gap: 4rem;
`;

export const NavItem = styled.div`
  color: ${({ selected }) => selected ? '#FF4C60' :  '#fafafa'};
  text-decoration: none;
  font-size: 1.65rem;
  font-weight: 500;
  cursor: pointer;
  transition: color .3s ease-in-out;

  &:hover {
    color: #FF4C60;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  gap: 4.5rem;
`;