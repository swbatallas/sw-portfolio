import {
  Animator, ScrollContainer,
  ScrollPage, batch, FadeIn, Fade
} from 'react-scroll-motion';
import './App.css';
import Profile from './Pages/Profile/Profile';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
import Home from './Pages/Home/Home';


function App() {
  const ZoomInScrollOut = batch(FadeIn(), Fade());

  return (
    <>
      <Home />
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
    </>
  );
}

export default App; 