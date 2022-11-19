import React from 'react';
import axios from 'axios';

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null
        };
    }

    componentDidMount(){
        axios.get('https://myfaveflixes.herokuapp.com/movies')
        .then(response => {
            this.setState({
                movies: response.data
            });
        })
        .catch(error =>{
            console.log(error);
        });
    }

setSelectedMovie(movie) {
    this.setState({
        selectedMovie: movie
    });
}

//Function updates 'user' property in state to particular user if logged in properly
onLoggedIn(user) {
    this.setState({
        user
    });
}

    render() {
        const { movies, selectedMovie, user } = this.state;

        /* If there is no user, the LoginView is rendered. If there is a user logged in, 
        the user details are *passed as a prop to the LoginView*/
        if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

        //if ( selectedMovie ) return <MovieView movie={selectedMovie} />;
            
        if(movies.length === 0) return <div className="main-view" />;
    
        return (
            <div className="main-view">
            {selectedMovie  
                ? (
               <Row className="justify-content-md-center">
                  <Col md={8}> 
                    <MovieView
                   movie={selectedMovie}
                   onBackClick={newSelectedMovie => {
                     this.setSelectedMovie(newSelectedMovie);
                   }}/>
                   </Col>
                </Row>
                )
                : (
                    <Row className="justify-content-md-center">
                    {movies.map(movie => (
                   <MovieCard
                     key={movie._id}
                     movie={movie}
                     onMovieClick={(newSelectedMovie) => {
                       this.setSelectedMovie(newSelectedMovie); }}/>
                     ))}
                    </Row>
                    )
                 }
             </div>
        );
    }

}

export default MainView;
