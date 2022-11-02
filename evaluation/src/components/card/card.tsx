import './card.css';
import Instagram from '../../assets/icons/Instagram.png';
import copy from '../../assets/icons/copy.png';
import { useState, useEffect } from 'react';

const Card = (props:any) => {
    const [modal, setModal] = useState(false);
    const displayData = JSON.parse(localStorage.getItem("currentUser") || "[]");

    const siteData = JSON.parse(localStorage.getItem(displayData) || "[]");
    
    return (
        <div className='card-full-container'>
         {siteData
          
          .map((user: any, i: number) => {
            return (
              <div
                key={i}
                onClick={() => {
                  props.childToParent(true, i);
                }}
              >
        <div className="card-container">
            <div className="card-margin">
                <div className='social-media-part'>
                    <div className="media-logo">
                        <img src={Instagram} alt="" />
                        <div className="social-media-name">{user.siteName}</div>
                    </div>

                    <div className="same-line">
                        <div className="copy">
                            <div className="copyimg">
                                {""}
                                <img src={copy} alt="" onClick={() => {
                                navigator.clipboard.writeText(
                                  user.sitePassword
                                );
                              }}/>
                            </div>
                            <div className="copy-text" onClick={() => {
                              navigator.clipboard.writeText(user.sitePassword);
                            }}>copy password</div>
                       
                    </div>
                </div>
                </div>
                </div>
                

                <div className="link-part">
                    <div className="actualLink">{user.url}</div>
                    </div>
            </div>
        </div>
        
        
        );
         })}
        
        </div>
        
             
            );
    
};

export default Card;