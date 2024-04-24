const projectImg1 = process.env.PUBLIC_URL + '/assets/images/projectsImgs/ibge_spa.png';
const projectImg2 = process.env.PUBLIC_URL + '/assets/images/projectsImgs/e-commerce_and_chart.png';
const projectImg3 = process.env.PUBLIC_URL + '/assets/images/projectsImgs/programming_challenge.png';
const projectImg4 = process.env.PUBLIC_URL + '/assets/images/projectsImgs/car_showcase.png';
const projectImg5 = process.env.PUBLIC_URL + '/assets/images/projectsImgs/bootcamp_laravel.gif';
const projectImg6 = process.env.PUBLIC_URL + '/assets/images/projectsImgs/restfull_api.png';
const projectImg7 = process.env.PUBLIC_URL + '/assets/images/projectsImgs/springboot_and_react_app.png';
const projectImg8 = process.env.PUBLIC_URL + '/assets/images/projectsImgs/minefield.png';
const projectImg9 = process.env.PUBLIC_URL + '/assets/images/projectsImgs/state_office_system.png';
const projectImg10 = process.env.PUBLIC_URL + '/assets/images/projectsImgs/responsive_web_store.png';
const projectImg11 = process.env.PUBLIC_URL + '/assets/images/projectsImgs/wordle_clone.png';
const projectImg12 = process.env.PUBLIC_URL + '/assets/images/projectsImgs/projeto_ia_dados_enem.png';

export interface IProjectData {
	id: number;
	repoUrl: string;
	title: string;
	description?: string;
	category: string;
	appUrl?: string;
	img: string;
}

export const projectsData: IProjectData[] = [
	{
		id: 1,
		img: projectImg1,
		repoUrl: 'https://github.com/eduardolpsss/spaIbgeReactRedux',
		title: 'IBGE SPA',
		description:
			'Using an advanced state management library for React to manipulate the IBGE API referring to information of municipalities in Brazil. MUI component library was also used.',
		category: 'TS | React | Redux',
		appUrl: 'https://spaibgereactredux.netlify.app/',
	},
	{
		id: 2,
		img: projectImg2,
		repoUrl: 'https://github.com/eduardolpsss/desafio-supera',
		title: 'E-commerce and chart',
		description: 'Responsive e-commerce with dinamic shopping cart made using features of React (useContext).',
		category: 'TS | React ',
		appUrl: 'https://desafio-supera.netlify.app/',
	},
	{
		id: 3,
		img: projectImg3,
		repoUrl: 'https://github.com/eduardolpsss/desafio-sharenergy-2023-01/tree/eduardo-luiz-pontes-de-souza',
		title: 'Programming challenge',
		description:
			'Login page, users list with pagination, filters and diinamic search, select query page on the HTTP Cat API, fetch Random Dog API and a clients CRUD using MongoDB.',
		category: 'Node.js | TS | React | MongoDB ',
	},
	{
		id: 4,
		img: projectImg4,
		repoUrl: 'https://github.com/eduardolpsss/vitrine_fullstackApp_python_react',
		title: 'Car showcase',
		description:
			'Full stack app with responsive listing, and admin page for adding, editing and deleting cars that uses JSON Web Token and Bcrypt to store sensitive information in the database.',
		category: 'Python (Flask) | JS | React | MongoDB',
	},
	{
		id: 5,
		img: projectImg5,
		repoUrl: 'https://github.com/eduardolpsss/bootcamp-laravel-react',
		title: 'Bootcamp Laravel (login and view posts)',
		description:
			'User registration and posts using MVC model. POO development with auth and policies (the user has two different views).',
		category: 'PHP (Laravel) | React | MySQL',
	},
	{
		id: 6,
		img: projectImg6,
		repoUrl: 'https://github.com/eduardolpsss/java-vue-restful-app',
		title: 'RESTful API',
		description:
			'Using the build environment automation tool Maven, Spring Boot and other dependencies on the back-end.  For the the front-end I used Vue with Vuetify.',
		category: 'Java | Vue.js',
	},
	{
		id: 7,
		img: projectImg7,
		repoUrl: 'https://github.com/eduardolpsss/springboot-react',
		title: 'Spring Boot and React app',
		description: 'Developed using Java (Spring Boot) and React.',
		category: 'Java | React',
	},
	{
		id: 8,
		img: projectImg8,
		repoUrl: 'https://github.com/eduardolpsss/junit-test-java',
		title: 'Minefield',
		description:
			'Minefield made in Java using the principles of functional programming and OOP to use unit test with JUnit.',
		category: 'Java',
	},
	{
		id: 9,
		img: projectImg9,
		repoUrl: 'https://github.com/eduardolpsss/first-home-state-office-system',
		title: 'State Office System',
		description: 'OOP Java app make things easier in a estate office.',
		category: 'Java',
	},
	{
		id: 10,
		img: projectImg10,
		repoUrl: 'https://github.com/eduardolpsss/flutterWebStore',
		title: 'Responsive Web Store',
		description: 'Organizing a responsive store using Flutter, in the future I should add more features.',
		category: 'Flutter',
	},
	{
		id: 11,
		img: projectImg11,
		repoUrl: 'https://github.com/eduardolpsss/wordle-clone-app',
		title: 'Wordle Clone',
		description:
			'Wordle clone made with HTML, CSS (Animate.css) and JS. WordsAPI was used to request the words used in the game (contains a array with some words to play).',
		category: 'JS',
	},
	{
		id: 12,
		img: projectImg12,
		repoUrl: 'https://github.com/eduardolpsss/Projeto_IA_DadosEnem',
		title: 'Exploratory analysis and use of AI in Enem microdata',
		description:
			'Exploratory graphic analysis and map of the Inep Microdata for the years 2020 and 2021 of Enem, later the application of artificial intelligence for graphic plots with data crossing was made possible. Project presented for the artificial intelligence subject along with its documentation.',
		category: 'Python',
	},
];
