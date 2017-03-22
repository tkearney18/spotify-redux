import React from 'react'
import axios from 'axios'
import Result from './Result'

class ResultList extends React.Component {
    render(){
        return(
            <div>
                {this.props.results.map( result =>
                    <Result result={result}/>)
                }
            </div>
        )
    }
}

export default ResultList;