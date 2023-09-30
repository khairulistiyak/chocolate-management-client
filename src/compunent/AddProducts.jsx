import Swal from "sweetalert2";

const AddProducts = () => {
  const handleAddProducts = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.name.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const newProducts = { name, quantity, category, photo };
    console.log(newProducts);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "successfully added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="bg-[#F4F3F0] p-7">
        <h2 className="text-3xl font-extrabold text-center">Add a Products</h2>
        <form onSubmit={handleAddProducts}>
          {/* from row name and quantity */}
          <div className="md:flex gap-5 container mx-auto w-100% mt-5">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text font-bold text-xl">Products Name</span>
              </label>
              <input name="name" type="text" placeholder="Products Name" className="input input-bordered md:w-full" />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-xl">Quantity</span>
              </label>
              <input name="quantity" type="text" placeholder="Quantity" className="input input-bordered md:w-full" />
            </div>
          </div>
          {/* from row Supplier and Taste */}

          {/* from row Category and Details */}
          <div className="md:flex gap-5 container mx-auto w-100% mt-5">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text font-bold text-xl">Category</span>
              </label>
              <input name="category" type="text" placeholder="Enter Products category" className="input input-bordered md:w-full" />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-xl">Details</span>
              </label>
              <input name="details" type="text" placeholder="Enter Products details" className="input input-bordered md:w-full" />
            </div>
          </div>
          {/* from row name and quantity */}
          <div className="md:flex gap-5 container mx-auto w-100% mt-5">
            <div className="form-control md:w-full ">
              <label className="label">
                <span className="label-text font-bold text-xl">Photo</span>
              </label>
              <input name="photo" type="text" placeholder="Enter photo URL" className="input input-bordered md:w-full" />
            </div>
          </div>
          {/* from row name and quantity */}
          <div className="md:flex gap-5 container mx-auto w-100% mt-5">
            <button className="btn bg-[#331A15] text-white mt-5 w-full">Add Products</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
