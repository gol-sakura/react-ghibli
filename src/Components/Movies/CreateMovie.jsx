import React, { useState } from "react";
import MovieService from '../../Services/MovieService';
import { MDBContainer, MDBRow, MDBCardHeader, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import './CreateMovie.css'
import {Link} from 'react-router-dom'

const CreateMovie = () => {
    const initialMovieState = {
        id: null,
        titel: '',
        description: '',
        director: '',
        release_Date: '',
        producer: '',
        rate_Score: '',
        published: false
    };

    const [movie, setMovie] = useState(initialMovieState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setMovie({ ...movie, [name]: value });
    };

    const saveMovie = () => {
        var data = {
            
            title: movie.title,
            description: movie.description,
            director: movie.director,
            release_Date: movie.release_Date,
            producer: movie.producer,
            rate_Score: movie.rate_Score
        };

        MovieService.Create(data)
            .then(response => {
                setMovie({
                    id: response.data.id,
                    title: response.data.title,
                    description: response.data.description,
                    director: response.data.director,
                    release_Date: response.data.release_Date,
                    producer: response.data.producer,
                    rate_Score: response.data.rate_Score
                });

                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newMovie = () => {
        setMovie(initialMovieState);
        setSubmitted(false);
    };

    return (
        <div className="mag">
            {submitted ? (
                    <div  className="koko">
                        <br/>
                        <h4>You Submitted Successfully!</h4>
                        <br/>
                        <button className="btn btn-success btn-lg button-design"  onClick={newMovie}>Add Movie</button>
                        
                        <Link 
                            className="btn btn-warning btn-lg  mr-2 button-design"
                            to='/allmoviesdb' >Back To Movies</Link>
                    </div>
                ) : (

            <MDBContainer>
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                    <h3 className="my-3">
                        <MDBIcon icon="film" /> Add A Movie
                </h3>
                </MDBCardHeader>
                <MDBRow>
                    <MDBCol md="12">
                        <form>
                            <br />
                            <div className="white-text">
                                
                                <MDBInput label="Title"  group type="text"  name="title" validate error="wrong"
                                    success="right" className="white-text" valueDefault={movie.title}
                                    onChange={handleInputChange} />

                                <MDBInput label="Director" group type="text" name="director" validate error="wrong"
                                    success="right" className="white-text" valueDefault={movie.director}
                                    onChange={handleInputChange} />
                                <MDBInput label="Producer" group type="text" name="producer" validate error="wrong"
                                    success="right" className="white-text" valueDefault={movie.producer}
                                    onChange={handleInputChange} />

                                <MDBInput label="Release Date" group type="text" name="release_Date" validate error="wrong"
                                    success="right" className="white-text" valueDefault={movie.release_Date}
                                    onChange={handleInputChange} />
                                <MDBInput label="Rate Score" group type="text" name="rate_Score" validate error="wrong"
                                    success="right" className="white-text" valueDefault={movie.rate_Score}
                                    onChange={handleInputChange} />
                                <MDBInput type="textarea" rows="2" label="Description" name="description" validate error="wrong"
                                    success="right" className="white-text" valueDefault={movie.description}
                                    onChange={handleInputChange} />
                            </div>
                            <div className="text-center">
                                <MDBBtn size="lg" gradient="purple" color="secondary" onClick={saveMovie}>
                                <MDBIcon far icon="plus-square" /> {" "} Create
                                
                                
                                </MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
             )}
        </div>
    )
}
export default CreateMovie;