import React, { Component } from 'react';
import {RoomContext} from "../context";
import Room from '../components/Room';
import Title from '../components/Title'
import Zoom from 'react-reveal/Zoom';
class Featurdroom extends Component {
    static contextType = RoomContext;
    render() {
        let {featuredRooms} = this.context;
         featuredRooms=featuredRooms.map(room=>{
             return <Room key={room.id} room={room}/>
         })
        return (
            <section className="featured-rooms">
                <Title title="featured rooms"/>
              <Zoom>
              <div className="featured-rooms-center">
                 {featuredRooms}
                </div>
              </Zoom>
                
            </section>
        );
    }
}

export default Featurdroom;
