import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
  const loaders = useLoaderData();
  console.log(loaders);
  const { name, picture,seller, email, category,price,rating,quantity, description} = loaders;
  return (
    <div></div>
    // <div className="bg-[#F4F3F0] p-16">
    //   <h2 className="text-4xl font-bold text-center pb-4">Add a Toy</h2>
    //   <form onSubmit={handleAddToy}>
    //     <div className="md:flex mb-8 gap-6">
    //       <div className="form-control md:w-1/2">
    //         <label className="label">
    //           <span className="label-text">Picture URL of the toy</span>
    //         </label>
    //         <label className="input-group">
    //           <input
    //             type="text"
    //             name="picture"
    //             placeholder="Toy picture"
    //             className="input input-bordered w-full"
    //           />
    //         </label>
    //       </div>
    //       <div className="form-control md:w-1/2 ">
    //         <label className="label">
    //           <span className="label-text">Toy Name</span>
    //         </label>
    //         <label className="input-group">
    //           <input
    //             type="text"
    //             name="name"
    //             placeholder="Inter toy name"
    //             className="input input-bordered w-full"
    //           />
    //         </label>
    //       </div>
    //     </div>
    //     <div className="md:flex mb-8 gap-6">
    //       <div className="form-control md:w-1/2">
    //         <label className="label">
    //           <span className="label-text">Seller name</span>
    //         </label>
    //         <label className="input-group">
    //           <input
    //             type="text"
    //             name="seller"
    //             defaultValue={user?.displayName}
    //             placeholder="Seller name"
    //             className="input input-bordered w-full"
    //           />
    //         </label>
    //       </div>
    //       <div className="form-control md:w-1/2 ">
    //         <label className="label">
    //           <span className="label-text">Seller email</span>
    //         </label>
    //         <label className="input-group">
    //           <input
    //             type="email"
    //             name="email"
    //             defaultValue={user?.email}
    //             placeholder="Inter toy name"
    //             className="input input-bordered w-full"
    //           />
    //         </label>
    //       </div>
    //     </div>
    //     <div className="md:flex mb-8 gap-6">
    //       <div className="form-control md:w-1/2">
    //         <label className="label">
    //           <span className="label-text">Sub-category</span>
    //         </label>
    //         <label className="input-group">
    //           <input
    //             type="text"
    //             name="category"
    //             placeholder="Sub-category"
    //             className="input input-bordered w-full"
    //           />
    //         </label>
    //       </div>
    //       <div className="form-control md:w-1/2 ">
    //         <label className="label">
    //           <span className="label-text">Price</span>
    //         </label>
    //         <label className="input-group">
    //           <input
    //             type="text"
    //             name="price"
    //             placeholder="Inter toy price"
    //             className="input input-bordered w-full"
    //           />
    //         </label>
    //       </div>
    //     </div>
    //     <div className="md:flex mb-8 gap-6">
    //       <div className="form-control md:w-1/2">
    //         <label className="label">
    //           <span className="label-text">Rating</span>
    //         </label>
    //         <label className="input-group">
    //           <input
    //             type="text"
    //             name="rating"
    //             placeholder="inter a rating"
    //             className="input input-bordered w-full"
    //           />
    //         </label>
    //       </div>
    //       <div className="form-control md:w-1/2 ">
    //         <label className="label">
    //           <span className="label-text">Available quantity</span>
    //         </label>
    //         <label className="input-group">
    //           <input
    //             type="text"
    //             name="quantity"
    //             placeholder="Inter toy quantity"
    //             className="input input-bordered w-full"
    //           />
    //         </label>
    //       </div>
    //     </div>
    //     <div className="md:flex mb-8 ">
    //       <div className="form-control w-full">
    //         <label className="label">
    //           <span className="label-text">Detail description</span>
    //         </label>
    //         <label className="input-group">
    //           <input
    //             type="text"
    //             name="description"
    //             placeholder="Detail description"
    //             className="input input-bordered w-full"
    //           />
    //         </label>
    //       </div>
    //     </div>

    //     <input
    //       type="submit"
    //       value="Update toy"
    //       className="btn w-full font-bold text-xl bg-gray-400 hover:btn-outline"
    //     />
    //   </form>
    // </div>
  );
};

export default UpdateToy;