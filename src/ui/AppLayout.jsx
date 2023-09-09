import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';

const StyledLayout = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const StyledMain = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

function AppLayout({ isNavOpen, setIsNavOpen }) {
  return (
    <StyledLayout>
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <StyledMain>
        {isNavOpen ? (
          <Navigation isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        ) : (
          <Outlet />
        )}
      </StyledMain>
    </StyledLayout>
  );
}

export default AppLayout;
