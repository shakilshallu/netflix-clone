import React from "react";
import "./footer.css";
import { Link, useLocation } from "react-router-dom";

const Data = [
  { name: "FAQ", href: "" },
  { name: "Help Center", href: "" },
  { name: "Account", href: "" },
  { name: "Media Center", href: "" },
  { name: "Investor Relations", href: "" },
  { name: "Jobs", href: "" },
  { name: "Ways to Watch", href: "" },
  { name: "Terms of Use", href: "" },
  { name: "Privacy", href: "" },
  { name: "Cookie Preferences", href: "" },
  { name: "Corporate Information", href: "" },
  { name: "Contact Us", href: "" },
  { name: "Speed Test", href: "" },
  { name: "Legal Notices", href: "" },
  { name: "Only on Netflix", href: "" },
];

const SignInData = [
  { name: "FAQ", href: "" },
  { name: "Help Center", href: "" },
  { name: "Account", href: "" },
  { name: "Media Center", href: "" },
  { name: "Investor Relations", href: "" },
  { name: "Jobs", href: "" },
];

const Footer = () => {
  const location = useLocation();

  const isSignInPage = location.pathname === "/signin";
  const displayedData = isSignInPage ? SignInData : Data;
  const displayNetflixIndia = !isSignInPage;

  return (
    <>
      <div className="footer">
        <p className="para">
          Questions? Call
          <a href="hv">000-800-919-1694</a>
        </p>
        <div className="footer-content">
          {displayedData.map((item) => (
            <Link to={item.href} key={item.name}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="selection">
          <div className="language-select1">
            <select name="language" id="language">
              <option value="english">English</option>
              <option value="hindi">हिंदी</option>
            </select>
          </div>
          {displayNetflixIndia && <p className="py">Netflix India</p>}
        </div>
      </div>
    </>
  );
};

export default Footer;