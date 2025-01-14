import React, { useEffect, useState } from "react";
import LatestItemsCard from "./LatestItemsCard";
import { useTypewriter } from 'react-simple-typewriter';


const LatestItems = () => {
  const [items, setItems] = useState([]);

  const [typeEffect] = useTypewriter({
    words: ['', ''],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40
  })

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => {
          const sortedItems = 
          data.sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0,6);
          setItems(sortedItems);
      })
       .catch((error)=>console.error("Error Fetching:", error));
  }, []);

  if(items.length === 0){
    return(
    <div className="my-20 text-center">
      <h2 className="text-2xl">No Items Available</h2>
    </div>
    )
  }

  return (
    <div className="my-20">
     <div>
        <h2 className="text-center font-bold m-6 text-3xl text-sky-500">Latest Lost & found
        </h2>
          <h2 className="text-center"><span className="font-bold text-indigo-600 text-center">{typeEffect}</span></h2>
     </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <LatestItemsCard key={item._id} item={item} />
        ))}
      </div>
          <div className="my-10 text-center">
            <button className="btn bg-sky-500 text-white">See All ...</button>
          </div>
    </div>
  );
};

export default LatestItems;
