import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturdRoom from '../components/FeaturdRoom';
import Flip from 'react-reveal/Flip';

const Home = () => {
    return (
       <>
       <Hero>
       <Flip left>
           <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
               <Link to='/rooms' className="btn-primary">
                   our rooms
               </Link>
           </Banner>
        </Flip>
       </Hero>
       <Services/>
       
       <FeaturdRoom/>
       
       
       </>
    );
};

export default Home;