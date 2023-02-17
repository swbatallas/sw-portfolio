import './App.css';
import Profile from './Pages/Profile/Profile';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
import { Container } from 'react-bootstrap';

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