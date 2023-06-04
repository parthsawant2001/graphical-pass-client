import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
// import { Inter } from 'next/font/google';
// import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '../Components/Navbar';
import HomePage from './HomePage';
// import Login from './Login.jsx';
// import Context from '../Components/Context';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // const { setUserInfo, userInfo } = useContext(UserContext);
  // const username = userInfo?.username;

  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}
