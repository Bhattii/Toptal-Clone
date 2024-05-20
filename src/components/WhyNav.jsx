export const WhyNav = () => {
  return (
    <>
      <div className="bg-white px-11 flex flex-col justify-center items-center">
        <div className="max-w-[1200px] w-full flex flex-col justify-center items-center"></div>
        <div className="sticky top-0 left-0 right-0">
          <div className=" text-blue-900 text-xl font-semibold bg-white mx-40 shadow-lg relative bottom-16 left-0 right-0">
            <ul className="flex  justify-around h-full">
              <li className="py-12 px-32 border-b-4 border-opacity-0 border-blue-900 hover:border-opacity-100">
                <a href="#">Why</a>
              </li>
              <li className="py-12 px-32 border-b-4 border-opacity-0 border-blue-900 hover:border-opacity-100">
                <a href="">How</a>
              </li>
              <li className="py-12 px-32 border-b-4 border-opacity-0 border-blue-900 hover:border-opacity-100">
                <a href="">What</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
