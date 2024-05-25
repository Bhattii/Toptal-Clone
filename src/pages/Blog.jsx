/** @format */

import { BlogHeader } from '../components/BlogHeader';
// import Footer from '../layouts/Footer';
import { Header } from '../layouts/Header';

export const Blog = () => {
	return (
		<>
			<div className=''>
				<Header />
			</div>
			<div className='relative top-16'>
				<BlogHeader />
			</div>

			{/* <Footer /> */}
		</>
	);
};
