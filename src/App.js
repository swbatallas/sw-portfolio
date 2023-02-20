import './App.css';
import Profile from './Pages/Profile/Profile';
import Projects from './Pages/Projects/Projects';
import { Container } from 'react-bootstrap';
import Skills from './Pages/Skills/Skills';

function App() {

  return (
    <Container>
      <Profile />
      <Skills />
      <Projects />
    </Container>

  );
}

export default App; 