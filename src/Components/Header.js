import React, {Component} from 'react'
import './../App.css'
import Axios from 'axios'


let imgUrl = "http://image.tmdb.org/t/p/w342//";

class Header extends Component {

    constructor () {

        super ()

        this.state = {

            movies: []
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit (event) {

        event.preventDefault ();

        let query = this.input.value;

        console.log(query);

        this.componentDidMount(query);
    }

    componentDidMount(query) {

        // let api = 'https://api.themoviedb.org/3/search/movie?api_key=d22ce4ba604071acbb720573852eb4724&query='
        let api = 'https://api.themoviedb.org/3/search/movie?api_key=bfe6d404f9e26ffd486ff1092a2def94&query='

        Axios.get (api + query)

            .then(response =>

                this.setState ({

                    movies:response.data.results
                }))
    }

    render () {

        const {movies} = this.state;

        let movieList = movies.map((movie) =>

        <div className = "col-md-4 movie">

            <img src = {imgUrl + movie.poster_path} className = "movieImg" alt = "moviePoster"/>

            <p className = "overview">{movie.overview}</p>

            <h3 key = {movie.id} className = "text-center movieTitle">{movie.overview}</h3>

        </div>)

        return (

            <div className = "headerContainer">
    
                <div className = "headerJumbotron">

                    <div className = "container">

                        <div className = "row">

                        <h3 className = "col-md-12 text-center">Search For Any Movie</h3>

                            <form onSubmit = {this.onSubmit} id = "searchForm">
    
                                <input className = "col-md-4 form-control" type = "text" id = "searchText" placeholder = "Search Movies..." ref = {input => this.input = input}/>
    
                            </form>

                            <div>

                                <ul>{movieList}</ul>

                            </div>

                        </div>

                    </div>
                    
                </div>
    
            </div>
    
        )
    }
}


export default Header