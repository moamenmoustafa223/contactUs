import React from 'react'
import ToggleSideBarStyles from "./ToggleSideBar.module.css"
import { useState } from 'react';

import FillterSideBar from '../FillterSideBar/FillterSideBar';
const ToggleSideBar = ({vendors,brands,carCategories,types}) => {

  const [isMinimized, setIsMinimized] = useState( true );

  return (
    <>

<div className= {`${ToggleSideBarStyles.visibility} position-relative`}>
        <div
          className={
            isMinimized ? `${ToggleSideBarStyles["sidebar-mini"]}` : `${ToggleSideBarStyles.sidebar}`
          }>
        
         <nav className={`${ToggleSideBarStyles.nav}`}>
         <i className="fa-solid fa-xmark fs-2"  onClick={() => {
            setIsMinimized(!isMinimized);
          }}></i>
      <FillterSideBar vendors={vendors} brands={brands} carCategories={carCategories}/>

       
      </nav>
     
      <div
          className={`${ToggleSideBarStyles.change} shadow pointer `}
          onClick={() => {
            setIsMinimized(!isMinimized);
          }}
         
        > Filter
          
        </div>  


        </div>
      </div>
    
    </>
  )
}

export default ToggleSideBar
