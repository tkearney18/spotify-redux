import React from 'react'
import { Button } from 'react-bootstrap';

let Result = ({ result }) => {
    return(
        <div className="row">
            <div className="col-lg-6">
                <a href={ result.external_urls.spotify }><h2>{ result.name }</h2></a>
                {!result.images.length ? <p>No Image Available</p> : <img src={ result.images[0].url } style={{ 
                    height: 50, width: 50
                }} />}
                <ul>
                    {result.genres.map(g =>
                        <li key={Math.random()}>{g}</li>
                    )}
                </ul>
            </div>
            <div className="<col-lg-2></col-lg-2>" style={{
                 minHeight: 100, display: 'flex', alignItems: 'center'
            }}>
                <Button> Add to Favorites </Button>
            </div>
        </div>
    )
}

export default Result;