import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './ThemeContext';

let container = document.getElementById('root');
let root = ReactDOM.createRoot(container);

root.render(
	<ThemeProvider>
		<App />
	</ThemeProvider>
);
