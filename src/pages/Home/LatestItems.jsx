import React, { useEffect, useState } from "react";
import LatestItemsCard from "./LatestItemsCard";

const LatestItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="my-20">
     <div>
        <h2 className="text-center font-bold my-10 text-3xl text-green-900">Latest Lost & found Items</h2>
     </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <LatestItemsCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LatestItems;
