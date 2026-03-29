import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import loupe from "../assets/loupe.png";

export default function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      navigate(`/liste-artisans?search=${encodeURIComponent(search)}`);
      setSearch(""); 
    }
  };

  return (
    <header>
      <div className="container">
        <div className="header-top">

          {/* GAUCHE */}
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>

          {/* DROITE */}
          <div className="right-header">

            {/* Recherche */}
            <div className="search">
              <input
                type="text"
                placeholder="Rechercher"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleSearch}
                aria-label="Rechercher un artisan"
              />
              <img src={loupe} alt="search" className="loupe" />
            </div>

            {/* MENU */}
            <nav>
              <ul className="menu">
                <li>
                  <Link to="/liste-artisans?cat=Bâtiment">Bâtiment</Link>
                </li>

                <li>
                  <Link to="/liste-artisans?cat=Services">Services</Link>
                </li>

                <li>
                  <Link to="/liste-artisans?cat=Fabrication">Fabrication</Link>
                </li>

                <li>
                  <Link to="/liste-artisans?cat=Alimentation">Alimentation</Link>
                </li>
              </ul>
            </nav>

          </div>

        </div>
      </div>
    </header>
  );
}