import React from 'react';
import { useChangeTheme } from '../ThemeContext';
import './ToggleSwitch.css';

export default function ToggleSwitch() {
	const changeTheme = useChangeTheme();
	return (
		<label className='switch'>
			<input type='checkbox' onChange={changeTheme} />
			<span className='slider'></span>
		</label>
	);
}
