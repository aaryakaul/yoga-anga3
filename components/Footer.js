import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <div id='contact'>
      <footer>
        <div className='content'>
          <div className='left box'>
            <div className='lower'>
              <div className='topic'>Contact us</div>
              <div className='phone'>
                <a href='tel:+9184016854567'>
                  <i className='fas fa-phone-volume'></i>+91 84016854567
                </a>
              </div>
              <div className='email'>
                <a href='mailto: aaryakaul07@gmail.com'>
                  <i className='fas fa-envelope'></i>aaryakaul07@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className='middle box'>
            <div className='topic'>Our Services</div>
            <div>
              <Link href='/services/#onlineyogaclasses'>
                <a>Online Yoga Classes</a>
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
          <div className='right box'>
            <div className='topic'>Subscribe Us At</div>
            <div className='media-icons'>
              <a href='#'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href='#'>
                <i className='fab fa-instagram'></i>
              </a>
              <a href='#'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='#'>
                <i className='fab fa-youtube'></i>
              </a>
              <a href='#'>
                <i className='fab fa-linkedin-in'></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
