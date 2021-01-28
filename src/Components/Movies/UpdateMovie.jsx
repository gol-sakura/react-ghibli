import React, { useState, useEffect } from 'react';
import MovieService from "../../Services/MovieService";
import './UpdateMovie.css';
import { MDBContainer, MDBRow,MDBCardBody,  MDBCardHeader,MDBCard,MDBCardTitle, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';


const UpdateMovie = (props) => {
    const initialMovieState = {
        id: '',
        title: '',
        description: '',
        director: '',
        producer: '',
        release_Date: '',
        rate_Score: ''

    };

    const [currentMovie, setCurrentMovie] = useState(initialMovieState);
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);


    const getMovie = id => {
        MovieService.GetMovieById(id)
            .then(response => {
                setCurrentMovie(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getMovie(props.match.params.id);

    }, [props.match.params.id]);


    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentMovie({ ...currentMovie, [name]: value });
    };


    const updatePublished = status => {
        var data = {
            id: currentMovie.id,
            title: currentMovie.title,
            director: currentMovie.director,
            producer: currentMovie.producer,
            description: currentMovie.description,
            release_Date: currentMovie.release_Date,
            rate_Score: currentMovie.rate_Score
           
        };

        MovieService.Update(currentMovie.id, data)
            .then(response => {
                setCurrentMovie({ ...currentMovie});
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const UpdateMovie = () => {
        MovieService.Update(currentMovie.id, currentMovie)
            .then(response => {
                console.log(response.data);
                setMessage("Movie updated successfully!");
                setSubmitted(true);
            })

            .catch(e => {
                console.log(e);
            });
    };
    const DeleteMovie = () => {
        MovieService.Delete(currentMovie.id)
            .then(response => {
                console.log(response.data);
                props.history.push("/allmoviesdb");
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (

        <div className="one">
            <MDBContainer>
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                    <h3 className="my-3">
                        <MDBIcon icon="marker" /> Edit A Movie
                </h3>
                </MDBCardHeader>
                  {submitted ? (
                    <MDBContainer>
                    <div className="text-center koko" >
                        <MDBCard  style={{border: "2px" }}> 
                        <MDBCardBody>
                            <br />
                            <br />
                            <MDBCardTitle className="text-lg-center" style={{color: "black" }}> <strong>{message}</strong></MDBCardTitle>
                            <br />
                            <br />
                            <MDBBtn
                                href="/allmoviesdb"
                                color="secondary"
                                className="btn btn-warning btn-lg">
                                Back to Films 
                            </MDBBtn>
                         </MDBCardBody>
                         </MDBCard>
                    </div>
                    </MDBContainer>
                ) : (
                    
                <MDBRow>
                    <MDBCol md="12">
                        <form className="container">
                            <br />
                            <div>
                                {currentMovie ? (
                                    <div className="edit-form">

                                        <div className="black-text">
                                            <MDBInput label="Title" name="title" group type="text" validate error="wrong"
                                                success="right" value={currentMovie.title}
                                                onChange={handleInputChange} />
                                            <MDBInput label="Director" group name="director" type="text" validate error="wrong"
                                                success="right" value={currentMovie.director}
                                                onChange={handleInputChange} />
                                            <MDBInput label="Producer" group name="producer" type="text" validate error="wrong" success="right" value={currentMovie.producer}
                                                onChange={handleInputChange} />

                                            <MDBInput label="Release Date" group name="release_Date" type="text" validate error="wrong"
                                                success="right" value={currentMovie.release_Date}
                                                onChange={handleInputChange} />
                                            <MDBInput label="Rate Score" group name="rate_Score" type="text" validate error="wrong"
                                                success="right" value={currentMovie.rate_Score}
                                                onChange={handleInputChange} />
                                            <MDBInput type="textarea" rows="3" name="description" label="Description" validate error="wrong"
                                                success="right" value={currentMovie.description}
                                                onChange={handleInputChange} />
                                            <br />                    
                                        <MDBBtn size="lg" gradient="peach"  onClick={UpdateMovie}>
                                            Update
                                <MDBIcon far icon="edit" className="ml-1" />
                                        </MDBBtn>
                                        <MDBBtn size="lg" className="young-passion-gradient"  onClick={DeleteMovie} >
                                            Delete
                                <MDBIcon far icon="trash-alt" className="ml-1" />
                                        </MDBBtn>

                                        <MDBBtn
                                        size='lg'
                                        gradient="blue"
                                            color="blue"
                                            href='/allmoviesdb'><MDBIcon icon="arrow-circle-left" /> Back To Movie List</MDBBtn>
                                        <p>{message}</p>
                                        
                                    </div>
                                </div>
                                ) : (
                                        <div>
                                            <br />
                                            <p>Click Movie...</p>
                                        </div>
                                    )}
                            </div>
                       
                        </form>
                    </MDBCol>                  
                </MDBRow>
                )}
            </MDBContainer>
           
        </div>

    );
};

export default UpdateMovie;