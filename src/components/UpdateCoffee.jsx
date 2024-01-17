import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
  const coffee = useLoaderData()
   const { _id, name, chef, supplier, taste, photo } = coffee;
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const supplier = form.supplier.value;
    const photo = form.photo.value;
    const coffee = { name, chef, supplier, taste, photo }
    ;
    fetch(`http://localhost:3000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(coffee)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "User Updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      })
  }
  return (
    <div>
     
      <div>
        <h2 className="text-3xl font-bold">
          Update the Information of {name}{" "}
        </h2>

        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
              <form
                onSubmit={handleUpdate}
                className="card-body grid grid-cols-2"
              >
                {/* Form name Row */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    className="input input-bordered"
                  />
                </div>
                {/* Form chef row */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Chef</span>
                  </label>
                  <input
                    type="text"
                    name="chef"
                    defaultValue={chef}
                    className="input input-bordered"
                  />
                </div>

                {/* Form supplier row */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Supplier</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={supplier}
                    className="input input-bordered"
                    name="supplier"
                  />
                </div>

                {/* Form Taste row */}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Taste</span>
                  </label>
                  <input
                    name="taste"
                    type="text"
                    defaultValue={taste}
                    className="input input-bordered"
                  />
                </div>

                {/* form photo row*/}
                <div className="form-control col-span-2 mb-5">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    defaultValue={photo}
                    className="input input-bordered"
                  />
                </div>

                {/* form submit row */}

                <input
                  value="Update"
                  type="submit"
                  className="btn   w-full col-span-2"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;