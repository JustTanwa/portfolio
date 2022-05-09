import project2 from './img/project2.png';
import furious from './img/furiousconsulting.jpg';
import projectmui from './img/projectmui-min.png';

export const projects = [
	{
		id: 1,
		imgsrc: furious,
		livelink: 'https://furiousconsulting.netlify.app/',
		github: 'https://github.com/JustTanwa/FuriousConsultant',
		description: (
			<>
				<p>
					A modern style business consulting website coded from scratch using
					HTML5, CSS3, JavaScript and jQuery. I am hosting this website on
					Netlify, and you click on the link to see a live demo or view my code
					on GitHub.{' '}
				</p>
				<p>
					The motivation for the website was to focus on building a landing page
					with "Call to Action" buttons to draw the attention of the visitors. I
					learnt about layout, creating dynamic content and using the Fetch API
					to retreive external data.
				</p>
			</>
		),
	},
	{
		id: 2,
		imgsrc: project2,
		livelink: 'https://ticytacytoe.netlify.app/',
		github: 'https://github.com/JustTanwa/tic-tac-toe',
		description: (
			<>
				<p>
					I built this Tic-Tac-Toe game using ReactJS and styled the web app
					using CSS3. Currently, you can play the game against another person or
					two levels of difficulty against an AI.{' '}
				</p>
				<p>
					In the future, I plan to include some online functionality using
					WebSocket.
				</p>
				<p>
					You can check out the game by clicking the Live Demo link, where the
					game is being hosted on Netlify.
				</p>
			</>
		),
	},
	{
		id: 3,
		imgsrc: projectmui,
		livelink: 'https://caughtthemall.netlify.app/',
		github: 'https://github.com/JustTanwa/caught-them-all',
		description: (
			<>
				<p>
					I built this web application using ReactJS and Material UI version 5.
					The web application was designed purely with MUI components. The main
					use of the application is to allow for users to find and add Pokemons
					into their collection. The application makes fetch requests to the
					PokeAPI to gather the Pokemon data and store it in local storage.
				</p>
				<p>
					I learnt how to use styled components with MUI to develop a well
					designed web application with theming capibilities.
				</p>

				<p>
					Feel free to visit the Live Demo and try adding your favourite
					Pokemons and see their stats!
				</p>
			</>
		),
	},
];
