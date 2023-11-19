import React from 'react';
import "./about.css";
import AboutMe from "../../assets/avatar.jpg";
import MyResume from "../../assets/Kravets_CV.pdf"
import AboutSocials from '../home/HeaderSocials';

const About = () => {
  return (
    <section className="bout container section" id='about'>
      <h2 className="section__title">About me</h2>

      <div className="about__container grid">
        <img src={AboutMe} alt="Sasha Kravets" className='about__img' />

        <div className="about__data">
          <div className="about__info">
            <p className="about__description">I've been working as a web developer for over a year in a team of SEO specialists, mainly
              handling website maintenance using pure JavaScript, HTML, and CSS. I also have
              experience with WordPress. Essentially, I take on team lead responsibilities, which involve
              creating instructions, working with copywriters and new team members.</p>
            <AboutSocials />
            <a href={MyResume} download className='btn'>Donwload CV</a>
          </div>
        </div>
      </div>


    </section>
  )
}

export default About