import React from 'react'
import './Mystory.css'
import Globe from '../../assets/images/globe.svg'
import Music from '../../assets/images/listenMusic.png'
const MyStory = () => {
  return (
    <div className='story-wraper'>
      <span className='story-title'>My Story</span>
      <div className='story-content'>
        <p className='story-content-text'>I was born and raised in Quang Nam province, Vietnam. After graduating from high school at the age of 18, I moved to Ho Chi Minh City to attend Thu Duc College of Technology majoring in Information Technology. And now I'm starting my intensive front-end programming journey.</p>
        <div className='globe'>
          <img src={Globe} alt='globe'/>
        </div>
      </div>
      <div className='myself-card'>
        <div className='my-hobbies'>
          <h2>A little bit about me</h2>
          <p>In my free time, I like to read books, listen to music, surf Tiktok and sometimes play games. The books I like to read the most are on the subject of travel, exploration, and novels. I'm a pretty introverted person, so whenever I'm under pressure, I usually take a solo trip to Da Lat, Sapa...</p>
        </div>
        <img src={Music} alt='music'/>
      </div>
      <div className='spacer-div'></div>
      <div className='funfact-wrapper'>
        <div className='funfact-title'>
          <span>Random fun facts about me</span>
        </div>
        <div className='funfact-list'>
          <div className='funfact-col'>
            <div className='container'>
              <div className='front'>
                <div className='inner'>
                  <p>1</p>
                  <span>I'm afraid of snakes, stickers and mice</span>
                </div>
              </div>
              <div className='back'>
                <div className='inner'>
                  <p>Most people are afraid of snakes and stickers and I am no exception hehe</p>
                </div>
              </div>
            </div>
          </div>
          <div className='funfact-col'>
            <div className='container'>
              <div className='front'>
                <div className='inner'>
                  <p>2</p>
                  <span>I'm afraid of snakes, stickers and mice</span>
                </div>
              </div>
              <div className='back'>
                <div className='inner'>
                  <p>Most people are afraid of snakes and stickers and I am no exception hehe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyStory