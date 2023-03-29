import React, { useEffect } from 'react';
import './main.scss'
import { HiOutlineLocationMarker  } from 'react-icons/hi';
import { BsClipboardCheck  } from 'react-icons/bs';
import img from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Main = () => {

    const Data=[
        {
            id:1,
            imgSrc:img,
            desTitle: 'Bora Bora',
            location: 'New Zealand',
            grade: 'CULTURAL RELAX',
            fees: '$700',
            description: 'The opitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventures activities.'
        },
        {
            id:2,
            imgSrc:img2,
            desTitle: 'Machu Picchu',
            location: 'Peru',
            grade: 'CULTURAL RELAX',
            fees: '$700',
            description: 'The opitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventures activities.'
        },
        {
            id:3,
            imgSrc:img3,
            desTitle: 'Great Barrier Reef',
            location: 'Australia',
            grade: 'CULTURAL RELAX',
            fees: '$700',
            description: 'The opitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventures activities.'
        },
        {
            id:4,
            imgSrc:img4,
            desTitle: 'Cappadocia',
            location: 'Turkey',
            grade: 'CULTURAL RELAX',
            fees: '$700',
            description: 'The opitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventures activities.'
        },
        {
            id:5,
            imgSrc:img5,
            desTitle: 'Guanajuato',
            location: 'Maxico',
            grade: 'CULTURAL RELAX',
            fees: '$700',
            description: 'The opitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventures activities.'
        },
        {
            id:6,
            imgSrc:img6,
            desTitle: 'Cinque Terre',
            location: 'Italy',
            grade: 'CULTURAL RELAX',
            fees: '$700',
            description: 'The opitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventures activities.'
        },
        {
            id:7,
            imgSrc:img7,
            desTitle: 'Angkor Wat',
            location: 'Combodia',
            grade: 'CULTURAL RELAX',
            fees: '$700',
            description: 'The opitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventures activities.'
        },
        {
            id:8,
            imgSrc:img8,
            desTitle: 'Coxs Bazar',
            location: 'Bangladesh',
            grade: 'CULTURAL RELAX',
            fees: '$700',
            description: 'The opitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventures activities.'
        },
        {
            id:9,
            imgSrc:img9,
            desTitle: 'Bali Island',
            location: 'Indonesia',
            grade: 'CULTURAL RELAX',
            fees: '$700',
            description: 'The opitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventures activities.'
        },
    ]

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
        
    
    return (
        <section className='main container section'>
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most Visited Destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, desTitle, location, grade,fees,description})=>{
                        return(
                            <div data-aos="fade-up"  key={id}className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={desTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="desTitle">{desTitle}</h4>
                                    <span className="container flex">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className='name'>{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">{fees}</div>
                                    </div>
                                    <div className="desc">{description}</div>
                                    <button className='btn flex'>
                                        DETAILS <BsClipboardCheck className='icon'/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Main;