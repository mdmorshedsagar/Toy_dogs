import React from 'react';
import 'aos/dist/aos.css';
const GalleryItem = ({gallery}) => {
    const {picture} =gallery;
    return (
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
  <div className='w-full h-[300px] border border-1 border-sky-100'>
                <img className='w-full h-full' src={picture} alt="Picture" />
            </div>
</div>
          
      
    );
};

export default GalleryItem;