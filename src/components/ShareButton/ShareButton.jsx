import React from 'react'
import copy from 'clipboard-copy';
import ShareButtonStyles from "./ShareButton.module.css"
import toast from 'react-hot-toast';
const ShareButton = ({carName}) => {
  const handleShare = () => {
    // Get the current URL
    const currentUrl = window.location.href;

    // Try to copy the URL to the clipboard
    try {
      copy(currentUrl);
      toast.success('Link copied to clipboard!', {
        position: 'top-right',
        className: 'text-center box-shadow fw-bold',
      });
    } catch (err) {
      toast.error('Unable to copy to clipboard!', {
        position: 'top-right',
        className: 'text-center box-shadow fw-bold',
      });
      console.error('Unable to copy to clipboard', err);
    }

    // Check if it's a mobile device and open the share dialog
    if (isMobile()) {
      if (navigator.share) {
        navigator.share({
          title: carName,
          url: currentUrl,
        })
          .then(() => console.log('Shared successfully'))
          .catch((error) => console.error('Error sharing:', error));
      } else {
        console.warn('Share API not supported on this device');
      }
    }
  };

  const isMobile = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };
  return (
    <>
    <button onClick={handleShare} className={`${ShareButtonStyles.fav} px-2 py-1 mx-1`}>
    <i className="fa-solid fa-share-nodes me-2"></i>
    Share
    </button>
    </>
  )
}

export default ShareButton
