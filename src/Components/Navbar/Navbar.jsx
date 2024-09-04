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
      <div className='lg:w-[90%] mx-auto lg:flex lg:flex-wrap lg:justify-between lg:items-center'>
        <div className='logo'>
          <NavLink to="/"> 
            <img src={logo} alt="" className='text-center m-auto' />
          </NavLink>
        </div>

        <div className='navlink text-center'>
          <ul className='lg:flex lg:flex-wrap lg:justify-between lg:items-center'>
            {token ? (
              <>
                <li className='mt-4 lg:ml-4'>
                  <NavLink to="/">Product</NavLink>
                </li>
                <li className='mt-4 lg:ml-4'>
                  <NavLink to="/Brands">Brand</NavLink>
                </li>
                <li className='mt-4 lg:ml-4'>
                  <NavLink to="/Category">Category</NavLink>
                </li>
                <li className='mt-4 lg:ml-4'>
                  <NavLink to="/allorders">All Orders</NavLink>
                </li>
                <li className='mt-4 lg:ml-4 relative'>
                  <NavLink to="/cart">Cart
                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-4 -end-4 dark:border-gray-900">
                      {numofitems}
                    </div>
                  </NavLink>
                </li>
              </>
            ) : ("")}
          </ul>
        </div>

        <div className='social text-center lg:flex lg:flex-wrap lg:justify-between lg:items-center'>
          <div className='mt-4'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className='fa-brands lg:ml-3 fa-facebook-f'></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className='fa-brands lg:ml-3 fa-instagram'></i>
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <i className='fa-brands lg:ml-3 fa-google'></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className='fa-brands lg:ml-3 fa-twitter'></i>
            </a>
          </div>

          <div className='mt-4'>
            {token ? (
              <button onClick={logout} className='ml-5'>Logout</button>
            ) : (
              <>
                <NavLink className="lg:ml-5 " to="/Login">Login</NavLink>
                <NavLink className="ml-5 " to="/Register">Register</NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
