import React, { useEffect } from 'react';
import Link from 'next/link';

const Nav = () => {
  useEffect(() => {
    if (typeof window !== undefined) {
      var elmnt = document.getElementById('navbar');
      window.onscroll = function () {
        if (window.innerHeight + window.scrollY > document.body.offsetHeight) {
          elmnt.classList.add('isSticky');
        } else {
          elmnt.classList.remove('isSticky');
        }
      };
    }
  });
  const hideMenu = () => {
    if (typeof window === 'object') {
      let navLinks = document.getElementById('navLinks');
      navLinks.style.right = '900px';
    }
  };

  const showMenu = () => {
    if (typeof window === 'object') {
      let navLinks = document.getElementById('navLinks');
      navLinks.style.right = '0';
    }
  };

  return (
    <nav id='navbar'>
      <Link href='/'>
        <a>
          <img src='/images/logo.png' width={170} height={70} alt='logo' />
        </a>
      </Link>
      <div className='nav-links' id='navLinks'>
        <i className='fas fa-times' onClick={hideMenu}></i>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='#aboutUs'>
              <a onClick={hideMenu}>About</a>
            </Link>
          </li>
          <li>
            <Link href='/courses'>
              <a onClick={hideMenu}>Courses</a>
            </Link>
          </li>
          <li>
            <Link href='#contact'>
              <a onClick={hideMenu}>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <i className='fas fa-bars' onClick={showMenu}></i>
    </nav>
  );
};

export default Nav;
