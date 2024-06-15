import Navigation from '../components/general/Navigation';
import Footer from '../components/general/Footer';

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