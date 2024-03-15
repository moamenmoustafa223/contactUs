import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

import CarsList from "../components/Cars/CarsList"
import { listBrands, listCarTypes, listCars, listCategories, listVendors } from "../api"
import FillterSideBar from "../components/FillterSideBar/FillterSideBar"
import ToggleSideBar from "../components/ToggleSideBar/ToggleSideBar"
import Loader from "../components/Loader/Loader"
import ReactHelmet from "../components/ReactHelmet/ReactHelmet"
import SearchBox from "../components/SearchBox/SearchBox"
import { Pagination } from "react-bootstrap";

// ... (imports)

export default function CarsPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [cars, setCars] = useState([])
    const [vendors, setVendors] = useState([]);
    const [brands, setBrands] = useState([]);
    const [carCategories, setCarCategories] = useState([]);
    const [types, setTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();
    const showPaginationButtons = totalPages > 1;
    useEffect(() => {
        const setData = async () => {
            try {

                const result = await listCars(searchParams,currentPage);
                setCars(result.data);
                if (result.pagination) {
                    const totalPages = Math.ceil(result.pagination.total / 8);
                    setTotalPages(totalPages);
                    console.log(result.pagination.total,totalPages);
                }
                const vendors = await listVendors();
                setVendors(vendors);
                const brands = await listBrands();
                setBrands(brands);
                const carCategories = await listCategories();
                setCarCategories(carCategories);
                // const carTypes = await listCarTypes();
                // setTypes(carTypes);
            } catch (err) {
                console.error("Error fetching data:", err);
                // Handle error (e.g., show an error message to the user)
            } finally {
                setLoading(false);
            }
        };
        window.scrollTo(0, 0);
        setData().catch((err) => console.log(err));
    }, [searchParams, currentPage]);
    const handlePageChange = (newPage) => {
      
        const queryParams = new URLSearchParams(searchParams);
        queryParams.set("page", newPage);
        navigate(`/cars?${queryParams.toString()}`);
        setCurrentPage(newPage);
      };
    return (
        <>
            <ReactHelmet title={"Borame | All Cars"} />
            <div className="container " style={{minHeight:"100vh"}}>
                <div className="">
                    <>
                        <div className="carsPage container pb-5 pt-3">
                            {loading ? (
                                <Loader />
                            ) : (
                                <>
                                    {(vendors.length >= 0) && (brands.length >= 0) && (carCategories.length >= 0) && (types.length >= 0) ? (
                                        <ToggleSideBar vendors={vendors} brands={brands} carCategories={carCategories} />
                                    ) : ""}
                                    <div className="row g-0 ">
                                        <div className="col-md-2">
                                            {(vendors.length >= 0) && (brands.length >= 0) && (carCategories.length >= 0) && (types.length >= 0) ? (
                                                <FillterSideBar vendors={vendors} brands={brands} carCategories={carCategories}/>
                                            ) : <h1 className="p-5">No filters</h1>}
                                        </div>
                                        <div className=" offset-md-1 col-md-9">
                                            {/* <div className="searchBox px-md-5 mb-4">
                                                <SearchBox />
                                            </div> */}
                                            {cars.length > 0 ? (
                                                <CarsList cars={cars} />
                                            ) : <h1 className="p-5">No results</h1>}

{totalPages > 1 && (
  <div className="pagination">
    {showPaginationButtons && (
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
      >
       <i className="fa-solid fa-arrow-left me-2"></i> Previous
      </button>
    )}

    {showPaginationButtons && (
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
      >
        Next <i className="fa-solid fa-arrow-right ms-2"></i>
      </button>
    )}
  </div>
)}


                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </>
                </div>
            </div>
        </>
    );
}