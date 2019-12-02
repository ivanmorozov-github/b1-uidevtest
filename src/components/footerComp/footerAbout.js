import React from 'react';

// footer section : About Us, list of links

function FooterAbout() {

  const navtitle = ['About Us']
  const navlink = ['Story', 'Contact', 'Blog']

  return (

    <ul className="list-unstyled">
        <li><h5>{navtitle[0]}</h5></li>
        {navlink.map(item => ( 
          <li key={item}>
            {item}
          </li>
        ))}

    </ul>
    
);
}

export default FooterAbout;