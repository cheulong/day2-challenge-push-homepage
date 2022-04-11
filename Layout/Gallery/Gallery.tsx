import React from 'react';
import Image from 'next/image';
import modelCenter1 from '@/assets/images/model-center-1.jpg';
import menu from '@/assets/icons/menu_black_24dp.svg';
import person from '@/assets/icons/person_black_24dp.svg';
import arrow from '@/assets/icons/play_circle_filled_black_24dp.svg';
import styles from './Gallery.module.scss';

const Gallery = () => {
  return (
    <div>
      <div className='grid'>
        <div className='grid__item'>
          <div className='card'>
            <div className='card__image card__image--center'>
              <Image
                src={modelCenter1}
                alt='modelCenter1'
                width={50}
                height={50}
                layout='fixed'
              />
            </div>
            <div className='card__content card__content--center'>
              <h1 className='card__content-title'>David OLDHAM</h1>
              <p className='card__content-des'>29, Designer, London</p>
            </div>
          </div>
        </div>
        <div className='grid__item'>
          <div className='card'>
            <div className='card__image card__image--left'>
              <Image
                src={modelCenter1}
                alt='modelCenter1'
                width={50}
                height={50}
                layout='fixed'
              />
            </div>
            <div className='card__content card__content--right'>
              <h1 className='card__content-title'>Steve McDERMOTT</h1>
              <p className='card__content-des'>27, SEO Specialist, Liverpool</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
