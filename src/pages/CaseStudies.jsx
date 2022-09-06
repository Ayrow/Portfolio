import { projectLinks as links } from '../utils/links';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/caseStudies';

const CaseStudies = ({ imgObject }) => {
  return (
    <div className='mt-10'>
      <h2 className=' text-5xl text-center'>Case Studies</h2>

      <h3 className='text-center text-xl'>Latest projects</h3>
      <div className='flex justify-center mt-10'>
        {links.map((link) => {
          const { id, title, text, imageLink, path } = link;
          return (
            <Link to={path} key={id}>
              {/* 
              <img
                src={imageLink}
                alt={title}
                width='50%'
                height='50%'
                className=''
              />
              */}

              <h3> {title} </h3>
              <p> {text} </p>
              <button>Check it out</button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default CaseStudies;
