import BuildTeam from "../components/BuildTeam";
import CertificateSlider from "../components/CertificateSlider";
import ClientSatification from "../components/ClientSatification";
import ImagesSlider from "../components/ImageSlider";
import Collaborations from "../components/Collaborations";
import Developer from "../components/Developer";
import DiscoverOurSkills from "../components/DiscoverOurSkills";
import ExploreTrending from "../components/ExploreTrending";
import HireTheTop from "../components/HireTheTop";
import Hiring from "../components/Hiring";
import MeetTalent from "../components/MeetTalent";
import OrganizationsChoose from "../components/OrganizationsChoose";
import ReadyToGetStarted from "../components/ReadyToGetStarted";
import TopTalent from "../components/TopTalent";
import Footer from "../layouts/Footer";
import { Header } from "../layouts/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <HireTheTop />
      <CertificateSlider />
      <ImagesSlider />
      <Developer />
      <BuildTeam />
      <Hiring />
      <MeetTalent />
      <OrganizationsChoose />
      <Collaborations />
      <ReadyToGetStarted />
      <ClientSatification />
      <ExploreTrending />
      <DiscoverOurSkills />
      <TopTalent />
      <Footer />
    </>
  );
};
