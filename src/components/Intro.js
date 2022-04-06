import React from 'react';
import './Intro.css';
import Me from '../img/me.jpg';

export default function Intro() {
	return (
		<section className='intro-page'>
			<div className='left-intro'>
				<div className='self-photo'>
					<img src={Me} />
				</div>
			</div>
			<div className='name'>
				<h2>Hello, My name is </h2>
				<h1>Tanwa Sripan</h1>
				<div className='titles'>
					<p className='title'>Web Developer</p>
				</div>
				<p className='short-desc'>
					I am a Front-End Developer based in Stockholm, Sweden. I have a
					background in Mathematics so naturally I enjoy problem solving.
				</p>
			</div>
		</section>
	);
}
