import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getCar, listCars } from "../api"
import CarDeltails from "../components/CarDeltails/CarDeltails"
import Loader from "../components/Loader/Loader"

import Footer from '../components/Footer/Footer'
import ReactHelmet from "../components/ReactHelmet/ReactHelmet"
import NavBar from "../components/NavBar/NavBar"
import NavHeader from "../components/NavHeader/NavHeader"

export default function CarPage() {
    const { id } = useParams()
    const [car, setCar] = useState(null)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const setData = async () => {
            try {
                const car = await getCar(id)
                setCar(car)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false);
            }
        }
        window.scrollTo(0, 0);
        setData();
    }, [id]);
    return (
        <>
       <ReactHelmet title={"Borame | Car Details"}/>
       <div className="contentArea">
       <NavHeader/>
      <NavBar />
        <div>
           {loading ? (
                <Loader />
            ) : (
                <div className="container" style={{minHeight:"100vh"}}>
                    {car ? (
                        <CarDeltails car={car} />
                    ) : (
                        <div className="container py-5 d-flex align-items-center justify-content-center">
                            <h1 className="text-center mainTitle">Car not found</h1>
                        </div>
                    )}
                </div>
            )}
        </div>
        <Footer/>
        </div>
        </>
   
       
    )
}