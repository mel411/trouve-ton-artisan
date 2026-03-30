import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import artisans from "../data/artisans";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/ListeArtisans.scss";
import { Helmet } from "react-helmet";

function ListeArtisans() {
  const location = useLocation();

  // Categorie depuis URL
  const params = new URLSearchParams(location.search);
  const category = params.get("cat");
  const searchParam = params.get("search") || "";
  const [search, setSearch] = useState(searchParam);

  // filtre les artisans selon catégorie et recherche
  const filteredArtisans = artisans.filter((a) => {
    const normalize = (str) =>
      str?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const matchesCategory = category
      ? normalize(a.category) === normalize(category)
      : true;

    const matchesSearch =
      normalize(a.name).includes(normalize(search)) ||
      normalize(a.job).includes(normalize(search)) ||
      normalize(a.city).includes(normalize(search));

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <Helmet>
        <title>Liste des artisans</title>
        <meta name="description" content="Découvrez les artisans par catégorie." />
      </Helmet>

      <Header />

      <div className="container mt-4">
        <main className="liste-container">

          {/* TITRE */}
          <div className="title-block blue">
            <h2>Nos artisans</h2>
          </div>

          {/* CATEGORIE */}
          <p className="category-text">
            <strong>Catégorie :</strong> {category || "Toutes"}
          </p>

          {/* RECHERCHE */}
          <input
            className="form-control search-input"
            type="text"
            placeholder="Rechercher un artisan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* CARDS */}
          <div className="cards">
            {filteredArtisans.map((artisan) => (
              <Card
                key={artisan.id}
                id={artisan.id}
                name={artisan.name}
                job={artisan.job}
                city={artisan.city}
                rating={artisan.rating}
              />
            ))}
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}

export default ListeArtisans;