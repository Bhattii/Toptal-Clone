import './App.css';
import CertificateSlider from './components/CertificateSlider';
import Developer from './components/Developer';
import HomeHeader from './components/HomeHeader';
import HomeOne from './components/HomeOne';
import ImagesSlider from './components/ImageSlider';
// import Practice from './components/Practice';
import { Header } from './layouts/Header';

function App() {
  return (
    <> 
      <Header />
      <HomeOne />
      <CertificateSlider />
      <ImagesSlider />
      <HomeHeader/>
      <Developer/>
      {/* <Practice /> */}
    </>
  );
}

export default App;
