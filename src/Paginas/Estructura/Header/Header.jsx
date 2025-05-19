import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ResponsiveMenu from "./ResponsiveMenu";
const Header = () => {
  const location = useLocation();
  const [show, setShow] = useState(true);
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [backgorundColor, setBackgorundColor] = useState(true);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShowResponsiveMenu(false);
        if (window.screenY > 200) {
          setShow(false);
        } else {
          setShow(true);
        }
      } else {
        // if scroll up show the navbar
        setShow(true);
        setShowResponsiveMenu(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };


  const cambiarColorNavBar = () => {
    let yPos = window.scrollY;

    if (yPos > 100) {
      setBackgorundColor("header-color");
    } else {
      if (location.pathname === "/") {
        setBackgorundColor("header");
      } else {
        setBackgorundColor("header");
      }
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined" && location.pathname.split("/")[1] !== "CalculadoraEmisiones") {
      window.addEventListener("scroll", controlNavbar);
      cambiarColorNavBar();
      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  useEffect(() => {
    setBackgorundColor("header");
  }, []);
  return (
    
    <header className={backgorundColor}>
      <div className="rect"></div>

      <div className="icono-menu">

        <button onClick={() => setShowResponsiveMenu(!showResponsiveMenu)}>MENÚ</button>
      </div>

      <div className="menu-container">
        <Link
          style={{ display: "flex", textDecoration: "none" }}
          to="/Quienes-Somos"
        >
          <button className="button">¿Quiénes Somos?</button>
        </Link>

        <Link
          style={{ display: "flex", textDecoration: "none" }}
          to="/Directorio"
        >
          <button className="button">Directorio</button>
        </Link>
        {/*<button className='button'>Artículos</button>*/}
        <Link
          style={{ display: "flex", textDecoration: "none" }}
          to="/Contacto"
        >
          
          <button className="button">Contacto</button>
        </Link>
      </div>

      {showResponsiveMenu ? (
        <ResponsiveMenu handler={setShowResponsiveMenu} />
      ) : null}
    </header>
  );
};

export default Header;
