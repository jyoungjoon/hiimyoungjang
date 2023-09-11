import styled from 'styled-components';
import { device } from './MediaQueries';

import Logo from './Logo';
import NavButton from './NavButton';

const StyledHeader = styled.div`
  position: sticky;
  top: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 5rem;
  margin-bottom: 5rem;
  z-index: 999999;

  @media ${device.laptop} {
    padding: 0rem 2.5rem;
  }
`;

function Header({ isNavOpen, setIsNavOpen, setIsHome }) {
  return (
    <StyledHeader>
      <Logo
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        setIsHome={setIsHome}
      />
      <div style={{ display: 'flex', gap: '2rem' }}>
        <NavButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </div>
    </StyledHeader>
  );
}

export default Header;
