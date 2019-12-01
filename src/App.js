import React from 'react';

// custom css
import './fonts.css';
import './custom.css';

// components and includes
import Header from './components/headerComp/header';
import Content from './components/contentComp/content';
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
