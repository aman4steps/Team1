import Layout from "@/components/admin/Layout";
import { useState } from "react";


export default function(){
const [file, setFile] = useState();
function handleChange(e) {
// console.log(e.target.files);
setFile(URL.createObjectURL(e.target.files[0]));
}
return(
<>
    <Layout>
        <p className="text-[28px] font-semibold">Logo Management</p>
        <div className="my-20 bg-white p-3 rounded-md">
            <p className="text-[20px] font-semibold">Bizare Expenditure Main Website</p>
            <div>
                <div className="flex my-10 items-center pl-10">
                    <input type="file" onChange={handleChange} />
                    <div className="w-2/3">
                        <img className=" w-36 shadow-md " src={file} />
                    </div>
                </div>
            </div>
        </div>
        {/* car rental */}
        <div className="my-20 bg-white p-3 rounded-md">
            <p className="text-[20px] font-semibold">Bizare Expenditure Car rental Website</p>
            <div>
                <div className="flex my-10 items-center pl-10">
                    <input type="file" onChange={handleChange} />
                    <div className="w-2/3">
                        <img className=" w-36 shadow-md " src={file} />
                    </div>
                </div>
            </div>
        </div>
        {/* blog */}
        <div className="my-20 bg-white p-3 rounded-md">
            <p className="text-[20px] font-semibold">Bizare Expenditure Blog page</p>
            <div>
                <div className="flex my-10 items-center pl-10">
                    <input type="file" onChange={handleChange} />
                    <div className="w-2/3">
                        <img className=" w-36 shadow-md " src={file} />
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</>
)
}