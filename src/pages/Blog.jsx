/** @format */

import { BlogHeader } from '../components/BlogHeader';
import { Engineering } from '../components/Engineering';

import Footer from '../layouts/Footer';
import { Header } from '../layouts/Header';
import { WorldClass } from '../components/WorldClass';
import { BlogUIEngeering } from '../components/BlogUIEngeering';
import { MostReadArticle } from '../components/MostReadArticle';
import { ToptalDevelopers } from '../components/ToptalDevelopers';
import { JoinCommunity } from '../components/JoinCommunity';

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
			<BlogUIEngeering />
			<MostReadArticle />
			<WorldClass />
			<ToptalDevelopers />
			<JoinCommunity />
			<Footer />
		</>
	);
};
