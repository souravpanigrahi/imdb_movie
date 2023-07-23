import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import MovieList from "./components/move-list/movielist";
import Movie from "./pages/moviedetail/moviedetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="movie/:id" element={<Movie></Movie>}></Route>
          <Route path="movies/:type" element={<MovieList></MovieList>}></Route>
          <Route path="/*" element={<h1>Error</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
