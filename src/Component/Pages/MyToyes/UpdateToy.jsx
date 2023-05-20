import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateToy = () => {
  const loaders = useLoaderData();
 
  const {_id, name, picture,seller, email, category,price,rating,quantity, description} = loaders;
  const handleUpdateToy = event =>{
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const picture = form.picture.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const UpdateToyData = {
      name,
      picture,
      seller,
      email,
      category,
      price,
      rating,
      quantity,
      description,
    };
    
    fetch(`http://localhost:5000/updateToy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateToyData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Update '
                    })
                   
                }
            })
  }
  return (
   
    <div className="bg-[#F4F3F0] p-16">
      <h2 className="text-4xl font-bold text-center pb-4">Add a Toy</h2>
      <form onSubmit={handleUpdateToy}>
        <div className="md:flex mb-8 gap-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Picture URL of the toy</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="picture"
                defaultValue={picture}
                placeholder="Toy picture"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Inter toy name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8 gap-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Seller name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="seller"
                
                defaultValue={seller}
                placeholder="Seller name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Seller email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                defaultValue={email}
                placeholder="Inter toy name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8 gap-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Sub-category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Sub-category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Inter toy price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8 gap-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="inter a rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Inter toy quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8 ">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Detail description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                defaultValue={description}
                placeholder="Detail description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Update toy"
          className="btn w-full font-bold text-xl bg-gray-400 hover:btn-outline"
        />
      </form>
    </div>
  );
};

export default UpdateToy;
