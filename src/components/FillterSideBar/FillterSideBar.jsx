import React, { useEffect, useState } from "react";
import FillterSideBarStyles from "./FillterSideBar.module.css"
import {
  listBrands,
  listVendors,
  listCategories,
} from "../../api";
import { useNavigate } from "react-router-dom";
const FillterSideBar = ({vendors,brands,carCategories,types}) => {

  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    vendor: [],
    type:[],
  });


  const handleCheckboxChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      const filterValues = [...updatedFilters[filterType]];
  
      const index = filterValues.indexOf(value);
  
      if (index !== -1) {

        filterValues.splice(index, 1);
      } else {

        filterValues.push(value);
      }
  
      updatedFilters[filterType] = filterValues;

      handleSearch(updatedFilters);
  
      return updatedFilters;
    });
  };
  const navigate = useNavigate();

  const handleSearch = (updatedFilters) => {
    const queryParams = [];

    for (const key in updatedFilters) {
      if (updatedFilters[key].length > 0) {
        queryParams.push(`${key}=${updatedFilters[key].join(",")}`);
      }
    }

    const queryString = queryParams.join("&");

    if (queryString.length > 0) {
      navigate(`/cars?${queryString}`);
    } else {
      navigate(`/cars`);
    }
  };

  return (
    <>
    <div className={`${FillterSideBarStyles.FillterSideBarWrapper} position-relative`} >
      
    <div className={`${FillterSideBarStyles.FillterSideBarContainer} py-5 px-1 text-start`}>
  
    {/* <div className= {`${FillterSideBarStyles.checkboxContainer} mb-4 pb-3 border-bottom`}>
  <h4 className='mb-3'>type</h4>
 
         {types?.length > 0 ? (
                    types?.map((type, index) => (
                      
                  <div className= {`${FillterSideBarStyles.checkboxWrapper} d-flex align-items-center mb-2 `} key={`type${index}`}>
                    
                    <input onChange={() => handleCheckboxChange('type', type.id)}
                  className="form-check-input"
                  type="checkbox"
                  value={type.id}
                  id={`flexCheckDefault1${index}`}
                  checked={filters.type.includes(type.id)}
                    
                   />
                    <label className="form-check-label text-nowrap" htmlFor={`flexCheckDefault1${index}`}>
                    {type.name}
                    </label>
                  </div>
                      

                    ))
                  ) : (
    
            <div className= {`${FillterSideBarStyles.checkboxWrapper} d-flex align-items-center mb-2 `}>
                <label>No types available</label>
              </div>
                  
                  )}
  

  </div> */}


  <div className= {`${FillterSideBarStyles.checkboxContainer} mb-4 pb-3 border-bottom`}>
  <h4 className='mb-3 fw-bold'>category</h4>
 
         {carCategories?.length > 0 ? (
                    carCategories?.map((category, index) => (
                    
                  <div className= {`${FillterSideBarStyles.checkboxWrapper} d-flex align-items-center mb-2 `} key={`category${index}`}>
                    <input onChange={() => handleCheckboxChange('category', category.id)}
                  className="form-check-input"
                  type="checkbox"
                  value={category.id}
                  id={`flexCheckDefault2${index}`}
                  checked={filters.category.includes(category.id)}
                    
                   />
                    <label className="form-check-label text-nowrap" htmlFor={`flexCheckDefault2${index}`}>
                    {category.name}
                    </label>
                  </div>
                      

                    ))
                  ) : (
    
            <div className= {`${FillterSideBarStyles.checkboxWrapper} d-flex align-items-center mb-2 `}>
                <label>No categories available</label>
              </div>
                  
                  )}
  

  </div>
  
  <div className= {`${FillterSideBarStyles.checkboxContainer} mb-4 pb-3 border-bottom`}>
  <h4 className='mb-3 fw-bold'>Brand</h4>
  {brands?.length > 0 ? (
                    brands?.map((brand, index) => (
                    
                  <div className= {`${FillterSideBarStyles.checkboxWrapper} d-flex align-items-center mb-2 `} key={`brand${index}`}>
                    <input  onChange={() => handleCheckboxChange('brand', brand.id)}
                  className="form-check-input"
                  type="checkbox"
                  value={brand.id}
                  id={`flexCheckDefault3${index}`}
                  checked={filters.brand.includes(brand.id)}  />
                    <label className="form-check-label text-nowrap" htmlFor={`flexCheckDefault3${index}`}>
                    {brand.name}
                    </label>
                  </div>
                      

                    ))
                  ) : (
    
            <div className= {`${FillterSideBarStyles.checkboxWrapper} d-flex align-items-center mb-2 `} >
                <label>No brands available</label>
              </div>
                  
                  )}
  </div>
  <div className= {`${FillterSideBarStyles.checkboxContainer} mb-4 pb-3 `}>
  <h4 className='mb-3 fw-bold'>vendor</h4>
 
  {vendors?.length > 0 ? (
                    vendors?.map((vendor, index) => (
                      
                  <div className= {`${FillterSideBarStyles.checkboxWrapper} d-flex align-items-center mb-2 `} key={`vendor${index}`}>
                    <input onChange={() => handleCheckboxChange('vendor', vendor.id)}
                  className="form-check-input"
                  type="checkbox"
                  value={vendor.id}
                  id={`flexCheckDefault4${index}`}
                  checked={filters.vendor.includes(vendor.id)} 
                    
                     />
                    <label className="form-check-label text-nowrap" htmlFor={`flexCheckDefault4${index}`}>
                    {vendor.name}
                    </label>
                  </div>
                      

                    ))
                  ) : (
    
            <div className= {`${FillterSideBarStyles.checkboxWrapper} d-flex align-items-center mb-2 ps-1`} >
                <label>No vendors available</label>
              </div>
                  
                  )}
                  
  </div>
  


</div>

{/* <div className={`${FillterSideBarStyles.buttonContianer}  text-center  position-absolute`}>
  <button onClick={handleSearch} className=" btnCustom btnFilled rounded-4 px-5 text-nowrap ">Filter</button>

</div> */}
    </div>

  



    </>
  )
}

export default FillterSideBar
