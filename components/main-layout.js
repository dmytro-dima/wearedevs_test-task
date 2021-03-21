import Link from "next/link";
import React, { useState, useEffect } from 'react';

export const MainLayout = ({children}) =>{
  const [activePage, setActivePage] = useState('home')
  const setLActivePage = (type) => {
    localStorage.setItem('activePage', type);
  }

  useEffect(()=>{
    setActivePage(localStorage.getItem("activePage"))
  },[activePage])


  const activeClass = type => activePage === type ? 'navbar-links_link active' : 'navbar-links_link'

  return(
    <>
      <nav className='navbar'>
      <div className='navbar-logo'>
        <div className='navbar-logo_left'>
          <p className='navbar-logo_left__text'>w</p>
          <p className='navbar-logo_left__text'>e</p>
        </div>
        <h1 className='navbar-logo_right'><span>R</span>devs</h1>
      </div>
        <div className='navbar-links'>
          <div className={activeClass('home')} onClick={() => setLActivePage('home')}>
            <Link href='/'>Home</Link>
            <span/>
          </div>
          <div className={activeClass('about')} onClick={() => setLActivePage('about')}>
            <Link href='/about'>About us</Link>
            <span/>
          </div>
        </div>
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}