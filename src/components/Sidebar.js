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
import LogoDark from '../img/TS-dark.png';
import { useTheme } from '../ThemeContext';

export default function Sidebar() {
	const darkTheme = useTheme();
	return (
		<nav
			className='sidebar'
			style={darkTheme ? { backgroundColor: '#222' } : {}}
		>
			<div className='brand-logo'>
				<img src={darkTheme ? LogoDark : Logo} alt='logo' width={'200px'}></img>
			</div>
			<div className='nav-link-container'>
				<a href='#intro' className='intro-link' aria-label='Home page'>
					<FontAwesomeIcon icon={faHome} size='2x' />
				</a>
				<a
					href='#projects'
					className='projects-link'
					aria-label='Projects page'
				>
					<FontAwesomeIcon icon={faLaptopCode} size='2x' />
				</a>
				<a href='#aboutme' className='aboutme-link' aria-label='About page'>
					<FontAwesomeIcon icon={faPortrait} size='2x' />
				</a>
				<a href='#contact' className='contact-link' aria-label='Contact page'>
					<FontAwesomeIcon icon={faEnvelope} size='2x' />
				</a>
			</div>
			<FontAwesomeIcon
				className='arrow-down'
				icon={faAngleDoubleDown}
				size='2x'
			/>
		</nav>
	);
}
