import './App.css';
import Profile from './Pages/Profile/Profile';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
import HeaderNavBar from './Pages/Home/HeaderNavBar';

function App() {

  return (
    <>
      <Profile id='aboutme' />
      <Skills id='skills' />
      <Projects id='projects' />
    </>
  );
}

export default App; 