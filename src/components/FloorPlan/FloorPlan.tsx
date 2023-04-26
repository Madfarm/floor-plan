import Bath from "./Bath/Bath"

export default function FloorPlan() {
    let bedrooms: number = 3;
    
    return (
        <div>
            <Bath size="full" />


            <Bath size="half" />
        </div>
    )
}