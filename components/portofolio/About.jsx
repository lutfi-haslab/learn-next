import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../../public/assets/profile1.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          Hello, I am a full stack developer with 2 years experience. I started my career as a programmer since 2020 with PHP technology such Laravel and Codeigniter. I was an IoT Developer initially, but I often studied independently about front end and back end technology, finally I made an application. Until my office boss saw my potential, and transferred me as a developer.
          </p>
          <p className='py-2 text-gray-600'>
          I have dived into Angular, Vue, Svelte and React. However, I prefer react, and now I always use NextJS, NextAuth, MySQL/MongoDB, and Prisma as my stack. I have created a mobile app using React Native and Kotlin. and currently studying Blockchain and Web3 Technology
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
