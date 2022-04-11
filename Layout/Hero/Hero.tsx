import React from 'react';
import Image from 'next/image';
import logo from '@/assets/icons/PUSH.svg';
import menu from '@/assets/icons/menu_black_24dp.svg';
import person from '@/assets/icons/person_black_24dp.svg';
import arrow from '@/assets/icons/play_circle_filled_black_24dp.svg';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div>
      <header className={styles.hero}>
        <div className='hero__header-item'>
          <Image src={menu} alt='menu' width={50} height={50} layout='fixed' />
        </div>
        <div className='hero__header-item'>
          <Image src={logo} alt='logo' width={50} height={50} layout='fixed' />
        </div>
        <div className='hero__header-item'>
          <Image
            src={person}
            alt='person'
            width={50}
            height={50}
            layout='fixed'
          />
        </div>
      </header>
      <main className='main'>
        <h2 className='main__subtitle'>Community</h2>
        <h1 className='main__title'>Of prosperous webmasters</h1>
        <a className='btn btn--primary'>create account</a>
        <a className='btn btn-outline'>
          take a tour
          <Image
            src={arrow}
            alt='arrow'
            width={50}
            height={50}
            layout='fixed'
          />
        </a>
      </main>
    </div>
  );
};

export default Hero;
