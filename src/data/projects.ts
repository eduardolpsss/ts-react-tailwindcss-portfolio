import projectImg1 from '../images/projectsImgs/ibge_spa.png';
import projectImg2 from '../images/projectsImgs/e-commerce_and_chart.png';
import projectImg3 from '../images/projectsImgs/programming_challenge.png';
import projectImg4 from '../images/projectsImgs/car_showcase.png';
import projectImg5 from '../images/projectsImgs/bootcamp_laravel.gif';
import projectImg6 from '../images/projectsImgs/restfull_api.png';
import projectImg7 from '../images/projectsImgs/minefield.png';
import projectImg8 from '../images/projectsImgs/springboot_and_react_app.png';
import projectImg9 from '../images/projectsImgs/state_office_system.png';
import projectImg10 from '../images/projectsImgs/responsive_web_store.png';
import projectImg11 from '../images/projectsImgs/wordle_clone.png';
import projectImg12 from '../images/projectsImgs/projeto_ia_dados_enem.png';

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
    category: 'TypeScript | React | Redux',
    appUrl: 'https://spaibgereactredux.netlify.app/',
  },
  {
    id: 2,
    img: projectImg2,
    repoUrl: 'https://github.com/eduardolpsss/desafio-supera',
    title: 'E-commerce and chart',
    description:
      'Responsive e-commerce with dinamic shopping cart made using features of React (useContext).',
    category: 'TypeScript | React ',
    appUrl: 'https://desafio-supera.netlify.app/',
  },
  {
    id: 3,
    img: projectImg3,
    repoUrl:
      'https://github.com/eduardolpsss/desafio-sharenergy-2023-01/tree/eduardo-luiz-pontes-de-souza',
    title: 'Programming challenge',
    description:
      'Login page, users list with pagination, filters and diinamic search, select query page on the HTTP Cat API, fetch Random Dog API and a clients CRUD using MongoDB.',
    category: 'Node.js | TypeScript | React | MongoDB ',
  },
  {
    id: 4,
    img: projectImg4,
    repoUrl:
      'https://github.com/eduardolpsss/vitrine_fullstackApp_python_react',
    title: 'Car showcase',
    description:
      'Full stack app with responsive listing, and admin page for adding, editing and deleting cars that uses JSON Web Token and Bcrypt to store sensitive information in the database.',
    category: 'Python (Flask) | JavaScript | React | MongoDB',
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
    repoUrl: 'https://github.com/eduardolpsss/junit-test-java',
    title: 'Minefield',
    description:
      'Minefield made in Java using the principles of functional programming and OOP to use unit test with JUnit.',
    category: 'Java',
  },
  {
    id: 8,
    img: projectImg8,
    repoUrl: 'https://github.com/eduardolpsss/springboot-react',
    title: 'Spring Boot and React app',
    description: 'Developed using Java (Spring Boot) and React.',
    category: 'Java | React',
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
    description:
      'Organizing a responsive store using Flutter, in the future I should add more features.',
    category: 'Flutter',
  },
  {
    id: 11,
    img: projectImg11,
    repoUrl: 'https://github.com/eduardolpsss/wordle-clone-app',
    title: 'Wordle Clone',
    description:
      'Wordle clone made with HTML, CSS (Animate.css) and JavaScript. WordsAPI was used to request the words used in the game (contains a array with some words to play).',
    category: 'JavaScript',
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
