import React from 'react'
import axios from 'axios'

let Result = ({ result }) => {
    console.log( result)
    return(
        <div>
            <a href={ result.external_urls.spotify }><h2>{ result.name }</h2></a>
            {!result.images.length ? <p>No Image Available</p> : <img src={ result.images[0].url } style={{ 
                height: 50, width: 50
            }} />}
            <ul>
                {result.genres.map(g =>
                    <li key={g.i}>{g}</li>
                )}
            </ul>
        </div>
    )
}

export default Result;