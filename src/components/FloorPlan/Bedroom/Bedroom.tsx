
type BedroomProps = {
    bedNum: number
}

export default function Bedroom({ bedNum }: BedroomProps){
    return (
        <div>
            <p>Bedroom {bedNum}</p>
        </div>
    )
}