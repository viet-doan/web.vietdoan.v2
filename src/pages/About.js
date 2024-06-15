import Navigation from '../components/general/Navigation';
import Footer from '../components/general/Footer';
import Card from '../components/general/Card';

import Summary from '../components/Summary';
// import Skills from '../components/Skills';
import Timeline from '../components/Timeline';

import summary from '../data/summary';
// import skills from '../data/skills';
import timeline from '../data/timeline';

// NOTE: sections are displayed in order defined.
const sections = {
  Summary: () => <Summary data={summary} />,
  // Skills: () => <Skills skills={skills} />,
  Timeline: () => <Timeline data={timeline} />,
};

function About() {  
  return (
    <div className='App'>
      <Navigation />
      <main className="main row">
        <Card />
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


export default About