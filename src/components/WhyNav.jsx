export const WhyNav = () => {
  return (
    <>
      <div className=" bg-opacity-0 p-11 flex flex-col justify-center items-center">
        <div className="2xl:max-w-[1200px] flex flex-col justify-center items-center w-full">
          <div className="w-full sticky top-0">
            <div className=" text-blue-900 text-xl  font-semibold bg-white shadow-lg relative bottom-28 left-0 right-0 overflow-hidden">
              <ul className="flex justify-around h-full w-full">
                <li className="py-10 sm:px-5 md:px-10 lg:px-16 xl:px-32 border-b-4 border-opacity-0 border-blue-900 hover:border-opacity-100">
                  <a href="#">Why</a>
                </li>
                <li className="py-10 sm:px-5 md:px-10 lg:px-20 xl:px-32 border-b-4 border-opacity-0 border-blue-900 hover:border-opacity-100">
                  <a href="">How</a>
                </li>
                <li className="py-10 sm:px-5 md:px-10 lg:px-20 xl:px-32 border-b-4 border-opacity-0 border-blue-900 hover:border-opacity-100">
                  <a href="">What</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
