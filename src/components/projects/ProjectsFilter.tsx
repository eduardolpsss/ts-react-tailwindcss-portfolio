import React, { ChangeEvent } from 'react';

interface ProjectsFilterProps {
  setSelectProject: React.Dispatch<React.SetStateAction<string>>;
}

const selectOptions: string[] = [
  'All Projects',
  'Node.js',
  'Java',
  'PHP',
  'Python',
  'JavaScript',
  'TypeScript',
  'React',
  'Vue.js',
  'Flutter',
];

const ProjectsFilter: React.FC<ProjectsFilterProps> = ({
  setSelectProject,
}) => {
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectProject(selectedValue === 'All Projects' ? '' : selectedValue);
  };

  return (
    <select
      onChange={handleSelectChange}
      title='Select a project category'
      className='font-general-medium 
                px-2
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            '
    >
      {selectOptions.map((option) => (
        <option value={option} className='text-normal sm:text-md' key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ProjectsFilter;
