/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Impresarioglobal from '../../assets/recentprojects/impresarioglobal.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'React Portfolio', 
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'Impresario Global', 
      description: `Developing the website for the first ever Social MarTech platform to impactfully amplify change.`,
      alter: 'Impresario Global',
      image: `${Impresarioglobal}`,
    },
   /* { 
      id: 3,
      title: 'LoFo Project', 
      description: `Logistics and Forwarding website built using
      ReactJS to design and develop its front-end.`,
      alter: 'LoFo Project',
      image: `${Lofo}`,
    },
    { 
      id: 4,
      title: 'Startup Project', 
      description: `A website portfolio project for the Startup Dev Team
      built using MEVN stack to demonstrate the CRUD capabilities of the tech stack.`,
      alter: 'Startup Project',
      image: `${Startup}`,
    },*/
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
