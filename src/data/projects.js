import KoiCornerIMG from '../assets/koicorner_web.png';
import EmailClientIMG from '../assets/socket_code.png';
import LuckyThirteenIMG from '../assets/lucky_thirteen.png';
import VietDoanWeb2 from '../assets/viet_web.png';
import DessertCoIMG from '../assets/dessert_co.png';
import TiktokAI from '../assets/tiktok_hackathon.png';

const projects = [
  // {
  //   name: 'Personal Online Portfolio',
  //   descriptions: 'The project was create by integrating design skills with web development skills to create an elegant and sophisticated website that matches with the design’s theme and layout to provide a clean and intuitive user interface that highlights the art design while maintaining smooth navigation and interactive features. Viet’s Koi Corner design was one of the 17 Visual Communication Design work that was selected to be awarded with Top Design 2021 and to be displayed at for the exhibition at the Melbourne Museum.',
  //   website: 'viet-doan.com',
  //   languagesAndTools: 'HTML, CSS, JavaScript, React, Figma',
  // },
  {
    name: 'Evolving Tiktok Live @ Tiktok TechJam Hackathon',
    descriptions: 'Currently in Progress',  
    website: '',
    // github: '',
    languagesAndTools: 'HTML, CSS, Javascript, Typescript, TailwindCSS, React, Figma',
    image: TiktokAI,
    date: '8th June, 2024 (Currently in Progress)',
  },
  {
    name: 'Personal Portfolio (This Website)',
    descriptions: 'This website represents my debut venture into the world of React, and I\'m thrilled to showcase my first React project. As I delved into the framework, I had the opportunity to apply a range of React concepts, including multi-page, data validation, reading JSON data. I utilized react-router-dom to seamlessly navigate between pages, providing a cohesive user experience. And by incorporating prop-types, I ensured the integrity of the JSON data being consumed, guaranteeing a robust and reliable application.',  
    website: 'https://viet-doan.com/',
    // github: '',
    languagesAndTools: 'HTML5, CSS3, Javascript, Figma, React',
    image: VietDoanWeb2,
    date: '9th June, 2024 (Duration: 1 week) - Latest Update on: 23rd June, 2024',
  },
  {
    name: 'Dessert Co - Website Template',
    descriptions: 'Designed and developed a modern, minimalist website template for a fictional dessert store during an internship at QuickSite.guru. Emphasized clean HTML structure and CSS styling to ensure a professional and user-friendly interface. The template features a responsive design that adapts seamlessly across various devices, adhering to current web standards and utilizing CSS variables for easy customization. Role included extensive testing, refining based on feedback, and documenting the template\'s usage instructions, contributing to its successful publication on the QuickSite.guru platform.',  
    website: 'http://anai-9atmfta1xwyli1hklmwd.s3-website-ap-southeast-2.amazonaws.com/',
    github: 'https://github.com/viet-doan/dessert_co',
    languagesAndTools: 'HTML5, CSS3, Javascript, Figma',
    image: DessertCoIMG,
    date: '8th May, 2024 (Duration: 4 weeks)',
  },
  {
    name: 'LuckyThirteen Card Game (University Project)',
    descriptions: 'Refactored a digital card game and developed an "Clever Computer" AI to play it. The primary goals were to improve the game\'s structure and maintainability, while also creating an AI that could track discarded cards and use statistics and probabilities to maximize its score. To achieve this, the code were broken down into smaller components, making it more manageable, and designed Clever to inform its decision-making with discarded card data and statistical analysis. Collaborating with a team, we worked together to identify areas for improvement and implement changes that enhanced the game\'s overall performance. Across all stages of the code design, UML notation were used to create domain and design diagrams as a point of reference for the software concept. The code refactoring were conducted through the constant usage of GoF patterns and GRASP principles, further enhancing the game\'s structure and maintainability.',
    website: '',
    // github: '',
    languagesAndTools: 'Java, Object-Oriented Programming, UML Diagrams, UML Notations, Draw.io',
    image: LuckyThirteenIMG,
    date: '10th May, 2024 (Duration: 2 weeks)',
  },
  {
    name: 'Email Client (University Project)',
    descriptions: 'Build a simple email client that downloads and parses email from a standards-compliant IMAP server. Build the project through socket programming and following the guidelines of RFC 3501 (Requests for Comments) standards. Developed the connections supporting both IPv6 and IPv4. The input arguments will specify for the server to write command lines and retrieve particular content of the email such as subject, date, MIME (Multimedia Internet Mail Extension) and print out the plain ASCII version of the message.',
    website: '',
    // github: '',
    languagesAndTools: 'C Programming, Makefile, Socket Programming, Valgrind, Linux Commands',
    image: EmailClientIMG,
    date: '2nd May, 2024 (Duration: 2 weeks)',
  },
  {
    name: 'Koi Corner Personal Art Gallery',
    descriptions: 'A website to display personal art and design . The project was create by integrating design skills with web development skills to create an elegant and sophisticated website that matches with the design’s theme and layout to provide a clean and intuitive user interface that highlights the art design while maintaining smooth navigation and interactive features. Viet’s Koi Corner design was one of the 17 Visual Communication Design work that was selected to be awarded with Top Design 2021 and to be displayed at for the exhibition at the Melbourne Museum.',
    website: 'https://koicorner.art/',
    // github: 'https://github.com/viet-doan/koicorner',
    languagesAndTools: 'HTML, CSS, JavaScript',
    image: KoiCornerIMG,
    date: '9th April, 2024 (Duration: 3 weeks)',
  },
]

export default projects;

