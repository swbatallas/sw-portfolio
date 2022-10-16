import {
  Animator, ScrollContainer,
  ScrollPage, Fade, batch, FadeIn, ZoomIn
} from 'react-scroll-motion';
import './App.css';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';


function App() {
  const ZoomInScrollOut = batch(FadeIn(), ZoomIn());

  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={Fade()}>
          <Home />
        </Animator>
      </ScrollPage>

      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <Profile />
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Skills />
      </ScrollPage>
      <ScrollPage>
        <Projects />
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
