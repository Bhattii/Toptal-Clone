import "./App.css";
import BuildTeam from "./components/BuildTeam";
import CertificateSlider from "./components/CertificateSlider";
import Developer from "./components/Developer";
import Hiring from "./components/Hiring";
import HomeHeader from "./components/HomeHeader";
import HomeOne from "./components/HomeOne";
import ImagesSlider from "./components/ImageSlider";
import MeetTalent from "./components/MeetTalent";
// import Practice from './components/Practice';
import { Header } from "./layouts/Header";

function App() {
  return (
    <>
      <Header />
      <HomeOne />
      <CertificateSlider />
      <ImagesSlider />
      <HomeHeader />
      <Developer />
      <BuildTeam />
      <Hiring />
      <MeetTalent />
      {/* <Practice /> */}
    </>
  );
}

export default App;
