import MobileNav from '@/Components/MobileNav';
import Nav from '@/Components/Nav';
import React from 'react'
import { useState } from 'react';

const Homepage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className='overflow-x-hidden'>
      <div>
        {/* <Nav/> */}
        <MobileNav nav={nav} closeNav={closeNav}/>
        <Nav openNav={openNav}/>
        {/* <Hero/> */}
      </div>
    </div>
  )
}

export default Homepage;