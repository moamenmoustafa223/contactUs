import React, { useContext, useEffect, useState } from 'react'
import logoImage from "../../assets/images/Logo.png"


import NavBarStyles from "./NavBar.module.css"

import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { useFavoriteContext } from '../../context/FavoriteContext'
import SearchBox from '../SearchBox/SearchBox'


const NavBar = () => {

  const { token, userInfo, logout } = useContext(UserContext);
  const { setFavorites} = useFavoriteContext();
  return (
    <>
      <nav className={`${NavBarStyles.navCustom} navbar navbar-expand  border-bottom  py-2 px-3`}>
        <div className={`${NavBarStyles.dir} container`}>
          <Link className="navbar-brand" to={"/"}>
            <div className="logo d-flex align-items-center justify-content-center" >
              <img src={logoImage} className="img-fluid" alt="logo" />
            </div>
          </Link>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          {/* <div className={`${NavBarStyles.navMenu} collapse navbar-collapse`} id="navbarSupportedContent">

            <ul className={`${NavBarStyles.navbarnavCustom} navbar-nav ms-lg-5 mt-4  mt-lg-0   mb-5 mb-lg-0`}>
              <li className="nav-item me-4">
                <Link className={`${NavBarStyles.navlinkCustom} ${NavBarStyles.active} py-1`} aria-current="page" to={"/"}>HOME</Link>
              </li>
              <li className="nav-item me-4">
                <a className={`${NavBarStyles.navlinkCustom}  py-1 `} href="">ABOUT US</a>
              </li>
              <li className="nav-item me-4">
                <a className={`${NavBarStyles.navlinkCustom} py-1 `} href="">WHY US</a>
              </li>
              <li className="nav-item me-4">
                <a className={`${NavBarStyles.navlinkCustom} py-1 `} href="">TESTIMONIAL</a>
              </li>
              <li className="nav-item me-4">
                <a className={`${NavBarStyles.navlinkCustom} py-1`} href="">GET IN TOUCH</a>
              </li>
            </ul>

           
          </div> */}

          <h1 className='d-none'>car rental Dubai</h1>
          <div className={`${NavBarStyles.navbarnavCustom} navbar-nav`}>
              {/* {token ? <>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                    <img src={userInfo.picture} className='img-fluid me-2 rounded-circle' width={'36px'} alt="userImg" />{''}{userInfo.name}
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item secColor"><i className="fa-regular fa-envelope  me-2"></i> {userInfo.email}</li>

                    <li><Link className="dropdown-item" to={'/favourite'} ><i className="fa-solid fa-heart me-2"></i> Wishlist</Link></li>

                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item text-danger" onClick={() => {
                logout({ setFavorites });
              }}> <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>Logout</Link></li>
                  </ul>
                </li>

              </> : <Link to={`/login`} className="btn btnCustom btnFilled px-3 py-2  rounded-3 text-center fs-6 text-nowrap ">SIGN IN <i className="ms-2 m-0 fa-solid fa-angle-right"></i></Link>
              } */}
             
              <div className="navSearchBox">
              <SearchBox/>
              </div>
      

            </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
