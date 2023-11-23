import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

function AppFooterCopyright() {
	return (
		<div className="fixed bottom-0 w-full py-4 bg-white dark:bg-ternary-dark border-t-2 border-primary-light dark:border-secondary-dark shadow-lg hover:shadow-xl">
			<div className="font-general-regular flex justify-center items-center text-center">
				<a
					href="https://github.com/eduardolpsss"
					target="_blank"
					rel="noopener noreferrer"
					className="mr-4"
					title="GitHub"
				>
					<FiGithub
						className="text-ternary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 transition"
						size={20}
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/eduardolpsss/"
					target="_blank"
					rel="noopener noreferrer"
					className="mr-4"
					title="LinkedIn"
				>
					<FiLinkedin
						className="text-ternary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 transition"
						size={20}
					/>
				</a>
				<a href="mailto:eduardo.pontes2801@gmail.com" target="_blank" rel="noopener noreferrer" title="E-mail">
					<FiMail
						className="text-ternary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 transition"
						size={20}
					/>
				</a>
			</div>
			<div className="mt-2 font-general-regular text-center text-ternary-dark dark:text-ternary-light">
				© {new Date().getFullYear()} Eduardo Pontes.
			</div>
		</div>
	);
}

export default AppFooterCopyright;
