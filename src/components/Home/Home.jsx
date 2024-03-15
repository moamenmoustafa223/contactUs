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

const Home = () => {

    const [sections, setSections] = useState([])
    const [ads, setAds] = useState([])
    const [loading, setLoading] = useState(true);
    const { userInfo, token, getUserFavorite } = useContext(UserContext);
    const {setFavorites } = useFavoriteContext();
    
    
    const setData = async () => {
        try {
            const sections = await listSections()
            const ads = await listAds();
            setSections(sections)
            setAds(ads)
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        setData().catch((err) => console.log(err))
        if(token){
        getUserFavorite(userInfo.id,
            token,
            setFavorites);
    }
    }, [])

    return (
        <>


            {loading ? (
                <Loader />
            ) : (
                
                <div style={{minHeight:"100vh",padding:"100px"}}>
                    {/* <HeroSection /> */}
                    {/* <GoogleOAuthSuccessRedirect/> */}
                 
                   <LocationInput/>
                </div>
            )}
        </>
    )
}

export default Home
