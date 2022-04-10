import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngleDoubleDown,
	faEnvelope,
	faHome,
	faLaptopCode,
	faPortrait,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../img/TS.png';

export default function Sidebar() {
	return (
		<nav className='sidebar'>
			<div className='brand-logo'>
				<img src={Logo} alt='logo'></img>
			</div>
			<div className='nav-link-container'>
				<a href='#intro' className='intro-link'>
					<FontAwesomeIcon icon={faHome} size='2x' />
				</a>
				<a href='#aboutme' className='aboutme-link'>
					<FontAwesomeIcon icon={faPortrait} size='2x' />
				</a>
				<a href='#projects' className='projects-link'>
					<FontAwesomeIcon icon={faLaptopCode} size='2x' />
				</a>
				<a href='#contact' className='contact-link'>
					<FontAwesomeIcon icon={faEnvelope} size='2x' />
				</a>
			</div>
			<div className='scroll-arrow'>
				<FontAwesomeIcon icon={faAngleDoubleDown} size='2x' />
			</div>
		</nav>
	);
}
