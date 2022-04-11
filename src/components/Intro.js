import React from 'react';
import './Intro.css';
import Me from '../img/me.jpg';
import { useTheme } from '../ThemeContext';

export default function Intro() {
	const darkTheme = useTheme();
	return (
		<section id='intro' className='intro-page'>
			<div className='left-intro'>
				<div className='self-photo'>
					<img src={Me} alt='a young man smiling' />
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
