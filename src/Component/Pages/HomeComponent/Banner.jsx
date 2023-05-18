import banner1 from "../../../assets/banner1.webp"
import banner2 from "../../../assets/banner2.webp"
import banner3 from "../../../assets/banner3.webp"
import banner4 from "../../../assets/banner4.webp"

const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full h-[95vh]" />
          <div className="absolute h-full flex  items-center w-1/2  left-0 ">
        <div className='lg:pl-[80px]'>
        <h2 className='text-xl'>
          Your happy pets
        </h2>
        <p className='text-7xl w-1/2 font-bold mb-4'>
        
        Everythig for pets
        </p>
        <div className=' mt-4'>
        <button className="btn bg-black hover:bg-white hover:text-black hover:font-bold hover:rounded-xl">descover now </button>
        
        </div>
   </div>
    </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full h-[95vh]" />
          <div className="absolute h-full flex flex-end items-center w-1/2  right-0  ">
        <div className=''>
        <h2 className='text-xl '>
        Your happy pets
        </h2>
        <p className='text-7xl w-1/2 font-bold mb-4'>
       Pet Accessories
        </p>
        <div className=' mt-4'>
        <button className="btn bg-black hover:bg-white hover:text-black hover:font-bold hover:rounded-xl">descover now </button>
        
        </div>
   </div>
    </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full h-[95vh]" />
          <div className="absolute h-full flex  items-center w-1/2  right-0  ">
        <div className=''>
        <h2 className='text-xl '>
        Your happy pets
        </h2>
        <p className='text-7xl w-1/2 font-bold mb-4'>
       Pet Accessories
        </p>
        <div className=' mt-4'>
        <button className="btn bg-black hover:bg-white hover:text-black hover:font-bold hover:rounded-xl">descover now </button>
        
        </div>
   </div>
    </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="w-full h-[95vh]" />
          <div className="absolute h-full flex  items-center w-1/2  left-0 ">
        <div className='lg:pl-[80px]'>
        <h2 className='text-xl'>
          Your happy pets
        </h2>
        <p className='text-7xl w-1/2 font-bold mb-4'>
        
        Everythig for pets
        </p>
        <div className=' mt-4'>
        <button className="btn bg-black hover:bg-white hover:text-black hover:font-bold hover:rounded-xl">descover now </button>
        
        </div>
   </div>
    </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;