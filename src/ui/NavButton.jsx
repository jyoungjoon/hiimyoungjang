import { useState } from 'react';
import styled from 'styled-components';

const StyledNavButton = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  overflow: hidden;
  z-index: -1;
`;

const LittleCircles = styled.div`
  position: absolute;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  border: 1px solid #424242;
  transition: 0.2s ease-in-out;
`;

const Overlay = styled.div`
  position: absolute;
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  right: 5rem;
  cursor: pointer;
`;

function NavButton({ isNavOpen, setIsNavOpen }) {
  const [isNavHovered, setIsNavHovered] = useState(false);

  function handleEnter() {
    setIsNavHovered(true);
  }

  function handleLeave() {
    setIsNavHovered(false);
  }

  function handleClick() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <>
      <Overlay
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      />
      <StyledNavButton>
        <LittleCircles
          id="1"
          style={
            isNavOpen
              ? { left: '0', transform: 'translateX(-100%) translateY(-100%)' }
              : { left: '0' }
          }
        ></LittleCircles>
        <LittleCircles
          id="2"
          style={
            isNavOpen
              ? { left: '50%', transform: 'translateX(-50%) translateY(-100%)' }
              : isNavHovered
              ? { left: '50%', transform: 'translateX(-50%) translateY(-100%)' }
              : { left: '50%', transform: 'translateX(-50%)' }
          }
        ></LittleCircles>
        <LittleCircles
          id="3"
          style={
            isNavOpen
              ? { right: '0', transform: 'translateX(100%) translateY(-100%)' }
              : { right: '0' }
          }
        ></LittleCircles>
        <LittleCircles
          id="4"
          style={
            isNavOpen
              ? {
                  left: '0',
                  top: '50%',
                  transform: 'translateY(-50%) translateX(-100%)',
                }
              : isNavHovered
              ? {
                  left: '0',
                  top: '50%',
                  transform: 'translateY(-50%) translateX(-100%)',
                }
              : { left: '0', top: '50%', transform: 'translateY(-50%)' }
          }
        ></LittleCircles>
        <LittleCircles
          id="5-1"
          style={
            isNavOpen
              ? {
                  width: '3rem',
                  left: '50%',
                  top: '50%',
                  borderRadius: '1rem',
                  transform:
                    'translateX(-50%) translateY(-50%) rotate(135deg) scale(1.2)',
                }
              : isNavHovered
              ? {
                  width: '3rem',
                  left: '50%',
                  top: '50%',
                  borderRadius: '1rem',
                  transform: 'translateX(-50%) translateY(-50%)',
                }
              : {
                  left: '50%',
                  top: '50%',
                  transform: 'translateX(-50%) translateY(-50%)',
                }
          }
        ></LittleCircles>
        <LittleCircles
          id="5-2"
          style={
            isNavOpen
              ? {
                  height: '3rem',
                  left: '50%',
                  top: '50%',
                  borderRadius: '1rem',
                  transform:
                    'translateX(-50%) translateY(-50%) rotate(135deg) scale(1.2)',
                }
              : isNavHovered
              ? {
                  height: '3rem',
                  left: '50%',
                  top: '50%',
                  borderRadius: '1rem',
                  transform: 'translateX(-50%) translateY(-50%)',
                }
              : {
                  border: '0px solid black',
                  left: '50%',
                  top: '50%',
                  transform: 'translateX(-50%) translateY(-50%)',
                }
          }
        ></LittleCircles>
        <LittleCircles
          id="6"
          style={
            isNavOpen
              ? {
                  right: '0',
                  top: '50%',
                  transform: 'translateY(-50%) translateX(100%)',
                }
              : isNavHovered
              ? {
                  right: '0',
                  top: '50%',
                  transform: 'translateY(-50%) translateX(100%)',
                }
              : { right: '0', top: '50%', transform: 'translateY(-50%)' }
          }
        ></LittleCircles>
        <LittleCircles
          id="7"
          style={
            isNavOpen
              ? {
                  left: '0',
                  top: '100%',
                  transform: 'translateY(100%) translateX(-100%)',
                }
              : { left: '0', top: '100%', transform: 'translateY(-100%)' }
          }
        ></LittleCircles>
        <LittleCircles
          id="8"
          style={
            isNavOpen
              ? {
                  left: '50%',
                  top: '100%',
                  transform: 'translateY(100%) translateX(-50%)',
                }
              : isNavHovered
              ? {
                  left: '50%',
                  top: '100%',
                  transform: 'translateY(100%) translateX(-50%)',
                }
              : {
                  left: '50%',
                  top: '100%',
                  transform: 'translateY(-100%) translateX(-50%)',
                }
          }
        ></LittleCircles>
        <LittleCircles
          id="9"
          style={
            isNavOpen
              ? {
                  right: '0',
                  top: '100%',
                  transform: 'translateY(100%) translateX(100%)',
                }
              : {
                  right: '0',
                  top: '100%',
                  transform: 'translateY(-100%)',
                }
          }
        ></LittleCircles>
      </StyledNavButton>
    </>
  );
}

export default NavButton;
