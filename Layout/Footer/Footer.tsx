import React from 'react';
import Image from 'next/image';
import Link from 'next/Link';
import logo from '@/assets/icons/PUSH.svg';
import menu from '@/assets/icons/menu_black_24dp.svg';
import fb from '@/assets/icons/fb.svg';
import instagram from '@/assets/icons/instagram.svg';
import twitter from '@/assets/icons/twitter.svg';
import youtube from '@/assets/icons/youtube.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className='logo--footer'>
        <Image src={logo} alt='logo' width={50} height={50} layout='fixed' />
      </div>
      <nav className='nav--footer'>
        <Link href=''>
          <a>About</a>
        </Link>
        <Link href=''>
          <a>Vacancies</a>
        </Link>
        <Link href=''>
          <a>Events</a>
        </Link>
        <Link href=''>
          <a>Schedule</a>
        </Link>
        <Link href=''>
          <a>News</a>
        </Link>
        <Link href=''>
          <a>Contacts</a>
        </Link>
        <Link href=''>
          <a>Cases</a>
        </Link>
        <Link href=''>
          <a>Base</a>
        </Link>
      </nav>
      <div className='social-media__list'>
        <Link href=''>
          <Image src={fb} alt='fb' width={50} height={50} layout='fixed' />
        </Link>
        <Link href=''>
          <Image
            src={instagram}
            alt='instagram'
            width={50}
            height={50}
            layout='fixed'
          />
        </Link>
        <Link href=''>
          <Image
            src={twitter}
            alt='twitter'
            width={50}
            height={50}
            layout='fixed'
          />
        </Link>
        <Link href=''>
          <Image
            src={youtube}
            alt='youtube'
            width={50}
            height={50}
            layout='fixed'
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
