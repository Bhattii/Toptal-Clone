import { ConnectTheTop } from "../components/ConnectTheTop";

import ExploreTrending from "../components/ExploreTrending";
import { JoinCommunity } from "../components/JoinCommunity";
import { ToptalDevelopers } from "../components/ToptalDevelopers";
import { WhyNav } from "../components/WhyNav";
import WhyToptal from "../components/WhyToptal";
import { WhyNavData } from "../components/WhyNavData";
import Footer from "../layouts/Footer";
import { HowNavData } from "../components/HowNavData";
import { Header } from "../layouts/Header";


export const Why = () => {
  return (
    <>
     <Header/>
        <WhyToptal />
        <div className="sticky top-32 w-full z-10">
          <WhyNav />
        </div>
        
        <HowNavData />
        <WhyNavData />

        <ConnectTheTop />
        <ToptalDevelopers />
        <ExploreTrending />
        <JoinCommunity />
        <Footer />
    
    </>
  );
};
