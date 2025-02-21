import axios from "axios";
import React, { useEffect, useState } from "react";

const useItems = (sort, search, filter) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/items?sort=${sort}&search=${search}&filter=${filter}`, {
        withCredentials: true,
      })
      .then((res) => {
        setLoading(false);
        setItems(res.data);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
        setLoading(false);
      });
  }, [sort, search, filter]);

  return { items, loading };
};

export default useItems;
