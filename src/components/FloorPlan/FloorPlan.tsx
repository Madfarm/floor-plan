import React from "react";
import Bath from "./Bath/Bath"
import Bedroom from "./Bedroom/Bedroom";

export default function FloorPlan() {
    let totalBedrooms: number = 3;
    let bedrooms: React.ReactElement[] = [];
    
    for(let i=0; i < totalBedrooms; i++){
        bedrooms.push(<Bedroom bedNum={i+1} />)
    }

    return (
        <div>
            <Bath size="full" />
            {bedrooms}

            <Bath size="half" />
        </div>
    )
}