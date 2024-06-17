/** @format */

export const WorldClass = () => {
	return (
		<>
			<div className='bg-blue-900 flex items-center justify-center py-11 px-5 lg:p-11'>
				<div className='max-w-[1200px] flex flex-col lg:flex-row justify-center lg:items-baseline py-20 gap-20 lg:gap-10 text-white'>
					<h2 className='text-4xl text-center'>
						World-class articles, delivered weekly.
					</h2>
					<form
						action=''
						className=''>
						<div className='flex'>
							<input
								type='email'
								placeholder='Enter Your Email'
								className='w-full py-2 px-5 border-none outline-none'
							/>
							<button
								type='submite'
								className='bg-green-500 hover:bg-green-600 sm:text-nowrap py-2 px-5'>
								Sign Me Up
							</button>
						</div>
						<p className='text-sm py-2'>
							By entering your email, you are agreeing to our{' '}
							<a
								href=''
								className='underline'>
								privacy policy.
							</a>
						</p>
					</form>
				</div>
			</div>
		</>
	);
};
