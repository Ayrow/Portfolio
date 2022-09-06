import Logo from '../assets/images/Neossa-logo-1.svg';
import { FaMoon } from 'react-icons/fa';
import { Fragment } from 'react';
import { HashLink } from 'react-router-hash-link';
import navLinks from '../utils/links';

const Navbar = () => {
  return (
    <Fragment>
      <nav className=' p-5 hero-bg'>
        <div className='flex place-items-center'>
          <div className=' w-1/4'>
            <HashLink smooth to='/#top'>
              <img className=' w-14 md:w-20 lg:w-28' src={Logo} alt='logo' />
            </HashLink>
          </div>
          <div className='flex gap-10 w-full justify-end text-lg font-extrabold pr-10'>
            <HashLink smooth to='/#casestudies'>
              Case Studies
            </HashLink>
            <HashLink smooth to='/#about'>
              About
            </HashLink>
            <HashLink smooth to='/#contact'>
              Contact
            </HashLink>
            <button type='button'>
              <FaMoon />
            </button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
