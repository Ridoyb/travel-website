import React, { useEffect } from 'react';
import './footer.scss'
import video from '../../Assets/video2.mp4'
import { FiSend  } from 'react-icons/fi';
import { MdTravelExplore  } from 'react-icons/md';
import { AiOutlineTwitter  } from 'react-icons/ai';
import { AiFillYoutube  } from 'react-icons/ai';
import { AiFillInstagram  } from 'react-icons/ai';
import { FaTripadvisor  } from 'react-icons/fa';
import { FiChevronRight  } from 'react-icons/fi';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    return (
        <section className='footer'>
            <div className="videoDiv">
                <video src={video} loop autoPlay muted type='video/mp4'></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel With Us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder='Enter Your Email..' />
                        <button data-aos="fade-up" className='btn flex' type='submit'>
                            SEND<FiSend className='icon'/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'>
                               <MdTravelExplore className='icon'/> Travel.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries  
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter className='icon'/>
                            <AiFillYoutube className='icon'/>
                            <AiFillInstagram className='icon'/>
                            <FaTripadvisor className='icon'/>
                        </div>
                    </div>
{/* Group one */}
                    <div data-aos="fade-up" 
                    data-aos-duration="3000" className="footerLinks grid">
                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Insurence
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Payment
                            </li>
                        </div>
{/* Group two */}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Insurence
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Payment
                            </li>
                        </div>
                    
{/* Group three */}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Insurence
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Payment
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>COPYRIGHTS RESERVED - 2023 RIDOY</small>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;