const About = () => {
  return (
    <div className=' mt-10 container' id='about'>
      <h2 className=' text-5xl text-center'>About page</h2>
      <div className=' pt-5 grid grid-cols-2 items-center'>
        <div className=''>
          <h3>The perfect way to learn more about me</h3>
          <ul className='flex gap-5 pt-10'>
            <li>Shortest</li>
            <li>Short</li>
            <li>Normal</li>
            <li>Long</li>
            <li>Longest</li>
          </ul>
        </div>
        <img alt='profile pic' />
      </div>
    </div>
  );
};
export default About;
