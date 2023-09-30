import Swal from "sweetalert2";
import { FaRegTrashCan, FaRotate } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";

const Products = ({ product, products, setProducts }) => {
  const { _id, name, category, quantity, photo } = product;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = products.filter((product) => product._id !== _id);
              setProducts(remaining);
            }
          });

        console.log("delete");
      }
    });

    fetch(`http://localhost:5000/products/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("delete");
          const remaining = products.filter((product) => product._id !== _id);
          setProducts(remaining);
        }
      });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <div className="w-60">
        <figure>
          <img className="mx-auto w-full p-5" src={photo} alt={name} />
        </figure>
      </div>
      <div className="flex justify-between mx-auto w-full ">
        <div className="mx-5">
          <h2 className="card-title">{name}</h2>
          <p>
            <strong>Category:</strong> {category}
          </p>
          <p>
            <strong>Quantity:</strong> {quantity}
          </p>
        </div>
        <div className="card-actions justify-end pr-3">
          <div className="btn-group btn-group-vertical grid justify-around gap-3">
            <button className="btn btn-active">
              <FaRegEye></FaRegEye>
            </button>
            <button className="btn hover:bg-yellow-400">
              <FaRotate></FaRotate>
            </button>
            <button onClick={() => handleDelete(_id)} className=" btn hover:bg-yellow-400">
              <FaRegTrashCan className="text-xl"></FaRegTrashCan>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

// Organize the coda beautifully and Make the coda as short as possible.
