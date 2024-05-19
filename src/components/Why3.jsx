export const Why3 = () => {
  return (
    <>
      <div className="bg-blue-900 p-11 flex flex-col justify-center items-center">
        <div className="max-w-[1200px] w-full flex flex-col justify-center items-center">
          <div className="pt-20 pb-10 text-white text-center w-2/3">
            <h2 className=" text-5xl p-4">Why 3%?</h2>
            <div className="p-5 text-xl">
              <p>
                Our name "Toptal" comes from Top Talent — meaning we constantly
                strive to find and work with the best from around the world. Our
                rigorous screening process identifies experts in their domains
                who have passion and drive.
              </p>
              <br />
              <p>
                Of the thousands of applications Toptal sees each month,
                typically fewer than 3% are&nbsp;accepted.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
            <button className="bg-green-400 hover:bg-opacity-80 rounded px-16 py-2 w-fit text-white text-center text-xl ">
              Hire Top Talent
            </button>
            <button className="border rounded px-12 py-2 w-fit text-white text-center text-xl ">
              Apply as a Freelance
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
