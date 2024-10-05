import { Route, Routes } from "react-router-dom";

import Navbar from "./navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Movies from "./pages/movies";
import TvShows from "./pages/tv-shows";
import Contacts from "./pages/contacts";
import TopMovies from "./pages/movies/top-movies";
import Blogs from "./pages/blogs";
import BlogDetails from "./pages/blogs/blog-details";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies />}>
          <Route path="top-movies" element={<TopMovies />} />
        </Route>
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blogs" element={<Blogs />}>
          <Route path=":blogId" element={<BlogDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
