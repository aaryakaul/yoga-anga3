import React from 'react';
import Nav from '../components/Nav';
import Image from 'next/image';
import Head from 'next/head';
import { Container } from 'semantic-ui-react';
import Footer from '../components/Footer';

function Services() {
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
      <section className='services'>
        <Nav />
        <div className='text-box'>
          <h1>Services</h1>
          <p style={{ lineHeight: '2' }}>
            Welcome to Yoga Anga, where we invite you to explore and deepen your
            yoga practice, discover your own magic, heal, recharge, relax, learn
            and thrive! We’re dedicated to making yoga available to everyone
            regardless of their size, shape, or bank accounts. Join our
            positive, diverse community today.
          </p>
        </div>
      </section>
      <section className='servicesSection' id='onlineyogaclasses'>
        <Container text>
          <h1 style={{ textAlign: 'center' }}>ONLINE YOGA CLASSES</h1>
          <Image
            src='/images/onlineyogaclasses.jpeg'
            width={701}
            height={365}
            alt='logo'
          />
          <p style={{ lineHeight: '2', fontSize: 16 }}>
            Yoga allows you to select the time of the day that suits you to
            practice. Whether you’re a morning bird or a night owl, the ability
            to roll out your mat at any given time offers a great amount of
            freedom and allows you to commit to your practice in a way that is
            simple and easy.Online yoga offers an abundance of options and
            solutions for the modern-day yogi. Share the many physical and
            mental benefits of Yoga with your family, friends, coworkers or
            neighbors.
          </p>
        </Container>
      </section>
      <section className='servicesSection' id='yogaforbeginners'>
        <Container text>
          <h1 style={{ textAlign: 'center' }}>YOGA FOR BEGINNERS</h1>
          <Image
            src='/images/yogaforbegginers.jpeg'
            width={701}
            height={365}
            alt='logo'
          />
          <p style={{ lineHeight: '2', fontSize: 16 }}>
            Our Yoga for Beginners classes is just what you need to ignite or
            deepen your passion for yoga. Whether you are a complete begi nner,
            or have tried yoga in the past and are ready to really get going,
            these classes will pave the way. These beginners class is designed
            for everyone and for everybody, so there’s no need to be wary if you
            have no previous yoga experience.
          </p>
        </Container>
      </section>
      <section className='servicesSection' id='hathyoga'>
        <Container text>
          <h1 style={{ textAlign: 'center' }}>HATHA YOGA</h1>
          <Image
            src='/images/hathyoga.jpeg'
            width={701}
            height={365}
            alt='logo'
          />
          <p style={{ lineHeight: '2', fontSize: 16 }}>
            Hatha Yoga concentrates on physical health and mental well-being.
            Hatha Yoga comprises of asanas (physical postures) , b reat hing
            techniques and meditation with the goal of bringing about a sound,
            healthy body and a clear, peaceful mind. It concentrates on the
            third (Asana) and fourth (Pranayama) limb in the Eight Limbs of
            Yoga. Hatha Yoga focuses on breathing and postures which are held
            for a while to benefit from their healing power. Because Hatha
            yoga’s pace is slow and gentle, it is an ideal starting place for
            people who are new to yoga.
          </p>
        </Container>
      </section>
      <section className='servicesSection' id='privateyogaclasses'>
        <Container text>
          <h1 style={{ textAlign: 'center' }}>PRIVATE YOGA CLASSES</h1>
          <Image
            src='/images/privateyogaclasses.jpeg'
            width={701}
            height={365}
            alt='logo'
          />
          <p style={{ lineHeight: '2', fontSize: 16 }}>
            We teach Yoga at your doorstep. You require guidance to practice
            Yoga at your home. Private yoga class helps to relea se dormant
            energy & revitalizes the whole being ensuring the body's vitality
            and the minds tranquility.
            <br />
            <b style={{ fontWeight: 'bold' }}>
              Benefits of Private yoga classes:
            </b>
            <ol style={{ textAlign: 'start', marginTop: '1px' }}>
              <li>
                Gain Initial Experience In A Safer Environment For Beginners.
              </li>
              <li>Feel More Comfortable And Less Self-Conscious.</li>
              <li>Focus On Personal Goals & Needs.</li>
              <li>Reduce Your Anxiety Without Triggering Other Stressors.</li>
              <li>Be Able To Practice Yoga Anywhere, Even at Work</li>
              <li>Work Around Your Schedule.</li>
              <li>Advance Your Yoga Skills With Pre-Determined Goals.</li>
              <li>
                Tailor The Class To Your Limitations, Injuries, or Health
                Concerns Book Your Private Yoga Class Today.
              </li>
            </ol>
          </p>
        </Container>
      </section>
      <section className='servicesSection' id='corporateyoga'>
        <Container text>
          <h1 style={{ textAlign: 'center' }}>Corporate Yoga</h1>
          <Image
            src='/images/privateyogaclasses.jpeg'
            width={701}
            height={365}
            alt='logo'
          />
          <p style={{ lineHeight: '2', fontSize: 16 }}>
            Yoga is not just about being able to perform complicated poses and
            movements. It is a holistic approach to physical and mental health,
            as well as a person's well-being and personal growth. Corporate Yoga
            is the extended concept of working peacefully in the midst of a
            hectic corporate environment. depression is the most disabling
            illness for the corporate sector, second only to cardio-vascular
            diseases. <br />
            <br />
            Both your business and your employees will benefit by incorporating
            yoga into your daily work routine and your wellness program.
            Fortunately, stress need not cost you so dearly. There is a way to
            maintain a level of graceful productivity within the four walls of
            an office and manage stress effectively. It’s called Corporate Yoga.
            <br />
            <br />
            We guarantee that our yoga class will leave you and your co-workers
            refreshed, re-energize ed and ready to deal with workplace stress.
          </p>
        </Container>
      </section>
      <section className='servicesSection' id='kidsyoga'>
        <Container text>
          <h1 style={{ textAlign: 'center' }}>KIDS YOGA</h1>
          <Image
            src='/images/privateyogaclasses.jpeg'
            width={701}
            height={365}
            alt='logo'
          />
          <p style={{ lineHeight: '2', fontSize: 16 }}>
            Yoga is not just for adults! In fact, it can give children very
            important life skills that can help them succeed in the world.
            <br />
            <b style={{ fontWeight: 'bold' }}>
              Some Amazing Benefits of kids yoga:
            </b>
            <ol style={{ textAlign: 'start', marginTop: '1px' }}>
              <li>Yoga helps children manage their anxiety.</li>
              <li>Yoga improves children’s emotional regulation.</li>
              <li>Yoga boosts children’s self-esteem.</li>{' '}
              <li>Yoga increases children’s body awareness and mindfulness.</li>
              <li> Yoga enhances children’s concentration and memory.</li>
              <li>
                Yoga develops children’s strength and flexibility Yoga teaches
                discipline and reduces impulsivity
              </li>
            </ol>
          </p>
        </Container>
      </section>
      <section className='servicesSection' id='pregnancyyoga'>
        <Container text>
          <h1 style={{ textAlign: 'center' }}>PREGNANCY YOGA</h1>
          <Image
            src='/images/privateyogaclasses.jpeg'
            width={701}
            height={365}
            alt='logo'
          />
          <p style={{ lineHeight: '2', fontSize: 16 }}>
            Prenatal yoga can be a great way to prepare for childbirth. If
            you're pregnant and looking for ways to relax or stay fit, you might
            be considering prenatal yoga. But did you know that prenatal yoga
            might also help you prepare for labor and promote your baby's
            health?
            <br />
            <br /> From your physical body to your emotional state, prenatal
            yoga is a key ingredient to a healthy, happy pregnancy.
            <br />
            <b style={{ fontWeight: 'bold' }}>
              Amazing Benefits of Prenatal yoga:
            </b>
            <ol style={{ textAlign: 'start', marginTop: '1px' }}>
              <li>Supports Your Changing Body.</li>
              <li>Tones Important Muscle Groups.</li>
              <li>Prepares for Labor and Delivery.</li>
              <li>Promotes Connection With Your Baby.</li>
              <li>Provides Relief From Common Pregnancy Complaints.</li>
              <li>Work Around Your Schedule.</li>
              <li>Gives You a Healthier Pregnancy.</li>
            </ol>
          </p>
        </Container>
      </section>
      <section className='servicesSection' id='meditation'>
        <Container text>
          <h1 style={{ textAlign: 'center' }}>MEDITATION</h1>
          <Image
            src='/images/privateyogaclasses.jpeg'
            width={701}
            height={365}
            alt='logo'
          />
          <p style={{ lineHeight: '2', fontSize: 16 }}>
            Meditation is the habitual process of training your mind to focus
            and redirect your thoughts.The popularity of meditation is
            increasing as more people discover its many health benefits. If
            stress has you anxious, tense and worried, consider trying
            meditation. <br />
            Spending even a few minutes in meditation can restore your calm and
            inner peace
            <br />
            <b style={{ fontWeight: 'bold' }}>
              Benefits of meditation can include:
            </b>
            <ol style={{ textAlign: 'start', marginTop: '1px' }}>
              <li>Gaining a new perspective on stressful situations.</li>
              <li>Building skills to manage your stress.</li>
              <li>Increasing self-awareness.</li>
              <li>Focusing on the present.</li>
              <li>Reducing negative emotions</li>
              <li>Increasing imagination and creativity.</li>
              <li>Increasing patience and tolerance.</li>
            </ol>
          </p>
        </Container>
      </section>
      <section className='servicesSection' id='pranayama'>
        <Container text>
          <h1 style={{ textAlign: 'center' }}>PRANAYAMA</h1>
          <Image
            src='/images/privateyogaclasses.jpeg'
            width={701}
            height={365}
            alt='logo'
          />
          <p style={{ lineHeight: '2', fontSize: 16 }}>
            Today, more and more people from different walks of life are opting
            for Yoga. Yoga is more than asanas. It’s a complete lifestyle that
            promotes holistic health. Prana is the vital component that sustains
            life. “Pran” mean bio-energy and “ayama” means to control or
            regulation. There are various types of Pranayama, and their benefits
            in daily life are unlimited.
            <br />
            <b style={{ fontWeight: 'bold' }}>
              Benefits of pranayama can include:
            </b>
            <ol style={{ textAlign: 'start', marginTop: '1px' }}>
              <li>Clears the mind.</li>
              <li>Improves mindfulness.</li>
              <li>Strengthens your lungs.</li>
              <li>Improves sleep quality.</li>
            </ol>
          </p>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default Services;
