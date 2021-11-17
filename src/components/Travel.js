import React from 'react';

import './travel.css'
import marker from '../images/marker.svg';

import MountFuji from '../images/Mount-Fuji.svg'


const Travel = (props) => {
    const travels = props.data;


    return (
        <div className="travel">
            {
                travels.map((travel) =>
                    <div className="travel--items" key={travel.id}>
                        <img src={MountFuji} alt="some text" className="travel--image"/>
                        
                        <div className="travel--information">
                            <div className="travel--location">
                                <span>
                                    <img src={marker} alt="location marker" />
                                    <span>{ travel.location}</span>
                                </span>
                                <a href={travel.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
                            </div>
                            <h2 className="travel--title">{travel.title}</h2>

                            <div>
                                <p className="travel--date">{travel.startDate} - {travel.endDate}</p>
                                <p className="travel--description">{travel.description}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
 };



export default Travel;