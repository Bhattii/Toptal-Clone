/** @format */

import { VideoCard } from './VideoCard';

function OrganizationsChoose() {
	return (
		<>
			<div
				className='bg-white p-11 flex flex-col justify-center items-center overflow-hidden'
				id="id='Organization'">
				<div className='max-w-[1200px]'>
					<div className=' flex flex-col justify-center items-center mb-4 '>
						<h2 className='text-3xl md:text-5xl text-gray-900 font-semibold text-center'>
							Why Organizations Choose Toptal
						</h2>
						<p className='m-6 text-center text-gray-500 '>
							Discover the many ways in which our clients have embraced the
							benefits of the Toptal network.
						</p>
					</div>
					<div className='grid gap-5 md:grid-cols-2  lg:grid-cols-3 '>
						<div className=''>{<VideoCard />}</div>
						<div className=''>{<VideoCard />}</div>
						<div className=''>{<VideoCard />}</div>
						<div className=''>{<VideoCard />}</div>
						<div className=''>{<VideoCard />}</div>
						<div className=''>{<VideoCard />}</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default OrganizationsChoose;
