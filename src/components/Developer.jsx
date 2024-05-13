import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import developer from "../assets/img/developer icon.svg";
import designer from "../assets/img/designer.svg";
import finance from "../assets/img/Finance Expert.svg";
import product from "../assets/img/Product Manager.svg";
import project from "../assets/img/Project Manager.svg";
import marketing from "../assets/img/Marketing Expert.svg";

function Developer() {
  return (
    <div className="p-20 bg-white flex justify-center items-center">
      <div className="max-w-[1200px]">
        <div className=" flex flex-col justify-center items-center mb-4 ">
          <h2 className="text-5xl text-gray-900 font-semibold text-center">
            Leverage World-Class Talent
          </h2>
          <p className="m-6 text-center text-gray-500 max-w-[600px]">
            We are the largest, globally-distributed network of top business,
            design, and technology talent, ready to tackle your most important
            initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-1 max-w-[1300px]">
          <div className="bg-gray-200 p-10 hover:cursor-pointer  hover:bg-blue-600 hover:text-white group transition">
            <img
              src={developer}
              alt="Developer"
              className="mb-8 group-hover:bg-gray-200 "
            />
            <h3 className="text-xl my-4">Developer</h3>
            <p>
              Seasoned software engineer with expertise across multiple
              technologies.
            </p>
            <div
              className={`flex justify-between items-center my-4 invisible group-hover:visible`}>
              <a href="" className="hover:underline text-lg">
                View Developer
              </a>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>

          <div className="bg-gray-200 p-10 hover:cursor-pointer hover:bg-blue-600 hover:text-white group transition">
            <img
              src={designer}
              alt="Designer"
              className="mb-8 group-hover:bg-gray-200"
            />
            <h3 className="text-xl my-4">Designer</h3>
            <p>
              Expert UI, UX, Visual, and Interaction designers as well as a wide
              range of illustrators, animators, and more.
            </p>
            <div
              className={`flex justify-between items-center my-4 invisible group-hover:visible`}>
              <a href="" className="hover:underline text-lg">
                View Designer
              </a>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>

          <div className="bg-gray-200 p-10 hover:cursor-pointer hover:bg-blue-600 hover:text-white group transition">
            <img
              src={finance}
              alt="Finance Expert"
              className="mb-8 group-hover:bg-gray-200"
            />
            <h3 className="text-xl my-4">Finance Expert</h3>
            <p>
              Experts in financial modeling & valuation, startup funding,
              interim CFO work, and market sizing.
            </p>
            <div
              className={`flex justify-between items-center my-4 invisible group-hover:visible`}>
              <a href="" className="hover:underline text-lg">
                Finance Expert
              </a>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>

          <div className="bg-gray-200 p-10 hover:cursor-pointer hover:bg-blue-600 hover:text-white group transition">
            <img
              src={project}
              alt="Project Manager"
              className="mb-8 group-hover:bg-gray-200"
            />
            <h3 className="text-xl my-4">Project Manager</h3>
            <p>
              Digital and technical project managers, scrum masters, and more
              with expertise in numerous PM tools, frameworks, and styles
            </p>
            <div
              className={`flex justify-between items-center my-4 invisible group-hover:visible `}>
              <a href="" className="hover:underline text-lg">
                View Project Manager
              </a>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>

          <div className="bg-gray-200 p-10 hover:cursor-pointer hover:bg-blue-600 hover:text-white group transition">
            <img
              src={product}
              alt="Product Manager"
              className="mb-8 group-hover:bg-gray-200"
            />
            <h3 className="text-xl my-4">Product Manager</h3>
            <p>
              Digital product managers, scrum product owners with expertise in
              numerous industries like banking, healthcare, ecommerce, and more.
            </p>
            <div
              className={`flex justify-between items-center my-4 invisible group-hover:visible`}>
              <a href="" className="hover:underline text-lg">
                View Product Manager
              </a>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>

          <div className="bg-gray-200 p-10 hover:cursor-pointer hover:bg-blue-600 hover:text-white group transition">
            <img
              src={marketing}
              alt="Marketing Expert"
              className="mb-8 group-hover:bg-gray-200"
            />
            <h3 className="text-xl my-4">Marketing Expert</h3>
            <p>
              Experts in digital marketing, growth marketing, content creation,
              market research, brand strategy execution, social media marketing,
              and more.
            </p>
            <div
              className={`flex justify-between items-center my-4 invisible group-hover:visible`}>
              <a href="" className="hover:underline text-lg">
                Marketing Expert
              </a>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developer;
