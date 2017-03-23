import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import ResultList from './ResultList'

class Search extends React.Component {

    onInputChange(term) {
        this.props.onTermChange(term);
    }

    onInputSubmission(e) {
        e.preventDefault()
        this.props.onTermSubmission(this.props.searchTerm)
    }

    render(){
        return(
            <div className="row">
                <form className="col-lg-12 col-lg-push-4" onSubmit={ e => this.onInputSubmission(e)}>
                    <input type="text" onChange={event => this.onInputChange(event.target.value)}/>
                    <button> Search </button>
                </form>
            </div>
        )
    }
}

export default Search;