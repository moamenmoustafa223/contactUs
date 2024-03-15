import React, { useState } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import SectionCars from '../SectionCars/SectionCars';
import Banner from '../Banner/Banner';

const SectionContainer = ({ sections, ads }) => {
    const reorderedSections = sections.slice().sort((a, b) => a.displayOrder - b.displayOrder);
    const reorderedAds = ads.slice().sort((a, b) => a.displayOrder - b.displayOrder);
    const [visibleSections, setVisibleSections] = useState(3); // Initially show first two sections

    // Merge sections and ads
    const mergedItems = [];
    let sectionIndex = 0;
    let bannerIndex = 0;

    while (sectionIndex < reorderedSections.length || bannerIndex < reorderedAds.length) {
        if (bannerIndex < reorderedAds.length && reorderedAds[bannerIndex].displayOrder === mergedItems.length + 1) {
            const associatedSection = reorderedSections.find(section => section.displayOrder === reorderedAds[bannerIndex].displayOrder);
            if (associatedSection) {
                mergedItems.push(reorderedAds[bannerIndex]);
            }
            bannerIndex++;
        } else {
            mergedItems.push(reorderedSections[sectionIndex]);
            sectionIndex++;
        }
    }

    // Function to handle "Show More" button click
    const handleShowMore = () => {
        setVisibleSections(prevVisibleSections => prevVisibleSections + 1); // Display one more section
    };

    return (
        <>
            {/* Render sections based on the number of visibleSections */}
            {mergedItems.slice(0, visibleSections).map((item, index) => (
                <React.Fragment key={index}>
                    {item.webImage && (
                        <Banner linkUrl={item.link} webImage={item.webImage} mobileImage={item.mobileImage} />
                    )}
                    {!item.webImage && (
                        <section className={`container py-4`} key={index}>
                            <SectionHeader
                                title={item.title}
                                subTitle={item.description}
                                url={item.showMoreLink}
                                section={item}
                            />
                            <SectionCars id={item.id} />
                        </section>
                    )}
                </React.Fragment>
            ))}
            {/* "Show More" button */}
            <div className='text-center'>
            {visibleSections < mergedItems.length ? ( // Check if there are more sections to show
                <button onClick={handleShowMore} className='btnCustom btnOutLine px-3 py-2  rounded-3 text-center fs-6'> 
                    <span className='d-flex align-items-center fw-bold'>
                        Show More
                        <i className={`ms-2 m-0 fa-solid fa-angle-down`}></i>
                    </span>
                </button>
            ) : null}
            </div>
           
        </>
    );
};
const MemoizedSectionHeader = React.memo(SectionHeader);
const MemoizedSectionCars = React.memo(SectionCars);
export default SectionContainer;
