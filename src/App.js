import {
  Animator, ScrollContainer,
  ScrollPage, FadeIn, Fade
} from 'react-scroll-motion';
import './App.css';
import Profile from './Pages/Profile/Profile';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
import HeaderNavBar from './Pages/Home/HeaderNavBar';

function App() {

  return (
    <>
      <HeaderNavBar />
      <ScrollContainer>
        <ScrollPage >
          <Animator animation={Fade()}>
            <Profile name='aboutme' />
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Skills />
        </ScrollPage>

        <ScrollPage>
          <Animator animation={FadeIn()}>
            <Projects />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
}

export default App; 