import project2 from './img/project2.png';
import furious from './img/furiousconsulting.png';

export const projects = [
	{
		id: 1,
		imgsrc: furious,
		livelink: 'https://furiousconsulting.netlify.app/',
		github: 'https://github.com/JustTanwa/FuriousConsultant',
		description: (
			<p>
				A modern style business consulting website coded from scratch using
				HTML5, CSS3, JavaScript and jQuery. I am hosting this website on
				Netlify, and you click on the link to see a live demo or view my code on
				GitHub. <br />
				<br />
				The motivation for the website was to focus on building a landing page
				with "Call to Action" buttons to draw the attention of the visitors. I
				learnt about layout, creating dynamic content and using the Fetch API to
				retreive external data.
			</p>
		),
	},
	{
		id: 2,
		imgsrc: project2,
		livelink: 'https://ticytacytoe.netlify.app/',
		github: 'https://github.com/JustTanwa/tic-tac-toe',
		description: (
			<p>
				I built this Tic-Tac-Toe game using ReactJS and styled the web app using
				CSS3. Currently, you can play the game against another person or two
				levels of difficulty against an AI. <br />
				<br />
				In the future, I plan to include some online functionality using
				WebSocket.
				<br />
				<br />
				You can checkout the game by clicking the Live Demo link, where the game
				is being hosted on Netlify.
			</p>
		),
	},
	{
		id: 3,
		imgsrc: project2,
		livelink: 'https//www.google.com',
		github: 'https://github.com/',
		description: (
			<p>
				I used to travel a lot before the the current pandemic and I thought
				when I start travelling again, I would want a way to create a website to
				track all the trip information. <br />
				<br />
				So I built this travelling itinerary tracker using ReactJS, Bootstrap
				and Firebase for authentication
			</p>
		),
	},
];
