import React from 'react';
import './home.scss'
import video from '../../Assets/video.mp4'

const Home = () => {
    return (
        <section className='home'>
            <div className="overly"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">

            </div>
        </section>
    );
};

export default Home;