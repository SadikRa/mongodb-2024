import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData(); // Coffee data fetched via loader

  // Destructure correctly, use the same field names that exist in your data
  const {
    _id,
    coffeeName,
    category,
    chefName,
    supplierName,
    taste,
    details,
    photo,
  } = coffee;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const coffeeName = form.coffeeName.value;
    const category = form.category.value;
    const chefName = form.chefName.value;
    const supplierName = form.supplierName.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const UpdateCoffee = {
      coffeeName,
      category,
      chefName,
      supplierName,
      taste,
      details,
      photo,
    };

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.matchedCount){
          // alert('coffee added done')
          Swal.fire({
            title: 'success',
            text: 'your Updated coffee added done',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      });
  };

  return (
    <div key={_id} className="rounded-lg bg-[#F4F3F0] ">
    <form onSubmit={handleSubmit} className="p-12 w-full ">
      <h1 className="text-4xl text-center p-7">Update Coffee</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-[50%]">
          <h3 className="text-2xl font-bold p-3"> Name</h3>
          <input
            type="text"
            placeholder="Coffee Name"
            name="coffeeName"
            defaultValue={coffeeName}
            className="input input-bordered w-full"
          />
        </div>
        <div className="w-[50%]">
          <h3 className="text-2xl font-bold p-3"> Chef</h3>
          <input
            type="text"
            placeholder="Chef Name"
            name="chefName"
            defaultValue={chefName}
            className="input input-bordered w-full"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-[50%]">
          <h3 className="text-2xl font-bold p-3"> Supplier</h3>
          <input
            type="text"
            placeholder="Supplier Name"
            name="supplierName"
            defaultValue={supplierName}
            className="input input-bordered w-full"
          />
        </div>
        <div className="w-[50%]">
          <h3 className="text-2xl font-bold p-3"> Taste</h3>
          <input
            type="text"
            placeholder="Taste Name"
            name="taste"
            defaultValue={taste}
            className="input input-bordered w-full"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-[50%]">
          <h3 className="text-2xl font-bold p-3"> Category</h3>
          <input
            type="text"
            placeholder="Category Name"
            name="category"
            defaultValue={category}
            className="input input-bordered w-full"
          />
        </div>
        <div className="w-[50%]">
          <h3 className="text-2xl font-bold p-3"> Details</h3>
          <input
            type="text"
            placeholder="Details"
            name="details"
            defaultValue={details}
            className="input input-bordered w-full"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full">
          <h3 className="text-2xl font-bold p-3"> Photo</h3>
          <input
            type="text"
            placeholder="Photo Url"
            name="photo"
            defaultValue={photo}
            className="input input-bordered w-full"
          />
        </div>
      </div>

      <input
        className="w-full text-white bg-[#331A15] btn btn-primary mt-8 "
        type="submit"
        value="Add Coffee"
      />
    </form>
  </div>
  );
};

export default UpdateCoffee;
