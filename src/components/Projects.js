import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import { projects } from '../projects-data';
import { useTheme } from '../ThemeContext';

export default function Projects() {

	const darkTheme = useTheme();
	return (
		<section
			id='projects'
			className='projects-page'
			style={darkTheme ? { backgroundColor: '#414141', color: '#fff' } : {}}
		>
			<div className='projects-title'>
				<h2>Projects</h2>
			</div>
			<div className='projects-container'>
				{projects.map((proj) => (
					<ProjectCard
						key={proj.id}
						img={proj.imgsrc}
						link={proj.livelink}
						github={proj.github}
						description={proj.description}
					/>
				))}
			</div>
		</section>
	);
}
