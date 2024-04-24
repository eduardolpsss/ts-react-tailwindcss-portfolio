import React from 'react';

const AboutMe = () => {
	const profileImg = process.env.PUBLIC_URL + '/assets/images/profileImg/profile1.jpg';

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-20">
			<div className="md:col-span-1">
				<div className="py-2 sm:py-5 mt-2 sm:mt-5">
					<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
						About me
					</p>
				</div>
				<h3 className="font-general-regular text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3">
					Graduated in Computer Science at the Universidade Católica de Brasília, I have experience in fullstack
					development.
				</h3>
				<h3 className="font-general-regular text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3">
					My professional journey began in 2021, and since then I've been developing personal and academic projects.
					These experiences have given me the autonomy to face a variety of challenges, whether working in a team or on
					individual projects. I have solid knowledge and professional experience with TypeScript and React, as well as
					experience in back-end development with Java and PHP.
				</h3>
			</div>

			<div className="md:col-span-1 flex justify-center items-center">
				<div className="py-2 sm:py-5 mt-2 sm:mt-5">
					<img
						className="rounded-full"
						style={{
							maxHeight: '350px',
						}}
						src={profileImg}
						alt="Profile"
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
