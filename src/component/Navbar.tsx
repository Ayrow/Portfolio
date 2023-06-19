import Logo from '../assets/images/Neossa-logo-1.svg';
import { Fragment } from 'react';
import { HashLink } from 'react-router-hash-link';
// import navLinks from '../utils/links';

const Navbar: React.FC = () => {
  return (
    <Fragment>
      <nav className=' p-5 hero-bg fixed w-full'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
          <div className=' md:w-1/4'>
            <HashLink smooth to='/#top'>
              <img className=' w-14 md:w-20 lg:w-28' src={Logo} alt='logo' />
            </HashLink>
          </div>

          <div
            className='flex justify-center px-10
           gap-10 w-full md:justify-end text-lg font-extrabold pr-10'>
            <HashLink smooth to='/#casestudies'>
              Projects
            </HashLink>
            <HashLink smooth to='/#about'>
              About
            </HashLink>
            <HashLink smooth to='/#contact'>
              Contact
            </HashLink>
            {/* <button type='button'>
              <FaMoon />
            </button> */}
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
