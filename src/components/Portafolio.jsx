'use client'
import React, { useRef, useState } from 'react';
import { useClient } from 'next/client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import styles from '../styles/portafolio.module.css'
import { proyecto_1, proyecto_2, proyecto_3 } from '@/assets';
import Image from 'next/image';
export default function Portafolio () {


    return(
        <div className={styles.portafolio}>
            <div className={styles.section}>
                <h2>DISFRUTA DE NUESTROS</h2>
                <h2><span>ÚLTIMOS</span> PROYECTOS</h2>
                <div className={styles.sectionLine}>
                    <div className={styles.line}></div>
                    <p><span>NUESTRO TRABAJO</span></p>
                    <div className={styles.line}></div>
                </div>
            </div>
            <div className={styles.carrusel}>
                <Swiper
                    style={{
                        // '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                      }}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                    
                >
                    <SwiperSlide style={{width: '400px', height: '400px'}}>
                        <Image src={proyecto_1} />
                    </SwiperSlide>
                    <SwiperSlide style={{width: '400px', height: '400px'}}>
                        <Image src={proyecto_2} />
                    </SwiperSlide>
                    <SwiperSlide style={{width: '400px', height: '400px'}}>
                        <Image src={proyecto_3} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}