import styled from 'styled-components';
import ProjectListItem from '../ui/ProjectListItem';
import Heading from '../ui/Heading';
import { useEffect, useState } from 'react';
import { stagger, animate } from 'framer-motion';
import { device } from '../ui/MediaQueries';

const StyledWork = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  overflow: hidden;

  @media ${device.laptop} {
    margin-top: 15%;
    margin-bottom: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
  }
`;

const StyledProjectPicture = styled.div`
  margin-top: 5%;
  width: 52.5%;
  height: 80%;
  background-color: white;
  border-radius: 0 2rem 0 0;
  background-size: cover;
  background-position: center;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  filter: brightness(0.975);

  @media ${device.laptop} {
    margin-top: 0;
    width: 95%;
    border-radius: 2rem 2rem 2rem 2rem;
    height: 70rem;
  }

  @media ${device.tabletM} {
    margin-top: 0;
    width: 95%;
    border-radius: 2rem 2rem 2rem 2rem;
    height: 50rem;
  }
`;

const WorkList = styled.div`
  width: 42.5%;
  height: 75%;
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    margin-right: -19%;
    height: 50%;
    width: 100%;
  }
`;

const ProjectList = styled.ul`
  height: 80%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  margin-top: 2rem;
`;

function Work({
  isNavOpen,
  currentProject,
  setCurrentProject,
  myProjects,
  setIsHome,
}) {
  setIsHome(false);
  const [hoveredProject, setHoveredProject] = useState('');

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
        { delay: stagger(0.1), duration: 0.2 }
      );
    }
  }, [isNavOpen]);

  return (
    <StyledWork>
      <StyledProjectPicture
        className="animateItem"
        style={{
          backgroundImage: `url(${
            hoveredProject !== ''
              ? hoveredProject
              : 'hiimyoungjang/homework.png'
          })`,
        }}
      />
      <WorkList>
        <Heading className="animateItem" name={'Work'} />
        <ProjectList>
          {myProjects.map((project) => (
            <ProjectListItem
              setHoveredProject={setHoveredProject}
              setCurrentProject={setCurrentProject}
              currentProject={currentProject}
              to="/project"
              className="animateItem"
              project={project}
              key={project.id}
            />
          ))}
        </ProjectList>
      </WorkList>
    </StyledWork>
  );
}

export default Work;
