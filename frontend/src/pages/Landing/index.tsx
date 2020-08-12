import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="proffy" />
          <h2>sua plataforma de cursos online</h2>
        </div>

        <img className="hero-image" src={landingImg} alt="plataforma de estudos" />

        <div className="buttons-container">
          <a href="/study" className="study">
            <img src={studyIcon} alt="study" />
            Estudar
          </a>
          <a href="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="give classes" />
            Dar Aulas
          </a>
        </div>
        <span className="total-connections">
          Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="purple heart" />
        </span>
      </div>
    </div>
  )
}

export default Landing;
