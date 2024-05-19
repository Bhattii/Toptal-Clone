import { Why3 } from "../components/Why3";
import { Header } from "../layouts/Header";
import CertificateSlider from "../components/CertificateSlider";
import { TheToptalScreenProcess } from "../components/TheToptalScreenProcess";
import { ConnectTheTop } from "../components/ConnectTheTop";
import { ToptalDevelopers } from "../components/ToptalDevelopers";
import ExploreTrending from "../components/ExploreTrending";

export const Top = () => {
  return (
    <>
      <Header />
      <Why3 />
      <CertificateSlider />
      <TheToptalScreenProcess />
      <ConnectTheTop />
      <ToptalDevelopers />
      <ExploreTrending />
    </>
  );
};
