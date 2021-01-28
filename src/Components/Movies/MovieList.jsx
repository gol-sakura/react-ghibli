import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBTooltip,
  MDBCardFooter,
  MDBRow,
  MDBIcon,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBBadge,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import MovieService from "../../Services/MovieService";

import "./MovieList.css";


const MovieList = () => {
  const [films, setFilms] = useState([]);
  

  useEffect(() => {
    GetFilms();
   

  }, []);

 

  


  const GetFilms = () => {
    MovieService.GetAll()
      .then((response) => {
        setFilms(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="hello move">
     
        {
          
          <MDBRow>
            {films &&
              films.map((film) => (
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                  <MDBCard cascade narrow>
                    <MDBCardImage
                      cascade
                      src="https://images.hdqwalls.com/wallpapers/anime-city-hd-zt.jpg"
                      waves
                      top
                      alt="sample photo"
                      overlay="white-slight"
                    />
                    <MDBCardBody cascade className="text-center">
                      <MDBCardTitle>
                        <strong>
                          <h5>{film.title}</h5>
                        </strong>
                      </MDBCardTitle>
                      <h6>
                        <MDBBadge color="grey darken-3">Release Date</MDBBadge>{" "}
                        <MDBBadge tag="a" color="morpheus-den-gradient">
                          {" "}
                          {film.release_Date}{" "}
                        </MDBBadge>
                      </h6>
                      <MDBCardText>
                        <MDBBadge color="grey darken-3">Director</MDBBadge>{" "}
                        <MDBBadge color="purple lighten-1">
                          {" "}
                          {film.director}
                        </MDBBadge>
                      </MDBCardText>
                      <MDBCardText>{film.description}</MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                  <MDBCardFooter
                    className="boo"
                    color="elegant-color"
                    style={{ color: "white" }}
                  >
                    <MDBBadge color="grey darken-3">Rate</MDBBadge>{" "}
                    {film.rate_Score}{" "}
                    <MDBBadge color="yellow darken-3">
                      <MDBIcon icon="star"></MDBIcon>{" "}
                    </MDBBadge>

                    <MDBCardText>
                      <MDBBadge color="grey darken-3">Producer</MDBBadge>{" "}
                      <MDBBadge tag="a" color="blue-gradient">

                        {film.producer}
                      </MDBBadge>
                    </MDBCardText>

                  </MDBCardFooter>
                </MDBCol>
              ))}
              
          </MDBRow>
        }
    
    </div>
  );
};

export default MovieList;
