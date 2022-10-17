import {
  Animator, ScrollContainer,
  ScrollPage, batch, FadeIn, Fade
} from 'react-scroll-motion';
import './App.css';
import Profile from './Pages/Profile/Profile';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';


function App() {
  const ZoomInScrollOut = batch(FadeIn(), Fade());

  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={ZoomInScrollOut}>
          <Profile />
        </Animator>
      </ScrollPage>

      <ScrollPage page={1}>
        <Skills />
      </ScrollPage>

      <ScrollPage page={2}>
        <Projects />
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App; 