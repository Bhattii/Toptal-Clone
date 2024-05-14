import "./App.css";
import { Header } from "./layouts/Header";
import BuildTeam from "./components/BuildTeam";
import CertificateSlider from "./components/CertificateSlider";
import Collaborations from "./components/Collaborations";
import Developer from "./components/Developer";
import Hiring from "./components/Hiring";
import HomeOne from "./components/HomeOne";
import ImagesSlider from "./components/ImageSlider";
import MeetTalent from "./components/MeetTalent";
import OrganizationsChoose from "./components/OrganizationsChoose";
import ReadyToGetStarted from "./components/ReadyToGetStarted";
// import Practice from './components/Practice';

function App() {
  return (
    <>
      <Header />
      <HomeOne />
      <CertificateSlider />
      <ImagesSlider />
      <Developer />
      <BuildTeam />
      <Hiring />
      <MeetTalent />
      <OrganizationsChoose />
      <Collaborations />
      <ReadyToGetStarted />
      {/* <Practice /> */}
    </>
  );
}

export default App;
