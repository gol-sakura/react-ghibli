import React, { useState, useEffect } from "react";
import MovieService from "../../Services/MovieService";
import "./AllMoviesDB.css";
import {
  MDBContainer,
  MDBRow,
  MDBBadge,
  MDBBtn,
  MDBCardHeader,
  MDBCard,
  MDBCardFooter,
  MDBIcon,
  MDBCardBody,
  MDBLink,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBCardGroup,
} from "mdbreact";
import { Link } from "react-router-dom";

const AllMoviesDB = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retriveMovies();
  }, []);

  const retriveMovies = () => {
    MovieService.GetAllMoviesFromDB()
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retriveMovies();
    setCurrentMovie(null);
    setCurrentIndex(-1);
  };

  const setActiveMovie = (movie, index) => {
    setCurrentMovie(movie);
    setCurrentIndex(index);
  };

  const removeMovie = () => {
    MovieService.Delete()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="hello">
      <br />
      <br />
      <br />
      <MDBContainer>
        <br />
        <br />
        <br />
        {movies &&
          movies.map((movie, index) => (
            <MDBCol style={{ maxWidth: "100rem" }} size="12" lg="3" md="6" className="mb-lg-0 mb-4">
              <MDBCard
                className={
                  "card-group-item " + (index === currentIndex ? "active" : " ")
                }
                onClick={() => setActiveMovie(movie, index)}
                key={index}
              >
                <MDBCardImage
                  alt="fluid"
                  className="img-fluid"
                  src="https://images.hdqwalls.com/wallpapers/anime-city-hd-zt.jpg"
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle style={{ color: "black" }}>
                    {movie.title}
                  </MDBCardTitle>
                  <MDBBadge color="grey darken-3">Release Date</MDBBadge>{" "}
                  <MDBBadge tag="a" color="morpheus-den-gradient">
                    {" "}
                    {movie.release_Date}{" "}
                  </MDBBadge>
                  <MDBCardText>{movie.description}</MDBCardText>
                  <MDBCardText>
                    <MDBBadge color="grey darken-3">Director</MDBBadge>{" "}
                    <MDBBadge tag="a" color="purple lighten-1">
                      {" "}
                      {movie.director}
                    </MDBBadge>
                  </MDBCardText>
                  <MDBCardText>
                    <MDBBadge color="grey darken-3">Producer</MDBBadge>{" "}
                    <MDBBadge tag="a" color="tempting-azure-gradient">
                      {" "}
                      {movie.producer}
                    </MDBBadge>
                  </MDBCardText>
                  <Link
                    to={["/updatemovie/"] + movie.id}
                    className="btn  sunny-morning-gradient"
                  >
                    Edit
                  </Link>
                </MDBCardBody>
                <MDBCardFooter
                  color="#616161 grey darken-2"
                  className="white-text mdb-color three"
                >
                  <MDBBadge color="grey darken-3">
                    {" "}
                    <MDBIcon icon="star"></MDBIcon> Rate
                  </MDBBadge>{" "}
                  {movie.rate_Score}
                </MDBCardFooter>
              </MDBCard>
              <br />
              <br />
              <br />
            </MDBCol>
          ))}
      </MDBContainer>
    </div>
  );
};

export default AllMoviesDB;
