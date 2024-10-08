import React from "react";
import Swal from 'sweetalert2'
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'


const AddCoffee = () => {
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

    const data = {
      coffeeName,
      category,
      chefName,
      supplierName,
      taste,
      details,
      photo,
    };

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          // alert('coffee added done')
          Swal.fire({
            title: 'success',
            text: 'your coffee added done',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      });
  };

  return (
    <div className="rounded-lg bg-[#F4F3F0] ">
      <form onSubmit={handleSubmit} className="p-12 w-full ">
        <h1 className="text-4xl text-center p-7">Add New Coffee</h1>
        <p className="text-center">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at <br /> its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of <br />
          letters, as opposed to using Content here.
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-[50%]">
            <h3 className="text-2xl font-bold p-3"> Name</h3>
            <input
              type="text"
              placeholder="Coffee Name"
              name="coffeeName"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-[50%]">
            <h3 className="text-2xl font-bold p-3"> Chef</h3>
            <input
              type="text"
              placeholder="Chef Name"
              name="chefName"
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
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-[50%]">
            <h3 className="text-2xl font-bold p-3"> Taste</h3>
            <input
              type="text"
              placeholder="Taste Name"
              name="taste"
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
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-[50%]">
            <h3 className="text-2xl font-bold p-3"> Details</h3>
            <input
              type="text"
              placeholder="Details"
              name="details"
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

export default AddCoffee;
