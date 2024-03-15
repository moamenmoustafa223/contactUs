import React from 'react'
import egyptFlag from "../../assets/images/egypt.svg"
import kingdom from "../../assets/images/kingdom.svg"

import NavHeaderStyles from "./NavHeader.module.css"

import { useTranslation } from 'react-i18next'
import { useLanguage } from '../../context/LanguageContext'
const NavHeader = () => {
  const {t} = useTranslation();
  const { language, changeLanguage } = useLanguage();
  return (
    <>
   <div className={`${NavHeaderStyles.navContainer}`}>
    <div className="container d-flex align-items-center justify-content-between h-100">
    <ul className={`${NavHeaderStyles.navbarnavCustom} navbar-nav  d-flex flex-row`}>
    <li className="nav-item">
    <a className={`${NavHeaderStyles.navlinkCustom} pe-2`} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com" aria-label="Facebook">
    <i className="fa-brands fa-facebook-f" aria-hidden="true" ></i>
</a>
              </li>
              <li className="nav-item">
    <a className={`${NavHeaderStyles.navlinkCustom} px-2`} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com" aria-label="LinkedIn">
        <i className="fa-brands fa-instagram" aria-hidden="true"></i>
    </a>
</li>
<li className="nav-item">
    <a className={`${NavHeaderStyles.navlinkCustom} px-2`} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com" aria-label="Facebook">
        <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
    </a>
</li>
<li className="nav-item">
    <a className={`${NavHeaderStyles.navlinkCustom} px-2`} target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com" aria-label="TikTok">
        <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
    </a>
</li>
<li className="nav-item">
    <a className={`${NavHeaderStyles.navlinkCustom} ps-2`} target="_blank" rel="noopener noreferrer" href="https://www.snapchat.com" aria-label="Snapchat">
        <i className="fa-brands fa-snapchat" aria-hidden="true"></i>
    </a>
</li>
              {/* <li className="nav-item me-1">
               
                <h1>{t('welcome')}</h1>
              
              </li> */}
            </ul>
          
            <div className="language d-flex align-items-center text-white ">
            {language === 'en' ? (
        <>
          <button onClick={() => changeLanguage('ar')} className='d-flex align-items-center mx-1 justify-content-between' dir="rtl">
            <img src={egyptFlag} style={{width:"24px"}} className="img-fluid ms-2" alt="Arabic Language" />
            العربية
          </button>
        </>
      ) : (
        <>
          <button onClick={() => changeLanguage('en')} className='d-flex align-items-center justify-content-between mx-1' dir="ltr">
            English <img src={kingdom} style={{width:"24px"}} className="img-fluid ms-2" alt="English Language" />
          </button>
        </>
      )}
              
            </div>
    </div>
   
   </div>
    </>
  )
}

export default NavHeader
