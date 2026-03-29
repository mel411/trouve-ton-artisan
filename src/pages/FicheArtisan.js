import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import artisans from "../data/artisans";
import "../styles/FicheArtisan.css";
import { Helmet } from "react-helmet";
import { Navigate } from "react-router-dom";

function FicheArtisan() {
  const { id } = useParams();

  // trouve ton artisan
  const artisan = artisans.find((a) => a.id === parseInt(id));

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          subject,
          message,
        }),
      });

      if (res.ok) {
        alert("Message envoyé !");
        setName("");
        setSubject("");
        setMessage("");
      } else {
        alert("Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur serveur");
    }
  };

  // si artisan non trouvé, redirige vers 404
  if (!artisan) {
    return <Navigate to="/nonfound" />;
  }

  return (
    <div>
      <Helmet>
        <title>{artisan.name}</title>
        <meta name="description" content={`Contactez ${artisan.name}, ${artisan.job} à ${artisan.city}.`} />
      </Helmet>
      
      <Header />

      <div className="container">
        <main className="fiche">

          {/* TOP BLOCK */}
          <div className="fiche-top">

            {/* Gauche */}
            <div className="fiche-left">
              <div className="title-block blue">
                <h2>{artisan.name}</h2>
              </div>

              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={star <= artisan.rating ? "star filled" : "star empty"}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p>{artisan.job}</p>
              <p>{artisan.city}</p>

              <p>
                Site web :{" "}
                <a
                  href={`https://www.${artisan.name.replace(" ", "").toLowerCase()}.fr`}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  www.{artisan.name.replace(" ", "").toLowerCase()}.fr
                </a>
              </p>
            </div>

            {/* Droite */}
            <div className="fiche-right">
              <h3>Contacter cet artisan</h3>

              <form className="form fiche-form" onSubmit={handleSubmit}>
                <label>Nom:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <label>Objet:</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />

                <label>Message:</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />

                <button type="submit">Envoyer</button>
              </form>
            </div>

          </div>

          {/* À propos */}
          <section className="fiche-about">
            <div className="title-block green">
              <h3>À propos</h3>
            </div>

            <p>
              Artisan professionnel spécialisé en {artisan.job.toLowerCase()} basé à {artisan.city}.
            </p>
          </section>

        </main>
      </div>

      <Footer />
    </div>
  );
}

export default FicheArtisan;
