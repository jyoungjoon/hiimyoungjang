import styled from 'styled-components';

const StyledOverlayTwo = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 1;
  background-color: #e7f8ff;
  z-index: -1;
`;

const StyledOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  z-index: -1;
`;

function Overlay({ isHome }) {
  return (
    <>
      <StyledOverlayTwo />
      <StyledOverlay
        style={
          isHome
            ? { backgroundImage: `url('noise-tv.gif')` }
            : { backgroundImage: `url('noise-tv.gif')` }
        }
      />
      ;
    </>
  );
}

export default Overlay;
