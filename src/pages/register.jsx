import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import i1 from '../Components/pwd/1.png';
import i2 from '../Components/pwd/2.png';
import i3 from '../Components/pwd/3.png';
import i4 from '../Components/pwd/4.png';
import i5 from '../Components/pwd/5.png';
import i6 from '../Components/pwd/6.png';
import i7 from '../Components/pwd/7.png';
import i8 from '../Components/pwd/8.png';
import i9 from '../Components/pwd/9.png';
import i10 from '../Components/pwd/10.png';
import i11 from '../Components/pwd/11.png';
import i12 from '../Components/pwd/12.png';
import i13 from '../Components/pwd/13.png';
import i14 from '../Components/pwd/14.png';
import i15 from '../Components/pwd/15.png';
import i16 from '../Components/pwd/16.png';
import i17 from '../Components/pwd/17.png';
import i18 from '../Components/pwd/18.png';
import i19 from '../Components/pwd/19.png';
import i20 from '../Components/pwd/20.png';
import i21 from '../Components/pwd/21.png';
import i22 from '../Components/pwd/22.png';
import i23 from '../Components/pwd/23.png';
import i24 from '../Components/pwd/24.png';
import i25 from '../Components/pwd/25.png';
import i26 from '../Components/pwd/26.png';
import i27 from '../Components/pwd/27.png';
import i28 from '../Components/pwd/28.png';
import i29 from '../Components/pwd/29.png';
import i30 from '../Components/pwd/30.png';
import i31 from '../Components/pwd/31.png';
import i32 from '../Components/pwd/32.png';
import i33 from '../Components/pwd/33.png';
import i34 from '../Components/pwd/34.png';
import i35 from '../Components/pwd/35.png';
import i36 from '../Components/pwd/36.png';
import i37 from '../Components/pwd/37.png';
import i38 from '../Components/pwd/38.png';
// import './Pswd';
const register = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);

  let passArray = [
    { id: 1, img: i1 },
    { id: 2, img: i2 },
    { id: 3, img: i3 },
    { id: 4, img: i4 },
    { id: 5, img: i5 },
    { id: 6, img: i6 },
    { id: 7, img: i7 },
    { id: 8, img: i8 },
    { id: 9, img: i9 },
    { id: 10, img: i10 },
    { id: 11, img: i11 },
    { id: 12, img: i12 },
    { id: 13, img: i13 },
    { id: 14, img: i14 },
    { id: 15, img: i15 },
    { id: 16, img: i16 },
    { id: 17, img: i17 },
    { id: 18, img: i18 },
    { id: 19, img: i19 },
    { id: 20, img: i20 },
    { id: 21, img: i21 },
    { id: 22, img: i22 },
    { id: 23, img: i23 },
    { id: 24, img: i24 },
    { id: 25, img: i25 },
    { id: 26, img: i26 },
    { id: 27, img: i27 },
    { id: 28, img: i28 },
    { id: 29, img: i29 },
    { id: 30, img: i30 },
    { id: 31, img: i31 },
    { id: 32, img: i32 },
    { id: 33, img: i33 },
    { id: 34, img: i34 },
    { id: 35, img: i35 },
    { id: 36, img: i36 },
    { id: 37, img: i37 },
    { id: 38, img: i38 },
  ];

  const onRegister = async (e) => {
    e.preventDefault();
    const password = selectedImages.join(',');
    const response = await fetch(
      'https://graph-pass-server.onrender.com/register',
      {
        method: 'POST',
        body: JSON.stringify({ email, username, password }),
        headers: { 'Content-Type': 'application/json' },
      }
    );
    console.log(username, email, password);
    console.log(response);
    if (response.status === 200) {
      alert('registeration successful');
    } else {
      alert('registeration failed');
    }
    setUsername('');
    setEmail('');
    setSelectedImages([]);
  };

  const handleImageClick = (id) => {
    const index = selectedImages.indexOf(id);

    if (index === -1) {
      // if (selectedImages.length > 8) {
      setSelectedImages([...selectedImages, id]);
      // }
    } else {
      setSelectedImages(selectedImages.filter((imageId) => imageId !== id));
    }
  };
  useEffect(() => {
    console.log(selectedImages);
  }, [selectedImages]);

  // passArray = passArray.sort(() => Math.random() - 0.5);

  return (
    <div className='flex flex-row justify-center'>
      <form
        onSubmit={onRegister}
        className=' text-lg flex flex-col text-center mt-[60px] p-[20px] border-2 border-[#425aa7] rounded-xl'
      >
        <h1 className='text-[#fff] font-gantari font-extrabold text-[40px] my-[10px]'>
          Register
        </h1>
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='p-[10px] text-lg border-2 my-[10px] text-white border-[#425aa7] rounded-lg'
        />
        <input
          type='text'
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='p-[10px] text-lg border-2 my-[10px] text-white border-[#425aa7] rounded-lg'
        />
        <ul className='text-lg grid grid-rows-5 grid-cols-8 border-2 my-[10px] border-[#425aa7] gap-2.5 rounded-lg p-[10px]'>
          {passArray.map((image, index) => {
            return (
              <li key={index} className=''>
                <Image
                  className={`rounded-sm border-2 ${
                    selectedImages.includes(image.id)
                      ? 'border-[rgb(255,0,0)]'
                      : 'border-[#425aa7]'
                  }`}
                  onClick={() => handleImageClick(image.id)}
                  src={image.img}
                  alt='alt'
                />
              </li>
            );
          })}
        </ul>
        <p className='text-md text-[#fff] my-[10px] '>
          <a href='' className='text-[#FFEA7B] underline decoration-1'>
            Already have an account?
          </a>
          <Link href='/login' className='underline decoration-1'>
            Sign in
          </Link>
        </p>
        <button className='my-[10px] text-[#000927] bg-[#FFEA7B] rounded-md py-[8px] px-[18px]'>
          Register
        </button>
      </form>
    </div>
  );
};

export default register;
