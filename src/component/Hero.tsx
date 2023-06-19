import { HashLink } from 'react-router-hash-link';
import HeroImg from '../assets/images/undraw_work_in_progress_re_byic.svg';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <header className='px-5 hero-bg full-page flex pt-40 md:pt-0'>
      <div className='grid md:grid-cols-2 items-center'>
        <div className=' text-center'>
          <h1 className=' text-5xl font-bold'>
            Aymeric Pilaert, web and app developer
          </h1>
          <div className='text-xl py-5'>
            <p>Selft taught web and iOS developer (ReactJS, SwiftUI).</p>
            <p>Get to know more about me and check out my latest projects.</p>
          </div>
          <div className='flex justify-center items-center flex-wrap gap-5'>
            <a href='/' className='btn btn-hero flex gap-2 items-center'>
              Resume <FaExternalLinkAlt className='h-4' />
            </a>
            <HashLink smooth to='/#about' className='btn btn-hero'>
              About Me
            </HashLink>
          </div>
        </div>
        <div className=' flex justify-center invisible md:visible'>
          <div className='w-1/3'>
            <img src={HeroImg} alt='developer' className='' />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Hero;
