import { animate, motion, stagger } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from './MediaQueries';

const StyledNavigation = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media ${device.laptop} {
    margin-left: 10rem;
  }
`;

const NavWrapper = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(-20%);

  & > * {
    text-decoration: none;

    & span {
      color: #424242;
      font-size: 2rem;
      margin-bottom: 2.5rem;
      margin-right: 1.5rem;
    }
  }
`;

const Preview = styled.div`
  position: absolute;
  top: 25%;
  left: 55%;
  width: 50rem;
  height: 27.5rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1rem;
  opacity: 0;
  transition: opacity 0.1s ease-in-out;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
`;

const NavItem = styled(motion.div)`
  font-family: 'Ysabeau SC', sans-serif;
  width: 25rem;
  height: auto;
  display: flex;
  justify-content: start;
  align-items: end;
  cursor: pointer;
`;

const NavItemTitle = styled.p`
  font-size: 10.5rem;
  font-weight: 900;
  color: #24aa7d;
  letter-spacing: -0.5rem;

  @media ${device.tabletM} {
    font-size: 7rem;
  }
`;

function Navigation({ isNavOpen, setIsNavOpen, isHome, setIsHome }) {
  const [currentHovered, setCurrentHovered] = useState();

  useEffect(() => {
    if (!isNavOpen) {
      animate(
        '.animateItem',
        { y: [0, -1000], opacity: [1, 0] },
        { duration: 0.4 }
      );
    }

    if (isNavOpen) {
      animate(
        '.animateItem',
        { y: [-1000, 0], opacity: [0, 1] },
        { delay: stagger(0.15), duration: 0.3 }
      );
    }
  }, [isNavOpen]);

  const hoverAnimation = {
    scale: 1.1,
    transition: { duration: 0.2 },
  };

  function handleHomeClick() {
    setIsNavOpen(false);
    setIsHome(true);
  }

  return (
    <StyledNavigation>
      <NavWrapper>
        <Link to="/">
          <NavItem
            data-value={
              isHome
                ? 'hiimyoungjang/previews/previewhome.png'
                : 'previews/previewhome.png'
            }
            className="animateItem"
            whileHover={hoverAnimation}
            onMouseOver={(e) =>
              setCurrentHovered(e.currentTarget.dataset.value)
            }
            onMouseOut={() => setCurrentHovered(null)}
            onClick={handleHomeClick}
          >
            <span>01</span>
            <NavItemTitle>Home</NavItemTitle>
          </NavItem>
        </Link>
        <Link to="/about">
          <NavItem
            data-value={
              isHome
                ? 'hiimyoungjang/previews/previewabout.png'
                : 'previews/previewabout.png'
            }
            className="animateItem"
            whileHover={hoverAnimation}
            onMouseOver={(e) =>
              setCurrentHovered(e.currentTarget.dataset.value)
            }
            onMouseOut={() => setCurrentHovered(null)}
            onClick={() => setIsNavOpen(false)}
          >
            <span>02</span>
            <NavItemTitle>About</NavItemTitle>
          </NavItem>
        </Link>
        <Link to="/work">
          <NavItem
            data-value={
              isHome
                ? 'hiimyoungjang/previews/previewwork.png'
                : 'previews/previewwork.png'
            }
            className="animateItem"
            whileHover={hoverAnimation}
            onMouseOver={(e) =>
              setCurrentHovered(e.currentTarget.dataset.value)
            }
            onMouseOut={() => setCurrentHovered(null)}
            onClick={() => setIsNavOpen(false)}
          >
            <span>03</span>
            <NavItemTitle>Work</NavItemTitle>
          </NavItem>
        </Link>
        <Link to="/contact">
          <NavItem
            data-value={
              isHome
                ? 'hiimyoungjang/previews/previewcontact.png'
                : 'previews/previewcontact.png'
            }
            className="animateItem"
            whileHover={hoverAnimation}
            onMouseOver={(e) =>
              setCurrentHovered(e.currentTarget.dataset.value)
            }
            onMouseOut={() => setCurrentHovered(null)}
            onClick={() => setIsNavOpen(false)}
          >
            <span>04</span>
            <NavItemTitle>Contact</NavItemTitle>
          </NavItem>
        </Link>
      </NavWrapper>
      <Preview
        style={{
          backgroundImage: `url(${currentHovered})`,
          opacity: currentHovered ? 0.85 : 0,
        }}
      />
    </StyledNavigation>
  );
}

export default Navigation;
