import React from "react";

const SearchHeaderWpr = () => {
  return (
    <div className="container-wrapper flex justify-between   pb-5 items-center">
      <div className="">
        <div className=" md:flex gap-2 items-center">
          <p className="text-[16px]"> Havelock Tour Package Holiday Packages</p>
          <p className="text-[13px] mt-1">
            <span>5</span>(149 Reviews)
          </p>
        </div>
        <p className="text-[13px]">Lorem ipsum dolor sit amet .</p>
      </div>
      <div>
        <select className="select w-full max-w-xs hidden  select-sm text-[13px]">
          <option disabled selected>
            Who shot first?
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <button className="border rounded-sm border-gray-400 text-sm px-3 py-1 hover:bg-white xl:hidden block">
          Filter
        </button>
      </div>
    </div>
  );
};

export default SearchHeaderWpr;
