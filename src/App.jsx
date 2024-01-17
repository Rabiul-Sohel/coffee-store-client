
import { useLoaderData } from 'react-router-dom';
import './App.css'
import CoffeCard from './components/CoffeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)
 
  return (
    <>
      <h1 className='text-3xl font-bold'>Coffee Store Old</h1>
      <h2>Total Coffee: {coffees.length} </h2>
      <div className="grid grid-cols-2 gap-10">
        {coffees.map((coffee) => (
          <CoffeCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          ></CoffeCard>
        ))}
      </div>
    </>
  );
}

export default App
