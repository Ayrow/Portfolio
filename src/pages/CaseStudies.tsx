import { projectLinks as links } from '../utils/links';

const CaseStudies: React.FC = () => {
  return (
    <div className='mt-10 container flex flex-col w-3/4 lg:w-3/5'>
      <h2 className=' text-5xl text-center' id='casestudies'>
        Case Studies
      </h2>

      <h3 className='text-center text-xl'>Latest projects</h3>
      <div className='flex flex-col '>
        {links.map((link) => {
          const { id, title, text, imageLink, path } = link;
          return (
            <div className='flex'>
              <a
                href={path}
                key={id}
                className=' my-16 shadow-xl shadow-slate-800 '
                style={{
                  backgroundImage: `url('${imageLink}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  width: '100%',
                  height: '100%',
                }}>
                <div className=' bg-opacity-50 bg-black lg:hover:bg-gray-800 lg:hover:bg-opacity-95 w-full h-full transition-all ease-in-out duration-500 text-white py-40'>
                  <div className='w-full h-full flex flex-col place-items-center place-content-center lg:hover:scale-110 ease-in-out lg:hover:ease-in-out transition-transform duration-500'>
                    <h3 className=' text-5xl'> {title} </h3>
                    <p className='py-5'> {text} </p>
                    <button className='btn'>Check it out</button>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CaseStudies;
