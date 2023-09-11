import styled from 'styled-components';
import Heading from '../ui/Heading';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { stagger, animate } from 'framer-motion';
import Loader from '../ui/Loader';
import { device } from '../ui/MediaQueries';

const StyledProject = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectDiv = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: scroll;
  width: 100%;
  max-height: 100%;

  @media ${device.laptop} {
    width: 95%;
  }
`;

const ProjectPicturesDiv = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-content: center;
  gap: 1rem;
  margin-bottom: 8rem;

  @media ${device.laptop} {
    grid-template-columns: 1fr;
  }
`;

const PictureDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  width: 100%;
`;

const PictureTitle = styled.h2`
  font-family: 'Ysabeau SC', sans-serif;
  color: #424242;
  font-weight: 600;
  font-size: 1.75rem;
  margin: 2rem auto;
  letter-spacing: 0.1rem;
`;

const ProjectPicture = styled.div`
  width: 100%;
  height: 50rem;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 1rem;
  opacity: 0.6;
  transition: 0.1s ease-in;
  &:hover {
    opacity: 1;
  }
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

  @media ${device.laptop} {
    width: 100% !important;
    height: 50rem !important;
  }
`;

const PictureDescription = styled.div`
  font-family: 'Ysabeau SC', sans-serif;
  font-size: 1.6rem;
  margin: 2rem auto;
  font-weight: 500;

  @media ${device.laptop} {
    font-size: 1.2rem;
  }
`;

const ProjectDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1% auto;
  width: 75%;
  height: auto;
  min-height: 30rem;
  min-height: 40rem;

  @media ${device.laptop} {
    width: 90%;
  }
`;

const ProjectDetailsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
  margin-top: 2rem;
  margin-bottom: 8rem;

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
  }
`;

const ProjectSummary = styled.div`
  padding: 3rem 0;

  width: 50%;
  height: auto;
  & p {
    font-size: 2rem;
    font-family: 'Ysabeau SC', sans-serif;
    color: #424242;
    @media ${device.laptop} {
      font-size: 1.6rem;
    }
  }

  & span {
    font-family: 'Ysabeau SC', sans-serif;
    color: #035aa6;
    padding: 1.75rem;
    font-size: 2rem;
    text-align: left;
    display: inline-block;
    width: 17.5rem;
    @media ${device.laptop} {
      font-size: 1.6rem;
    }
  }

  @media ${device.laptop} {
    width: 100%;
    font-size: 1.6rem;
  }
`;

const ProjectDescription = styled.div`
  font-family: 'Ysabeau SC', sans-serif;
  font-size: 2rem;
  color: #424242;
  line-height: 2.5;
  letter-spacing: 0.2rem;
  width: 50%;
  height: auto;
  padding: 4rem;
  white-space: pre-line;
  text-align: left;
  @media ${device.laptop} {
    width: 100%;
    font-size: 1.6rem;
  }
`;

function Project({ isNavOpen, currentProject, myProjects, setIsHome }) {
  setIsHome(false);
  const project = myProjects.find((project) => project.id === currentProject);
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    if (isNavOpen && project && !loadingImage) {
      animate(
        '.animateItem',
        { y: [0, -1000], opacity: [1, 0] },
        { duration: 0.4 }
      );
    }

    if (!isNavOpen && project && !loadingImage) {
      animate(
        '.animateItem',
        { y: [-1000, 0], opacity: [0, 1] },
        { delay: stagger(0.3), duration: 0.3 }
      );
    }

    const mainImage = new Image();
    mainImage.src = project?.picture[0]?.pictureUrl;

    mainImage.onload = () => {
      setLoadingImage(false);
    };

    return () => {
      mainImage.onload = null;
    };
  }, [project, isNavOpen, loadingImage]);

  if (!project) {
    return window.history.back();
  }

  if (loadingImage) return <Loader />;

  return (
    <StyledProject>
      <ProjectDiv>
        <PictureDiv className="animateItem">
          <ProjectPicture
            id="main"
            style={{
              backgroundImage: `url(${project.picture[0].pictureUrl})`,
              borderRadius: '0 0 2rem 2rem',
              height: '80rem',
              width: '75%',
              opacity: '0.85',
            }}
          />
        </PictureDiv>
        <ProjectDetailsDiv className="animateItem">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
            }}
          >
            <Heading name={project.projectName} />
            <Link
              to={project.webUrl}
              target="_blank"
              style={{
                fontFamily: '"Ysabeau SC", sans-serif',
                fontSize: '2rem',
                textDecoration: 'none',
                color: '#424242',
                fontWeight: '700',
              }}
            >
              {project.id === 9 ? 'visit my github page ' : 'visit this work '}
              <span
                style={{ transform: 'translateY(0.65rem)' }}
                class="material-symbols-rounded"
              >
                open_in_new
              </span>
            </Link>
          </div>
          <ProjectDetailsWrapper>
            <ProjectSummary>
              <p>
                <span>Type</span>
                {project.type}
              </p>
              <p>
                <span>Season</span>
                {project.season}
              </p>
              <p>
                <span>Patron</span>
                {project.patron}
              </p>
              <p>
                <span>Skills</span>
                {project.skills.join(', ')}
              </p>
              <p>
                <span>Github</span>
                {project.github}
              </p>
            </ProjectSummary>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectDetailsWrapper>
        </ProjectDetailsDiv>
        <ProjectPicturesDiv>
          {project.picture.slice(1).map((picture) => (
            <PictureDiv key={picture.id} style={{ marginTop: '4rem' }}>
              <PictureTitle key={picture.id}>{picture.title}</PictureTitle>
              <ProjectPicture
                key={picture.id}
                style={{
                  backgroundImage: `url(${picture.pictureUrl})`,
                  width: '80%',
                }}
              />
              <PictureDescription key={picture.id}>
                {picture.description}
              </PictureDescription>
            </PictureDiv>
          ))}
        </ProjectPicturesDiv>
      </ProjectDiv>
    </StyledProject>
  );
}

export default Project;
