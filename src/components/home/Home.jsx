import React from 'react';
import "./home.css";
import Me from "../../assets/avatar.jpg"
import MyResume from "../../assets/Kravets_CV.pdf"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home container" id='home'>
      <div className="intro">
        <img src={Me} alt="Sasha Kravets" className='home__img' />
        <h1 className="home__name">Sasha Kravets</h1>
        <span className='home__education'>Web developer who wants to work at COAX Software :)</span>

        <HeaderSocials />

        <a href={MyResume} download className='btn'>Donwload CV</a>

        <ScrollDown />
      </div>
    </section>
  )
}

export default Home