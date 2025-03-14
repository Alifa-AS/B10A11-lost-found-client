import React, { useState } from "react";
import useItems from "../../hooks/useItems";
import LatestItemsCard from "../Home/LatestItemsCard";
import Loading from "../shared/Loading";
import { FaSearch } from "react-icons/fa";

const AllItems = () => {
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const { items, loading } = useItems(sort, search, filter);
  // console.log(sort);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="pb-10">
      <h2 className="text-center py-10 text-3xl font-extrabold text-blue-400 drop-shadow-lg">
        All Lost & Found Items
      </h2>
      <div className="w-11/12 mx-auto bg-base-200 py-5 p-3 flex flex-wrap gap-3 items-center">
        <div className="flex w-full md:w-auto md:mr-auto">
          <button
            onClick={() => setSort(!sort)}
            className={`btn btn-info text-white ${sort && "btn-success"}`}
          >
            {sort == true ? "Sorted By Title" : "Sort By Title"}
          </button>
        </div>

        <div className="flex grow items-center justify-end gap-3">
          <label className="input input-bordered flex items-center gap-2 w-full sm:w-auto">
            <input
              onKeyUp={(e) => setSearch(e.target.value)}
              type="text"
              className="grow"
              placeholder="Search by location"
            />
            <FaSearch />
          </label>

          <select
            onChange={(e) => setFilter(e.target.value)}
            className="select select-bordered sm:w-auto w-full max-w-xs"
          >
            <option disabled>Category</option>
            <option>Documents</option>
            <option>Gadgets</option>
            <option>Accessories</option>
            <option>Vehicles</option>
            <option>Pets</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 my-10">
        {items.map((item) => (
          <LatestItemsCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllItems;
