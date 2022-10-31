import './homeMainScreen.css';
import search from '../../assets/icons/search.png';
import add_btn from '../../assets/icons/add_btn.png';
import Modal from '../modal/modal';
import React, { useState } from "react";
import pathCopy from '../../assets/icons/pathCopy.png'
import Card from '../card/card';


const HomeMainScreen = () => {
  const [modal, setModal] = useState(false);
 return (
  <div>
  <div className="homeMargin">
  <div className="homePage">
        <div className="marginSpace">
          <div className="sites">Sites</div>
          <div className="searchBar">
            <div className="search">
              <input type="text" placeholder="Search" className="searchInput" />
              <img src={search} alt="search" className="searchIcon" />
            </div>
            <div className="plus">
              <img src={add_btn} alt="add" onClick={() => { setModal(true); }} />
              {modal && <Modal />}
            </div>
          </div>
        </div>
      </div>

      
      <div className='social-media-container'>
          <div className='add-sites'> 
          
            <div>Social Media</div>
             <div className='count-circle'>07</div>
            <div><img src={pathCopy} alt="" /></div>
           
          
          </div>
        </div>


        <Card/>
  </div>
 </div>
 )

}

export default HomeMainScreen;