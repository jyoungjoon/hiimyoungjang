import styled from 'styled-components';

const StyledHeading = styled.h2`
  font-size: 7.5rem;
  color: #24aa7d;
  font-family: 'Ysabeau SC', sans-serif;
  font-weight: 900;
`;

function Heading({ name, className }) {
  return <StyledHeading className={className}>{name}</StyledHeading>;
}

export default Heading;
