import React, { useEffect, useState } from 'react';
import Skills from '../component/Skills';

const About: React.FC = () => {
  const [toggleTab, setTogleTab] = useState<any>({ shortest: true });
  const [activeToggle, setActiveToggle] = useState('');

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const button: HTMLButtonElement = e.currentTarget;
    setTogleTab({ [button.name]: true });
    setActiveToggle('text-blue-900 border-b border-b-blue-900');
  };

  useEffect(() => {
    setTogleTab({ shortest: true });
    setActiveToggle('text-blue-900 border-b border-b-blue-900');
  }, []);

  return (
    <div className=' mt-10 container' id='about'>
      <h2 className=' text-5xl text-center'>About Me</h2>
      <div className='p-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-5'>
        <div className=''>
          <h3 className=' font-semibold'>
            The perfect way to learn more about me
          </h3>

          <div className='flex flex-row lg:flex-col mt-5 border border-black'>
            <div className='border-r lg:border-r-0 border-b-0 lg:border-b border-black p-3 flex flex-col lg:flex-row gap-10 font-semibold'>
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
            </div>

            <div className='bg-sky-100'>
              {toggleTab.shortest && (
                <p className=' p-2'>
                  I'm Aymeric, 30, tech enthusiast and really passionate about
                  coding. Self-taught developer.
                </p>
              )}
              {toggleTab.short && (
                <p className='p-2'>
                  Hi, I'm Aymeric, 30 and tech enthusiast. I first learned HTML
                  and CSS in 2011 and started building Wordpress websites as a
                  hobby. <br />
                  In August 2022, I really started my coding journey with
                  Javascript.
                </p>
              )}

              {toggleTab.normal && (
                <p className='p-2'>
                  Hi, I'm Aymeric, 30 years old. I learned HTML and CSS back in
                  2011 and quickly moved to Wordpress to build websites.
                  <br />
                  I first made a few websites for my family and friends then got
                  a few clients as a freelancer.
                  <br /> <br />
                  In 2022, I learned javascript because it seemed interesting
                  and useful for Wordpress. It was hard but I loved it,
                  especially the way it was used to interact with the DOM.
                  <br />
                  <br />
                  Then, I moved to learning React because why not? It seemed to
                  me that it was a nice framework with a great dev community. I
                  kept learning and made a few projects to practice and learn.
                  <br />
                  <br />
                  In 2023, I still build React apps but I also started learning
                  to build mobile apps. I focus mainly on iOS (using swiftUi)
                  for now.
                </p>
              )}

              {toggleTab.long && (
                <p className='p-2'>
                  Hello! <br />
                  I'm Aymeric, 30 years old. I learned HTML and CSS back in 2011
                  and then moved to Wordpress to build websites.
                  <br />
                  Using a CMS was mainly a side job until 2018. THen it was my
                  main activity and I started to focus on making a more modern
                  website but also take care of SEO. It was a great experience
                  but learned that I didn't want to do that forever. I was
                  missing something more challenging and that would require more
                  thinking.
                  <br /> <br />
                  I started to learn javascript, just to bring a new skillset to
                  Wordpress. Little did I know that I would fall in love with
                  coding. I then moved to ReactJS and it was hard at first,
                  especially when it came to understanding props drilling, hooks
                  and state management.
                  <br />
                  <br />
                  I kept going since then, practicing, building new projects and
                  willing to always learn more. Now I can build web apps using
                  styled components, TailwindCSS, NodeJS, MongoDB, ExpressJS,
                  Firebase... <br />
                  I learned unit testing using Jest and tried Typescript (not a
                  real success at first I have to say)
                  <br />
                  <br />
                  In 2023, I still practice and build React apps but I also
                  learn how to build mobile apps. I focus mainly on iOS(using
                  swiftUi) for now.
                </p>
              )}

              {toggleTab.longest && (
                <p className='p-2'>
                  Hello and welcome to my Portfolio! <br />
                  I'm Aymeric, 30, and I recently fell in love with coding
                  (2022). I first learned HTML and CSS in 2011 and then moved to
                  using Wordpress to build my first websites as a hobby,
                  starting my first projects for family and friends. <br />{' '}
                  <br />
                  The years passed moving from jobs to jobs still building
                  websites as a hobby and learning about SEO (Search engine
                  Optimization) as well ass wordpress optimization. A few years
                  later, I started to work as a freelancer on the side to make
                  some extra money focusing on design, seo and optimization for
                  my clients. In 2018 and for almost 4 years, I worked as a
                  communication manager and focused primarily on developing the
                  company's presence locally on the web. <br /> I can say it was
                  a great achievement and success!
                  <br /> <br />
                  Beginning of 2022, I wanted to improve my skills in Wordpress
                  so I learned javascript. That's when I truly discovered coding
                  and fell in love with it. After a few months of learning and
                  practicing this new language I stepped up to learn ReactJS.
                  <br />
                  I've been practicing and building projects since June 2022
                  using TailwindCSS, styled components, NodeJS, MongoDB,
                  ExpressJS, Firebase. I also learned to implement unit testing
                  using JEST and learned typescript (that actually became easier
                  after learning swift).
                  <br />
                  <br />
                  Since January 2023, I'm learning to build mobile apps focusing
                  primarily on iOS (using SwiftUI) and tried out React Native
                  for cross-platform. All this still building and developing
                  react projects.
                  <br />
                  Don't hesitate to contact me if you have any question.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <img
            src='https://media.licdn.com/dms/image/D4E03AQGJDhdyXlpvPA/profile-displayphoto-shrink_800_800/0/1671820027220?e=1678924800&v=beta&t=myCEAI8kkig5dE1Y2Qu5S3cdngoTOcQ4KDDXgS5kn6w'
            alt='profile pic'
            className=' w-1/2 rounded-2xl shadow-lg'
          />
        </div>
      </div>
      <Skills />
    </div>
  );
};
export default About;
