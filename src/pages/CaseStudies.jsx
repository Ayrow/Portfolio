import { projectLinks as links } from '../utils/links';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  return (
    <div className='mt-10'>
      <h2 className=' text-5xl text-center'>Case Studies</h2>

      <h3 className='text-center text-xl'>Latest projects</h3>
      <div className='flex flex-col place-items-center '>
        {links.map((link) => {
          const { id, title, text, imageLink, path } = link;
          return (
            <Link
              to={path}
              key={id}
              className='my-5 shadow-xl shadow-slate-800 '
              style={{
                backgroundImage: `url('${imageLink}')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '80%',
                height: '480px',
              }}>
              <div className=' bg-opacity-50 bg-black lg:hover:bg-gray-800 lg:hover:bg-opacity-95 w-full h-full transition-all ease-in-out duration-500 text-white'>
                <div className='w-full h-full flex flex-col place-items-center place-content-center lg:hover:scale-110 ease-in-out lg:hover:ease-in-out transition-transform duration-500'>
                  <h3 className=' text-5xl'> {title} </h3>
                  <p className='py-5'> {text} </p>
                  <button className='btn'>Check it out</button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default CaseStudies;
