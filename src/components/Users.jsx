import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
  const loadedUsers = useLoaderData()
  const [users, setUsers] = useState(loadedUsers)

  const handleDelete = id => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          console.log('Deleted Successfully');
          // user deleted from the UI
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
        }
      })
  }
  return (
    <div>
      <h2>Total Users: {users.length} </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created</th>
              <th>Last Logged In</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td> {user.email} </td>
                <td> {user.createdAt} </td>
                <td> {user.lastLoggedTime} </td>
                <td><button onClick={()=>handleDelete(user._id)} className="btn">Delete</button></td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;