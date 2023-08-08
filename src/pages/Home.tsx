import ProjectsGrid from '../components/projects/ProjectsGrid';
import AppBanner from '../components/shared/AppBanner';
import { ProjectsProvider } from '../context/projectsContext';

const Home = () => {
  return (
    <div className='container mx-auto'>
      <AppBanner></AppBanner>

      <ProjectsProvider>
        <ProjectsGrid></ProjectsGrid>
      </ProjectsProvider>
    </div>
  );
};
export default Home;
