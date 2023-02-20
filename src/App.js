import './App.css';
import Profile from './Pages/Profile/Profile';
import Projects from './Pages/Projects/Projects';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <Container>
      <Profile />
      <Projects />
    </Container>

  );
}

export default App; 