type BathTypes = {
    size: string
}


export default function Bath( { size }: BathTypes) {
    return (
        <div>
            <p>{size} Bath</p>
        </div>
    )
}