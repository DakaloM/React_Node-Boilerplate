import React, { useState } from 'react';
import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Login from '../login/Login';
import Profile from '../profile/Profile';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [openSubMenu, setOpenSubMenu] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [openProfilePage, setOpenProfilePage] = useState(false);

    const handleLoginOpen = () => {
        setPopupOpen(true);
        setOpenSubMenu(false);
    }

    const handleProfileOpen = () => {
        setOpenProfilePage(true);
        setOpenSubMenu(false);
    }
  return (
    <div className='navbar'>
        <div className="container">
            <div className="left">
                <Link className='routerLink' to="/">
                    <div className="logo">
                        <h1 className='first'>Fu</h1>
                        <h1>tWe</h1>
                        <h1 className='last'>ar</h1>
                    </div>
                </Link>
            </div>
            <div className="center">
                <div className="search">
                    <input type="text" placeholder='search' />
                    <SearchOutlinedIcon className='icon'/>
                </div>
            </div>
            <div className="right">
                <div className="menu">
                    <ul>
                        <Link className='routerLink' to="/">
                            <li>Home</li>
                        </Link>
                        <Link className='routerLink'to="/products">
                            <li>Products</li>
                        </Link>

                        <Link className='routerLink' to="/cart">
                            <li>
                                <ShoppingCartOutlinedIcon className='icon'/>
                                <span>2</span>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="profile">
                    
                    <img src="https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="" onClick={handleProfileOpen}/>
                    <span onClick={(e) => setOpenSubMenu(!openSubMenu)}>
                        <KeyboardArrowDownOutlinedIcon className="icon" />
                    </span>
                </div>

                {openSubMenu && (
                    <div className="extra-menu">
                        <ul>
                            <li onClick={handleLoginOpen}>Sign In</li>
                            <li>Sign out</li>
                            <li onClick={handleProfileOpen}>profile</li>
                        </ul>
                    </div>
                )}

            </div>

            {popupOpen && <Login setPopupOpen={setPopupOpen}/>}
            {openProfilePage && <Profile setOpenProfilePage={setOpenProfilePage}/>}
        </div>

       
    </div>
  )
}

export default Navbar