
import './App.css';
import Navbar from './Components/Nav/Navbar';
import Landingpage from './Components/LandingPage/Landingpage';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieList from './Components/Movies/MovieList';
import AllMoviesDB from './Components/Movies/AllMoviesDB';
import CreateMovie from './Components/Movies/CreateMovie';
import UpdateMovie from './Components/Movies/UpdateMovie';

function App() {
  return (
    <div className="App">
   
      <Router>
      <Navbar />

          <Route exact path='/' component={Landingpage} />
           <Route  path='/landingpage' component={Landingpage} />
          <Route path='/movielist' component={MovieList} />
          <Route path='/allmoviesdb' component={AllMoviesDB} />
          <Route path='/createmovie' component={CreateMovie} />

          <Route path='/updatemovie/:id' component={UpdateMovie} />
          </Router>
          {/* <Landingpage/> */}
          <Footer/>
    </div>
  );
}

export default App;
