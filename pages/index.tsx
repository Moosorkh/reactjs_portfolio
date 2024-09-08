import Nav from '@/Components/Nav';
import React from 'react'
import { useState } from 'react';

const Homepage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);

  return (
    <div className='overflow-x-hidden'>
      <div>
        <Nav />
      </div>
    </div>
  )
}

export default Homepage;