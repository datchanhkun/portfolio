import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./Mystory.css";
import Globe from "../../assets/images/globe.svg";
import Music from "../../assets/images/listenMusic.png";
import { funfactList } from "../../data";
const MyStory = () => {
  useEffect(() => {
    AOS.init({
      once: true
    });
    AOS.refresh();
  }, []);
  return (
    <div className="story-wraper">
      <span className="story-title">My Story</span>
      <div className="story-content">
        <p className="story-content-text">
          I was born and raised in Quang Nam province, Vietnam. After graduating
          from high school at the age of 18, I moved to Ho Chi Minh City to
          attend Thu Duc College of Technology majoring in Information
          Technology. And now I'm starting my intensive front-end programming
          journey.
        </p>
        <div className="globe">
          <img src={Globe} alt="globe" />
        </div>
      </div>
      <div className="myself-card">
        <div className="my-hobbies">
          <h2>A little bit about me</h2>
          <p>
            In my free time, I like to read books, listen to music, surf Tiktok
            and sometimes play games. The books I like to read the most are on
            the subject of travel, exploration, and novels. I'm a pretty
            introverted person, so whenever I'm under pressure, I usually take a
            solo trip to Da Lat, Sapa...
          </p>
        </div>
        <img src={Music} alt="music" />
      </div>
      <div className="spacer-div"></div>
      <div className="funfact-wrapper" data-aos="slide-up" data-aos-duration="1500">
        <div className="funfact-title">
          <span>Random fun facts about me</span>
        </div>
        <div className="funfact-list">
          {funfactList.map((fact) => (
            <div className="funfact-col" key={fact.id}>
              <div className="funfact-container">
                <div
                  className="front"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${fact.img})`,
                  }}
                >
                  <div className="inner">
                    <p>{fact.id}</p>
                    <span>{fact.title}</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>{fact.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyStory;
