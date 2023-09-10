import styled from 'styled-components';
import { device } from './MediaQueries';

const StyledHeading = styled.h2`
  font-size: 7.5rem;
  color: #24aa7d;
  font-family: 'Ysabeau SC', sans-serif;
  font-weight: 900;

  @media ${device.laptop} {
    margin-top: 5rem;
    font-size: 3rem;
  }
`;

function Heading({ name, className }) {
  return <StyledHeading className={className}>{name}</StyledHeading>;
}

export default Heading;
