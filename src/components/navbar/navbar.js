import react from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleToolNavigation = () => {
    navigate("/dashboard");
  };

  const handleHomeNavigation = () => {
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="navbar__title" onClick={handleHomeNavigation}>
        Wiseburbs
      </div>
      <div className="navbar__item">Suburbs Data</div>
      <div className="navbar__item">How-To videos</div>
      <div className="navbar__item" onClick={handleToolNavigation}>
        Tools
      </div>
      <div className="navbar__item">Suburb Reports</div>
      <div className="navbar__item">My Account</div>
    </header>
  );
};

export default Navbar;
