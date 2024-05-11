import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hiring() {
  return (
    <>
      <div className="bg-white p-11 flex flex-col justify-center items-center ">
        <div className="max-w-[1200px]">
          <h2 className="text-4xl text-center font-semibold">
            Hiring Made Easy
          </h2>

          <div className="flex flex-col gap-6 md:flex-row">
            <div>
              <div className="flex items-center my-11">
                <hr className="w-full border-t border-blue-500 flex items-center justify-center" />
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="w-20 h-20 bg-white text-blue-500"
                />
                <hr className="w-full border-1 border-blue-500" />
              </div>
              <h3 className="font-semibold text-xl text-gray-800 text-center">
                Talk to One of Our Industry Experts
              </h3>
              <p className="text-gray-500">
                An expert on our team will work with you to understand your
                goals, technical needs, and team&nbsp;dynamics.
              </p>
            </div>
            <div>
              <div className="flex items-center  my-11">
                <hr className="w-full border-t border-blue-500 flex items-center justify-center" />
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="w-20 h-20 bg-white text-blue-500"
                />
                <hr className="w-full border-1 border-blue-500" />
              </div>
              <h3 className="font-semibold text-xl text-gray-800 text-center">
                Work With Hand-Selected Talent
              </h3>
              <p className="text-gray-500">
                Within days, we shall introduce you to the right talent for your
                project. Average time to match is under 24 hours.
              </p>
            </div>
            <div>
              <div className="flex items-center  my-11">
                <hr className="w-full border-t border-blue-500 flex items-center justify-center" />
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="w-20 h-20 bg-white text-blue-500"
                />
                <hr className="w-full border-1 border-blue-500" />
              </div>
              <h3 className="font-semibold text-xl text-gray-800 text-center">
                The Right Fit, Guaranteed
              </h3>
              <p className="text-gray-500">
                Work with your new team member on a trial basis (pay only if
                satisfied), ensuring you hire the right people for the job.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hiring;
