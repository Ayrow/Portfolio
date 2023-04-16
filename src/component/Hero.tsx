import { HashLink } from 'react-router-hash-link';
import HeroImg from '../assets/images/undraw_work_in_progress_re_byic.svg';

const Hero: React.FC = () => {
  return (
    <header className='px-5 hero-bg full-page flex'>
      <div className='grid md:grid-cols-2 items-center'>
        <div className=' text-center'>
          <h1 className=' text-7xl font-bold'>Aymeric Pilaert</h1>
          <p className=' text-xl py-5'>
            Front-end and iOS Developper (ReactJS, SwiftUI){' '}
          </p>
          <HashLink smooth to='/#about' className='btn btn-hero'>
            About Me
          </HashLink>
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
