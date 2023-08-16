import React from 'react';
import profileImg from '../images/profileImg/profile1.jpg';

const AboutMe = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-20'>
      <div className='md:col-span-1'>
        <div className='py-2 sm:py-5 mt-2 sm:mt-5'>
          <p className='font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light'>
            About me
          </p>
        </div>
        <h3 className='font-general-regular text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3'>
          Graduated in Computer Science from the Catholic University of
          Brasilia, I have experience working as a front-end developer. I have
          developed several personal and academic projects that have given me
          autonomy in finding and solving different problems, whether working in
          a team using agile methods or on personal projects. I have solid
          knowledge and professional experience with TypeScript and React.
        </h3>
      </div>

      <div className='md:col-span-1 flex justify-center items-center'>
        <div className='py-2 sm:py-5 mt-2 sm:mt-5'>
          <img
            className='rounded-full'
            style={{
              maxHeight: '350px',
            }}
            src={profileImg}
            alt='Profile'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
