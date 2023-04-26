import React from "react";
import Bath from "./Bath/Bath"
import Bedroom from "./Bedroom/Bedroom";
import Kitchen from "./Kitchen/Kitchen";
import LivingRoom from "./LivingRoom/LivingRoom";
import './FloorPlan.css'

export default function FloorPlan() {
    let totalBedrooms: number = 3;
    let bedrooms: React.ReactElement[] = [];
    
    for(let i=0; i < totalBedrooms; i++){
        bedrooms.push(<Bedroom bedNum={i+1} />)
    }

    return (
        <div className="FloorPlan">
            <Bath size="Full" />
            {bedrooms}
            <LivingRoom />
            <Kitchen />
            <Bath size="Half" />
        </div>
    )
}