import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const [path, setPath] = useState('');
  useEffect(() => {
    if (typeof window !== undefined) {
      window.location.pathname.includes('services') && setPath('services');
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
      {path !== 'services' ? (
        <Link href='#home'>
          <a>
            <Image
              src='/images/yogaangalogo.jpeg'
              width={90}
              height={50}
              alt='logo'
            />
          </a>
        </Link>
      ) : (
        <Link href='/#home'>
          <a>
            <Image
              src='/images/yogaangalogo.jpeg'
              width={90}
              height={50}
              alt='logo'
            />
          </a>
        </Link>
      )}
      <div className='nav-links' id='navLinks'>
        <i className='fas fa-times' onClick={hideMenu}></i>
        <ul>
          {path !== 'services' ? (
            <li>
              <Link href='#home'>
                <a onClick={hideMenu}>Home</a>
              </Link>
            </li>
          ) : (
            <li>
              <Link href='/#home'>
                <a onClick={hideMenu}>Home</a>
              </Link>
            </li>
          )}

          {path !== 'services' ? (
            <li>
              <Link href='#aboutUs'>
                <a onClick={hideMenu}>About</a>
              </Link>
            </li>
          ) : (
            <li>
              <Link href='/#aboutUs'>
                <a onClick={hideMenu}>About</a>
              </Link>
            </li>
          )}

          <li className='dropdown'>
            <Link href='/services'>
              <a onClick={hideMenu}>Services</a>
            </Link>
            <div class='dropdown-content'>
              <div>
                <Link href='/services/#onlineyogaclasses'>
                  <a href='/services/#onlineyogaclasses'>Online Yoga Classes</a>
                </Link>
              </div>
              <div>
                <Link href='/services/#yogaforbeginners'>
                  <a>Yoga For beginners</a>
                </Link>
              </div>{' '}
              <div>
                <Link href='/services/#hathyoga'>
                  <a>Hatha Yoga</a>
                </Link>
              </div>{' '}
              <div>
                <Link href='/services/#onlineyogaclasses'>
                  <a>Online Yoga Classes</a>
                </Link>
              </div>{' '}
              <div>
                <Link href='/services/#privateyogaclasses'>
                  <a>Private Yoga Classes</a>
                </Link>
              </div>{' '}
              <div>
                <Link href='/services/#corporateyoga'>
                  <a>Corporate Yoga</a>
                </Link>
              </div>{' '}
              <div>
                <Link href='/services/#kidsyoga'>
                  <a>Kids yoga</a>
                </Link>
              </div>{' '}
              <div>
                <Link href='/services/#pregnancyyoga'>
                  <a>Pregnancy Yoga</a>
                </Link>
              </div>
              <div>
                <Link href='/services/#meditation'>
                  <a>Meditation</a>
                </Link>
              </div>
              <div>
                <Link href='/services/#pranayama'>
                  <a>Pranayama</a>
                </Link>
              </div>
            </div>
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
