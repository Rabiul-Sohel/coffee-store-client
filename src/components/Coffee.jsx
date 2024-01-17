import { useLoaderData } from "react-router-dom";
import CoffeCard from "./CoffeCard";
import { useState } from "react";
import Swal from "sweetalert2";


const Coffee = () => {
  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)

  
  return (
    <div>
     
    </div>
  );
};

export default Coffee;