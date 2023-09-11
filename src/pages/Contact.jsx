import styled from 'styled-components';
import Heading from '../ui/Heading';
import { Link } from 'react-router-dom';
import { stagger, animate } from 'framer-motion';
import { useEffect } from 'react';
import { device } from '../ui/MediaQueries';

const StyledContact = styled.div`
  width: 90%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media ${device.laptop} {
    margin-top: 7.5%;
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    overflow: scroll;
    margin-bottom: 7.5%;
  }
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 75%;

  @media ${device.laptop} {
    width: 100%;
    height: 30%;
    min-height: 35rem;
    margin-right: -7.5%;
  }
`;

const DonationDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 75%;
  @media ${device.laptop} {
    width: 100%;
    height: 30%;
    margin-right: -7.5%;
  }
`;

const Info = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  border-top: 1px solid #cecece;
  margin-top: 2rem;
`;

const Donation = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  border-top: 1px solid #cecece;
  margin-top: 2rem;
`;

const InfoType = styled.div`
  width: 100%;
  font-size: 3rem;
  font-family: 'Ysabeau SC', sans-serif;
  color: #424242;
  &:first-child {
    margin-top: 2.5rem;
  }
`;

const DonationType = styled.div`
  width: 100%;
  font-size: 3rem;
  font-family: 'Ysabeau SC', sans-serif;
  color: #424242;
  &:first-child {
    margin-top: 2.5rem;
  }
`;

const StyledLink = styled(Link)``;

function Contact({ isNavOpen, setIsHome }) {
  setIsHome(false);
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

  return (
    <StyledContact>
      <InfoDiv className="animateItem">
        <Heading name={'Contact'} />
        <Info>
          <InfoType>
            <span
              style={{
                display: 'inline-block',
                minWidth: '5rem',
                maxWidth: '5rem',
                marginRight: '10rem',
                letterSpacing: '0.25rem',
              }}
            >
              location
            </span>
            <span style={{ fontWeight: '800' }}>los angeles, ca</span>
          </InfoType>
          <InfoType>
            <span
              style={{
                display: 'inline-block',
                minWidth: '5rem',
                maxWidth: '5rem',
                marginRight: '10rem',
                letterSpacing: '0.25rem',
              }}
            >
              github
            </span>
            <StyledLink
              to="https://www.github.com/jyoungjoon"
              target="_blank"
              style={{
                fontWeight: '800',
                textDecoration: 'none',
                color: '#424242',
              }}
            >
              github.com/jyoungjoon
            </StyledLink>
          </InfoType>
          <InfoType>
            <span
              style={{
                display: 'inline-block',
                minWidth: '5rem',
                maxWidth: '5rem',
                marginRight: '10rem',
                letterSpacing: '0.25rem',
              }}
            >
              mail
            </span>
            <span
              style={{
                fontWeight: '800',
                textDecoration: 'none',
                color: '#424242',
              }}
            >
              lifescriptified@gmail.com
            </span>
          </InfoType>
        </Info>
      </InfoDiv>
      <DonationDiv className="animateItem">
        <Heading name={'Buy me a ☕'} />
        <Donation>
          <DonationType>
            <span
              style={{
                display: 'inline-block',
                minWidth: '5rem',
                maxWidth: '5rem',
                marginRight: '10rem',
                letterSpacing: '0.25rem',
              }}
            >
              venmo
            </span>
            <StyledLink
              to="https://www.venmo.com/stixnstones"
              target="_blank"
              style={{
                fontWeight: '800',
                textDecoration: 'none',
                color: '#424242',
              }}
            >
              @stixnstones
            </StyledLink>
          </DonationType>
          <DonationType>
            <span
              style={{
                display: 'inline-block',
                minWidth: '5rem',
                maxWidth: '5rem',
                marginRight: '10rem',
                letterSpacing: '0.25rem',
              }}
            >
              paypal
            </span>
            <StyledLink
              to="https://www.paypal.com/"
              target="_blank"
              style={{
                fontWeight: '800',
                textDecoration: 'none',
                color: '#424242',
              }}
            >
              @jyjaxii
            </StyledLink>
          </DonationType>
        </Donation>
      </DonationDiv>
    </StyledContact>
  );
}

export default Contact;
