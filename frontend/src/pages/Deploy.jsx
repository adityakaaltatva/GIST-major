// eslint-disable-next-line no-unused-vars
import { FaCubes, FaGithub, FaLeaf } from "react-icons/fa";
import { SiMongodb, SiMysql, SiPostgresql, SiRedis } from "react-icons/si";

const Deploy = () => {
  const handleRedirect = (path) => {
    window.location.href = path;
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🚀 New Project</h1>
        <p style={styles.subtitle}>
          <span style={styles.gradientText}>
           Gist Deploys your app to production effortlessly
          </span>
        </p>
      </div>
      <div style={styles.options}>
        <p style={styles.question}>What can we help with?</p>
        <div style={styles.cardsContainer}>
          <button
            style={styles.card}
            onClick={() => handleRedirect("/deploy-git")}
          >
            <FaGithub size={32} style={styles.icon} />
            Deploy from GitHub Repo
          </button>
          <button style={styles.card} onClick={() => handleRedirect("/future")}>
            <FaCubes size={32} style={styles.icon} />
            Deploy a Template
          </button>
          <button style={styles.card} onClick={() => handleRedirect("/future")}>
            <SiPostgresql size={32} style={styles.icon} />
            Deploy PostgreSQL
          </button>
          <button style={styles.card} onClick={() => handleRedirect("/redis")}>
            <SiRedis size={32} style={styles.icon} />
            Deploy Redis
          </button>
          <button style={styles.card} onClick={() => handleRedirect("/future")}>
            <SiMongodb size={32} style={styles.icon} />
            Deploy MongoDB
          </button>
          <button style={styles.card} onClick={() => handleRedirect("/future")}>
            <SiMysql size={32} style={styles.icon} />
            Deploy MySQL
          </button>
          <button style={styles.card} onClick={() => handleRedirect("/future")}>
            <FaLeaf size={32} style={styles.icon} />
            Empty Project
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    background: "linear-gradient(135deg, #1f1f1f, #272727)",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Poppins', sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "42px",
    fontWeight: "bold",
    margin: "0",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "18px",
    color: "#aaaaaa",
    margin: "10px 0 0 0",
  },
  gradientText: {
    background: "linear-gradient(to right, #ff7e5f, #feb47b)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontWeight: "bold",
  },
  options: {
    width: "100%",
    maxWidth: "600px",
    textAlign: "center",
  },
  question: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#e0e0e0",
  },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#333333",
    color: "#ffffff",
    padding: "15px",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    cursor: "pointer",
    border: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.2s, box-shadow 0.3s",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.4)",
  },
  icon: {
    marginBottom: "5px",
    color: "#ff7e5f",
  },
};

export default Deploy;
