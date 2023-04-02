import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from 'reactstrap';

export function Header() {
 return (
  <>
   <nav className='Header'>
    <img src='/TransparentBKGD.png' alt='Logo' style={{ height: 'auto', maxWidth: '5%' }} />
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
       <li>
         <Link className='headerlinkbutton' to="/profile">Profile</Link>
       </li>
       {/* <li>
         <Link className='headerlinkbutton' to="/my-reviews">My Reviews</Link>
       </li> */}
     </ul>
   </nav>
   </>
 );
}