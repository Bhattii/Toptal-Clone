/** @format */

import { AboutNav } from '../components/AboutNav';
import { AboutToptal } from '../components/AboutToptal';
import { LeadershipTeam } from '../components/LeadershipTeam';
import { Header } from '../layouts/Header';

export const About = () => {
	return (
		<>
			<Header />
			<AboutToptal />
			<AboutNav />
			<LeadershipTeam />
		</>
	);
};
