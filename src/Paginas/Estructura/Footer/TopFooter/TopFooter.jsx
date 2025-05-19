import Sucursal from "./Sucursal";
import Data from "../../DataStructure.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalAvisoPrivacidad from "./ModalAvisoPrivacidad";

const TopFooter = () => {
  const [modal, setModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false); // Estado para mostrar el tooltip
  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer className="top-footer">

      {/* Contenedor del logo de GitHub */}
      <div
        className="github-container"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => window.open("https://github.com/mau-castro", "_blank")}
      >
        <img src="Assets/Logo/github-logo.png" alt="GitHub Logo" className="github-icon" />
        {showTooltip && (
          <div className="tooltip">
            Esta página fue desarrollada y desplegada por Ing. Luis Mauricio Castro Gutiérrez
          </div>
        )}
      </div>
    </footer>
  );
};

export default TopFooter;