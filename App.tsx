import React from 'react';
import { HashRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Home id="home" />
        <About id="about" />
        <Projects id="projects" />
        <Skills id="skills" />
        <Contact id="contact" />
      </Layout>
    </HashRouter>
  );
};

export default App;