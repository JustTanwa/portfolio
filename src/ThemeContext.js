import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
const changeTheme = createContext();

export function useTheme() {
	return useContext(ThemeContext);
}

export function useChangeTheme() {
	return useContext(changeTheme);
}

export function ThemeProvider({ children }) {
	const [darkTheme, setDarkTheme] = useState(false);

	function toggleTheme() {
		setDarkTheme((darkTheme) => !darkTheme);
	}

	return (
		<ThemeContext.Provider value={darkTheme}>
			<changeTheme.Provider value={toggleTheme}>
				{children}
			</changeTheme.Provider>
		</ThemeContext.Provider>
	);
}
