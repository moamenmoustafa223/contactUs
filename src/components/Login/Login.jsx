import React, { useEffect } from 'react'
import LoginStyles from "./Login.module.css"
import ReactHelmet from '../ReactHelmet/ReactHelmet';
const Login = () => {

 
  const googleLogin = async () => {
    try {
     
      window.open(`https://api.carwins.app/auth/google`, "_self");
      // window.open(`${import.meta.env.VITE_BASE_URL}/auth/google`, "_self");
    } catch (ex) {
      console.error("Error opening Google login:", ex);
    }
  }
  
  const facebookLogin = async () => {
    try {
      window.open(`https://api.carwins.app/auth/facebook`, "_self");
    } catch (ex) {
      console.error("Error opening facebook login:", ex);
    }
  }
  
  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <ReactHelmet title={"Login"}/>
<div className={`${LoginStyles.loginContainer} d-flex justify-content-center align-items-center `}>
<div className="loginCard text-center p-5 rounded-4  d-inline-block mx-auto bg-white border" >
        <h1 className={`${LoginStyles.mainTitle} mainColor mb-1`} >Sign In</h1>
        <p className='mb-4 text-start '>Join CarWins with your favorite <br/> social media account :</p>
        <button onClick={googleLogin} class={`${LoginStyles.googleLoginButton} mb-3 d-block w-100 d-flex align-items-center justify-content-center`} >
        <svg viewBox="0 0 32 32" style={{width:"20px"}} className="me-2"><path fill="#4285f4" d="M24.12 25c2.82-2.63 4.07-7 3.32-11.19H16.25v4.63h6.37A5.26 5.26 0 0 1 20.25 22z"></path><path fill="#34a853" d="M5.62 21.31A12 12 0 0 0 24.12 25l-3.87-3a7.16 7.16 0 0 1-10.69-3.75z"></path><path fill="#fbbc02" d="M9.56 18.25c-.5-1.56-.5-3 0-4.56l-3.94-3.07a12.08 12.08 0 0 0 0 10.7z"></path><path fill="#ea4335" d="M9.56 13.69c1.38-4.32 7.25-6.82 11.19-3.13l3.44-3.37a11.8 11.8 0 0 0-18.57 3.43l3.94 3.07z"></path></svg>
      {''}Login with Google
    </button>

    <button  onClick={facebookLogin} class={`${LoginStyles.facebookLoginButton} d-block w-100 opacity-25`}>
    <i className='fa-brands fa-facebook-f me-2'></i>
      Login with Facebook
    </button>
      </div>
</div>
      
     
    </>
  )
}

export default Login
