import ProjectsGrid from '../components/projects/ProjectsGrid';
import AppBanner from '../components/AppBanner';
import AboutMe from '../components/AboutMe';
import { ProjectsProvider } from '../context/projectsContext';

const Home = () => {
  return (
    <div className='container mx-auto'>
      <AppBanner></AppBanner>

      <ProjectsProvider>
        <ProjectsGrid />
        <AboutMe />
      </ProjectsProvider>
    </div>
  );
};
export default Home;
