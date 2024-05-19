import screenProcess from "../assets/img/3ScreeningProcess.svg";

export const TheToptalScreenProcess = () => {
  return (
    <>
      <div className="bg-white p-11 flex flex-col justify-center items-center">
        <div className="max-w-[1200px] flex flex-col justify-center items-center">
          <div className="mb-16 flex flex-col  gap-3 justify-center items-center">
            <h2 className="text-5xl text-gray-900 font-semibold text-center">
              The Toptal Screening Process
            </h2>
            <p className="w-1/2 p-8 text-gray-600 text-center">
              Each applicant to the Toptal network must pass a screening process
              designed to measure subject matter expertise, professionalism, and
              communication skills. The full screening process takes between 2-5
              weeks to complete.
            </p>
          </div>
          <div className="flex gap-3 justify-center ">
            <div className="w-1/2 xl:pl-28 flex flex-col gap-12 h-full">
              <div className="flex gap-10">
                <div className="flex flex-col">
                  <span className="text-sm">step</span>
                  <span className="text-4xl">1</span>
                </div>
                <div>
                  <h3 className="text-2xl">Language and Personality</h3>
                  <p className="py-3">
                    The first step of the screening process is a comprehensive
                    English language and communication interview evaluation. We
                    also assess personality traits, looking for candidates who
                    are passionate and fully engaged in their work.
                  </p>
                  <div className="flex items-end gap-1 lg:hidden">
                    <span className="text-xl md:text-4xl text-blue-700">
                      26.4%
                    </span>
                    <span className="text-blue-700">of applicants pass</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-10">
                <div className="flex flex-col">
                  <span className="text-sm">step</span>
                  <span className="text-4xl">2</span>
                </div>
                <div>
                  <h3 className="text-2xl">In-Depth Skill Review</h3>
                  <p className="py-3">
                    We also test each applicant technical knowledge and
                    problem-solving ability through various assessments. Every
                    member of the Toptal network is an expert in their domain,
                    and we typically only advance candidates with exceptional
                    results in this phase.
                  </p>
                  <div className="flex items-end gap-1 lg:hidden">
                    <span className="text-xl md:text-4xl text-blue-700">
                      7.4%
                    </span>
                    <span className="text-blue-700">of applicants pass</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-10">
                <div className="flex flex-col">
                  <span className="text-sm">step</span>
                  <span className="text-4xl">3</span>
                </div>
                <div>
                  <h3 className="text-2xl">Live Screening</h3>
                  <p className="py-3">
                    Each candidate is interviewed by Toptal screeners who are
                    experts in their functional domain. Our screeners provide
                    specific live exercises, looking for problem-solving
                    ability, depth of experience, communication ability, and
                    creativity.
                  </p>
                  <div className="flex items-end gap-1 lg:hidden">
                    <span className="text-xl md:text-4xl text-blue-700">
                      3.6%
                    </span>
                    <span className="text-blue-700">of applicants pass</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-10">
                <div className="flex flex-col">
                  <span className="text-sm">step</span>
                  <span className="text-4xl">4</span>
                </div>
                <div>
                  <h3 className="text-2xl">Test Projects</h3>
                  <p className="py-3">
                    Each candidate is assigned a test project to evaluate
                    whether they can walk the walk. Test projects take 1-3 weeks
                    are comprehensive and provide real-world scenarios for
                    candidates to demonstrate their competence, thoroughness,
                    professionalism, and integrity.
                  </p>
                  <div className="flex items-end gap-1 lg:hidden">
                    <span className="text-xl md:text-4xl text-blue-700">
                      3.2%
                    </span>
                    <span className="text-blue-700">of applicants pass</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-10">
                <div className="flex flex-col">
                  <span className="text-sm">step</span>
                  <span className="text-4xl">5</span>
                </div>
                <div>
                  <h3 className="text-2xl">Continued Excellence</h3>
                  <p className="py-3">
                    Members of the Toptal network maintain a track record of
                    excellence while working with clients. As a quality-first
                    company, our focus is on the top for talent and the top for
                    clients, and this principle permeates through to every
                    engagement and every delivered project.
                  </p>
                  <div className="flex items-end gap-1 lg:hidden">
                    <span className="text-xl md:text-4xl text-blue-700">
                      3.0%
                    </span>
                    <span className="text-blue-700">of applicants pass</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2  hidden lg:block">
              <img
                src={screenProcess}
                alt="Toptal Screening Process"
                className="max-h-[1200px] "
              />
            </div>
          </div>
          <div className="my-16 flex flex-col  gap-3 justify-center items-center">
            <h2 className="text-6xl text-gray-900 text-center">The Top 3%</h2>
            <p className="w-1/2 p-8 text-gray-600 text-center">
              Toptal is an elite global network of design, business, and
              technology experts unlike any other. The Toptal network is home to
              people with exceptional backgrounds: authors, founders, inventors,
              researchers, thought leaders, mentors, and more. We are
              problem-solvers who value integrity, and top companies rely on us
              for their most important initiatives.
            </p>
            <div className="flex flex-col lg:flex-row gap-10">
              <button className="bg-green-400 hover:bg-green-600 rounded px-16 py-3  text-white text-center text-xl ">
                Hire Top Talent
              </button>
              <button className="transition border border-green-600 hover:bg-green-600 rounded px-12 py-3 text-green-600 hover:text-white text-center text-xl">
                Apply as a Freelance
              </button>
            </div>
            <p className="w-1/2 text-center text-sm text-gray-400 py-8">
              The screening process may vary or be changed as needed at the
              company discretion Toptal Connects the Top 3% of Freelanc
            </p>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
