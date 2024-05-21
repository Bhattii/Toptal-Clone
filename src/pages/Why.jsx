import { ConnectTheTop } from "../components/ConnectTheTop";

import ExploreTrending from "../components/ExploreTrending";
import { JoinCommunity } from "../components/JoinCommunity";
import { ToptalDevelopers } from "../components/ToptalDevelopers";
import { WhyNav } from "../components/WhyNav";
import WhyToptal from "../components/WhyToptal";
import { WhyToptalTable } from "../components/WhyToptalTable";
import Footer from "../layouts/Footer";

export const Why = () => {
  return (
    <>
      <div id="why">
        <WhyToptal />
        <div className="sticky top-32 w-full z-10">
          <WhyNav />
        </div>
        <WhyToptalTable />
        <ConnectTheTop />
        <ToptalDevelopers />
        <ExploreTrending />
        <JoinCommunity />
        <Footer />
      </div>
    </>
  );
};
