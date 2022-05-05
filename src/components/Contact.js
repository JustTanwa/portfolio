import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTheme } from '../ThemeContext';
import './Contact.css';
import Form from './Form';

export default function Contact() {
	const darkTheme = useTheme();
	return (
		<section
			id='contact'
			className='contact-page'
			style={darkTheme ? { backgroundColor: '#414141', color: '#fff' } : {}}
		>
			<div className='contact-title'>
				<h2>Contact me</h2>
				<ul className='contact-list'>
					<li className='address'>
						<span
							className='icon-circular'
							style={darkTheme ? { borderColor: '#00ADB5' } : {}}
						>
							<FontAwesomeIcon
								icon={faLocationDot}
								size='2x'
								style={darkTheme ? { color: '#fff' } : {}}
							/>
						</span>
						<address style={darkTheme ? { color: '#fff' } : {}}>
							Stockholm, Sweden
						</address>
					</li>
					<li className='email-address'>
						<span
							className='icon-circular'
							style={darkTheme ? { borderColor: '#00ADB5' } : {}}
						>
							<FontAwesomeIcon
								icon={faEnvelope}
								size='2x'
								style={darkTheme ? { color: '#fff' } : {}}
							/>
						</span>
						<a
							className='email'
							href='mailto:tanwasripan@hotmail.co.uk'
							style={darkTheme ? { color: '#fff' } : {}}
						>
							tanwasripan@hotmail.co.uk
						</a>
					</li>
					<li className='contact-linkedin'>
						<span
							className='icon-circular'
							style={darkTheme ? { borderColor: '#00ADB5' } : {}}
						>
							<FontAwesomeIcon
								icon={faLinkedin}
								size='2x'
								style={darkTheme ? { color: '#fff' } : {}}
							/>
						</span>
						<a
							href='https://www.linkedin.com/in/tanwasripan/'
							className='linkedin'
							target='_blank'
							rel='noreferrer'
							style={darkTheme ? { color: '#fff' } : {}}
						>
							linkedin/tanwasripan
						</a>
					</li>
				</ul>
			</div>
			<div className='contact-form-wrapper'>
				<Form />
			</div>
		</section>
	);
}
