import React from 'react';
import './Intro.css';
import Me from '../img/me.jpg';
import { useTheme } from '../ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDev,
	faLinkedin,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import CV from '../file/TSCV.pdf';

export default function Intro() {
	const darkTheme = useTheme();
	return (
		<section id='intro' className='intro-page'>
			<div className='left-intro'>
				<div className='self-photo'>
					<img src={Me} alt='a young man smiling' />
				</div>
				<div id='socials'>
					<div className='socials-link'>
						<a href={CV} download='Resume-for-Tanwa' className='resume'>
							<FontAwesomeIcon icon={faFilePdf} size='2x' />
						</a>
					</div>
					<div className='socials-link'>
						<a
							href='https://www.linkedin.com/in/tanwasripan/'
							className='linkedin'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon icon={faLinkedin} size='2x' />{' '}
						</a>
					</div>
					<div className='socials-link'>
						<a
							href='https://dev.to/justtanwa'
							className='devblog'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon icon={faDev} size='2x' />
						</a>
					</div>
					<div className='socials-link'>
						<a
							href='https://twitter.com/justtanwa'
							className='twitter'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon icon={faTwitter} size='2x' />
						</a>
					</div>
				</div>
			</div>
			<div className='name'>
				<h2>Hello, my name is </h2>
				<h1 style={darkTheme ? { color: '#00ADB5' } : {}}>Tanwa Sripan</h1>
				<div className='titles-container'>
					<div className='titles-wrapper'>
						<p className='title'>Web Developer</p>
						<p className='title'>Problem Solver</p>
						<p className='title'>Teacher/Blogger</p>
						<p className='title'>Learner</p>
					</div>
				</div>
				<p className='short-desc'>
					I am a Front-End Web Developer based in Stockholm, Sweden. I have a
					background in Mathematics so naturally I enjoy problem solving.
				</p>
			</div>
		</section>
	);
}
