import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledProjectListItem = styled(Link)`
  text-decoration: none;
  position: relative;
  width: 80%;
  font-family: 'Amatic SC', cursive;
  font-size: 6rem;
  color: #035aa6;
  list-style: none;
  margin: 2rem 0;
  padding-bottom: 4.5rem;
  border-bottom: 1px solid #c5c5c5;
`;

const StyledSkills = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: 'Ysabeau SC', sans-serif;
  font-size: 1.6rem;
  color: #424242;
  padding-bottom: 2rem;
`;

function ProjectListItem({
  project,
  className,
  to,
  setCurrentProject,
  setHoveredProject,
}) {
  return (
    <StyledProjectListItem
      className={className}
      to={to}
      onClick={() => setCurrentProject(project.id)}
      onMouseOver={() => setHoveredProject(project.picture[0].pictureUrl)}
      onMouseOut={() => setHoveredProject('')}
    >
      {project.projectName}
      <StyledSkills>[{project.skills.join(', ')}]</StyledSkills>
    </StyledProjectListItem>
  );
}

export default ProjectListItem;
