import { useSelector } from "react-redux";
import { FaAward, FaGears, FaListUl } from 'react-icons/fa6'
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
function Menu() {
    const { auth: { name }, lang: { lang: { menu: m } } } = useSelector(e => e);
    const p = useLocation().pathname;
    const classLink = 'flex items-center justify-center w-[50px] h-[50px] lg:h-auto lg:w-full border rounded-full lg:justify-start lg:p-[5px_10px] lg:hover:pl-[20px] duration-300 relative mb-[10px] ';
    const classLinkActive = 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white';
    return (
        <div className={`flex items-center justify-start flex-col bg-white h-screen relative p-[5px] overflow-y-scroll z-[999] duration-500 lg:w-[300px]`}>
            {/*  */}
            <div className="lg:flex items-center justify-between w-full border h-[50px] rounded-[10px] px-[5px] mb-[10px] hidden">
                <p className="font-bold text-[20px]">{name}</p>
            </div>
            {/*  */}
            <Link to={'/'} className={`${classLink} ${p === '/' && classLinkActive}`}>
                <FaAward className="lg:mr-[10px] text-[30px] lg:text-[20px]" />
                <p className="hidden lg:inline-block">
                    {m?.dashboard}
                </p>
            </Link>
            {/*  */}
            <Link to={'/settings'} className={`${classLink} ${p === '/settings' && classLinkActive}`}>
                <FaGears className="lg:mr-[10px] text-[30px] lg:text-[20px]" />
                <p className="hidden lg:inline-block">
                    {m?.settings}
                </p>
            </Link>
            {/*  */}
            <Link to={'/categories'} className={`${classLink} ${p === '/categories' && classLinkActive}`}>
                <FaListUl className="lg:mr-[10px] text-[30px] lg:text-[20px]" />
                <p className="hidden lg:inline-block">
                    {m?.categories}
                </p>
            </Link>
        </div>
    );
}

export default Menu;