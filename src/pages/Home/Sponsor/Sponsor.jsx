import React from 'react';
import Marquee from "react-fast-marquee";
import c1 from "../../../assets/Sponsor/c1.png"; 
import c2 from "../../../assets/Sponsor/c2.png"; 
import c3 from "../../../assets/Sponsor/c3.png"; 
import c4 from "../../../assets/Sponsor/c4.png";  
import c6 from "../../../assets/Sponsor/c6.png"; 
import c7 from "../../../assets/Sponsor/c7.png"; 

const Sponsor = () => {
    return (
        <div className='my-10 space-x-10 bg-blue-50 py-4'>
            <Marquee>
            <img src={c1} alt="Sponsor 1" className="w-40 mx-4" />
            <img src={c2} alt="Sponsor 2" className="w-40 mx-4" />
            <img src={c3} alt="Sponsor 3" className="w-40 mx-4" />
            <img src={c4} alt="Sponsor 4" className="w-40 mx-4" />
            <img src={c6} alt="Sponsor 6" className="w-40 mx-4" />
            <img src={c7} alt="Sponsor 7" className="w-40 mx-4" />
            </Marquee>
        </div>
    );
};

export default Sponsor;