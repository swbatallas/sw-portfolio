import './App.css';
import Profile from './Pages/Profile/Profile';
import Projects from './Pages/Projects/Projects';
import Skills from './Pages/Skills/Skills';
import ScrollBar from './Components/ScrollBar/ScrollBar';

function App() {

  return (
    <>
      <ScrollBar />
      <Profile />
      <Skills />
      <Projects />
    </>

  );
}

export default App; 