import { FaLinkedin, FaGithub } from 'react-icons/fa';

const navLinks = [
  {
    id: 1,
    text: 'case studies',
    path: '#case-studies',
  },
  {
    id: 2,
    text: 'about',
    path: '#about',
  },
  {
    id: 3,
    text: 'contact',
    path: 'contact',
  },
];

const projectLinks = [
  {
    id: 1,
    title: 'Nextimmo',
    text: 'Real estate agency with listings management. Built with nextJS',
    imageLink:
      'https://www.depreux-construction.com/wp-content/uploads/2021/02/salon-constructeur-maison-individuelle.jpg',
    path: '/',
    github: 'https://github.com/Ayrow/nextimmo',
  },
  {
    id: 2,
    title: 'Meal Planner',
    text: 'Personal iOS project to plan meals for the week. Built with SwiftUI.',
    imageLink:
      'https://www.depreux-construction.com/wp-content/uploads/2021/02/salon-constructeur-maison-individuelle.jpg',
    path: '/',
    github: 'https://github.com/Ayrow/MealPlanner',
  },
  {
    id: 3,
    title: 'Tripia',
    text: 'Web app to share travel experiences using express for backend. Built with ReactJS.',
    imageLink:
      'https://www.depreux-construction.com/wp-content/uploads/2021/02/salon-constructeur-maison-individuelle.jpg',
    path: '/',
    github: 'https://github.com/Ayrow/tripia',
  },
  {
    id: 4,
    title: 'TodoList',
    text: 'Really simple todolist with account and using firebase. Built with ReactJS.',
    imageLink:
      'https://www.depreux-construction.com/wp-content/uploads/2021/02/salon-constructeur-maison-individuelle.jpg',
    path: '/',
    github: 'https://github.com/Ayrow/TodoList',
  },
  {
    id: 5,
    title: 'Neossa',
    text: 'Personal freelance website made using Wordpress.',
    imageLink:
      'https://www.depreux-construction.com/wp-content/uploads/2021/02/salon-constructeur-maison-individuelle.jpg',
    path: 'https://www.neossa.com',
    github: '',
  },
];

const socialLinks = [
  {
    id: 1,
    text: 'Github',
    path: 'https://github.com/Ayrow',
    icon: <FaGithub />,
  },
  {
    id: 2,
    text: 'Linkedin',
    path: 'https://www.linkedin.com/in/aymeric-pilaert-a53b6498/',
    icon: <FaLinkedin />,
  },
];

export { navLinks, projectLinks, socialLinks };
