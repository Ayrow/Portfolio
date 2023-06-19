const Contact = () => {
  return (
    <div className='mt-10 flex flex-col items-center' id='contact'>
      <div className='w-1/3 flex flex-col items-center gap-10'>
        <h2 className=' text-5xl text-center'>Contact</h2>
        <p className='text-center'>
          Feel free to contact me for any question or info.
        </p>
        <a
          href='mailto:aymeric.pilaert@hotmail.fr'
          className='flex flex-wrap text-center px-5 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white'>
          Send a message
        </a>
      </div>
    </div>
  );
};
export default Contact;
