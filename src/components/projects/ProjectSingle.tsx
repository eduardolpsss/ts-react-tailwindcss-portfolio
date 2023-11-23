import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface ProjectSingleProps {
	image?: string;
	repoUrl: string;
	title: string;
	description?: string;
	category: string;
	appUrl?: string;
}

const ProjectSingle: React.FC<ProjectSingleProps> = ({ image, repoUrl, title, description, category, appUrl }) => {
	return (
		<div className="h-full bg-secondary-light dark:bg-ternary-dark rounded-xl mb-10 sm:mb-0 shadow-lg hover:shadow-xl flex flex-col">
			<div className="rounded-t-xl p-4 bg-secondary-light dark:bg-ternary-dark">
				{appUrl ? (
					<div className="flex justify-between items-center text-ternary-dark dark:text-ternary-light">
						<a
							href={repoUrl}
							className="flex items-center hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FiGithub className="mr-2" />
							Repository
						</a>

						<a
							href={appUrl}
							target="__blank"
							className="flex items-center hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
							rel="noopener noreferrer"
						>
							Website <FiExternalLink className="ml-2" />
						</a>
					</div>
				) : (
					<div className="flex justify-center items-center text-ternary-dark dark:text-ternary-light">
						<a
							href={repoUrl}
							className="flex items-center hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FiGithub className="mr-2" />
							Repository
						</a>
					</div>
				)}
			</div>

			<div className="flex justify-center items-center">
				<img
					src={image}
					alt="Single Project"
					style={{
						maxHeight: '270px',
					}}
					className="border-none"
				/>
			</div>
			<div className="text-center px-4 py-6 flex-grow">
				<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">{title}</p>

				<p className="text-lg text-ternary-dark dark:text-ternary-light mb-4">{category}</p>

				<p className="text-lg text-ternary-dark dark:text-ternary-light">{description}</p>
			</div>
		</div>
	);
};

export default ProjectSingle;
