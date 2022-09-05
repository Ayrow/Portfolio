import { Link } from 'react-router-dom';
import HeroImg from '../assets/images/undraw_work_in_progress_re_byic.svg';

const Hero = () => {
  return (
    <header className=' mx-5 mt-10'>
      <div className=' grid grid-cols-2 bg'>
        <div className=' '>
          <h1 className=' text-6xl font-bold'>Aymeric Pilaert</h1>
          <p className=' text-xl'>Front-end Developper</p>
          <Link to='/' className='btn btn-hero'>
            About Me
          </Link>
        </div>

        <img src={HeroImg} alt='developer' className='img main-img' />
      </div>
    </header>
  );
};
export default Hero;
