/** @format */
import image from '../assets/img/Certificates/CreateEngineeringUI.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import girl from '../assets/img/Certificates/girldUI.png';
import { faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
export const MostReadArticle = () => {
	return (
		<>
			<div className='bg-gray-100 flex justify-center p-5 md:p-11 items-center w-full'>
				<div className='max-w-[1200px] py-11 w-full'>
					<div>
						<h2 className='text-3xl '>Most-read Articles</h2>
						<hr className='my-5 w-full' />
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
						<div className=' shadow-xl hover:border-blue-300 border group cursor-pointer'>
							<div className='relative'>
								<img
									src={image}
									className='w-full z-0'
								/>
								<div className='hidden group-hover:block absolute left-0 top-0 right-0 w-full h-full bg-blue-700 opacity-50'></div>
							</div>
							<img
								src={girl}
								alt=''
								className=' w-16 relative bottom-5 left-5 '
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
									<h3 className='text-xl font-semibold py-2 group-hover:text-blue-800'>
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
									<div className='text-blue-800 hidden group-hover:block'>
										<span>Continute Reading</span>
										<FontAwesomeIcon
											icon={faArrowRight}
											className='ml-2'
										/>
									</div>
								</div>
							</div>
						</div>
						<div className=' shadow-xl hover:border-blue-300 border group cursor-pointer'>
							<div className='relative'>
								<img
									src={image}
									className='w-full z-0'
								/>
								<div className='hidden group-hover:block absolute left-0 top-0 right-0 w-full h-full bg-blue-700 opacity-50'></div>
							</div>
							<img
								src={girl}
								alt=''
								className=' w-16 relative bottom-5 left-5 '
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
									<h3 className='text-xl font-semibold py-2 group-hover:text-blue-800'>
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
									<div className='text-blue-800 hidden group-hover:block'>
										<span>Continute Reading</span>
										<FontAwesomeIcon
											icon={faArrowRight}
											className='ml-2'
										/>
									</div>
								</div>
							</div>
						</div>
						<div className=' shadow-xl hover:border-blue-300 border group cursor-pointer'>
							<div className='relative'>
								<img
									src={image}
									className='w-full z-0'
								/>
								<div className='hidden group-hover:block absolute left-0 top-0 right-0 w-full h-full bg-blue-700 opacity-50'></div>
							</div>
							<img
								src={girl}
								alt=''
								className=' w-16 relative bottom-5 left-5 '
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
									<h3 className='text-xl font-semibold py-2 group-hover:text-blue-800'>
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
									<div className='text-blue-800 hidden group-hover:block'>
										<span>Continute Reading</span>
										<FontAwesomeIcon
											icon={faArrowRight}
											className='ml-2'
										/>
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
