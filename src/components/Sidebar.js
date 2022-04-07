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
				<a href='#intro'>
					<FontAwesomeIcon icon={faHome} size='2x' />
					<p className='link-title'>Home</p>
				</a>
				<a href='#aboutme'>
					<FontAwesomeIcon icon={faPortrait} size='2x' />
					<p className='link-title'>About me</p>
				</a>
				<a href='#projects'>
					<FontAwesomeIcon icon={faLaptopCode} size='2x' />
					<p className='link-title'>Projects</p>
				</a>
				<a href='#contact'>
					<FontAwesomeIcon icon={faEnvelope} size='2x' />
					<p className='link-title'>Contact</p>
				</a>
			</div>
			<FontAwesomeIcon icon={faAngleDoubleDown} size='2x' />
		</nav>
	);
}
