// import { image1 } from "../assets/img/DegDev1.svg";
// import { image2 } from "../assets/img/DegDev2.svg";
// import { image3 } from "../assets/img/DegDev3.svg";
// import { image4 } from "../assets/img/DegDev4.svg";
// import { Check } from "../assets/img/checkBlue.png";

export const HowNavData = () => {
  return (
    <>
      <div className="bg-white flex justify-center items-center " id="how">
        <div className="max-w-[1200px]">
          <div>
            <div className=" flex gap-1">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0">
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  stroke="blue"
                  strokeWidth="1"
                  fill="white"
                />
                <text
                  x="20"
                  y="20"
                  textAnchor="middle"
                  fontSize="20"
                  fill="blue"
                  dy=".3em">
                  1
                </text>
              </svg>
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold">
                  Tell us what kind of Talent you need
                </h2>
                <h3 className="text-sm  font-semibold">
                  What kind of talent do you need? What’s your tech stack? What
                  specific skills do you need?
                </h3>
                <p className="text-sm opacity-80">
                  Submit a job to let us know what you need—the more details the
                  better. Whether it’s a single freelancer or a cross-functional
                  team of ten, Toptal can handle it. After we get the job
                  description, our internal team of experts will review it and
                  connect with you in order to answer any questions and to get
                  an even better understanding of your exact needs.
                </p>
              </div>
            </div>
            <div className=" flex gap-1">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0">
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  stroke="blue"
                  strokeWidth="1"
                  fill="white"
                />
                <text
                  x="20"
                  y="20"
                  textAnchor="middle"
                  fontSize="20"
                  fill="blue"
                  dy=".3em">
                  2
                </text>
              </svg>
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold">
                  We’ll find you the Perfect Match
                </h2>
                <h3 className="text-sm  font-semibold">
                  {` We'll notify you with a status report concerning your request
                  within a few days.`}
                </h3>
                <ol className="">
                  <li className="">
                    <p>
                      We have someone in our network who is ready to work with
                      you immediately.
                    </p>
                  </li>
                  <li>
                    There is a candidate being evaluated who matches your
                    qualifications, and we will notify you upon the completion
                    of the screening process.
                  </li>
                  <li>
                    We currently do not have a match for your request, so our
                    team will work tirelessly to find one.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
