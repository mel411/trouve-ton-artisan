import { Link } from "react-router-dom";

function Card({ id, name, job, city, rating }) {
  return (
    <div className="card">
      <h4>{name}</h4>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? "star filled" : "star empty"}
          >
            ★
          </span>
        ))}
      </div>
      <p>{job}</p>
      <p>{city}</p>

      <Link to={`/fiche-artisan/${id}`} className="link">
        Voir plus
      </Link>
    </div>
  );
}

export default Card;