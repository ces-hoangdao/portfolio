import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Hoang Helios',
  title: "Hi all, I'm Hoang",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with Javascript, Reactjs, Nodejs. Demonstrated expertise in collaborating with cross-functional teams, designing scalable and responsive user interfaces, and ensuring code quality and security. Looking for challenging opportunities to further enhance my skills and contribute to innovative projects.",
  resumeLink:
    'https://drive.google.com/file/d/1jGUzEyiN6Xu_w2ayZLCZTjFKB5zY9BOW/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'ces-hoangdao',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/dvhoang2106/',
  github: 'https://github.com/ces-hoangdao',
  instagram: 'https://www.instagram.com/hoang.helios',
  facebook: 'https://www.facebook.com/dvhoang.helios',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using React.js'),
        emoji('⚡ Building RESTful APIs in Nodejs & Express'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nodejs',
          iconifyTag: 'vscode-icons:file-type-node',
        },
        {
          skillName: 'TypeScript',
          iconifyTag: 'logos:typescript-icon',
        },
        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'Material UI',
          iconifyTag: 'logos:material-ui',
        },
        {
          skillName: 'Bootstrap',
          iconifyTag: 'logos:bootstrap',
        },
        {
          skillName: 'Tailwind CSS',
          iconifyTag: 'logos:tailwindcss-icon',
        },
        {
          skillName: 'Angular',
          iconifyTag: 'logos:angular-icon',
        },
        {
          skillName: 'MongoDB',
          iconifyTag: 'logos:mongodb',
        },
        {
          skillName: 'GraphQL',
          iconifyTag: 'logos:graphql',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        }
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'React JS', 
    progressPercentage: '90', 
  },
  {
    Stack: 'JavaScript',
    progressPercentage: '90',
  },
  {
    Stack: 'Node js',
    progressPercentage: '70',
  },
  {
    Stack: 'Angular',
    progressPercentage: '65',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Da Nang University of Science and Technology',
    subHeader: 'Software Engineering',
    duration: 'September 2016 - April 2021',
    desc: 'Won the Fast Tech Top Award at the Faculty Scientific Research Conference',
    grade: '3.0',
    descBullets: [
      'Join many soft skills development clubs.',
      'Participate in many community volunteer activities',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Java Developer',
    company: 'Code Engine Studio',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Jul 2021 – January 2022',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
  },
  {
    role: 'API Engineer',
    company: 'Duseca Software',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Jan 2022 – Mar 2022',
    desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'developer-portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://developer-portfolio-1hanzla100.vercel.app/',
  },
  {
    name: 'AtlasMart',
    desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
    github: 'https://github.com/1hanzla100/Django-React-Marketplace',
  },
  {
    name: 'Technota (Forum)',
    desc: 'Get hands-on experience in technical skills with Technota',
    github: 'https://github.com/1hanzla100/django-react-forum',
  },
  {
    name: 'Shopaza (Ecommerce)',
    desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
    github: 'https://github.com/1hanzla100/Django-ecommerce',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Hoang Helios',
  description:
    'A passionate Full Stack Web Developer.',
  author: 'Hoang Helios',
  image: 'https://unsplash.com/photos/yycFvgti41w',
  url: 'https://developer-portfolio-hoanghelios.vercel.app',
  keywords: [
    'Hoang',
    'Hoang Helios',
    '@dvhoang2106',
    'dvhoang2106',
    'Portfolio',
    'Hoang Portfolio ',
    'Hoang Helios Portfolio',
  ],
};
