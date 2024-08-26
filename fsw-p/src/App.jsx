import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutModal from './components/AboutModal';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="App">
      <Header />
      <main>
        <Introduction openModal={openModal} />
        <Skills />
        <Projects />
        <Contact />
      </main>
      {isModalOpen && <AboutModal closeModal={closeModal} />}
    </div>
  );
}

export default App;
