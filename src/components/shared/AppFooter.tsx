function AppFooterCopyright() {
  return (
    <div className='pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark'>
      <div className='font-general-regular flex justify-center items-center text-center'>
        <div className='text-lg text-ternary-dark dark:text-ternary-light'>
          {new Date().getFullYear()}
          <a
            href='https://github.com/eduardolpsss'
            target='__blank'
            className='hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500'
          >
            TypeScript React and Tailwind Portfolio
          </a>
          . Eduardo Pontes.
        </div>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
