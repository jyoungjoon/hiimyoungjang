import styled from 'styled-components';
import Heading from '../ui/Heading';
import { stagger, animate } from 'framer-motion';
import { useEffect } from 'react';
import { device } from '../ui/MediaQueries';

const StyledAbout = styled.div`
  width: 95%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5%;

  @media ${device.laptop} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    width: 95%;
    height: auto;
    margin-left: 0;
    margin: 0 auto;
    margin-top: 15%;
    margin-bottom: 15%;
  }
`;

const AboutTextDiv = styled.div`
  width: 60%;
  height: 75%;

  @media ${device.laptop} {
    width: 100%;
    height: 40%;
    margin-right: -19%;
  }
`;

const AboutTextContent = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  height: 90%;
  border-top: 1px solid #cecece;
  margin-top: 2rem;
`;

const HeadingDiv = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: end;

  & a {
    display: inline-block;
    text-decoration: none;
    font-size: 3rem;
    letter-spacing: 0.2rem;
    color: #424242;
    margin-bottom: -1rem;

    @media ${device.laptop} {
    }

    & div {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;

      & span {
        font-size: 2rem;
      }
    }
  }
`;

const AboutText = styled.p`
  margin-top: 2.5rem;
  max-height: 80%;
  min-height: 80%;
  font-size: 2.5rem;
  line-height: 1.95;
  letter-spacing: 0.2rem;
  color: #424242;
  overflow: scroll;
`;

const AboutPicture = styled.div`
  box-sizing: content-box;
  width: 40%;
  max-width: 40%;
  min-width: 40%;
  height: 90%;
  background-image: url('profilepic.png');
  background-size: cover;
  background-position: center;
  border-radius: 0rem 0rem 0rem 5rem;
  transform: translate(0%, -5%);
  filter: opacity(0.8);
  position: fixed;
  top: 0;
  right: 0;
  z-index: -1;

  @media ${device.laptopL} {
    background-position: right;
    transform: translate(0%, 0%);
  }

  @media ${device.laptop} {
    background-position: center;
    background-size: contain;
    position: relative;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    border-radius: 2rem 2rem 2rem 2rem;
    transform: translate(0%, 0%);
    height: 60rem;
  }
`;

function About({ isNavOpen, setIsHome }) {
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
    <StyledAbout>
      <AboutTextDiv>
        <HeadingDiv>
          <Heading className="animateItem" name={'About'} />
          <a href={'yjsresume.pdf'} target="_blank" rel="noreferrer">
            <div>
              resume <span className="material-symbols-rounded">download</span>
            </div>
          </a>
        </HeadingDiv>
        <AboutTextContent>
          <AboutText className="animateItem">
            Hey, there 🖐️ I'm Young Jang, a versatile full-stack developer with
            a keen eye for UI/UX design. My roots trace back to South Korea, but
            I've spent a significant portion (15+ years) of my life in the
            United States. By morning, I'm the captain of a small but thriving
            trucking company, and by afternoon, I'm a passionate web developer.
            When it comes to unwinding, there's nothing quite like coding to the
            soothing sounds of lofi (low-fidelity) music; it's my secret
            stress-buster. Beyond the world of web development, I have a fiery
            passion for archery and firearms. If you're up for some target
            practice or just a chat about tech, feel free to reach out. Let's
            connect! 🎯🔥💻
          </AboutText>
        </AboutTextContent>
      </AboutTextDiv>
      <AboutPicture className="animateItem" />
    </StyledAbout>
  );
}

export default About;
