import React from "react";
import logo from "../../asstets/images/mac_logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  //   const logoutHandler = () => {
  //     window.localStorage.removeItem("user", username);
  //     Navigate("/");
  //   };
  const navigate = useNavigate();

  const logoutHandle = () => {
    window.localStorage.removeItem("user");
    navigate("/");
    navigate(0);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            {" "}
            <img src={logo} width="60px" className="me-2" alt="" /> Dashboard -
            Live{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#"></a> */}
                <Link onClick={logoutHandle} className="btn bg-transparent">
                  <i className="fa-solid fa-right-to-bracket me-2"></i> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
