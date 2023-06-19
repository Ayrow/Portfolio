const allSkills = [
  'HTML',
  'CSS',
  'Javascript',
  'ReactJS',
  'NextJS',
  'MongoDB',
  'Wordpress',
  'SEO',
  'Swift',
];

const Skills = () => {
  return (
    <div className='my-10'>
      <h3 className='text-center mb-5'>My Skills</h3>
      <div className='flex flex-wrap justify-center gap-10'>
        {allSkills.map((skill) => {
          return (
            <p
              key={skill}
              className='border px-2 py-1 rounded-lg bg-sky-900 text-white'>
              {skill}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
