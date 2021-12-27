import React from 'react';

function Footer() {
  return (
    <div id='contact'>
      <footer>
        <div className='content'>
          <div className='left box'>
            <div className='lower'>
              <div className='topic'>Contact us</div>
              <div className='phone'>
                <a href='#'>
                  <i className='fas fa-phone-volume'></i>+007 9089 6767
                </a>
              </div>
              <div className='email'>
                <a href='#'>
                  <i className='fas fa-envelope'></i>abc@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className='middle box'>
            <div className='topic'>Our Services</div>
            <div>
              <a href='#'>Yoga for beginners</a>
            </div>
            <div>
              <a href='#'>Yoga for weight loss</a>
            </div>
            <div>
              <a href='#'>Hatha Yoga</a>
            </div>
            <div>
              <a href='#'>Vinayasa yoga</a>
            </div>
            <div>
              <a href='#'>Fitness yoga</a>
            </div>
            <div>
              <a href='#'>Asthangana yoga</a>
            </div>
            <div>
              <a href='#'>Power yoga</a>
            </div>
            <div>
              <a href='#'>Yin yoga</a>
            </div>
            <div>
              <a href='#'>Corporate yoga</a>
            </div>
            <div>
              <a href='#'>Zumba/Aerobics</a>
            </div>
          </div>
          <div className='right box'>
            <div className='topic'>Subscribe us</div>
            <form action='#'>
              <input type='text' placeholder='Enter email address' />
              <input type='submit' name='' value='Send' />
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
            </form>
          </div>
        </div>
        <div className='bottom'>
          <p>
            Copyright © 2020 <a href='#'>CodingLab</a> All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
