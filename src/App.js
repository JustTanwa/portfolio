import Intro from './components/Intro';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
	return (
		<div className='page-layout'>
			<Sidebar />
			<main className='main-content'>
				<Intro />
			</main>
		</div>
	);
}

export default App;
