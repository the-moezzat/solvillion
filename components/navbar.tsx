import React from 'react';
import Image from "next/image";

function Navbar() {
    return (
        <nav className={'fixed w-full backdrop-blur-lg flex justify-between items-center px-6 py-4 bg-[rgba(23,49,88,0.5)] shadow-xl'}>
            <Image src={'/logo.svg'} alt={'logo'} width={100} height={100}/>

            <ul className={"flex gap-8 items-center"}>
                <li>
                    <a href={'#'} className={'text-white font-normal text-sm'}>الرئيسية</a>
                </li>
                <li>
                    <a href={'#'} className={'text-white font-normal text-sm'}>عن سولفليون</a>
                </li>

                <li>
                    <a href={'#'} className={'text-white font-normal text-sm'}>الخدمات</a>
                </li>
                <li>
                    <a href={'#'} className={'text-white font-normal text-sm'}>مشاريعنا</a>
                </li>
                <li>
                    <a href={'#'} className={'text-white font-normal text-sm'}>الاخبار والانجازات</a>
                </li>
                <li>
                    <a href={'#'} className={'text-white font-normal text-sm'}>أطلب هنا</a>
                </li>

            </ul>

            <div className={'text-white'}>English</div>
        </nav>


    );
}

export default Navbar;