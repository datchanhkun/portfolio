import React, { useState, useContext } from 'react'
import './SoundMusic.css'
import soundMusic from '../../assets/audio/jonas_blue_rise.mp3';
import playSound from '../../assets/images/play-icon.png';
import pauseSound from '../../assets/images/pause-button.png'
import { themeContext } from '../../Context'
import ReactHowler from 'react-howler'
const SoundMusic = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  const [playing, setPlaying] = useState(false);

  const handleClickPlay = () => {
    setPlaying(true);
  }
  const handleClickPause = () => {
    setPlaying(false);
  }


  return (
    <div className='sound-music'>
      <ReactHowler
        src={soundMusic}
        playing={playing}
        loop={true}
      />
      <div className={`${darkMode ? 'chooseOptions' : 'chooseOptions_dark'}`}>
        {playing ? (
          <img src={pauseSound} alt="pauseIcon" onClick={handleClickPause}/>
        ) : (
          <img src={playSound} alt="playIcon" onClick={handleClickPlay}/>
        )}
      </div>
      <div className={`chooseContent ${darkMode ? 'lightChoose' : 'darkChoose'}`}>
        <div>C</div>
        <div>h</div>
        <div>i</div>
        <div>l</div>
        <div>l</div>
        <div>&nbsp;</div>
        <div>w</div>
        <div>i</div>
        <div>t</div>
        <div>h</div>
        <div>&nbsp;</div>
        <div>m</div>
        <div>e</div>
        <div>!</div>
        <div>&nbsp;</div>
        <div>&#127911;</div>
      </div>
    </div>
  )
}

export default SoundMusic