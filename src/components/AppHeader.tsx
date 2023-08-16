import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import useThemeSwitcher from '../hooks/useThemeSwitcher';

const AppHeader: React.FC = () => {
  const [activeTheme, setActiveTheme] = useThemeSwitcher() as [
    string,
    React.Dispatch<React.SetStateAction<string>>,
  ];

  const toggleTheme = () => {
    setActiveTheme((prevTheme: string) =>
      prevTheme === 'dark' ? 'light' : 'dark',
    );
  };

  return (
    <div className='sm:container sm:mx-auto'>
      <div className='z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6'>
        {/* Header menu links */}
        <div className='sm:hidden flex items-center px-4 sm:px-0'>
          {/* Theme switcher small screen */}
          <div
            onClick={toggleTheme}
            aria-label='Theme Switcher'
            className='ml-auto bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer'
          >
            {activeTheme === 'dark' ? (
              <FiMoon className='text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl' />
            ) : (
              <FiSun className='text-gray-200 hover:text-gray-50 text-xl' />
            )}
          </div>
        </div>

        {/* Header right section buttons */}
        <div className='hidden sm:flex items-center ml-auto'>
          {/* Theme switcher large screen */}
          <div
            onClick={toggleTheme}
            aria-label='Theme Switcher'
            className='bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer'
          >
            {activeTheme === 'dark' ? (
              <FiMoon className='text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl' />
            ) : (
              <FiSun className='text-gray-200 hover:text-gray-50 text-xl' />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
