'use client'
import React from 'react';
import Map from "@/components/map";

function Projects() {
    const [activeCity, setActiveCity] = React.useState("");



    return (
        <div className={'bg-gray-50 grid grid-cols-[6fr,10fr] gap-4 py-8 max-md:grid-cols-1'}>
            <div className={'max-md:w-96'}>
                <Map onCityEnter={setActiveCity} activeCity={activeCity} onCityLeave={setActiveCity} />
            </div>

            <div className={"flex gap-4 flex-col"}>
                <h2 className={'text-2xl text-gray-800 font-semibold'}>
                    {activeCity ? `Government: ${activeCity}` : "Hover over a city"}
                </h2>

                {/*<div className={'flex gap-4'}>*/}
                {/*    <div className={'p-4 rounded-xl bg-blue-50'}>*/}
                {/*        <h3 className={"text-lg font-semibold text-gray-700"}>مسجد العليم</h3>*/}
                {/*        <p className={'text-gray-600 leading-relaxed'}>مشروع وقف خيرى</p>*/}
                {/*    </div>*/}
                {/*    <div className={'p-4 rounded-xl bg-green-50'}>*/}
                {/*        <h3 className={"text-lg font-semibold text-gray-700"}>مسجد العليم</h3>*/}
                {/*        <p className={'text-gray-600 leading-relaxed'}>مشروع وقف خيرى</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Projects;