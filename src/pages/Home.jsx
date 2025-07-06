import "./content.css";

function Home() {
  return (
    <div className="container">
      <h3> Contents</h3>
      <div className="dotted-link-container">
        <div className="dotted-link-item">
          <span className="dotted-link-text">0.1 Basic Setup</span>
          <span className="dotted-line" />
          <a href="/001" className="dotted-link">
            Link
          </a>
        </div>
        {/* Add more items as needed */}
      </div>
    </div>
  );
}

export default Home;
