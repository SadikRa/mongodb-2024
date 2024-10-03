import React from "react";
import { FaEye, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
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

  const handleDelete = (_id) => {


    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:5000/coffee/${_id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then(data => {
                  console.log(data);
                  if(data.deletedCount){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                  }
                });

        }
      });


   
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="card-body ">
          <div className="flex justify-center items-center justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="card-title">Name: Turkish coffee</h2>
              <h2 className="card-title">Chef Name: {chefName}</h2>
              <h2 className="card-title">supplier Name: {supplierName}</h2>
              <p>{details}</p>
            </div>
            <div className="card-actions justify-end ">
              <div className="flex flex-col gap-2">
                <button className="btn btn-primary">
                  <FaEye />
                </button>
                <button className="btn btn-primary">
                  <FaPencilAlt />
                </button>
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-primary"
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
