import {
	faBootstrap,
	faCss3,
	faGit,
	faHtml5,
	faJs,
	faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTheme } from '../ThemeContext';
import './Aboutme.css';

export default function Aboutme() {
	const darkTheme = useTheme();
	return (
		<section
			id='aboutme'
			className='aboutme-page'
			style={darkTheme ? { backgroundColor: '#414141', color: '#fff' } : {}}
		>
			<div className='aboutme-title'>
				<h2>About me</h2>
			</div>
			<div className='aboutme-infor'>
				<p className='aboutme-para1'>
					I am a self-taught, self-motivated Front-End Web Developer with a
					background in <em>Teaching</em>. My past experiences has shaped me to
					be a well-communicated, compassionate and approachable person. I don't
					drink coffee, but I do drink tea (espcially ones with boba).
				</p>
				<p className='aboutme-para2'>
					When I am not coding or debugging, I like to unwind by watching anime
					and playing video games. I also enjoy doing Taekwondo and taking
					flying side-kick photos when travelling abroad.
				</p>
			</div>
			<div className='aboutme-title'>
				<h2>Technologies</h2>
			</div>
			<div className='aboutme-skill'>
				<div className='skill-badges'>
					<FontAwesomeIcon
						icon={faHtml5}
						size='4x'
						style={{ color: '#E34C26' }}
					/>
					<FontAwesomeIcon
						icon={faCss3}
						size='4x'
						style={{ color: '#264de4' }}
					/>
					<FontAwesomeIcon icon={faJs} size='4x' style={{ color: '#f5c71a' }} />
					<FontAwesomeIcon
						icon={faReact}
						size='4x'
						style={{ color: '#61DBFB' }}
					/>
					<FontAwesomeIcon
						icon={faBootstrap}
						size='4x'
						style={
							darkTheme ? { color: 'rgb(172, 91, 147)' } : { color: '#602C50' }
						}
					/>
					<FontAwesomeIcon
						icon={faGit}
						size='4x'
						style={{ color: '#F1502F' }}
					/>
				</div>
			</div>
		</section>
	);
}
