import React from 'react';
import { useChangeTheme } from '../ThemeContext';
import './ToggleSwitch.css';

export default function ToggleSwitch() {
	const changeTheme = useChangeTheme();
	return (
		<label htmlFor='theme' className='switch'>
			<input
				type='checkbox'
				id='theme'
				name='theme'
				onChange={changeTheme}
				arial-label='switch-to-dark-theme'
			/>
			<span className='slider'></span>
		</label>
	);
}
