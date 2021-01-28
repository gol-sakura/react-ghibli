import http from '../http-common';


const GetAll = () => {
    return http.get('/Film');
}
const GetFilmById = (id) => {
    return http.get(`/Film/${id}`);
}
// data from Database 
const GetAllMoviesFromDB = () => {
    return http.get('/Movie');
}
const GetMovieById = id => {
    return http.get(`/Movie/${id}`);
}
const Create = data => {
    return http.post('/Movie', data);
}

const Update = (id, data) => {
    return http.put(`/Movie/${id}`, data)
}

const Delete = (id) => {
    return http.delete(`/Movie/${id}`);
}

export default {
    GetAll,
    GetFilmById,
    GetAllMoviesFromDB,
    GetMovieById,
    Create,
    Update,
    Delete


}