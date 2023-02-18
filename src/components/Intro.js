import React from 'react';
import './Intro.css';
import Me from '../img/me.jpg';
import { useTheme } from '../ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDev,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import CV from '../file/TSCV.pdf';

export default function Intro() {
  const darkTheme = useTheme();
  return (
    <section id='intro' className='intro-page'>
      <div className='left-intro'>
        <div className='self-photo'>
          <img src={Me} width='550' alt='a young man smiling' />
        </div>
        <div id='socials'>
          <div className='socials-link'>
            <a
              href={CV}
              download='Resume-for-Tanwa'
              aria-label='Resume-for-Tanwa-Sripan'
              className='resume'
              style={darkTheme ? { color: '#fff', borderColor: '#fff' } : {}}
            >
              <FontAwesomeIcon icon={faFilePdf} size='2x' />
            </a>
          </div>
          <div className='socials-link'>
            <a
              href='https://www.linkedin.com/in/tanwasripan/'
              aria-label='LinkedIn'
              className='linkedin'
              target='_blank'
              rel='noreferrer'
              style={darkTheme ? { color: '#fff', borderColor: '#fff' } : {}}
            >
              <FontAwesomeIcon icon={faLinkedin} size='2x' />{' '}
            </a>
          </div>
          <div className='socials-link'>
            <a
              href='https://dev.to/justtanwa'
              aria-label='DEV-blog'
              className='devblog'
              target='_blank'
              rel='noreferrer'
              style={darkTheme ? { color: '#fff', borderColor: '#fff' } : {}}
            >
              <FontAwesomeIcon icon={faDev} size='2x' />
            </a>
          </div>
          <div className='socials-link'>
            <a
              href='https://github.com/JustTanwa'
              aria-label='github'
              className='github'
              target='_blank'
              rel='noreferrer'
              style={darkTheme ? { color: '#fff', borderColor: '#fff' } : {}}
            >
              <FontAwesomeIcon icon={faGithub} size='2x' />
            </a>
          </div>
        </div>
      </div>
      <div className='name'>
        <h2>Hello, my name is </h2>
        <h1 style={darkTheme ? { color: '#00ADB5' } : {}}>Tanwa Sripan</h1>
        <div className='titles-container'>
          <div className='titles-wrapper'>
            <p className='title'>Software Developer</p>
            <p className='title'>Problem Solver</p>
            <p className='title'>Learner</p>
            <p className='title'>Gamer</p>
          </div>
        </div>
        <p className='short-desc'>
          I'm a software developer based in Stockholm, Sweden. I am currently
          working at{' '}
          <a href='https://staria.com' style={{ color: '#681A8C' }}>
            Staria
          </a>{' '}
          as a developer that specialises in providing customised solution for
          businesses that utilises Oracle Netsuite.
        </p>
      </div>
    </section>
  );
}
