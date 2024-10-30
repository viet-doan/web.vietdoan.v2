import KoiCornerIMG from '../assets/koicorner_web.png';
import EmailClientIMG from '../assets/socket_code.png';
import LuckyThirteenIMG from '../assets/lucky_thirteen.png';
// import VietDoanWeb2 from '../assets/viet_web.png';
import DessertCoIMG from '../assets/dessert_co.png';
import TiktokAI from '../assets/tiktok_hackathon.png';
import CanvaHack from '../assets/canva_hackathon.png';
import PDAS_MERN from '../assets/PDAS_MERN.png';

const projects = [
  // {
  //   name: 'Personal Online Portfolio',
  //   descriptions: 'The project was create by integrating design skills with web development skills to create an elegant and sophisticated website that matches with the design’s theme and layout to provide a clean and intuitive user interface that highlights the art design while maintaining smooth navigation and interactive features. Viet’s Koi Corner design was one of the 17 Visual Communication Design work that was selected to be awarded with Top Design 2021 and to be displayed at for the exhibition at the Melbourne Museum.',
  //   website: 'viet-doan.com',
  //   languagesAndTools: 'HTML, CSS, JavaScript, React, Figma',
  // },
  {
    name: 'Psychology Assignment Software',
    descriptions:
      'This project is a robust MERN stack platform that enhances interactive learning and streamlines assignment oversight for students and educators. By integrating AI-driven functionality with models like Gemini, Claude, and GPT, it optimizes response accuracy using Retrieval-Augmented Generation (RAG). The platform features a responsive, user-centric interface built with React Vite, Material UI, and Firebase Authentication, enabling tailored access. Additionally, advanced prompt engineering maintains a realistic AI persona, providing educators with efficient tools for assignment creation, detailed transcript analysis, and in-depth thematic assessments, ultimately enriching the learning experience.',
    languagesAndTools:
      'HTML, CSS, TypeScript, Figma, Material UI, Node JS, Express, MongoDB, Firebase Auth, Claude API, ChatGPT API, Gemini API',
    image: PDAS_MERN,
    date: '1st July, 2024 (Duration: 12 weeks)',
  },
  {
    name: 'Evolving Tiktok Live @ Tiktok TechJam Hackathon',
    descriptions: `We developed MagicBook.AI, an AI-powered app integrated into Canva for creating personalized children's books, addressing challenges in the children's picture book market and enhancing educational experiences. The app features seamless workflows for story writing, illustration, voice interaction, and music composition, leveraging technologies like React, TypeScript, Flask, and CSS for the front-end, with JavaScript for scripting. We deployed AI models using PyTorch on Google Colab and utilized Heroku for hosting. This project reflects our commitment to making design accessible, supporting Canva's educational mission, and promoting creativity in learning.`,
    github: 'https://github.com/Joan-gao/canva-magicbook-ai',
    links: {
      DevPost: 'https://devpost.com/software/magicbook-ai',
      YoutubeDemo: 'https://www.youtube.com/watch?v=55oBUx3e9Ew',
    },
    languagesAndTools:
      'HTML, CSS, JavaScript, TypeScript, React, Canva SDK, Canva App UI Kit, Figma',
    image: CanvaHack,
    date: '8th July, 2024 (Duration: 1 month)',
  },
  {
    name: 'LiveDesign Pro @ Tiktok TechJam Hackathon',
    awards: `3rd Place Winner & Top 3 Public's Vote`,
    descriptions:
      'This project developed an EventPage design platform that streamlines the entire process from creation to publication. Integrating ChatGPT and Midjourney enables efficient image generation and smart copywriting, significantly lowering design barriers. Users can add interactive elements like text, stickers, and buttons to enhance live stream engagement and conversion rates. The platform is designed to optimize the TikTok live streaming experience, making event page creation quick and easy.',
    website: 'https://tiktok-eventpage.web.app/',
    github: 'https://github.com/Joan-gao/eventpage-design-platform',
    links: {
      DevPost: 'https://devpost.com/software/livedesign-pro',
      YoutubeDemo: 'https://www.youtube.com/watch?v=8D57UD3cWfo',
    },
    languagesAndTools:
      'HTML, CSS, Javascript, Typescript, TailwindCSS, React, Figma',
    image: TiktokAI,
    date: '8th June, 2024 (Duration: 1 month)',
  },
  // {
  //   name: 'Personal Portfolio (This Website)',
  //   descriptions:
  //     "This website represents my debut venture into the world of React, and I'm thrilled to showcase my first React project. As I delved into the framework, I had the opportunity to apply a range of React concepts, including multi-page, data validation, reading JSON data. I utilized react-router-dom to seamlessly navigate between pages, providing a cohesive user experience. And by incorporating prop-types, I ensured the integrity of the JSON data being consumed, guaranteeing a robust and reliable application.",
  //   website: 'https://viet-doan.com/',
  //   github: 'https://github.com/viet-doan/web.vietdoan.v2',
  //   links: {},
  //   languagesAndTools: 'HTML5, CSS3, Javascript, Figma, React',
  //   image: VietDoanWeb2,
  //   date: '9th June, 2024 (Duration: 1 week)',
  // },
  {
    name: 'Dessert Co - Website Template',
    descriptions:
      "Designed and developed a modern, minimalist website template for a fictional dessert store during an internship at QuickSite.guru. Emphasized clean HTML structure and CSS styling to ensure a professional and user-friendly interface. The template features a responsive design that adapts seamlessly across various devices, adhering to current web standards and utilizing CSS variables for easy customization. Role included extensive testing, refining based on feedback, and documenting the template's usage instructions, contributing to its successful publication on the QuickSite.guru platform.",
    website:
      'http://anai-9atmfta1xwyli1hklmwd.s3-website-ap-southeast-2.amazonaws.com/',
    github: 'https://github.com/viet-doan/dessert_co',
    links: {},
    languagesAndTools: 'HTML5, CSS3, Javascript, Figma',
    image: DessertCoIMG,
    date: '8th May, 2024 (Duration: 4 weeks)',
  },
  {
    name: 'LuckyThirteen Card Game (University Project)',
    descriptions:
      "Refactored a digital card game and developed an \"Clever Computer\" AI to play it. The primary goals were to improve the game's structure and maintainability, while also creating an AI that could track discarded cards and use statistics and probabilities to maximize its score. To achieve this, the code were broken down into smaller components, making it more manageable, and designed Clever to inform its decision-making with discarded card data and statistical analysis. Collaborating with a team, we worked together to identify areas for improvement and implement changes that enhanced the game's overall performance. Across all stages of the code design, UML notation were used to create domain and design diagrams as a point of reference for the software concept. The code refactoring were conducted through the constant usage of GoF patterns and GRASP principles, further enhancing the game's structure and maintainability.",
    website: '',
    github: '',
    links: {},
    languagesAndTools:
      'Java, Object-Oriented Programming, UML Diagrams, UML Notations, Draw.io',
    image: LuckyThirteenIMG,
    date: '10th May, 2024 (Duration: 2 weeks)',
  },
  {
    name: 'Email Client (University Project)',
    descriptions:
      'Build a simple email client that downloads and parses email from a standards-compliant IMAP server. Build the project through socket programming and following the guidelines of RFC 3501 (Requests for Comments) standards. Developed the connections supporting both IPv6 and IPv4. The input arguments will specify for the server to write command lines and retrieve particular content of the email such as subject, date, MIME (Multimedia Internet Mail Extension) and print out the plain ASCII version of the message.',
    website: '',
    github: '',
    links: {},
    languagesAndTools:
      'C Programming, Makefile, Socket Programming, Valgrind, Linux Commands',
    image: EmailClientIMG,
    date: '2nd May, 2024 (Duration: 2 weeks)',
  },
  {
    name: 'Koi Corner Personal Art Gallery',
    descriptions:
      'A website to display personal art and design . The project was create by integrating design skills with web development skills to create an elegant and sophisticated website that matches with the design’s theme and layout to provide a clean and intuitive user interface that highlights the art design while maintaining smooth navigation and interactive features. Viet’s Koi Corner design was one of the 17 Visual Communication Design work that was selected to be awarded with Top Design 2021 and to be displayed at for the exhibition at the Melbourne Museum.',
    website: 'https://koicorner.art/',
    github: 'https://github.com/viet-doan/koicorner',
    links: {},
    languagesAndTools: 'HTML, CSS, JavaScript',
    image: KoiCornerIMG,
    date: '9th April, 2024 (Duration: 3 weeks)',
  },
];

export default projects;
