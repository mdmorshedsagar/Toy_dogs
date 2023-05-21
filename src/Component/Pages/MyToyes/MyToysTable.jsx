
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyToysTable = ({myToy,myToys,setMyToys}) => {
    const {_id,name,seller,category,price,quantity}=myToy;
    const handleDelete = id => {
      console.log(id);
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
          if (result.isConfirmed) {


              fetch(`https://dog-toys-server.vercel.app/myToys/${id}`, {
                  method: 'DELETE'
              })
                  .then(res => res.json())
                  .then(data => {
                      console.log(data);
                      if (data.deletedCount > 0) {
                          Swal.fire(
                              'Deleted!',
                              'Your Toy has been deleted.',
                              'success'
                          )
                          const filtering = myToys.filter(data => data._id !== id)
                          setMyToys(filtering)

                          
                      }
                  })

          }
      })
  }

    return (
      <tr>
      <td>{seller}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>{quantity}</td>
      <td>${price}</td>
      <td>
      <Link to={`/updateToys/${_id}`} className="btn bg-black hover:bg-white hover:text-black  hover:rounded-xl mr-2">Update</Link>
      <button onClick={() => handleDelete(_id)} className="btn bg-black hover:bg-white hover:text-black  hover:rounded-xl">Delete</button>
      </td>
    </tr> 
    );
    };

export default MyToysTable;