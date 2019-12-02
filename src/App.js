import React from 'react';

// load fonts and custom css
import './fonts.css';
import './custom.css';

// load components and includes
import Header from './components/headerComp/header';
import Content from './components/contentComp/allContent';
import Footer from './components/footerComp/footer';



function App() {
  return (
    <div class="container-fluid full-width">

      <Header />

      <Content />

      <Footer />

    </div>

  );
}

export default App;
