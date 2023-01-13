import { socialLinks } from '../utils/links';

const Footer = () => {
  return (
    <div className='mt-10 py-10 px-10 black-bg white-txt text-center'>
      <h2 className='text-5xl text-center '>Let's get social !</h2>
      <div className='mt-10 flex gap-5 justify-center text-lg'>
        {socialLinks.map((link) => {
          return (
            <a
              href={link.path}
              target='_blank'
              rel='noreferrer'
              className='flex gap-2 items-center px-5 py-2 rounded-md bg-gray-700 hover:bg-gray-600'>
              {link.icon}
              {link.text}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Footer;
