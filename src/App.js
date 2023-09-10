import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Overlay from './ui/Overlay';
import Project from './pages/Project';
import { device } from './ui/MediaQueries';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    font-smooth: always;
    scroll-behavior: smooth;
    scrollbar-width: none;

    @media ${device.laptopL} {
      font-size: 52.5%;
    }
    
    @media ${device.tabletM} {
      font-size: 50%;
    }
    
    @media ${device.tabletS} {
      font-size: 40%;
    }
    
    @media ${device.mobileL} {
      font-size: 35%;
    }

    @media ${device.mobileM} {
      font-size: 30%;
    }

        @media ${device.mobileS} {
      font-size: 25%;
    }
  }
  
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  
`;

const myProjects = [
  {
    id: 1,
    projectName: `"Hi, I'm Young Jang" v1`,
    type: 'React portfolio',
    season: 'summer of 2023',
    skills: ['react', 'styled-components'],
    patron: 'potential employer',
    description:
      'This is my first professional portfolio built with React. Inspired by the remarkable work of designers (especially Sharlee) and creators worldwide, I incorporated various UI/UX design principles. Utilizing React and styled-components, I brought this portfolio to life with determination. Crafting this project was a truly inspiring experience.',
    webUrl: 'https://jyoungjoon.github.io/hiimyoungjang/',
    github: 'https://github.com/jyoungjoon/hiimyoungjang',
    picture: [
      {
        title: 'Homepage',
        pictureUrl: 'hiimyoungjang/home.png',
        description: '',
      },
      {
        title: 'Navigation',
        pictureUrl: 'hiimyoungjang/navbar.png',
        description: 'Navigation items with preview on hover',
      },
      {
        title: 'About Page',
        pictureUrl: 'hiimyoungjang/about.png',
        description: 'The about page has a link to my resume',
      },
      {
        title: 'Work Page',
        pictureUrl: 'hiimyoungjang/work.png',
        description:
          'The work page lists projects I have created up to the end of Summer in 2023.',
      },
      {
        title: 'Project Page',
        pictureUrl: 'hiimyoungjang/project.png',
        description:
          'The project page includes images of selected project and a link to its live version',
      },
      {
        title: 'Contact Page',
        pictureUrl: 'hiimyoungjang/contact.png',
        description:
          'The contact page includes brief information about myself.',
      },
      {
        title: 'Designing Process',
        pictureUrl: 'hiimyoungjang/figma.png',
        description:
          'Everything was built from the scratch based on the design principles I drew out in Figma.',
      },
    ],
  },
  {
    id: 2,
    projectName: 'Pourfolio v1',
    type: 'full-stack React application',
    season: 'summer of 2023',
    skills: ['MERN-stack', 'styled-components', 'Figma', 'jwt'],
    patron: 'n/a',
    description:
      "a full-stack React application with a strong emphasis on UI/UX. The project drew inspiration from the 'Bellissima' wine website (https://bellissimaprosecco.com/) and from handpicked colors from AI generated images. The design process was facilitated through Figma, and React was utilized to power the application, resulting in a seamless blend of aesthetics and functionality.",
    webUrl: 'https://pourfolio-7e8191d15c2a.herokuapp.com/',
    github: 'https://github.com/jyoungjoon/Pourfolio',
    picture: [
      {
        title: 'Homepage',
        pictureUrl: 'pourfolio/pourfoliolanding.png',
        description: '',
      },
      {
        title: 'Age-check Modal Window',
        pictureUrl: 'pourfolio/pourfolioage.png',
        description: '',
      },
      {
        title: 'Signup Page',
        pictureUrl: 'pourfolio/pourfoliosignup.png',
        description: '',
      },
      {
        title: 'Navbar',
        pictureUrl: 'pourfolio/pourfolionav.png',
        description: '',
      },
      {
        title: 'Search Page',
        pictureUrl: 'pourfolio/pourfoliosearch.png',
        description: '',
      },
      {
        title: 'Cellar Page',
        pictureUrl: 'pourfolio/pourfoliocellar.png',
        description: '',
      },
      {
        title: 'Footer',
        pictureUrl: 'pourfolio/pourfoliofooter.png',
        description:
          'Displays sources of used data and videos, giving credits to original data/content providers.',
      },
      {
        title: 'Figma',
        pictureUrl: 'pourfolio/pourfoliofigma.png',
        description: 'Inspirations and designing process',
      },
    ],
  },
  {
    id: 3,
    projectName: 'PetLocators v1',
    type: 'full-stack application',
    season: 'summer of 2023',
    skills: ['mysql', 'handlebars', 'google-cloud', 'tailwindcss'],
    patron: 'n/a',
    description: `A full-stack application with a focus on social networking features, including adding new pets, sharing pictures, liking and commenting on other users' pets, sending/receiving messages, and updating user information and profile pictures. This project marked my second collaboration with fellow developers.`,
    webUrl: 'https://lit-retreat-91915-8f068b8cfb99.herokuapp.com/',
    github: 'https://github.com/jyoungjoon/Pet-locators',
    picture: [
      {
        title: 'Homepage',
        pictureUrl: 'petlocators/petlocators.png',
        description: '',
      },
      {
        title: 'User Page',
        pictureUrl: 'petlocators/petlocatorsuser.png',
        description: 'User dashboard with list of pets owned',
      },
      {
        title: 'Locator Page',
        pictureUrl: 'petlocators/petlocatorslocate.png',
        description: 'Locate other users in your city',
      },
      {
        title: 'Pet Page',
        pictureUrl: 'petlocators/petlocatorspetpage.png',
        description: `Visit other pet's page, like and comment, and send message to set up a play-date.`,
      },
    ],
  },
  {
    id: 4,
    projectName: 'LeafyLocators v1',
    type: 'application using RESTful API',
    season: 'spring of 2023',
    skills: ['html', 'tailwindcss', 'javascript', '3rd Party API'],
    patron: 'n/a',
    description: `This marks my very first web application, constructed using classic HTML, CSS, JavaScript, and a RESTful API. Learning how to navigate Google Maps and identifying the appropriate API proved to be the most challenging aspects of this project, especially as a junior developer. Additionally, this experience marked my inaugural collaboration with fellow developers.`,
    webUrl: 'https://jyoungjoon.github.io/Leafy-locators/',
    github: 'https://github.com/jyoungjoon/Leafy-locators',
    picture: [
      {
        title: 'Homepage',
        pictureUrl: 'leafylocators/leafylocators.png',
        description: '',
      },
      {
        title: 'Map Page',
        pictureUrl: 'leafylocators/leafylocatorslightmap.png',
        description:
          'The map feature is unavailable due to an expired API key.',
      },
      {
        title: 'Dark Mode',
        pictureUrl: 'leafylocators/leafylocatorsdark.png',
        description: 'Dark mode is available with a click of a button',
      },
      {
        title: 'Dark Mode Map',
        pictureUrl: 'leafylocators/leafylocatorsmap.png',
        description:
          'The map feature is unavailable due to an expired API key.',
      },
    ],
  },
  {
    id: 5,
    projectName: 'JS Quiz Game v1',
    type: 'quiz application',
    season: 'spring of 2023',
    skills: ['html', 'css', 'javascript'],
    patron: 'n/a',
    description: `I developed a JavaScript quiz game with a Super Mario Bros. theme. I dedicated numerous hours to piecing everything together and making it visually appealing. Despite its design being reminiscent of the iconic game Super Mario Bros., I believe it came together quite nicely. Test your JavaScript knowledge with this quiz; the questions are based on LinkedIn's JavaScript assessment.`,
    webUrl: 'https://jyoungjoon.github.io/-TODO-THIS.QUIZ/',
    github: 'https://github.com/jyoungjoon/-TODO-THIS.QUIZ',
    picture: [
      {
        title: 'Homepage',
        pictureUrl: 'todothisquiz/jstodothisquiz.png',
        description: '',
      },
      {
        title: 'Question Page',
        pictureUrl: 'todothisquiz/jstodothisquiz2.png',
        description: `Upon clicking on correct/incorrect answer, user is notified if it's correct/wrong both visually and audibly.`,
      },
      {
        title: 'Scoreboard',
        pictureUrl: 'todothisquiz/jstodothisquizresult.png',
        description:
          'Saves high score in local storage and displays it on the scoreboard',
      },
    ],
  },
  {
    id: 6,
    projectName: 'Single Page Portfolio',
    type: 'portfolio',
    season: 'spring of 2023',
    skills: ['html', 'css'],
    patron: 'n/a',
    description:
      'This was the first portfolio I built while studying in UC Berkeley Coding Boot Camp. As I worked on it, I began to appreciate the allure of a well-balanced and colorfully designed webpage. It was my first project where I delved into using CSS @keyframes, adding an exciting layer of interactivity to the design. This experience laid the foundation for my journey into web development.',
    webUrl: 'https://jyoungjoon.github.io/youngs-portfolio/',
    github: 'https://github.com/jyoungjoon/youngs-portfolio',
    picture: [
      {
        title: 'Homepage',
        pictureUrl: 'firstportfolio.png',
        description: '',
      },
    ],
  },
  {
    id: 7,
    projectName: 'Banana-Flexbox',
    type: 'educational',
    season: 'spring of 2023',
    skills: ['html', 'css', 'javascript'],
    patron: 'n/a',
    description:
      'Early in my coding journey, I struggled with CSS flexbox properties. However, once I grasped the concept, I decided to create a small application to help others understand flexbox. This app provides a simple visual simulation for experimenting with different flexbox properties, making the learning process more intuitive.',
    webUrl: 'https://jyoungjoon.github.io/understand-flexbox/',
    github: 'https://github.com/jyoungjoon/understand-flexbox',
    picture: [
      {
        title: 'Homepage',
        pictureUrl: 'bananaflexbox/flexboxbanana.png',
        description:
          'the one and only page of the application. Styled with shades of yellow.',
      },
    ],
  },
  {
    id: 8,
    projectName: 'Very First HTML',
    type: 'the very first of my coding journey',
    season: 'spring of 2023',
    skills: ['html', 'css'],
    patron: 'n/a',
    description:
      'As I ventured into coding, I watched my first HTML and CSS tutorials on YouTube. Armed with this newfound knowledge, I set out to create a captivating landing page. It was a learning curve, taking time to position each element meticulously. However, the result was a beautiful and inspiring product, marking the start of my coding journey.',
    webUrl: 'https://jyoungjoon.github.io/01-landing-page/',
    github: 'https://github.com/jyoungjoon/01-landing-page',
    picture: [
      {
        title: 'Homepage',
        pictureUrl: 'firstwebpage.png',
        description: 'Night-stars-and-magic-themed landing page',
      },
    ],
  },
  {
    id: 9,
    projectName: 'Other Projects',
    type: 'other projects',
    season: 'spring and summer of 2023',
    skills: ['multiple technologies'],
    patron: 'n/a',
    description: `Here are some additional side projects I've created for practice and learning. If you're curious to explore them further, feel free to check out my GitHub page. Each project tells its own unique story, a testament to my ongoing journey in the world of coding and technology. Dive in and discover the wealth of knowledge and creativity that awaits!`,
    webUrl: 'https://github.com/jyoungjoon',
    picture: [
      {
        title: `Other Projects`,
        pictureUrl: 'otherprojects/otherprojects.png',
        description: '',
      },
      {
        title: `usePopcorn (React)`,
        pictureUrl: 'otherprojects/usepopcornmain.png',
        description: '',
      },
      {
        title: `WorldWise (React)`,
        pictureUrl: 'otherprojects/worldwisesearch.png',
        description: '',
      },
      {
        title: 'Bankist Homepage',
        pictureUrl: 'otherprojects/bankisthome.png',
        description: '',
      },
      {
        title: 'Bankist Main',
        pictureUrl: 'otherprojects/bankistmain.png',
        description: '',
      },
      {
        title: 'Eat-N-Split (React)',
        pictureUrl: 'otherprojects/eatnsplit.png',
        description: '',
      },
      {
        title: `Young's React Pizza Co. (React)`,
        pictureUrl: 'otherprojects/pizzaco5.png',
        description: '',
      },
      {
        title: 'Guess-My-Number Game (Javascript)',
        pictureUrl: 'otherprojects/guessmynumbergame.png',
        description: '',
      },
      {
        title: `Pig Game (Javascript)`,
        pictureUrl: 'otherprojects/piggame.png',
        description: '',
      },
      {
        title: `Hotel Young's (SASS CSS)`,
        pictureUrl: 'otherprojects/hotelyoungsass.png',
        description: '',
      },
      {
        title: `Natours (CSS)`,
        pictureUrl: 'otherprojects/natourscta.png',
        description: '',
      },
      {
        title: `Generic Page (Responsive Styling)`,
        pictureUrl: 'otherprojects/responsivestyling.png',
        description: '',
      },
      {
        title: `myMongooseAPI (MongoDB)`,
        pictureUrl: 'otherprojects/mongooseapi.png',
        description: '',
      },
      {
        title: `mySQLAPI (mySQL)`,
        pictureUrl: 'otherprojects/mysqlapi.png',
        description: '',
      },
    ],
  },
];

function App() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);

  return (
    <BrowserRouter basename="/hiimyoungjang">
      <GlobalStyle />
      <Overlay isHome={isHome} />
      <Routes>
        <Route
          element={
            <AppLayout
              isNavOpen={isNavOpen}
              setIsNavOpen={setIsNavOpen}
              isHome={isHome}
              setIsHome={setIsHome}
            />
          }
        >
          <Route
            path="/"
            element={
              <Home
                isNavOpen={isNavOpen}
                isHome={isHome}
                setIsHome={setIsHome}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                isNavOpen={isNavOpen}
                isHome={isHome}
                setIsHome={setIsHome}
              />
            }
          />
          <Route
            path="/work"
            element={
              <Work
                currentProject={currentProject}
                setCurrentProject={setCurrentProject}
                myProjects={myProjects}
                isNavOpen={isNavOpen}
                isHome={isHome}
                setIsHome={setIsHome}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                isNavOpen={isNavOpen}
                isHome={isHome}
                setIsHome={setIsHome}
              />
            }
          />
          <Route
            path="/project"
            element={
              <Project
                currentProject={currentProject}
                setCurrentProject={setCurrentProject}
                myProjects={myProjects}
                isNavOpen={isNavOpen}
                isHome={isHome}
                setIsHome={setIsHome}
              />
            }
          />
          )
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
