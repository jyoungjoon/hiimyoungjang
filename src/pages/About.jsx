import styled from 'styled-components';
import Heading from '../ui/Heading';
import { stagger, animate } from 'framer-motion';
import { useEffect } from 'react';

const StyledAbout = styled.div`
  width: 95%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5%;
`;

const AboutTextDiv = styled.div`
  width: 60%;
  height: 75%;
`;

const AboutTextContent = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  height: 90%;
  border-top: 1px solid #cecece;

  & div {
    position: absolute;
    right: 0;
    top: -4rem;
    font-size: 2rem;
    letter-spacing: 0.2rem;
    color: #035aa6;

    & span {
      transform: translateY(20%);
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
  border-radius: 0rem 0rem 0rem 15rem;
  transform: translate(0%, -5%);
  filter: opacity(0.8);
  position: fixed;
  top: 0;
  right: 0;
  z-index: -1;
`;

function About({ isNavOpen }) {
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
        <Heading className="animateItem" name={'About'} />
        <AboutTextContent>
          <a href={'yjsresume.pdf'} target="_blank" rel="noreferrer">
            <div>
              resume <span class="material-symbols-rounded">download</span>
            </div>
          </a>
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
