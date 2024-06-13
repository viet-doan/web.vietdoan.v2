import Navigation from '../general/Navigation';
import Footer from '../general/Footer';

import KoiCorner from '../assets/koicorner_web.png';
import EmailClient from '../assets/socket_code.png';
import LuckyThirteen from '../assets/lucky_thirteen.png';

import Tasks from '../components/Tasks';
import projects from '../data/projects';

// NOTE: sections are displayed in order defined.
const sections = {
  Tasks: () => <Tasks data={projects} />,
};

function Projects() {    
  return (
    <div className='App'>
      <Navigation />
      <main className="main row">
        <div className="column">
          {Object.entries(sections).map(([name, Section]) => (
            <Section key={name} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}


export default Projects