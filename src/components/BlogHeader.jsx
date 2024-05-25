/** @format */
import blogbg from '../assets/img/Certificates/BlogBg.svg';

export const BlogHeader = () => {
	<>
		<div className='flex justify-center items-center'>
			<img
				src={blogbg}
				alt='background'
				className='w-full h-full'
			/>
			<div>
				<h2 className='text-4xl font-light'>Toptal Blog</h2>
			</div>
		</div>
	</>;
};
