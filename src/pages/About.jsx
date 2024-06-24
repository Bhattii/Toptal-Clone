/** @format */

import { AboutNav } from '../components/AboutNav';
import { AboutToptal } from '../components/AboutToptal';
import { Header } from '../layouts/Header';

export const About = () => {
	return (
		<>
			<Header />
			<AboutToptal />
			<div className='sticky top-32 w-full z-10'>
				<AboutNav />
			</div>
		</>
	);
};
