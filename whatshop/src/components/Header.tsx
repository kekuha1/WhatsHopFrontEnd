import React from 'react';
import { Link } from 'react-router-dom';
export function Header() {
 return (
   <nav>
     <h1>
       <Link to="/">What's Hop?</Link>
     </h1>
     <ul>
       <li>
         <Link to="/glossary">Glossary</Link>
       </li>
       <li>
         <Link to="/profile">Profile</Link>
       </li>
       <li>
         <Link to="/my-reviews">My Reviews</Link>
       </li>
     </ul>
   </nav>
 );
}