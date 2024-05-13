import "./App.css";
import BuildTeam from "./components/BuildTeam";
import CertificateSlider from "./components/CertificateSlider";
import Developer from "./components/Developer";
import Hiring from "./components/Hiring";

import HomeOne from "./components/HomeOne";
import ImagesSlider from "./components/ImageSlider";
import MeetTalent from "./components/MeetTalent";
import OrganizationsChoose from "./components/OrganizationsChoose";
// import Practice from './components/Practice';
import { Header } from "./layouts/Header";

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
      {/* <Practice /> */}
    </>
  );
}

export default App;
