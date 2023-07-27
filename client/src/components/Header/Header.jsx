import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  // {
  //   display: "About",
  //   url: "#",
  // },

  {
    display: "Courses",
    url: "/courses",
  },
  {
    display: "Logout",
    url: "/login",
  },
  // {
  //   display: "Blog",
  //   url: "#",
  // },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
            <img src="https://static.wixstatic.com/media/1dd121_b983359cada04e6cb9b14506edf0da3b~mv2.png/v1/fill/w_275,h_148,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Main%20Logo.png" alt="Logo" />
              {/* <i class="ri-pantone-line"></i> CANASU */}
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-phone-line"></i> 089700 00808
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
