import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css';
import Form from './Form';

export default function Contact() {
	return (
		<section id='contact' className='contact-page'>
			<div className='contact-title'>
				<h2>Contact me</h2>
				<div className='information-grouping'>
					<div className='address'>
						<FontAwesomeIcon icon={faLocationDot} size='2x' />
						<address>Stockholm, Sweden</address>
					</div>
					<div className='email-address'>
						<FontAwesomeIcon icon={faEnvelope} size='2x' />
						<p className='email'>tanwasripan@hotmail.co.uk</p>
					</div>
				</div>
			</div>
			<div className='contact-form-wrapper'>
				<Form />
			</div>
		</section>
	);
}
