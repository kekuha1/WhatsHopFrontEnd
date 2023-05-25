import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from 'reactstrap';

export function Header() {
 return (
  <>
   <nav className='Header'>
    <Link to={'/'}>
    <img src='/TransparentBKGD.png' alt='Logo' style={{ height: 'auto', maxWidth: '100px', minWidth: '30px' }} />
    </Link>
     <h1>
       <Link className='whatshop' to="/">What's Hop?</Link>
     </h1>
     <ul>
      <li>
      <Link className="headerlinkbutton" to="/favorites">Favorites</Link>
      </li>
      <li>
         <Link className='headerlinkbutton' to="/glossary">Glossary</Link>
         </li>
         <li>
          <Link className='headerlinkbutton' to="/Articles">Articles</Link>
         </li>
     </ul>
   </nav>
   </>
 );
}