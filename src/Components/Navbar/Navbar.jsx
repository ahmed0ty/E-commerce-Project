import React, { useContext } from 'react';
import logo from "../../assets/images/freshcart-logo.svg";
import { NavLink, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthContext';
import { cartcontext } from '../../Context/Cartcontext';

const Navbar = () => {
  const { token, setToken } = useContext(authContext);
  const { numofitems } = useContext(cartcontext);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("tkn");
    setToken(null);
    navigate("/Login");
  }

  return (
    <nav className='py-5 bg-slate-200'>
      <div className='lg:w-[90%] mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center'>
        {/* Logo Section */}
        <div className='logo mb-4 lg:mb-0'>
          <NavLink to="/"> 
            <img src={logo} alt="Logo" className='text-center m-auto' />
          </NavLink>
        </div>

        {/* Navigation Links Section */}
        <div className='navlink text-center'>
          <ul className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center'>
            {token ? (
              <>
                <li>
                  <NavLink to="/">Product</NavLink>
                </li>
                <li>
                  <NavLink to="/Brands">Brand</NavLink>
                </li>
                <li>
                  <NavLink to="/Category">Category</NavLink>
                </li>
                <li>
                  <NavLink to="/allorders">All Orders</NavLink>
                </li>
                <li className='relative'>
                  <NavLink to="/cart">Cart
                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-4 -end-4">
                      {numofitems}
                    </div>
                  </NavLink>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>

        {/* Social Icons and Auth Buttons Section */}
        <div className='social flex flex-col lg:flex-row items-center mt-4 lg:mt-0 space-y-4 lg:space-y-0 lg:space-x-4'>
          {/* Social Icons */}
          <div className='flex space-x-4'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className='fa-brands fa-facebook-f'></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className='fa-brands fa-instagram'></i>
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <i className='fa-brands fa-google'></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className='fa-brands fa-twitter'></i>
            </a>
          </div>

          {/* Auth Buttons */}
          <div>
            {token ? (
              <button onClick={logout} className='ml-5'>Logout</button>
            ) : (
              <>
                <NavLink className="ml-5" to="/Login">Login</NavLink>
                <NavLink className="ml-5" to="/Register">Register</NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
