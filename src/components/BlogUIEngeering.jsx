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
								<div className='ml-2'>
									<div className='flex gap-1'>
										<span>By</span>
										<h3 className=' font-semibold'>Anna Muratova</h3>
									</div>
									<div className='flex gap-1'>
										<svg
											width='16'
											height='16'
											viewBox='0 0 16 16'
											fill='green'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fill='green'
												d='m2.3438,5.6562l-2.3438,2.3438,2.3438,2.3438v3.3137h3.3137l2.3425,2.3425,2.3425-2.3425h3.315v-3.315l2.3425-2.3425-2.3425-2.3425v-3.3137h-3.3138l-2.3437-2.3438-2.3438,2.3438h-3.3125v3.3125Zm5.0488,2.7528l2.754-2.7654.9705.9739-3.7245,3.7399-.9705-.9739-1.3672-1.3733.9705-.9752,1.3672,1.3739Z'></path>
											<path
												className='text-white dark:text-transparent'
												fillRule='evenodd'
												clipRule='evenodd'
												d='M10.1465 5.64374L7.39254 8.4091L6.02535 7.03518L5.05485 8.01039L6.42204 9.38364L7.39254 10.3575L11.117 6.61761L10.1465 5.64374Z'
												fill='white'></path>
										</svg>
										<h3 className='text-green-600 whitespace-nowrap text-sm'>
											<span className='font-semibold '>Verified Expert</span> in
											Design
										</h3>
									</div>
									<p>
										Anna is a UI/UX designer experienced in creating UI
										animations and improving the usability of digital products.
										She has collaborated with a range of clients, from small
										startups to larger companies, to create intuitive mobile
										apps, redesign websites with improved visual aesthetics, and
										establish branding that represents company values.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
