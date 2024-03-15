import React, { useEffect } from 'react'
import NotFoundStyles from "./NotFound.module.css"
import err from "../../assets/images/error.svg"
import ReactHelmet from '../ReactHelmet/ReactHelmet'
const NotFound = () => {
  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
     <ReactHelmet title={"CarWins | Not Found"}/>
    <div className="container text-center w-50 d-flex align-items-center" style={{minHeight:"80vh"}}>
      <img src={err} className='w-100' alt={`not found`} />
    </div>
    </>
  )
}

export default NotFound
