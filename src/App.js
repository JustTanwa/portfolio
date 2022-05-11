import Intro from './components/Intro';
import Sidebar from './components/Sidebar';
import './App.css';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useTheme } from './ThemeContext';
import ToggleSwitch from './components/ToggleSwitch';

function App() {
	const darkTheme = useTheme();
	return (
		<div
			className='page-layout'
			style={darkTheme ? { backgroundColor: '#313131', color: '#fff' } : {}}
		>
			<Sidebar />
			<main className='main-content'>
				<div className='switch-wrapper'>
					<ToggleSwitch />
				</div>
				<Intro />
				<Projects />
				<Aboutme />
				<Contact />
				<footer>&copy; 2022 Tanwa Sripan</footer>
			</main>
		</div>
	);
}

export default App;
