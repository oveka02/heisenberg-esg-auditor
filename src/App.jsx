import './App.css';
function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <h2>HEISENBERG</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#about">About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <p className="small-title">AI-POWERED ESG VERIFICATION</p>

        <h1>
          Corporate Sustainable
          <br />
          Procurement Auditor
        </h1>

        <p className="description">
          Automate vendor ESG document verification, detect fake certificates,
          and generate intelligent compliance scores.
        </p>

        <button>Start ESG Audit</button>
      </section>

      {/* Features */}
      <section className="section">
        <p className="section-label">OUR PLATFORM</p>

        <h2>Smarter ESG Compliance</h2>

        <div className="cards">
          <div className="card">
            <div className="icon">✓</div>
            <h3>Vendor Verification</h3>
            <p>
              Verify vendor ESG documents and compliance information quickly.
            </p>
          </div>

          <div className="card">
            <div className="icon">◈</div>
            <h3>Fake Certificate Detection</h3>
            <p>
              Identify suspicious, forged, or tampered ESG certificates.
            </p>
          </div>

          <div className="card">
            <div className="icon">★</div>
            <h3>ESG Compliance Score</h3>
            <p>
              Generate an automated score to support procurement decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section id="dashboard" className="dashboard">
        <p className="section-label">DASHBOARD</p>

        <h2>ESG Audit Overview</h2>

        <div className="stats">
          <div className="stat">
            <h3>128</h3>
            <p>Vendors Audited</p>
          </div>

          <div className="stat">
            <h3>94%</h3>
            <p>Compliance Rate</p>
          </div>

          <div className="stat">
            <h3>17</h3>
            <p>Documents Flagged</p>
          </div>

          <div className="stat">
            <h3>86.4</h3>
            <p>Average ESG Score</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <p className="section-label">ABOUT HEISENBERG</p>

        <h2>Procurement with Confidence</h2>

        <p>
          HEISENBERG combines document analysis, OCR, rule-based validation,
          and AI-assisted verification to help organizations make reliable
          sustainable procurement decisions.
        </p>
      </section>

      {/* Footer */}
      <footer>
        <h3>HEISENBERG</h3>
        <p>Corporate Sustainable Procurement Auditor</p>
        <p>© 2026 HEISENBERG. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;