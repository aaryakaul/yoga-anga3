import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import SiteWrapper from '../components/SiteWrapper';
import Nav from '../components/Nav';
import Link from 'next/link';
import { Card, Icon } from 'semantic-ui-react';
import Footer from '../components/Footer';

export default function Home() {
  function myFunction(id) {
    if (typeof window === 'object') {
      let dots = document.getElementById(`dots${id}`);
      let moreText = document.getElementById(`more${id}`);
      let btnText = document.getElementById(`myBtn${id}`);

      if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        btnText.innerHTML = 'Read more';
        moreText.style.display = 'none';
      } else {
        dots.style.display = 'none';
        btnText.innerHTML = 'Read less';
        moreText.style.display = 'inline';
      }
    }
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='width=device-width,initial-scale=1.0'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,700;1,100&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
          integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
          crossOrigin='anonymous'
        />
      </Head>
      <section className='header'>
        <Nav />
        <div className='text-box'>
          <h1>YOGA ANGA</h1>
          <p>
            Welcome to Yoga Anga, where we invite you to explore and deepen your
            yoga practice, discover your own magic, heal, recharge, relax, learn
            and thrive!
            <br /> We’re dedicated to making yoga available to everyone
            regardless of their size, shape, or bank accounts. Join our
            positive, diverse community today.
          </p>
          <Link href=''>
            <a className='hero-btn'>BOOK NOW</a>
          </Link>
        </div>
      </section>
      <section className='about' id='aboutUs'>
        <div className='about-cols'>
          <div className='about-rows'>
            <div className='item'>
              <img
                src='https://studiopsquare.com/wp-content/uploads/2020/03/Re_ef7bcd6cb3fb04977a21a21735c18610_1920x2000.jpg'
                width={400}
                height={450}
                alt='logo'
              />
            </div>
            <div>
              <h1>About Us</h1>
              <p style={{ lineHeight: '2em' }}>
                In today’s fast-paced world, our lifestyle hampers our body’s
                well-being by accumulating toxins. This results in creation of
                stress, diseases and illnesses, which deteriorates one’s health.
                This is where the Yoga Anga comes into effect and has proven to
                be important for our body and mind. Yoga Anga is a sacred haven
                for everyone who wants to embark on a life changing journey. We
                welcome all students and offer a variety of yoga, meditations,
                training, courses, workshops and other healing modalities to
                support and deepen your practice. Yoga Anga offers many physical
                and mental health and wellness programs, with a curriculum
                designed to meet the needs of everyone.
              </p>
            </div>
          </div>
          <div className='about-rows' style={{ marginTop: '50px' }}>
            <div className='item'>
              <Image
                src='/images/newyork.png'
                width={500}
                height={300}
                alt='logo'
              />
            </div>
            <div>
              <h1>Our Purpose</h1>
              <p style={{ lineHeight: '2em' }}>
                To offer inclusive wellbeing classes for real people, wherever
                and whenever, with live and online yoga classes We provide
                services at your Home, Garden, Bunglow, Hospitals, Health club,
                GYM, Society & Companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='course'>
        <h1>FIND WHAT MOVES YOU</h1>
        <p>
          Whether you’re a complete beginner or you want to step up your
          routine, get the full studio experience at home with thousands of
          classes for body, mind, and spirit.
        </p>
        <div className='row'>
          <div className='col-names'>
            <Image
              src='/images/london.png'
              width={296}
              height={166}
              alt='logo'
            />
            <h3>YOGA FOR BEGINNERS</h3>
            <p>
              Our Yoga for Beginners classes is just what you need to ignite or
              deepen your passion for yoga. Whether you are a complete begi
              <span id='dots1'>...</span>
              <span id='more1'>
                nner, or have tried yoga in the past and are ready to really get
                going, these classes will pave the way. These beginners class is
                designed for everyone and for everybody, so there’s no need to
                be wary if you have no previous yoga experience.
              </span>
              <b
                style={{
                  fontWeight: 'bold',
                  marginLeft: '4px',
                  cursor: 'pointer',
                }}
                onClick={() => myFunction(1)}
                id='myBtn1'
              >
                Read more
              </b>
            </p>
          </div>
          <div className='col-names'>
            <Image
              src='/images/newyork.png'
              width={296}
              height={166}
              alt='logo'
            />
            <h3>HATHA YOGA</h3>
            <p>
              Hatha Yoga concentrates on physical health and mental well-being.
              Hatha Yoga comprises of asanas (physical postures)
              <span id='dots2'>...</span>
              <span id='more2'>
                , b reat hing techniques and meditation with the goal of
                bringing about a sound, healthy body and a clear, peaceful mind.
                It concentrates on the third (Asana) and fourth (Pranayama) limb
                in the Eight Limbs of Yoga. Hatha Yoga focuses on breathing and
                postures which are held for a while to benefit from their
                healing power. Because Hatha yoga’s pace is slow and gentle, it
                is an ideal starting place for people who are new to yoga.
              </span>
              <b
                style={{
                  fontWeight: 'bold',
                  marginLeft: '4px',
                  cursor: 'pointer',
                }}
                onClick={() => myFunction(2)}
                id='myBtn2'
              >
                Read more
              </b>
            </p>
          </div>
          <div className='col-names'>
            <Image
              src='/images/cafeteria.png'
              width={296}
              height={166}
              alt='logo'
            />
            <h3>PRIVATE YOGA CLASSES</h3>
            <p>
              We teach Yoga at your doorstep. You require guidance to practice
              Yoga at your home. Private yoga class helps to relea
              <span id='dots3'>...</span>
              <span id='more3'>
                se dormant energy & revitalizes the whole being ensuring the
                body's vitality and the minds tranquility.
                <br />
                <b style={{ fontWeight: 'bold' }}>
                  Benefits of Private yoga classes:
                </b>
                <ol style={{ textAlign: 'start', marginTop: '1px' }}>
                  <li>
                    Gain Initial Experience In A Safer Environment For
                    Beginners.
                  </li>
                  <li>Feel More Comfortable And Less Self-Conscious.</li>
                  <li>Focus On Personal Goals & Needs.</li>
                  <li>
                    Reduce Your Anxiety Without Triggering Other Stressors.
                  </li>
                  <li>Be Able To Practice Yoga Anywhere, Even at Work</li>
                  <li>Work Around Your Schedule.</li>
                  <li>Advance Your Yoga Skills With Pre-Determined Goals.</li>
                  <li>
                    Tailor The Class To Your Limitations, Injuries, or Health
                    Concerns Book Your Private Yoga Class Today.
                  </li>
                </ol>
              </span>
              <b
                style={{
                  fontWeight: 'bold',
                  marginLeft: '4px',
                  cursor: 'pointer',
                }}
                onClick={() => myFunction(3)}
                id='myBtn3'
              >
                Read more
              </b>
            </p>
          </div>
          <div className='col-names'>
            <Image
              src='/images/washington.png'
              width={296}
              height={166}
              alt='logo'
            />
            <h3>ONLINE YOGA CLASSES</h3>
            <p>
              yoga allows you to select the time of the day that suits you to
              practice. Whether you’re a morning bird or a night owl,
              <span id='dots4'>...</span>
              <span id='more4'>
                the ability to roll out your mat at any given time offers a
                great amount of freedom and allows you to commit to your
                practice in a way that is simple and easy.Online yoga offers an
                abundance of options and solutions for the modern-day yogi.
                Share the many physical and mental benefits of Yoga with your
                family, friends, coworkers or neighbors.
              </span>
              <b
                style={{
                  fontWeight: 'bold',
                  marginLeft: '4px',
                  cursor: 'pointer',
                }}
                onClick={() => myFunction(4)}
                id='myBtn4'
              >
                Read more
              </b>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
