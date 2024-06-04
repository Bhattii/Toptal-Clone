/** @format */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Engineering from '../assets/img/Certificates/CreateEngineeringUI.jpg';
import image from '../assets/img/Certificates/girldUI.png';
import { faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const BlogUIEngeering = () => {
	return (
		<>
			<div className='bg-white flex justify-center items-center p-5 lg:p-11'>
				<div className='max-w-[1200px] '>
					<div className=' shadow-xl'>
						<img
							src={Engineering}
							alt=''
							className='w-full'
						/>
						<div className='p-5'>
							<div className=''>
								<div className='text-blue-700 uppercase flex items-center text-sm gap-3'>
									<span>Design</span>
									<FontAwesomeIcon
										icon={faAngleRight}
										className='w-2'
									/>
									<span>UI Desgin</span>
								</div>
								<h3 className='text-xl font-semibold py-2'>
									Create Engineering UI Components: A Figma Animation Toturial{' '}
								</h3>
								<p className='py-5'>
									Figma’s intuitive animation features enhance usability by
									adding subtle motion effects to UI components like icons,
									buttons, and product cards.
								</p>
							</div>
							<div className='text-sm  uppercase flex justify-between pt-5'>
								<span>10 Minute Read</span>
								<div>
									<span> Continute Reading </span>
									<FontAwesomeIcon
										icon={faArrowRight}
										className='ml-2'
									/>
								</div>
							</div>
							<hr className='my-5' />
							<div className='flex gap-1'>
								<img
									src={image}
									alt=''
								/>
								<div>
									<div>
										<span>By</span>
										<h3>Anna Muratova</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
