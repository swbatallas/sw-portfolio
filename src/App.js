import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import NavigationBar from './Components/Navbar/NavigationBar';
import AnimatedRoutes from './Components/AnimatedRoutes';

function App() {

  return (
    <Router>
      <NavigationBar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App; 