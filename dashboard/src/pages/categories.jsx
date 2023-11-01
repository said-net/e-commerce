import { IconButton } from "@material-tailwind/react";
import { BiPlusCircle } from "react-icons/bi";
import { useSelector } from "react-redux";

function Categories() {
    const { lang: { lang: { categories: c } } } = useSelector(e => e)
    return (
        <div className="flex items-start justify-start flex-col w-full px-[2%]">
            {/*  */}
            <div className="h-[70px] mb-[20px]">
                <div className="flex items-center justify-center w-full bg-white fixed top-0 left-0 h-[70px] z-[99] border-b shadow-sm">
                    <p className="text-[20px] uppercase">
                        {c?.title_}
                    </p>
                </div>
            </div>
            <div className="bg-white flex items-start justify-start">
                {/*  */}
                <p className="h-[50px] w-[50px] border border-gray-400 border-r-0 flex items-center justify-center text-[12px] lg:text-[20px]">
                    {c?.id}
                </p>
                {/*  */}
                <p className="h-[50px] w-[120px] border border-gray-400 border-r-0 flex items-center justify-center text-[12px] lg:text-[20px]">
                    {c?.title}
                </p>
                <p className="h-[50px] w-[120px] border border-gray-400 border-r-0 flex items-center justify-center text-[12px] lg:text-[20px]">
                    {c?.image}
                </p>
                <p className="h-[50px] w-[120px] border border-gray-400 border-r-0 flex items-center justify-center text-[12px] lg:text-[20px]">
                    {c?.products}
                </p>
                <p className="h-[50px] w-[120px] border border-gray-400 border-r-0 flex items-center justify-center text-[12px] lg:text-[20px]">
                    {c?.status}
                </p>
                <p className="h-[50px] w-[50px] border border-gray-400 flex items-center justify-center text-[12px] lg:text-[20px]">
                    <IconButton color="green" className="rounded-full text-[20px]">
                        <BiPlusCircle />
                    </IconButton>
                </p>
            </div>
        </div>
    );
}

export default Categories;