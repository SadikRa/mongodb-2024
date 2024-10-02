import { useLoaderData } from "react-router-dom";

const Users = () => {
  const userData = useLoaderData();

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {userData.map(({ _id, name, email }) => (
        <div key={_id} className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{email}</p>
            <button onClick={() => handleDelete(_id)}>X</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
