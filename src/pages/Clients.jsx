/** @format */

import { ClientsHeading } from '../components/ClientsHeading';
import { ConnectTheTop } from '../components/ConnectTheTop';
import ExploreTrending from '../components/ExploreTrending';
import { FeaturedEnterpriseClients } from '../components/FeaturedEnterpriseClients';
import { FeaturedStartupClients } from '../components/FeaturedStartupClients';
import { HearFromClients } from '../components/HearFromClients';
import { JoinCommunity } from '../components/JoinCommunity';
import { ToptalDevelopers } from '../components/ToptalDevelopers';
import { TrustedByLeading } from '../components/TrustedByLeading';
import Footer from '../layouts/Footer';
import { Header } from '../layouts/Header';

export const Clients = () => {
	return (
		<>
			<Header />
			<ClientsHeading />
			<FeaturedEnterpriseClients />
			<FeaturedStartupClients />
			<TrustedByLeading />
			<HearFromClients />
			<ConnectTheTop />
			<ToptalDevelopers />
			<ExploreTrending />
			<JoinCommunity />
			<Footer />
		</>
	);
};
