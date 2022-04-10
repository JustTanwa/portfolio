import React from 'react';
import { useTheme } from '../ThemeContext';
import './Form.css';

export default function Form() {
	const darkTheme = useTheme();
	return (
		<div className='form-container'>
			<form name='contact' method='post'>
				<input type='hidden' name='form-name' value='contact' />
				<div className='input-group'>
					<label htmlFor='name' className='form-label'>
						Full Name
					</label>
					<input
						type='text'
						name='name'
						placeholder='Enter your name'
						maxLength={50}
						className='form-control'
						required
					/>
				</div>
				<div className='input-group'>
					<label htmlFor='email' className='form-label'>
						Email
					</label>
					<input
						type='email'
						name='email'
						placeholder='Enter your email address'
						className='form-control'
						required
					/>
				</div>
				<div className='input-group'>
					<label htmlFor='message' className='form-label'>
						Message
					</label>
					<textarea
						type='textarea'
						name='message'
						rows='10'
						placeholder='Type your message here'
						className='form-control'
						required
					/>
				</div>
				<div className='btn-container'>
					<button
						type='submit'
						className='send-btn'
						style={darkTheme ? { backgroundColor: '#00ADB5' } : {}}
					>
						Send
					</button>
				</div>
			</form>
		</div>
	);
}
