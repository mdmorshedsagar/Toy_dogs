

const AddToyes = () => {
    return (
        <div className="bg-indigo-200 p-16">
        <h2 className="text-4xl font-bold text-center">Add a Toy</h2>
        <form >
           
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Toy photo</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="Picture URL of the toy" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Inter toy name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form supplier row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="sellerName" placeholder="Inter seller name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Seller email</span>
                    </label>
                    <label className="input-group">
                        <input type="email" name="email" placeholder="Input seller email" className="input input-bordered w-full" required/>
                    </label>
                </div>
            </div>
            
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Sub Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category" placeholder="Inter Sub Category Toy" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="price" placeholder="Inter price" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="rating" placeholder="Inter rating" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Available quantity</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="quantity" placeholder="Inter quantity" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
          
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Detail description
</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="Inter detail description" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input type="submit" value="Add toy" className="btn w-full text-xl font-bold bg-indigo-500 hover:bg-indigo-300" />

        </form>
    </div>
    );
};

export default AddToyes;