import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#43978d] flex justify-center items-center px-[30px] h-[80px] gap-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/tv-shows">TV-Shows</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
    </div>
  );
};

export default Navbar;
