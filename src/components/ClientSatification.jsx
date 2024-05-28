/** @format */

import global from '../assets/img/globale.svg';
import client from '../assets/img/client-logo.svg';
import trustpilot from '../assets/img/trustPilot.svg';
import bcgx from '../assets/img/BCG X.svg';

function ClientSatification() {
	return (
		<>
			<div className='bg-gray-100 p-11 flex flex-col justify-center items-center overflow-hidden'>
				<div className='max-w-[1200px] flex flex-col justify-center items-center'>
					<div className=' flex flex-col justify-center items-center my-11 border-b-2'>
						<h2 className='text-3xl md:text-5xl text-gray-900 font-semibold text-center'>
							Collaborations With Leading Brands
						</h2>
						<p className='mb-11 mt-4 text-center text-gray-500 '>
							We collaborate with a number of top-tier companies on imagining
							the future of work. Have a look.
						</p>
					</div>
					<div className='flex gap-6 justify-center items-center my-11'>
						<div className='flex justify-center items-center gap-2'>
							<img
								src={global}
								alt='globale'
							/>
							<div>
								<h3 className='font-bold'>140+</h3>
								<p className='text-gray-600 text-sm'>Countries Served</p>
							</div>
						</div>
						<div className='flex justify-center items-center gap-2'>
							<img
								src={client}
								alt='client'
								className='w-12'
							/>
							<div>
								<h3 className='font-bold'>23,000+</h3>
								<p className='text-gray-600 text-sm'>Clients Served</p>
							</div>
						</div>
					</div>
					<p className='my-5 flex justify-center items-center gap-1 text-xl'>
						<span>
							Our customers say
							<strong> Excellent </strong>
						</span>
						<div className='flex items-center space-x-1'>
							<span className='w-5 h-5'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 22 20'>
									<path
										fill='orange'
										d='m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z'></path>
								</svg>
							</span>
							<span className='w-5 h-5'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 22 20'>
									<path
										fill='orange'
										d='m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z'></path>
								</svg>
							</span>
							<span className='w-5 h-5'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 22 20'>
									<path
										fill='orange'
										d='m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z'></path>
								</svg>
							</span>
							<span className='w-5 h-5'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 22 20'>
									<path
										fill='orange'
										d='m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z'></path>
								</svg>
							</span>
							<span className='w-5 h-5'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 22 20'
									className='w-5 h-5 text-gray-300'>
									{/* Define a clipPath to clip the left half of the star */}
									<defs>
										<clipPath id='leftClip'>
											<rect
												x='0'
												y='0'
												width='11'
												height='20'
											/>
										</clipPath>
										{/* Define a clipPath to clip the right half of the star */}
										<clipPath id='rightClip'>
											<rect
												x='11'
												y='0'
												width='11'
												height='20'
											/>
										</clipPath>
									</defs>
									{/* Left half filled with orange */}
									<path
										fill='#E59C01'
										clipPath='url(#leftClip)'
										d='M8.53 7.6 11 0v15.202l-6.466 4.697 2.47-7.601L.538 7.6H8.53Z'></path>
									{/* Right half filled with gray */}
									<path
										fill='#C4C6CA'
										clipPath='url(#rightClip)'
										d='M13.47 7.6 11 0v15.202l6.466 4.697-2.47-7.601L21.462 7.6H13.47Z'></path>
								</svg>
							</span>
						</div>
						<span>4.8 out of 5 based on 1,691 reviews</span>
						<a href=''>
							<img
								src={trustpilot}
								alt='Trust Pilot logo'
							/>
						</a>
					</p>
					<div className='grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 lg:grid-cols-3'>
						<div className='bg-white px-6 shadow-xl'>
							<blockquote className='flex flex-col gap-5 py-6 '>
								<svg
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6 '>
									<path
										d='M0 13.6C0 17.7 2.47 20 5.247 20c2.469 0 4.32-2 4.32-4.3 0-2.4-1.748-4.2-4.114-4.2-.309 0-1.03.1-1.132.2.206-3.2 2.778-7.1 6.07-9.3L7.305 0C3.395 2.8 0 8 0 13.6zm14.61 0c0 4.1 2.365 6.4 5.143 6.4 2.572 0 4.424-2 4.424-4.3 0-2.4-1.749-4.2-4.115-4.2-.412 0-1.03.1-1.132.2.206-3.2 2.778-7.1 6.07-9.3L21.914 0c-4.013 2.8-7.305 8-7.305 13.6z'
										fill='blue'></path>
								</svg>
								<h3 className='font-bold'>
									I have been working with Toptal...
								</h3>

								<p className='text-gray-500 text-sm'>
									I have been working with Toptal engineers for several years
									now. They have all been exceptionally talented, very
									professional, highly productive, great team players, good
									communicators, and willing to go above and beyond. I have
									relied on them as key team players and they have never
								</p>

								<a
									href=''
									className='text-blue-800 hover:underline font-semibold'>
									See More
								</a>

								<div className='flex items-center space-x-1'>
									<span className='w-5 h-5'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 22 20'>
											<path
												fill='orange'
												d='m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z'></path>
										</svg>
									</span>
									<span className='w-5 h-5'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 22 20'>
											<path
												fill='orange'
												d='m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z'></path>
										</svg>
									</span>
									<span className='w-5 h-5'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 22 20'>
											<path
												fill='orange'
												d='m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z'></path>
										</svg>
									</span>
									<span className='w-5 h-5'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 22 20'>
											<path
												fill='orange'
												d='m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z'></path>
										</svg>
									</span>
									<span className='w-5 h-5'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 22 20'>
											<path
												fill='orange'
												d='m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z'></path>
										</svg>
									</span>
								</div>
								<div>
									<h4 className='text-sm font-semibold '>Ian Stokes-Rees</h4>
									<p className='text-sm text-gray-500 py-2'>Patner</p>
									<img
										src={bcgx}
										alt=''
									/>
								</div>
							</blockquote>
						</div>
						<div className='bg-white px-6 shadow-xl'>
							<blockquote className='flex flex-col gap-5 py-6 '>
								<svg
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6 '>
									<path
										d='M0 13.6C0 17.7 2.47 20 5.247 20c2.469 0 4.32-2 4.32-4.3 0-2.4-1.748-4.2-4.114-4.2-.309 0-1.03.1-1.132.2.206-3.2 2.778-7.1 6.07-9.3L7.305 0C3.395 2.8 0 8 0 13.6zm14.61 0c0 4.1 2.365 6.4 5.143 6.4 2.572 0 4.424-2 4.424-4.3 0-2.4-1.749-4.2-4.115-4.2-.412 0-1.03.1-1.132.2.206-3.2 2.778-7.1 6.07-9.3L21.914 0c-4.013 2.8-7.305 8-7.305 13.6z'
										fill='blue'></path>
								</svg>
								<h3 className='font-bold'>
									I have been working with Toptal...
								</h3>

								<p className='text-gray-500 text-sm'>
									I have been working with Toptal engineers for several years
									now. They have all been exceptionally talented, very
									professional, highly productive, great team players, good
									communicators, and willing to go above and beyond. I have
									relied on them as key team players and they have never
								</p>

								<a
									href=''
									className='text-blue-800 hover:underline font-semibold'>
									See More
								</a>

								<div className='flex items-center space-x-1'>
									<span className='w-5 h-5'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 22 20'>
											<path
												fill='orange'
												d='m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z'></path>
										</svg>
									</span>
									<span className='w-5 h-5'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 22 20'>
											<path
												fill='orange'
												d='m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z'></path>
										</svg>
									</span>
									<span className='w-5 h-5'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 22 20'>
											<path
												fill='orange'
												d='m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z'></path>
										</svg>
									</span>
									<span className='w-5 h-5'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 22 20'>
											<path
												fill='orange'
												d='m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z'></path>
										</svg>
									</span>
									<span className='w-5 h-5'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 22 20'>
											<path
												fill='orange'
												d='m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z'></path>
										</svg>
									</span>
								</div>
								<div>
									<h4 className='text-sm font-semibold '>Ian Stokes-Rees</h4>
									<p className='text-sm text-gray-500 py-2'>Patner</p>
									<img
										src={bcgx}
										alt=''
									/>
								</div>
							</blockquote>
						</div>
						<div className='bg-white px-6 shadow-xl'>
							<blockquote className='flex flex-col gap-5 py-6 '>
								<svg
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6 '>
									<path
										d='M0 13.6C0 17.7 2.47 20 5.247 20c2.469 0 4.32-2 4.32-4.3 0-2.4-1.748-4.2-4.114-4.2-.309 0-1.03.1-1.132.2.206-3.2 2.778-7.1 6.07-9.3L7.305 0C3.395 2.8 0 8 0 13.6zm14.61 0c0 4.1 2.365 6.4 5.143 6.4 2.572 0 4.424-2 4.424-4.3 0-2.4-1.749-4.2-4.115-4.2-.412 0-1.03.1-1.132.2.206-3.2 2.778-7.1 6.07-9.3L21.914 0c-4.013 2.8-7.305 8-7.305 13.6z'
										fill='blue'></path>
								</svg>
								<h3 className='font-bold'>
									I have been working with Toptal...
								</h3>

								<p className='text-gray-500 text-sm'>
									I have been working with Toptal engineers for several years
									now. They have all been exceptionally talented, very
									professional, highly productive, great team players, good
									communicators, and willing to go above and beyond. I have
									relied on them as key team players and they have never
								</p>

								<a
									href=''
									className='text-blue-800 hover:underline font-semibold'>
									See More
								</a>

								<div className='flex items-center space-x-1'>
									<span className='w-5 h-5'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 22 20'>
											<path
												fill='orange'
												d='m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z'></path>
										</svg>
									</span>
									<span className='w-5 h-5'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 22 20'>
											<path
												fill='orange'
												d='m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z'></path>
										</svg>
									</span>
									<span className='w-5 h-5'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 22 20'>
											<path
												fill='orange'
												d='m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z'></path>
										</svg>
									</span>
									<span className='w-5 h-5'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 22 20'>
											<path
												fill='orange'
												d='m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z'></path>
										</svg>
									</span>
									<span className='w-5 h-5'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 22 20'>
											<path
												fill='orange'
												d='m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z'></path>
										</svg>
									</span>
								</div>
								<div>
									<h4 className='text-sm font-semibold '>Ian Stokes-Rees</h4>
									<p className='text-sm text-gray-500 py-2'>Patner</p>
									<img
										src={bcgx}
										alt=''
									/>
								</div>
							</blockquote>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ClientSatification;
