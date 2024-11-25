
export const Future = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Coming Soon</h1>
        <p style={styles.message}>
          This service will be available in the future. Stay tuned for updates!
        </p>
        <p style={styles.submessage}>We’re working hard to bring you the best experience possible.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  content: {
    maxWidth: "600px",
    padding: "20px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#00c8ff",
  },
  message: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#e0e0e0",
  },
  submessage: {
    fontSize: "16px",
    color: "#aaaaaa",
    marginTop: "10px",
  },
};

export default Future;
