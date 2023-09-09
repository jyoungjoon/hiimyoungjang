import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogo = styled(Link)`
  position: relative;
  text-decoration: none;
  color: #424242;
  transition: all 0.2s ease-in-out;

  & span {
    font-size: 3rem;
    font-family: 'Ysabeau SC', sans-serif;
    letter-spacing: -0.2rem;
    text-transform: lowercase;
    font-weight: 900;
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0.15rem;
    background-color: #24aa7d;
    transition: width 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0.15rem;
    background-color: #24aa7d;
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 57.5%;
  }

  &:hover::after {
    width: 42.5%;
  }

  &:hover {
    color: #035aa6;
  }
`;

function Logo({ setIsNavOpen }) {
  return (
    <StyledLogo to="/" onClick={() => setIsNavOpen(false)}>
      <span>young</span>&nbsp;&nbsp;&nbsp;
      <span>jang</span>
    </StyledLogo>
  );
}

export default Logo;
