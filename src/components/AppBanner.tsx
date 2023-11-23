import { FiArrowDownCircle } from 'react-icons/fi';

const AppBanner = () => {
	const pdfUrl = process.env.PUBLIC_URL + '/assets/files/eduardo-luiz-pontes-de-souza.pdf';
	return (
		<div className="w-full md:w-1/3 text-left">
			<h1 className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-ternary-light uppercase">
				Hi, Iam Eduardo Pontes
			</h1>
			<p className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-secondary-dark dark:text-ternary-light">
				A full stack developer
			</p>

			<div className="flex justify-center sm:block">
				<a
					download
					href={pdfUrl}
					className="
            font-general-medium
            flex justify-center 
            items-center
            w-36 
            sm:w-48 
            mt-12 
            mb-6 
            sm:mb-0 
            text-lg
            border 
            border-ternary-light
            dark:border-ternary-dark 
            py-2.5
            sm:py-3
            shadow-lg 
            rounded-lg 
            bg-primary-light 
            focus:ring-1 
            focus:ring-indigo-900
            hover:bg-secondary-dark
            text-gray-500 
            hover:text-white
            duration-500
          "
					aria-label="Download Resume"
				>
					<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
					<span className="text-sm sm:text-lg font-general-medium duration-100">Download CV</span>
				</a>
			</div>
		</div>
	);
};

export default AppBanner;
