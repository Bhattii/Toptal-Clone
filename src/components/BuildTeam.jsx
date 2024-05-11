import arrow from "../assets/img/arrow.svg";
import leading from "../assets/img/leading.svg";
import level from "../assets/img/level.svg";
import theTop from "../assets/img/top.svg";
import person1 from "../assets/img/image1.jpg";
import person2 from "../assets/img/image2.jpg";
import person3 from "../assets/img/image3.jpg";

function BuildTeam() {
  return (
    <div className="bg-gray-100 p-20 flex justify-center">
      <div className="  flex flex-col items-center justify-center gap-7 md:flex-row">
        <div className="w-1/2">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl  font-semibold pb-5">
              Build Amazing Teams, On Demand
            </h2>
            <p className="text-gray-500">
              Quickly assemble the teams you need, exactly when you need them.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <img src={arrow} className="mb-6" alt="Hire" />
              <h2 className="mb-3 heading-xs font-semibold">Hire Quickly</h2>
              <p className=" text-gray-700 font-light">
                Hire in under 48 hours. Scale up or down, no strings attached.
                We offer flexible engagements from hourly to full-time.
              </p>
            </div>
            <div>
              <img src={theTop} className="mb-6" alt="The top 3%" />
              <h2 className="mb-3 heading-xs font-semibold">The Top 3%</h2>
              <p className=" text-gray-700 font-light">
                Every applicant to the Toptal network is rigorously tested and
                vetted. Our highly selective process leads to a 98%
                trial-to-hire success rate.
              </p>
            </div>
            <div>
              <img
                src={leading}
                className="mb-6"
                alt="Leading the Future of Work"
              />
              <h2 className="mb-3 heading-xs font-semibold">
                Leading the Future of Work
              </h2>
              <p className=" text-gray-700 font-light">
                Our network is ready for tomorrows business challenges by
                embracing advanced and specialized skills including blockchain
                and AI.
              </p>
            </div>
            <div>
              <img src={level} className="mb-6" alt="A Level Above" />
              <h2 className="mb-3 heading-xs font-semibold">A Level Above</h2>
              <p className=" text-gray-700 font-light">
                Every single freelancer in our global network embodies the
                highest levels of integrity, professionalism, and communication.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 2xl:w-1/4  hidden lg:block">
          <div className="flex flex-col 2xl:items-start">
            <div className="bg-white w-60 border relative top-20 shadow-2xl">
              <img src={person1} alt="" />
              <h3 className="text-center font-bold">Introduction 1</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>

            <div className="bg-white w-60 border relative left-64 shadow-2xl z-10">
              <img src={person2} alt="" />
              <h3 className="text-center font-bold">Introduction 2</h3>
              <p className=" text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>

            <div className="bg-white w-60 border relative bottom-5 left-20 shadow-2xl z-0">
              <img src={person3} alt="" />
              <h3 className="text-center font-bold">Introduction 3</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildTeam;
