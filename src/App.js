import Intro from './components/Intro';
import Sidebar from './components/Sidebar';
import './App.css';
import Aboutme from './components/Aboutme';

function App() {
	return (
		<div className='page-layout'>
			<Sidebar />
			<main className='main-content'>
				<Intro />
				<Aboutme />
			</main>
		</div>
	);
}

export default App;
