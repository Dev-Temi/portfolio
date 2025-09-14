import './App.css';
import Nav from './nav';
import Hero from './hero';
import AboutMe from './Aboutme';
import Services from './Services';
import Portfolio from './portfolio';
import ContactMe from './contact';
import Futter from './Footer';


function App() {
  return (
    <div className="App">
     <Nav />
      <Hero />
      <AboutMe />
      <Services />
      <Portfolio />
      <ContactMe />
      <Futter />
    </div>
  );
}

export default App;
