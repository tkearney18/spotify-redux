import React from 'react'
import Result from './Result'

class ResultList extends React.Component {
    render(){
        return(
            <div className="row">
                <div className="col-lg-8">
                    {this.props.results.map( result =>
                        <Result key={Math.random()} result={result}/>)
                    }
                </div>
            </div>
        )
    }
}

export default ResultList;