const Contact = () => {
  return (
    <div className='mt-10 flex flex-col items-center' id='contact'>
      <div className='w-1/3 flex flex-col items-center gap-10'>
        <h2 className=' text-5xl text-center'>Contact</h2>
        <p>
          Sorry I did not want to connect to a backend or another service but
          you can click the button down below to contact me
        </p>
        <a
          href='mailto:aymeric.pilaert@hotmail.fr'
          className='text-center w-1/2 px-5 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white'>
          Send a message
        </a>
      </div>
    </div>
  );
};
export default Contact;
