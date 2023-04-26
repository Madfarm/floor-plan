
import './Bedroom.css'


type BedroomProps = {
    bedNum: number
}

export default function Bedroom({ bedNum }: BedroomProps){
    return (
        <div id={`bedroom-${bedNum}`}>
            <p>Bedroom {bedNum}</p>
        </div>
    )
}