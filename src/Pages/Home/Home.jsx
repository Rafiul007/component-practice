import React from 'react'
import Navbar from '../../components/navbar/Navbar.jsx';
import Hero from '../../components/hero/Hero.jsx'
import 'swiper/css';
import Swiper from '../../components/Swipper/Swipper.jsx';
import 'swiper/css';
function Home() {
    return (
        <div >
            {/* <Navbar /> */}
            {/* <div className='home-container'>
                <Hero />
            </div> */}
            <Swiper />
        </div>
    )
}

export default Home