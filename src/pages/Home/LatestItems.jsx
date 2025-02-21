import React, { useContext, useEffect, useState } from "react";
import LatestItemsCard from "./LatestItemsCard";
import { useTypewriter } from 'react-simple-typewriter';
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import axios from "axios";


const LatestItems = () => {
  const { user, accessToken } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  const [typeEffect] = useTypewriter({
    words: ['Lost & Found Items', 'Report Missing Items', 'Find Your Items'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40
  })

  // useEffect(() => {
  //   fetch("http://localhost:5000/items")
  //     .then((res) => res.json())
  //     .then((data) => {
  //         const sortedItems = 
  //         data.sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0,6);
  //         setItems(sortedItems);
  //     })
  //      .catch((error)=>console.error("Error Fetching:", error));
  // }, []);

  useEffect(() => {
    const fetchItems = async () => {
      if (!user) return; 

      try {
        const res = await axios.get("http://localhost:5000/items", {
          headers: {
            Authorization: `Bearer ${accessToken}`, 
          },
          withCredentials: true,
        });

        console.log("✅ Items Response:", res.data);
        setItems(res.data);
      } catch (error) {
        console.error("❌ Error Fetching Items:", error);
      }
    };

    fetchItems(); 
  }, [user, accessToken]);


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
        <h2 className="text-center font-bold m-6 text-3xl text-blue-600">Latest Lost & found
        </h2>
          <h2 className="text-center"><span className="font-bold text-indigo-600 text-center">{typeEffect}</span></h2>
     </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <LatestItemsCard key={item._id} item={item} />
        ))}
      </div>
          <div className="my-10 text-center">
          <Link to={"/allItems"}>
         <button className="btn bg-blue-700 text-white">See All ...</button>
         </Link>
          </div>
    </div>
  );
};

export default LatestItems;
