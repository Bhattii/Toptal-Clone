/** @format */
import '../assets/styles/FlipCard.css';
const FlipCard1 = () => {
	return (
		<>
			<div className='flip-card'>
				<div className='flip-card-inner'>
					<div className='flip-card-front bg-blue-800 p-4'>
						<img src='https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_hero_section%2Flogotypes_section%2Flogotype%2F5791135%2Fimage%2Foptimized%2Fsmashing_magazine-0efd189d26803d160b54f3bb6c62276d.svg'></img>
					</div>
					<div className='flip-card-back bg-blue-800 p-4'>
						<img src='https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_hero_section%2Flogotypes_section%2Flogotype%2F5791134%2Fimage%2Foptimized%2Flogo-dribbble-1ad66d323b7c39f703a8ce9dacafe27f.svg' />
					</div>
				</div>
			</div>
		</>
	);
};

export default FlipCard1;
