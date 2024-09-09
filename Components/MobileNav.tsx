import React from 'react'

const MobileNav = () => {
  return (
    <div className={'fixed transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]'}>MobileNav

    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile">HOME</div>
        <div className="nav-link-mobile">SERVICES</div>
        <div className="nav-link-mobile">ABOUT</div>
        <div className="nav-link-mobile">PROJECT</div>
        <div className="nav-link-mobile">BLOG</div>
        <div className="nav-link-mobile">CONTACT</div>
     </div> 
     <div></div>
    </div>
  )
}

export default MobileNav;