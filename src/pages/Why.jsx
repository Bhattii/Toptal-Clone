import { WhyNav } from "../components/WhyNav";
import WhyToptal from "../components/WhyToptal";
import { WhyToptalTable } from "../components/WhyToptalTable";
import { Header } from "../layouts/Header";

export const Why = () => {
  return (
    <>
      <Header />
      <WhyToptal />
      <WhyNav />
      <WhyToptalTable />
    </>
  );
};
