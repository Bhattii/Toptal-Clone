/** @format */
import { faSearch, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import blogbg from '../assets/img/Certificates/BlogBg.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FlipCard1 from './FlipCard1';
import FlipCard2 from './FlipCard2';
export const BlogHeader = () => {
	return (
		<>
			<div className='w-full h-full overflow-hidden flex flex-col items-center justify-center'>
				<img
					src={blogbg}
					alt=''
					className='object-cover relative min-h-[450px] lg:min-h-[700px] 2xl:h-[600px]'
				/>
				<div className='absolute top-0 text-white p-11 max-w-[1200px]  '>
					<div className='w-full '>
						<div className='flex md:flex-col justify-between'>
							<h2 className='text-4xl md:text-6xl font-light py-3'>
								Toptal Blog
							</h2>
							<div className='flex justify-between gap-32'>
								<div className=''>
									<p className='py-6 pr-20 hidden lg:block'>
										The Toptal Blog is the top hub for developers, designers,
										finance experts, executives, and entrepreneurs, featuring
										key technology updates, tutorials, freelancer resources, and
										management insights.
									</p>
									<div className='flex items-center gap-3 text-sm'>
										<button className='group border border-gray-400 border-opacity-50 p-4 rounded hover:bg-gray-300 transition'>
											<FontAwesomeIcon
												icon={faShareAlt}
												className='w-8 h-4 group-hover:text-blue-900'></FontAwesomeIcon>
										</button>
										<div className='hidden md:block'>
											<span className='mr-2'>132.3k</span>
											<span className='uppercase'>shares</span>
										</div>
									</div>
								</div>
								<div className='hidden lg:block'>
									<h2 className=' uppercase text-center pb-6 text-blue-200 text-opacity-50'>
										Featured In
									</h2>
									<div className='flex gap-7 relative xl:left-20'>
										<FlipCard1 />
										<FlipCard2 />
									</div>
								</div>
							</div>
						</div>
						<div className='w-full flex flex-col md:flex-row items-center gap-2 mt-5'>
							<h3>
								Toptal core team members share their experience, expertise, and
								perspectives on the
							</h3>
							<button className='py-1 px-2 border text-sm rounded-md hover:bg-blue-900 bg-opacity-50'>
								Toptal Edge Blog
							</button>
						</div>
					</div>
					<form
						className='group w-full flex items-center justify-between py-2 px-6 border gap-2 my-10 hover:bg-white focus:bg-white
					'>
						<div className='w-full flex items-center gap-4'>
							<FontAwesomeIcon
								icon={faSearch}
								className='group-hover:text-black'
							/>
							<input
								type='text'
								placeholder='What are you looking for?'
								className=' text-2xl bg-transparent text-black w-full border-none outline-none'
							/>
						</div>

						<button
							type='search'
							className='hidden group-hover:block bg-blue-800 p-2'>
							Search
						</button>
					</form>
				</div>
			</div>
		</>
	);
};
