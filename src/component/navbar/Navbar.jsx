import React from "react";
import Button from "../../component/button/Button";
import Logo from "../../assets/images/netflix.svg.svg";
import { IoLanguageOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const isHomePage = location.pathname === "/home";

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logoimg">
        <img src={Logo} alt="netflix logo" />
      </div>
      
      {isLandingPage && (
        <div className="navbar-signin">  
        <IoLanguageOutline className="languageicon" />
          <div className="language-select">
            <select name="language" id="language">
              <option value="english" className="options">English</option>
              <option value="hindi" className="options">हिंदी</option>
            </select>
          </div>
        <IoMdArrowDropdown className="downarrow"/>
          <Button
            className='signinland'
            size="small"
            round="round"
            color="white"
            background="bg-1"
            value="Sign In"
            style={{ height: "50px", width: "330px" }}
            onclick={() => navigate("signin")}
          />
        </div>
      )}

      {isHomePage && (
        <div className="nav">
          <ul>
            <Link to="/home" className="link">
              Home
            </Link>
            <Link to="/mylist" className="link">
              My List
            </Link>
            <Link to="/search" className="link">
              Search
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;