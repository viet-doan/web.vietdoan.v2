import Navigation from '../general/Navigation';
import Footer from '../general/Footer';
import Card from '../general/Card';


function About() {  
  return (
    <div className='app'>
      <Navigation />
      <main className="main row">
        <Card />
  
        {/* Welcome Section */}
          <div className="column landing">
            <div className="heading-bar">
              <h5>Welcome to my Portfolio</h5>
            </div>
            <h1>Hi! 😊<br />I'm Viet Doan</h1>
            <p>I am currently a Computer Science student at the University of Melbourne</p>
            <button className='btn-general'>More about me..</button>
          </div>
  
  
  
      </main>
      <Footer />
    </div>
  );
}


export default About