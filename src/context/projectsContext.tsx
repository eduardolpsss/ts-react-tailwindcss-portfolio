import { useState, createContext, ReactNode } from 'react';
import { projectsData, IProjectData } from '../data/projects';

// Interface para representar o contexto dos projetos
interface ProjectsContextType {
  projects: IProjectData[];
  setProjects: React.Dispatch<React.SetStateAction<IProjectData[]>>;
  searchProject: string;
  setSearchProject: React.Dispatch<React.SetStateAction<string>>;
  searchProjectsByTitle: IProjectData[];
  selectProject: string;
  setSelectProject: React.Dispatch<React.SetStateAction<string>>;
  selectProjectsByCategory: IProjectData[];
}

// Create projects context
export const ProjectsContext = createContext<ProjectsContextType>({
  projects: [],
  setProjects: () => {},
  searchProject: '',
  setSearchProject: () => {},
  searchProjectsByTitle: [],
  selectProject: '',
  setSelectProject: () => {},
  selectProjectsByCategory: [],
});

// Create the projects context provider
export const ProjectsProvider = (props: { children: ReactNode }) => {
  const [projects, setProjects] = useState<IProjectData[]>(projectsData);
  const [searchProject, setSearchProject] = useState<string>('');
  const [selectProject, setSelectProject] = useState<string>('');

  // Search projects by project title
  const searchProjectsByTitle = projects.filter((item) => {
    const result = item.title
      .toLowerCase()
      .includes(searchProject.toLowerCase())
      ? item
      : searchProject === ''
      ? item
      : '';
    return result;
  });

  // Select projects by project category
  const selectProjectsByCategory = projects.filter((item) => {
    let category =
      item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectProject);
  });

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        searchProject,
        setSearchProject,
        searchProjectsByTitle,
        selectProject,
        setSelectProject,
        selectProjectsByCategory,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};
