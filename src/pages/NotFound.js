import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../styles/NotFound.css";
import notfoundImg from "../assets/404.png";

function NotFound() {
  return (
    <div>
      <Helmet>
        <title>404 - Page non trouvée</title>
        <meta
          name="description"
          content="La page que vous recherchez n'existe pas."
        />
      </Helmet>

      <Header />

      <main className="notfound-container">
        <h1 className="notfound-title">404</h1>
        <p>Page non trouvée</p>

        <img src={notfoundImg} alt="404" className="notfound-image" />

        <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>

        <Link to="/" className="notfound-button">
          Retour à l'accueil
        </Link>
      </main>

      <Footer />
    </div>
  );
}

export default NotFound;