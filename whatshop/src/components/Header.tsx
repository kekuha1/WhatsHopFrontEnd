import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from 'reactstrap';

export function Header() {
 return (
  <>
   <nav className='Header'>
    <img src='/TransparentBKGD.png' alt='Logo' style={{marginLeft: "0px", maxHeight: '100px', maxWidth: '100px' }} />
     <h1>
       <Link className='whatshop' to="/">What's Hop?</Link>
     </h1>
     <ul>
      <li>
      <Link className="headerlinkbutton" to="/favorites">Favorite</Link>
      </li>
      <li>
         <Link className='headerlinkbutton' to="/glossary">Glossary</Link>
         </li>
     </ul>
   </nav>
   </>
 );
}