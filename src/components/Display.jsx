import React from 'react'
import {useParams} from 'react-router-dom'

const Display = (props)=>{
    const {word, color, bkgrnd}=useParams()
    return(
        <div>
            {
                isNaN(word)?
                <p style={
                    color?
                    {color:color, backgroundColor:bkgrnd}
                    :null
                }>
                    The word of the day is {word}
                </p>
                :
                <p>
                    The number of the day is {word}
                </p>
            }
        </div>
    )
}

export default Display