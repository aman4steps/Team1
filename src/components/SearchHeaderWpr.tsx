import React from "react";

const SearchHeaderWpr = () => {
    return (
        <div className="container-wrapper flex justify-between px-5 pt-12 pb-5 items-center">
            <div className="">
                <div className="flex gap-3 items-center">
                    <p className="text-[16px]"> Havelock Tour Package Holiday Packages</p>
                    <p className="text-[13px]"><span>5</span>(149 Reviews)</p>
                </div>
                <p className="text-[13px]">Lorem ipsum dolor sit amet .</p>
            </div>
            <div>
                <select className="select w-full max-w-xs  select-sm text-[13px]">
                    <option disabled selected>Who shot first?</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
            </div>
        </div>
    )
}

export default SearchHeaderWpr