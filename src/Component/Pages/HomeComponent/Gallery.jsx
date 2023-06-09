import React, { useEffect ,useState} from 'react';
import GalleryItem from './GalleryItem';
import  AOS  from 'aos';

const Gallery = () => {
    const [galleries,setGalleries] = useState([]);
    useEffect(()=>{
        AOS.init();
        fetch("https://dog-toys-server.vercel.app/gallery")
        .then(res => res.json())
        .then(data => setGalleries(data))
    },[])
    return (
        <div>
            <h1 className='text-5xl font-bold text-center py-12'>Gallery</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 m-4'>
                {
galleries.map(gallery => <GalleryItem key={gallery._id} gallery={gallery}></GalleryItem> )
                }
            </div>
        </div>
    );
};

export default Gallery;