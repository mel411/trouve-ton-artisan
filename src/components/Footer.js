function Footer() {
  return (
    <footer style={{ background: "#1f6fb2", color: "white", padding: "30px", marginTop: "40px" }}>
      <h3>Lyon</h3>
      <p>101 cours Charlemagne</p>
      <p>CS 20033</p>
      <p>69269 LYON CEDEX 02</p>
      <p>France</p>
      <p>+33 (0)4 26 73 40 00</p>

      <hr style={{ margin: "20px 0", borderColor: "white" }} />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        <p>Mentions légales</p>
        <p>Données personnelles</p>
        <p>Accessibilité</p>
        <p>Cookies</p>
      </div>

      <p style={{ marginTop: "10px" }}>Politique des cookies</p>
      <p>Gestion des cookies</p>
    </footer>
  );
}

export default Footer;