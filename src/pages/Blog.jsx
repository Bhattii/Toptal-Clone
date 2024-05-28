/** @format */

import { BlogHeader } from '../components/BlogHeader';
import { Engineering } from '../components/Engineering';

// import Footer from '../layouts/Footer';
import { Header } from '../layouts/Header';
import { WorldClass } from '../components/WorldClass';

export const Blog = () => {
	return (
		<>
			<Header />

			<div className='relative top-16'>
				<BlogHeader />
			</div>
			<div className='relative bottom-10'>
				<Engineering />
			</div>
			<WorldClass />
			{/* <Footer /> */}
		</>
	);
};
