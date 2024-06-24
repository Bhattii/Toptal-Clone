/** @format */
import about from '../assets/img/About/about-background.avif';

export const AboutToptal = () => {
	return (
		<>
			<div className='pt-16 flex justify-center items-center'>
				<div className=''>
					<img
						src={about}
						className='relative'
					/>
					<div className='absolute bottom-24 text-white mx-20'>
						<h2 className='text-lg pb-10'>About Toptal</h2>
						<h3 className=' text-5xl w-2/3 leading-tight'>
							We connect the world’s top talent with the world’s top
							organizations.
						</h3>
					</div>
				</div>
			</div>
		</>
	);
};
