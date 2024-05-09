import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import developer from '../assets/img/developer icon.svg';
import designer from '../assets/img/designer.svg';
import finance from '../assets/img/Finance Expert.svg';
import product from '../assets/img/Product Manager.svg';
import project from '../assets/img/Project Manager.svg';
import marketing from '../assets/img/Marketing Expert.svg';



function Developer() {
    
  return (
    <div className='p-20 bg-white'>
      <div className='flex justify-center items-center '>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-1 max-w-[1300px]">
         

          <div className='bg-gray-200 p-10  hover:bg-blue-600 hover:text-white group transition'>
            <img src={developer} alt="Developer" className="mb-8 " />
            <h3 className='text-xl my-4'>Developer 1</h3>
            <p>Seasoned software engineer with expertise across multiple technologies.</p>
            <div className={`flex justify-between my-4 invisible group-hover:visible`}>
              <a href='' className='hover:underline text-lg'>View Developer</a>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>

          <div className='bg-gray-200 p-10 hover:bg-blue-600 hover:text-white group transition'>
            <img src={designer} alt="Designer" className="mb-8" />
            <h3 className='text-xl my-4'>Designer</h3>
            <p>Expert UI, UX, Visual, and Interaction designers as well as a wide range of illustrators, animators, and more.</p>
            <div className={`flex justify-between my-4 invisible group-hover:visible`}>
              <a href='' className='hover:underline text-lg'>View Designer</a>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>


          <div className='bg-gray-200 p-10 hover:bg-blue-600 hover:text-white group transition'
         
           >
            <img src={finance} alt="Finance Expert" className="mb-8" />
            <h3 className='text-xl my-4'>Finance Expert</h3>
            <p>Experts in financial modeling & valuation, startup funding, interim CFO work, and market sizing.</p>
            <div className={`flex justify-between my-4 invisible group-hover:visible`}>
              <a href='' className='hover:underline text-lg'>Finance Expert</a>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>


          <div className='bg-gray-200 p-10 hover:bg-blue-600 hover:text-white group transition' 
          
            >
            <img src={project} alt="Project Manager" className="mb-8" />
            <h3 className='text-xl my-4'>Project Manager</h3>
            <p>Digital and technical project managers, scrum masters, and more with expertise in numerous PM tools, frameworks, and styles</p>
            <div className={`flex justify-between my-4 invisible group-hover:visible `}>
              <a href='' className='hover:underline text-lg'>View Project Manager</a>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          

          <div className='bg-gray-200 p-10 hover:bg-blue-600 hover:text-white group transition'
       
           >
            <img src={product} alt="Product Manager" className="mb-8" />
            <h3 className='text-xl my-4'>Product Manager</h3>
            <p>Digital product managers, scrum product owners with expertise in numerous industries like banking, healthcare, ecommerce, and more.</p>
            <div className={`flex justify-between my-4 invisible group-hover:visible`}>
              <a href='' className='hover:underline text-lg'>View Product Manager</a>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>


          </div>


          <div className='bg-gray-200 p-10 hover:bg-blue-600 hover:text-white group transition'
         
           >
            <img src={marketing} alt="Marketing Expert" className="mb-8" />
            <h3 className='text-xl my-4'>Marketing Expert</h3>
            <p>Experts in digital marketing, growth marketing, content creation, market research, brand strategy execution, social media marketing, and more.</p>
            <div className={`flex justify-between my-4 invisible group-hover:visible`}>
              <a href='' className='hover:underline text-lg'>Marketing Expert</a>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
         

        </div>
      </div>
    </div>
  )
}

export default Developer;
