import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { Helmet } from "react-helmet";
import artisans from "../data/artisans";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Trouve ton artisan - Accueil</title>
        <meta
          name="description"
          content="Trouvez rapidement un artisan qualifié selon votre besoin et votre localisation."
        />
      </Helmet>

      <Header />

      <div className="container">
        <main>

          {/* SECTION 1 */}
          <section>
            <div className="title-block blue">
              <h2>Comment trouver mon artisan ?</h2>
            </div>

            <div className="steps">
              <div className="step">
                <strong>1</strong>
                <p>Choisir la catégorie</p>
              </div>

              <div className="step">
                <strong>2</strong>
                <p>Choisir un artisan</p>
              </div>

              <div className="step">
                <strong>3</strong>
                <p>Le contacter</p>
              </div>

              <div className="step">
                <strong>4</strong>
                <p>Une réponse sous 48h</p>
              </div>
            </div>
          </section>

          {/* SECTION 2 */}
          <section>
            <div className="title-block green">
              <h2>Artisans du mois</h2>
            </div>

            <div className="cards">
              {artisans.slice(0, 3).map((artisan) => (
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
          </section>

        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Home;