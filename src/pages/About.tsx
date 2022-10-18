import React, { useState } from 'react';

const About: React.FC = () => {
  // const initialState = {
  //   shortest: true,
  //   short: false,
  //   normal: false,
  //   long: false,
  //   longest: false,
  // };

  const [toggleTab, setTogleTab] = useState<any>({ shortest: true });
  const [activeToggle, setActiveToggle] = useState('');

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const name = e.target.name;
    setTogleTab({ [name]: true });
    setActiveToggle('active: text-red-800');
  };

  return (
    <div className=' mt-10 container' id='about'>
      <h2 className=' text-5xl text-center'>About page</h2>
      <div className='p-10 grid grid-cols-1 md:grid-cols-2 items-center gap-5'>
        <div className=''>
          <h3>The perfect way to learn more about me</h3>
          <ul className='px-2 mt-5 flex justify-between border border-black '>
            <button
              type='button'
              name='shortest'
              onClick={handleToggle}
              className={toggleTab.shortest && `${activeToggle}`}>
              Shortest
            </button>
            <button
              name='short'
              type='button'
              onClick={handleToggle}
              className={toggleTab.short && `${activeToggle}`}>
              Short
            </button>
            <button
              name='normal'
              type='button'
              onClick={handleToggle}
              className={toggleTab.normal && `${activeToggle}`}>
              Normal
            </button>
            <button
              name='long'
              type='button'
              onClick={handleToggle}
              className={toggleTab.long && `${activeToggle}`}>
              Long
            </button>
            <button
              name='longest'
              type='button'
              onClick={handleToggle}
              className={toggleTab.longest && `${activeToggle}`}>
              Longest
            </button>
          </ul>
          <div>
            {toggleTab.shortest && (
              <p className='border border-black p-2'>This is a shortest text</p>
            )}
            {toggleTab.short && (
              <p className='border border-black p-2'>This is a short text</p>
            )}

            {toggleTab.normal && (
              <p className='border border-black p-2'>This is a normal text</p>
            )}

            {toggleTab.long && (
              <p className='border border-black p-2'>This is a long text</p>
            )}
            {toggleTab.longest && (
              <p className='border border-black p-2'>This is a longest text</p>
            )}
          </div>
        </div>
        <div className='flex justify-center'>
          <img alt='profile pic' className='' />
        </div>
      </div>
    </div>
  );
};
export default About;
