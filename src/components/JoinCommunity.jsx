export const JoinCommunity = () => {
  return (
    <>
      <div className="bg-white flex justify-center">
        <div className="max-w-[1200px text-center text-nowrap">
          <div className=" text-sm sm:text-xl flex justify-center items-center flex-col lg:flex-row gap-7 border-t p-20 w-full">
            <h2 className="">Join the Toptal community.</h2>
            <button className="bg-green-400 hover:bg-green-600 rounded px-16 py-3  text-white text-center text-xl ">
              Hire Top Talent
            </button>
            <p className="">or</p>
            <button className="transition border border-green-600 hover:bg-green-600 rounded px-12 py-3 text-green-600 hover:text-white text-center">
              Apply as a Freelance
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
