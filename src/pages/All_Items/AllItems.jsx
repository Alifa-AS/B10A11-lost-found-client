import React, { useState } from "react";
import LatestItemsCard from "../Home/LatestItemsCard";

const AllItems = () => {
    const [sort, setSort] = useState(false);
    console.log(sort);


  return (
    <div>
      <h1 className="py-5 text-3xl font-bold text-center"> All Items</h1>

      <div className='w-11/12 mx-auto bg-base-200 py-5 p-3 flex items-center'>
               <button onClick={()=>setSort(!sort)}
                className={`btn btn-neutral ${sort && "btn-success"}`}>
                    {sort == true ? "Sorted By" : "Sort By"}</button>
           </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <LatestItemsCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllItems;
