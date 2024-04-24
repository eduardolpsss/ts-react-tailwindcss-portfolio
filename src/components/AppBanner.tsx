import { FiArrowDownCircle } from 'react-icons/fi';

const AppBanner = () => {
	const pdfUrl = process.env.PUBLIC_URL + '/assets/files/eduardo-luiz-pontes-de-souza.pdf';
	const pdfUrlEn = process.env.PUBLIC_URL + '/assets/files/eduardo-luiz-pontes-de-souza-en.pdf';

	return (
		<div className="w-full md:w-1/3 text-left">
			<h1 className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-ternary-light uppercase">
				Hi, Iam Eduardo Pontes 👋
			</h1>
			<p className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-secondary-dark dark:text-ternary-light">
				Full-stack developer
			</p>

			<div className="flex justify-left">
				<a
					download
					href={pdfUrl}
					className="
            font-general-medium
            flex justify-center 
            items-center
            w-40
            sm:w-40 
            mt-12 
            bg-primary-light
            dark:bg-ternary-dark
            mb-6 
            sm:mb-0 
            text-lg
            border 
            border-gray-200
            dark:border-secondary-dark
            py-2.5
            sm:py-3
            shadow-lg 
            rounded-l-lg
            bg-primary-light 
            text-ternary-dark
            dark:text-ternary-light
            hover:text-gray-400
            dark:hover:text-gray-50
          "
					aria-label="Download CV"
				>
					<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
					<span className="text-sm sm:text-lg font-general-medium duration-100">Download CV</span>
				</a>

				<a
					download
					href={pdfUrlEn}
					className="
            font-general-small
            flex justify-center 
            items-center
            w-10 
            sm:w-10 
            mt-12 
            mb-6
            bg-primary-light
            dark:bg-ternary-dark
            sm:mb-0 
            text-lg
            border 
            border-gray-200
            dark:border-secondary-dark
            py-2.5
            sm:py-3
            shadow-lg 
            rounded-r-lg
            bg-primary-light 
            text-ternary-dark
            dark:text-ternary-light
            hover:text-gray-400
            dark:hover:text-gray-50
          "
					aria-label="en"
				>
					<span className="text-sm sm:text-lg font-general-medium duration-100">en</span>
				</a>
			</div>
		</div>
	);
};

export default AppBanner;
