import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { stagger, animate } from 'framer-motion';
import { useEffect } from 'react';
import { device } from '../ui/MediaQueries';

const StyledHome = styled.div`
  width: 100%;
  height: 100%;
  font-size: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  @media ${device.laptop} {
    width: 95%;
    margin: 0 auto;
  }
`;

const StyledHeroMessage = styled.p`
  font-size: 8.5rem;
  font-family: 'Reenie Beanie', cursive;
  letter-spacing: 0.15rem;
  font-weight: 400;
  color: #035aa6;

  @media ${device.laptop} {
    font-size: 6rem;
  }

  & span {
    font-size: 6.5rem;
    font-weight: 700;
    font-family: 'Ysabeau SC', sans-serif;
    letter-spacing: -0.3rem;
    display: inline-block;
    cursor: help;
  }
`;

const StyledDescription = styled.p`
  font-size: 3.4rem;
  font-family: 'Amatic SC', cursive;
  letter-spacing: 0.65rem;
  font-weight: 700;
  color: #24aa7d;
  & span {
    font-size: 4rem;
    @media ${device.laptop} {
      font-size: 3rem;
    }
  }
  @media ${device.laptop} {
    font-size: 2.5rem;
  }
`;

const StyledCTA = styled.div`
  width: 60%;
  max-width: 60rem;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  font-family: 'Ysabeau SC', sans-serif;
  letter-spacing: -0.15rem;
  font-size: 2.4rem;
  color: #035aa6;
  text-transform: lowercase;
  text-decoration: none;
  &:visited {
    color: #035aa6;
  }

  &:hover {
    transform: translateY(-0.1rem);
  }
`;

function Home({ isNavOpen }) {
  useEffect(() => {
    if (isNavOpen) {
      animate(
        '.animateItem',
        { y: [0, -1000], opacity: [1, 0] },
        { duration: 0.4 }
      );
    }

    if (!isNavOpen) {
      animate(
        '.animateItem',
        { y: [-1000, 0], opacity: [0, 1] },
        { delay: stagger(0.15), duration: 0.3 }
      );
    }
  }, [isNavOpen]);

  function handleMouseOver(e) {
    e.target.style = 'transform: translateY(-0.1rem);';
  }

  function handleMouseOut(e) {
    e.target.style = 'transform: translateY(0rem);';
  }

  return (
    <StyledHome>
      <StyledHeroMessage
        className="animateItem"
        style={{ marginTop: '-20rem' }}
      >
        Hi, I'm{' '}
        <span
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseOut={(e) => handleMouseOut(e)}
        >
          Young Jang,
        </span>
      </StyledHeroMessage>
      <StyledHeroMessage
        className="animateItem"
        style={{ letterSpacing: '-0.5rem', marginBottom: '4rem' }}
      >
        but you can call me{' '}
        <span
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseOut={(e) => handleMouseOut(e)}
        >
          Joon
        </span>
      </StyledHeroMessage>
      <StyledDescription className="animateItem">
        I'm a <span>UI/UX DESIGNER</span>, <span>FULL-STACK</span>
      </StyledDescription>
      <StyledDescription
        className="animateItem"
        style={{ marginBottom: '4rem' }}
      >
        <span>WEB DEVELOPER</span> & <span>ENTREPRENEUR</span>
      </StyledDescription>
      <StyledCTA className="animateItem">
        <StyledLink to="/work">see my projects &rarr;</StyledLink>
        <StyledLink to="/about">more about me &rarr;</StyledLink>
      </StyledCTA>
    </StyledHome>
  );
}

export default Home;
