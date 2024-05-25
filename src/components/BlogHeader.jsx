/** @format */
import blogbg from '../assets/img/Certificates/BlogBg.svg';
export const BlogHeader = () => {
	return (
		<>
			<div className=''>
				<img
					src={blogbg}
					alt=''
					className='object-cover relative'
				/>
				<div className='absolute top-0 text-white p-11 max-w-[1200px]'>
					<div className='p-11 max-w'>
						<h2 className='text-6xl font-light pb-3'>Toptal Blog</h2>
						<p className='py-3'>
							The Toptal Blog is the top hub for developers, designers, finance
							experts, executives, and entrepreneurs, featuring key technology
							updates, tutorials, freelancer resources, and management insights.
						</p>
						<div className='flex'>
							<button></button>
							<span>132.3k</span>
							<span className='uppercase'>shares</span>
						</div>
						<div>
							<h2>Featured In</h2>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
