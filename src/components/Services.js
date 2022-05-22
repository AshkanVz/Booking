import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Zoom from 'react-reveal/Zoom';
//components
import Title from './Title';

class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:"lorem ipsum dolor sit amet consectetur adipisicing elit. magni, corporsi!"
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:"lorem ipsum dolor sit amet consectetur adipisicing elit. magni, corporsi!"
            },
            {
                icon:<FaShuttleVan/>,
                title:"free shuttle",
                info:"lorem ipsum dolor sit amet consectetur adipisicing elit. magni, corporsi!"
            },
            {
                icon:<FaBeer/>,
                title:"Stronges",
                info:"lorem ipsum dolor sit amet consectetur adipisicing elit. magni, corporsi!"
            }
        ]
    }
    render() {
        return (
            
            <section className="services">
              <Title title="services"/>
              <div className="services-center">
                  {this.state.services.map((item, index)=>{
                      return(
                          <article key={index} className="service">
                              <Zoom>
                              <span>{item.icon}</span>
                              </Zoom>
                              <h6>{item.title}</h6>
                              <p>{item.info}</p>
                          </article>
                      );
                  })}
              </div>
            </section>
                
             
        );
    }
}

export default Services;
