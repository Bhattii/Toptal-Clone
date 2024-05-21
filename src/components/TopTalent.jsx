function TopTalent() {
  return (
    <>
      <div className="bg-white p-20 flex flex-col justify-center items-center overflow-hidden">
        <div className="max-w-[1200px] flex flex-col justify-center items-center">
          <div className="mb-11 flex flex-col lg:flex-row gap-3 justify-center items-center">
            <h2 className="text-2xl text-gray-700 text-center">
              Top talent is in high demand.
            </h2>
            <span className="px-3 py-3">
              <a
                href=""
                className="text-xl bg-green-400 py-3 px-4 lg:px-8 font-bold shadow rounded-md text-white text-nowrap hover:bg-green-600">
                Start Hiring
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopTalent;
