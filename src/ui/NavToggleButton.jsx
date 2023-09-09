import styled from 'styled-components';

const StyledButton = styled.input`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  background-color: gray;
`;

function NavToggleButton() {
  return <StyledButton></StyledButton>;
}

export default NavToggleButton;
