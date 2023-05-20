import React from 'react';

const GalleryItem = ({gallery}) => {
    const {picture} =gallery;
    return (
        <div>
            <div className='w-full h-[300px] border border-1 border-sky-100'>
                <img className='w-full h-full' src={picture} alt="Picture" />
            </div>
        </div>
    );
};

export default GalleryItem;