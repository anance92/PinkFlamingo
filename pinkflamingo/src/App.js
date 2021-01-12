import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
// import Projects from './components/Projects';
import ContactForm from './components/Contact';
import './App.css';

function App() {
  const [categories] = useState([
    {
      name: 'projects',
      description: 'The compilation of my works',
    },
    // { name: 'portraits', description: 'Portraits of people in my life' },
    // { name: 'food', description: 'Delicious delicacies' },
    // { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            {/* <Projects currentCategory={currentCategory}></Projects> */}
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
          ) }
      </main>
    </div>
  );
}

export default App;