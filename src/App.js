import './App.css';
import Profile from './Pages/Profile/Profile';
import Projects from './Pages/Projects/Projects';
import Skills from './Pages/Skills/Skills';
import ProgressScrollBar from './Components/ScrollBar/ProgressScrollBar';

function App() {

  return (
    <>
      <ProgressScrollBar />
      <Profile />
      <Skills />
      <Projects />
    </>

  );
}

export default App; 