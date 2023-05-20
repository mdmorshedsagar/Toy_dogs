import blog1 from "../../../assets/blog1.webp"
import blog2 from "../../../assets/blog2.webp"
import blog3 from "../../../assets/blog3.webp"
import AOS from "aos";
import 'aos/dist/aos.css';
import {useEffect } from 'react';
const OurBlog = () => {
  useEffect(()=>{
    AOS.init()
  },[])
    return (
      <div className="py-[36px]">
        <h1 className="text-center text-4xl font-bold py-8">Our blogs</h1>
 <div className='grid grid-cols-1 lg:grid-cols-3 bg-base-200'>
            <div data-aos="zoom-in-right" data-aos-duration="1000" className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={blog2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <p className="card-title">News</p>
    <h2 className="text-xl font-bold">What your cat breed says about you</h2>
    <hr className="w-[40px] mx-auto  border border-spacing-1 text-center" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quae quod ipsa aliquid delectus voluptatem qui dignissimos dolores corrupti corporis. Culpa voluptates saepe animi nisi pariatur consectetur atque hic corporis.</p>
  </div>
</div>
            <div data-aos="zoom-in" data-aos-duration="1000" className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={blog3} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <p className="card-title">News</p>
    <h2 className="text-xl font-bold">Understanding your doges five Senses</h2>
    <hr className="w-[40px] mx-auto  border border-spacing-1 text-center" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quae quod ipsa aliquid delectus voluptatem qui dignissimos dolores corrupti corporis. Culpa voluptates saepe animi nisi pariatur consectetur atque hic corporis.</p>
  </div>
</div>
            <div data-aos="zoom-in-left" data-aos-duration="1000" className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={blog1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <p className="card-title">News</p>
    <h2 className="text-xl font-bold">Taking your dog out on the first date</h2>
    <hr className="w-[40px] mx-auto  border border-spacing-1 text-center" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quae quod ipsa aliquid delectus voluptatem qui dignissimos dolores corrupti corporis. Culpa voluptates saepe animi nisi pariatur consectetur atque hic corporis.</p>
  </div>
</div>
        </div>
      </div>
       
    );
};

export default OurBlog;