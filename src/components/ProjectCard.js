import {
	faWindowMinimize,
	faWindowRestore,
	faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ img, link, github, description }) {
	return (
		<div className='project-card'>
			<div className='project'>
				<div className='browser-bar'>
					<div className='browser-minimise'>
						<FontAwesomeIcon icon={faWindowMinimize} />
					</div>
					<div className='browser-resize'>
						<FontAwesomeIcon icon={faWindowRestore} />
					</div>
					<div className='browser-close'>
						<FontAwesomeIcon icon={faXmark} />
					</div>
				</div>
				<figure>
					<img src={img} alt='' />
				</figure>
			</div>
			<div className='project-description'>
				{description}
				<div className='card-buttons'>
					<a href={link} className='live-demo'>Live Demo</a>
					<a href={github} className='source-code'>View Code</a>
				</div>
			</div>
		</div>
	);
}
