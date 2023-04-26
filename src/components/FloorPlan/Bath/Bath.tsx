
import './Bath.css'

type BathTypes = {
    size: string
}


export default function Bath( { size }: BathTypes) {
    return (
        <div id={`bath-${size}`}>
            <p>{size}-Bath</p>
        </div>
    )
}