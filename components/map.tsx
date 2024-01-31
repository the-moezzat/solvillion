'use client'
import * as React from "react";
import Madaba from "@/components/goverments/Madaba";
import Irbid from "@/components/goverments/Irbid";
import Tafilah from "@/components/goverments/Tafilah";
import Balqa from "@/components/goverments/Balqa";
import Karak from "@/components/goverments/Karak";
import Aqaba from "@/components/goverments/Aqaba";
import Mafraq from "@/components/goverments/Mafraq";
import Zarqa from "@/components/goverments/Zarqa";
import Amman from "@/components/goverments/Amman";
import Maan from "@/components/goverments/Maan";
import Jarash from "@/components/goverments/Jarash";
import Ajlun from "@/components/goverments/Ajlun";

type MapProps = {
    onCityEnter: (city: string) => void;
    activeCity: string;
};
const Map: React.FC<MapProps> = ({onCityEnter, activeCity}) => {

    const handelHoverIn = function (e: React.MouseEvent<SVGPathElement, MouseEvent>) {
        const city = (e.target as Element).getAttribute('name');
        onCityEnter(city || "");
    }


    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#364fc7"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            width={'100%'}
            height={'100%'}
            viewBox="0 0 1000 1000"
        >

            <Madaba onMouseOver={handelHoverIn} className={`hover:fill-[#5c7cfa] transition-colors ${activeCity === "Madaba"? "fill-[#5c7cfa]" : ""}`}/>
            <Irbid onMouseOver={handelHoverIn} className={`hover:fill-[#5c7cfa] transition-colors ${activeCity === "Irbid"? "fill-[#5c7cfa]" : ""}`}/>
            <Tafilah onMouseOver={handelHoverIn} className={`hover:fill-[#5c7cfa] transition-colors ${activeCity === "Tafilah"? "fill-[#5c7cfa]" : ""}`}/>
            <Aqaba onMouseOver={handelHoverIn} className={`hover:fill-[#5c7cfa] transition-colors ${activeCity === "Aqaba"? "fill-[#5c7cfa]" : ""}`}/>
            <Balqa onMouseOver={handelHoverIn} className={`hover:fill-[#5c7cfa] transition-colors ${activeCity === "Balqa"? "fill-[#5c7cfa]" : ""}`}/>
            <Mafraq onMouseOver={handelHoverIn} className={`hover:fill-[#5c7cfa] transition-colors ${activeCity === "Mafraq"? "fill-[#5c7cfa]" : ""}`}/>
            <Karak onMouseOver={handelHoverIn} className={`hover:fill-[#5c7cfa] transition-colors ${activeCity === "Karak"? "fill-[#5c7cfa]" : ""}`}/>
            <Maan onMouseOver={handelHoverIn} className={`hover:fill-[#5c7cfa] transition-colors ${activeCity === "Ma`an"? "fill-[#5c7cfa]" : ""}`}/>
            <Amman onMouseOver={handelHoverIn} className={`hover:fill-[#5c7cfa] transition-colors ${activeCity === "Amman"? "fill-[#5c7cfa]" : ""}`}/>
            <Zarqa onMouseOver={handelHoverIn} className={`hover:fill-[#5c7cfa] transition-colors ${activeCity === "Zarqa"? "fill-[#5c7cfa]" : ""}`}/>
            <Ajlun onMouseOver={handelHoverIn} className={`hover:fill-[#5c7cfa] transition-colors ${activeCity === "Ajlun"? "fill-[#5c7cfa]" : ""}`}/>
            <Jarash onMouseOver={handelHoverIn} className={`hover:fill-[#5c7cfa] transition-colors ${activeCity === "Jarash"? "fill-[#5c7cfa]" : ""}`}/>
            <circle
                cx={137.1}
                cy={910}
                className="jo_svg__29.399037437882072|35.16651581589536"
            />
            <circle
                cx={540.3}
                cy={550.4}
                className="jo_svg__31.071731183332716|37.33782282591918"
            />
            <circle
                cx={862.9}
                cy={91.9}
                className="jo_svg__33.162598365146025|39.07486843393824"
            />
            <circle cx={252.3} cy={225.3} className="jo_svg__Irbid"/>
            <circle cx={232.4} cy={444.1} className="jo_svg__Madaba"/>
            <circle cx={237.6} cy={534.6} className="jo_svg__Karak"/>
            <circle cx={222.7} cy={611.7} className="jo_svg__Tafilah"/>
            <circle cx={166.6} cy={859.5} className="jo_svg__Aqaba"/>
            <circle cx={229.5} cy={343.6} className="jo_svg__Balqa"/>
            <circle cx={669.7} cy={266.1} className="jo_svg__Mafraq"/>
            <circle cx={416.4} cy={670.9} className="jo_svg__Ma`an"/>
            <circle cx={352.6} cy={447.8} className="jo_svg__Amman"/>
            <circle cx={489.3} cy={411.6} className="jo_svg__Zarqa"/>
            <circle cx={243.2} cy={286} className="jo_svg__Ajlun"/>
            <circle cx={271.5} cy={304.1} className="jo_svg__Jarash"/>
        </svg>
    );
}
export default Map;
