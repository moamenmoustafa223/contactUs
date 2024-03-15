import React from 'react'
import SocialMediaStyles from "./SocialMedia.module.css"
const SocialMedia = () => {
  return (
    <>
     <ul className={`${SocialMediaStyles.navbarnavCustom} navbar-nav  d-flex flex-row`}>
              <li className="nav-item">
              <a className={`${SocialMediaStyles.navlinkCustom} pe-3`} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com" aria-label="Facebook">
    <i className="fa-brands fa-facebook-f" aria-hidden="true" ></i>
</a>
              </li>
              <li className="nav-item">
    <a className={`${SocialMediaStyles.navlinkCustom} px-3`} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com" aria-label="LinkedIn">
        <i className="fa-brands fa-instagram" aria-hidden="true"></i>
    </a>
</li>
<li className="nav-item">
    <a className={`${SocialMediaStyles.navlinkCustom} px-3`} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com" aria-label="Facebook">
        <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
    </a>
</li>
<li className="nav-item">
    <a className={`${SocialMediaStyles.navlinkCustom} px-3`} target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com" aria-label="TikTok">
        <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
    </a>
</li>
<li className="nav-item">
    <a className={`${SocialMediaStyles.navlinkCustom} ps-3`} target="_blank" rel="noopener noreferrer" href="https://www.snapchat.com" aria-label="Snapchat">
        <i className="fa-brands fa-snapchat" aria-hidden="true"></i>
    </a>
</li>

            </ul>
    </>
  )
}

export default SocialMedia
