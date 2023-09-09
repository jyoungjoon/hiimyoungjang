import styled from 'styled-components';

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
`;

function Header({ isNavOpen, setIsNavOpen }) {
  return (
    <StyledHeader>
      <Logo isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <div style={{ display: 'flex', gap: '2rem' }}>
        <NavButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </div>
    </StyledHeader>
  );
}

export default Header;