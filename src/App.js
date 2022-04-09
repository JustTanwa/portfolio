import Intro from './components/Intro';
import Sidebar from './components/Sidebar';
import './App.css';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
	return (
		<div className='page-layout'>
			<Sidebar />
			<main className='main-content'>
				<Intro />
				<Aboutme />
				<Projects />
				<Contact />
				<footer>&copy; 2022 Tanwa Sripan</footer>
			</main>
		</div>
	);
}

export default App;
