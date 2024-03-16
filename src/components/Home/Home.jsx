import React, { useEffect,useContext } from 'react'
import { useState } from 'react'
import { listAds, listSections } from '../../api'
import SectionContainer from '../SectionContainer/SectionContainer'
import CategorySection from '../CategorySection/CategorySection'
import BrandSection from '../BrandSection/BrandSection'
import HotDealsSection from '../HotDealsSection/HotDealsSection'
import Loader from '../Loader/Loader'
import GoogleOAuthSuccessRedirect from '../GoogleOAuthSuccessRedirect/GoogleOAuthSuccessRedirect'
import { UserContext } from '../../context/UserContext'
import { useFavoriteContext } from '../../context/FavoriteContext'
import LocationInput from '../LocationInput/LocationInput'
import ListYourCarsPage from '../../pages/ListYourCarsPage'
import ContactUsPage from '../../pages/ContactUsPage'

const Home = () => {

    const [sections, setSections] = useState([])
    const [ads, setAds] = useState([])
    const [loading, setLoading] = useState(true);
    const { userInfo, token, getUserFavorite } = useContext(UserContext);
    const {setFavorites } = useFavoriteContext();
    
    
    const setData = async () => {
        try {
            // const sections = await listSections()
            // const ads = await listAds();
            // setSections(sections)
            // setAds(ads)
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        setData().catch((err) => console.log(err))
    //     if(token){
    //     getUserFavorite(userInfo.id,
    //         token,
    //         setFavorites);
    // }
    }, [])

    return (
        <>


            {loading ? (
                <Loader />
            ) : (
                
                <div style={{minHeight:"100vh"}}>
                    {/* <HeroSection /> */}
                    {/* <GoogleOAuthSuccessRedirect/> */}
               <ContactUsPage/>
               {/* <ListYourCarsPage/> */}
                </div>
            )}
        </>
    )
}

export default Home
