import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'


import ResultList from './ResultList'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            searching:true,
            search:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.search} />
                    <button> Search </button>
                </form>
    
                {this.state.searching ? <p>Search for something</p> : 
                        <ResultList results={this.state.results}/>
                }
            </div>
        )
    }

    handleChange(e) {
        //this.props.dispatch(addSearchRequest(e.target.value))
        this.setState({search:e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let _this = this;
        let searchResults = axios.get(`https://api.spotify.com/v1/search?q=${this.state.search}&type=artist`)
        .then(function(result){
            console.log('from submit handler' + {result})
            let results = result.data.artists.items
            // this.props.dispatch(addResults(results))
            // this.props.dispatch(toggleSearching())
            _this.setState({
                results: results,
                searching: false
            });
        });
    }
}

export default App;