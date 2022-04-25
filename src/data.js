import HTMLIcon from './assets/images/html.svg'
import CssIcon from './assets/images/css.svg'
import JSIcon from './assets/images/javascript.svg'
import SASSIcon from './assets/images/sass.svg'
import BootStrapIcon from './assets/images/bootstrap.svg'
import MaterialUI from './assets/images/materialUI.png'
import ReactIcon from './assets/images/react.svg'
import AngularIcon from './assets/images/angular.svg'
import ReduxIcon from './assets/images/redux.svg'
import NodeJSIcon from './assets/images/nodejs.png'
import SocketIcon from './assets/images/socketio.svg'
import MongoIcon from './assets/images/mongo.png'
import NetlifyIcon from './assets/images/netlify.svg'
import VercelIcon from './assets/images/vercel.svg'
import HerokuIcon from './assets/images/heroku.svg'
// Import image projects
import Ood from './assets/images/ood.png'
import Cms from './assets/images/cms.png'
import Messenger from './assets/images/ood.png'
import shoeStore from './assets/images/shoestore.png'
import trelloClone from './assets/images/trelloclone.png'
export const funfactList = [
  {
    id: 1,
    img: "https://res.cloudinary.com/foochat/image/upload/v1650308402/portfolio/introvert_lvumh5.jpg",
    title: "I'm an introvert",
    desc: "I love quiet and don't like crowded places.",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/foochat/image/upload/v1650308402/portfolio/guitar_piano_l4s0ny.jpg",
    title: "I love to sing and play guitar & piano",
    desc: "I have a talent of singing well and am practicing playing the guitar and the piano.",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/foochat/image/upload/v1650308403/portfolio/snakes_svefby.jpg",
    title: "I am very afraid of snakes and cockroaches",
    desc: "Those are the animals I'm scared of every time I see them, it's horrible.",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/foochat/image/upload/v1650308403/portfolio/travel_alone_zo56by.jpg",
    title: "I like to travel alone",
    desc: "It may sound weird, but traveling alone is a wonderful experience. You should also try.",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/foochat/image/upload/v1650308402/portfolio/read_book_en3cfe.jpg",
    title: "I like reading books especially books about exploration",
    desc: "Recently I read a book called The Alchemist which is very good, you should read it.",
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/foochat/image/upload/v1650308402/portfolio/travel_video_ldkipa.jpg",
    title: "I love tinkering and learning how to make travel videos",
    desc: "When I travel, I usually record those moments with video and I edit it into a travel cinema.",
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/foochat/image/upload/v1650308402/portfolio/height_speed_yd1bxo.jpg",
    title: "I'm afraid of heights and speeds",
    desc: "It doesn't sound like a boy but my personality is very cowardly.",
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/foochat/image/upload/v1650308402/portfolio/drink_beer_i7dcxi.jpg",
    title: "I often drink beer with friends",
    desc: "Drinking beer with friends helps me relieve stress and have more relationships in life.",
  },
];

export const skillList = [
  {
    id: 1,
    img: `${HTMLIcon}`,
    title: "HTML"
  },
  {
    id: 2,
    img: `${CssIcon}`,
    title: "CSS"
  },
  {
    id: 3,
    img: `${JSIcon}`,
    title: "Javascript"
  },
  {
    id: 4,
    img: `${SASSIcon}`,
    title: "SASS"
  },
  {
    id: 5,
    img: `${BootStrapIcon}`,
    title: "Bootstrap"
  },
  {
    id: 6,
    img: `${MaterialUI}`,
    title: "Material UI"
  },
  {
    id: 7,
    img: `${ReactIcon}`,
    title: "ReactJS"
  },
  {
    id: 8,
    img: `${AngularIcon}`,
    title: "Angular"
  },
  {
    id: 9,
    img: `${ReduxIcon}`,
    title: "Redux"
  },
  {
    id: 10,
    img: `${NodeJSIcon}`,
    title: "NodeJS"
  },
  {
    id: 11,
    img: `${SocketIcon}`,
    title: "SocketIO"
  },
  {
    id: 12,
    img: `${MongoIcon}`,
    title: "MongoDB"
  },
  {
    id: 13,
    img: `${NetlifyIcon}`,
    title: "Netlify"
  },
  {
    id: 14,
    img: `${VercelIcon}`,
    title: "Vercel"
  },
  {
    id: 15,
    img: `${HerokuIcon}`,
    title: "Heroku"
  },
];

export const abilitiesSkill = [
  "HTML provides the basic structure of web pages, enhanced and modified by other technologies such as CSS and JavaScript. CSS is used to check presentation, formatting, and layout. JavaScript is used to test the behavior of different elements.",
  "CSS preprocessor programs and css frameworks help you write CSS in a programming language way, with a clean, well-structured structure that is easier to develop and maintain. In addition, it has a lot of support libraries attached to help you write CSS code easily and simply.",
  "The goal is to build a new, modern, fast and reliable platform to serve all current and future front-end applications.",
  "Nodejs is an independent development platform built on top of Chrome's Javascript Runtime with which we can quickly and easily build network applications and create scalable applications. fast processing speed, realtime realtime with Socket IO and a great combination with MongoDB",
  "Deployment to platforms such as Vercel, Netlify, and Heroku to leverage caching and firewalls at the edge."
]

export const projects = [
  {
    id: 1,
    img: `${Ood}`,
    title: 'LANDING PAGE',
    description: 'Landing Page introduces the business model and operating process of the company OOD',
    time: '2020 - Web Development At SoftWorld VietNam',
    frameworks : [
      'Angular 8',
      'SCSS',
      'Strapi',
      'Graphql'
    ],
    github: '',
    domain: 'http://ood.vn/',
    backgroundColorLight: 'linear-gradient(-120deg, #fedfe7, #fbedff)',
    backgroundColorDark: 'linear-gradient(120deg, rgba(255, 91, 137, 0.25) 53.5%, rgba(234, 68, 68, 0.25) 100.2%)'
  },
  {
    id: 2,
    img: `${Cms}`,
    title: 'CMS Promotion (CRUD)',
    description: 'Building CMS Promotion for Digital Marketing can add, update, delete promotions and can automatically set the time',
    time: '2021 - Web Development At PizzaHut VietNam',
    frameworks : [
      'ReactJS',
      'Material UI',
      'Redux Saga'
    ],
    github: '',
    domain: '',
    backgroundColorLight: 'linear-gradient(120deg, #d3e0ff, #eaeaff)',
    backgroundColorDark: 'linear-gradient(120deg, rgba(82, 91, 219, 0.25) 11.2%, rgba(65, 71, 150, 0.25))'
  },
  {
    id: 3,
    img: `${Messenger}`,
    title: 'App Chat Messenger',
    description: 'The website supports users to register a new account and then log in to be able to find friends, send invitations to chat with friends, by sending messages, pictures, and attachments. is used real-time method',
    time: '2020 - Web Development',
    frameworks : [
      'NodeJS',
      'Socket IO',
      'MongoDB'
    ],
    github: 'https://github.com/datchanhkun/project_appchatmess',
    domain: '',
    backgroundColorLight: 'linear-gradient(120deg, #ffeede, #fff9ea)',
    backgroundColorDark: 'linear-gradient(120deg, rgba(217, 164, 4, 0.25) 10.7%, rgba(242, 116, 5, 0.25) 113.2%)'
  },
  {
    id: 4,
    img: `${shoeStore}`,
    title: 'Shoe Store Ecommerce',
    description: 'The website supports users to register, login, view, search for products, paginate, add products to the cart and proceed with payment with PayPal. For Admin Dashboard, you can add, delete, update products, manage orders ',
    time: '2021 - Web Development',
    frameworks : [
      'ReactJS',
      'Redux Thunk',
      'NodeJS',
      'MongoDB'
    ],
    github: 'https://github.com/datchanhkun/TDShoeStore-WEB',
    domain: 'https://tdshoestore.netlify.app',
    backgroundColorLight: 'linear-gradient(120deg, #e0f7ff, #dffff4)',
    backgroundColorDark: 'linear-gradient(120deg, rgba(14, 174, 87, 0.25) 0%, rgba(12, 116, 117, 0.25) 90%)'
  },
  {
    id: 5,
    img: `${trelloClone}`,
    title: 'Trello Clone',
    description: 'Clone Trello App with features: add columns, add, delete, edit cards, drag and drop cards. ',
    time: '2021 - Web Development',
    frameworks : [
      'ReactJS',
      'SCSS',
      'NodeJS',
      'MongoDB'
    ],
    github: 'https://github.com/datchanhkun/TrelloClone',
    domain: 'https://tdtrelloweb.netlify.app',
    backgroundColorLight: 'linear-gradient(120deg, #fedfe7, #fbedff)',
    backgroundColorDark: 'linear-gradient(-120deg, rgba(255, 91, 137, 0.25) 53.5%, rgba(234, 68, 68, 0.25) 100.2%)'
  },
]