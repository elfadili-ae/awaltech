'use client'
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import Model from "@/components/Model";
import Navbar from "@/components/Navbar";
import NewPhones from "@/components/NewPhones";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [isDown, setIsDown] = useState(false)
  const menuHandler = (val) => {
    setMenu(val);
  }

  useEffect(() => {
    const handleMenubutton = () => {
      if (window.scrollY > 30) {
        setIsDown(true);
      } else {
        setIsDown(false);
      }
    }
    document.addEventListener('scroll', handleMenubutton);

    //disable page scroll when menu is up
    if (menu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.removeEventListener('scroll', handleMenubutton);
      document.body.classList.remove('no-scroll');
    }
  }, [menu])

  return (
    <main className="w-full mx-auto max-w-[1920px] min-h-screen bg-black relative">
      <div className='w-11 h-5 absolute top-5 left-6 z-20'>
        <Image className='cursor-pointer' src='/awal_logo_black.png' alt='AwalTheck logo' width={44} height={21} />
      </div>
      <div
        onClick={() => { menuHandler(true) }}
        className={`fixed top-4 ${isDown && 'bg-stone-700'} z-20 right-6 w-11 h-11 flex flex-col justify-center items-center group ${menu && 'hidden'} hover:bg-white transition-all duration-500 gap-[6px] rounded-full cursor-pointer`}>
        <div className={`w-6 h-[2px] bg-white group-hover:bg-black transition-all duration-500`}></div>
        <div className={`w-6 h-[2px] bg-white group-hover:bg-black transition-all duration-500`}></div>
        <div className={`w-6 h-[2px] bg-white group-hover:bg-black transition-all duration-500`}></div>
      </div>
      {menu && <Navbar menuHandler={menuHandler} />}
      <Hero />
      <Latest />
      <Model />
      <NewPhones />
      <Footer />
    </main>
  );
}
