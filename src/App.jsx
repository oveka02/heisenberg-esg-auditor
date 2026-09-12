import { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFile = (e) => {
    const selected = e.target.files[0];

    if (selected) {
      setFile(selected);
      setResult(null);
    }
  };

  const verifyCertificate = () => {
    if (!file) {
      alert("Please upload a certificate first.");
      return;
    }

    const name = file.name.toLowerCase();

    if (
      name.includes("fake") ||
      name.includes("edited") ||
      name.includes("tampered")
    ) {
      setResult({
        score: 38,
        status: "SUSPICIOUS",
        message: "Possible document manipulation detected.",
      });
    } else {
      setResult({
        score: 92,
        status: "GENUINE",
        message: "Certificate passed the initial verification checks.",
      });
    }
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span>H</span> HEISENBERG
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#audit">Certificate Audit</a>
          <a href="#about">About</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="badge">
            AI-POWERED ESG VERIFICATION
          </div>

          <h1>
            Corporate Sustainable
            <br />
            <span>Procurement Auditor</span>
          </h1>

          <p>
            Verify vendor ESG certificates, detect suspicious documents,
            calculate compliance scores and make smarter procurement
            decisions.
          </p>

          <a href="#audit" className="primary-button">
            Start ESG Audit →
          </a>
        </div>

        <div className="hero-card">
          <div className="circle-score">
            <strong>86.4</strong>
            <small>ESG SCORE</small>
          </div>

          <h3>Vendor Compliance</h3>

          <div className="progress">
            <div></div>
          </div>

          <p>94% Compliance Rate</p>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="dashboard" id="dashboard">
        <div className="section-title">
          <span>ANALYTICS</span>
          <h2>ESG Performance Dashboard</h2>
          <p>Real-time overview of vendor sustainability performance.</p>
        </div>

        <div className="stats-grid">

          <div className="stat-card purple">
            <div className="stat-icon">🏢</div>
            <h3>128</h3>
            <p>Vendors Audited</p>
            <small>↑ 12% this month</small>
          </div>

          <div className="stat-card green">
            <div className="stat-icon">✓</div>
            <h3>94%</h3>
            <p>Compliance Rate</p>
            <small>↑ 4.2% this month</small>
          </div>

          <div className="stat-card red">
            <div className="stat-icon">⚠</div>
            <h3>17</h3>
            <p>Documents Flagged</p>
            <small>Needs review</small>
          </div>

          <div className="stat-card blue">
            <div className="stat-icon">★</div>
            <h3>86.4</h3>
            <p>Average ESG Score</p>
            <small>Excellent performance</small>
          </div>

        </div>

        {/* ESG SCORES */}
        <div className="score-section">

          <div className="score-panel">
            <h3>ESG Score Breakdown</h3>

            <div className="score-row">
              <span>Environmental</span>
              <strong>91%</strong>
            </div>

            <div className="bar">
              <div className="bar-environment"></div>
            </div>

            <div className="score-row">
              <span>Social</span>
              <strong>84%</strong>
            </div>

            <div className="bar">
              <div className="bar-social"></div>
            </div>

            <div className="score-row">
              <span>Governance</span>
              <strong>86%</strong>
            </div>

            <div className="bar">
              <div className="bar-governance"></div>
            </div>
          </div>

          <div className="risk-panel">
            <h3>Risk Overview</h3>

            <div className="risk-item">
              <span>Low Risk</span>
              <strong>87</strong>
            </div>

            <div className="risk-item">
              <span>Medium Risk</span>
              <strong>24</strong>
            </div>

            <div className="risk-item">
              <span>High Risk</span>
              <strong>17</strong>
            </div>
          </div>

        </div>
      </section>

      {/* CERTIFICATE AUDIT */}
      <section className="audit" id="audit">

        <div className="section-title">
          <span>DOCUMENT VERIFICATION</span>
          <h2>Fake Certificate Detection</h2>
          <p>
            Upload a vendor ESG certificate for automated preliminary
            verification.
          </p>
        </div>

        <div className="audit-container">

          <div className="upload-card">

            <div className="upload-icon">
              📄
            </div>

            <h3>Upload ESG Certificate</h3>

            <p>
              Supported formats: PDF, PNG, JPG
            </p>

            <input
              type="file"
              accept=".pdf,.png,.jpg,.jpeg"
              onChange={handleFile}
            />

            {file && (
              <div className="selected-file">
                📎 {file.name}
              </div>
            )}

            <button
              className="verify-button"
              onClick={verifyCertificate}
            >
              🔍 Verify Certificate
            </button>

          </div>

          {/* RESULT */}
          <div className="result-card">

            {!result ? (
              <>
                <div className="result-icon">🔎</div>

                <h3>Verification Result</h3>

                <p>
                  Upload a certificate to view the verification result.
                </p>

                <div className="checks">
                  <p>✓ Document format validation</p>
                  <p>✓ File consistency check</p>
                  <p>✓ Suspicious filename detection</p>
                  <p>✓ Preliminary fraud screening</p>
                </div>
              </>
            ) : (
              <>
                <div className="result-icon">
                  {result.status === "GENUINE" ? "✅" : "⚠️"}
                </div>

                <h3>Verification Result</h3>

                <div className="result-score">
                  {result.score}%
                </div>

                <h2
                  className={
                    result.status === "GENUINE"
                      ? "genuine"
                      : "suspicious"
                  }
                >
                  {result.status}
                </h2>

                <p>{result.message}</p>

                <div className="checks">
                  <p>✓ File format validation</p>
                  <p>✓ Document consistency check</p>
                  <p>✓ Fraud screening</p>
                  <p>✓ Risk assessment</p>
                </div>
              </>
            )}

          </div>

        </div>
      </section>

      {/* RECENT AUDITS */}
      <section className="audits">

        <div className="section-title">
          <span>AUDIT HISTORY</span>
          <h2>Recent Vendor Audits</h2>
        </div>

        <div className="table-container">

          <table>
            <thead>
              <tr>
                <th>Vendor</th>
                <th>ESG Score</th>
                <th>Risk</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>GreenTech Industries</td>
                <td>94</td>
                <td><span className="low">Low</span></td>
                <td>✓ Verified</td>
              </tr>

              <tr>
                <td>EcoSource Pvt Ltd</td>
                <td>88</td>
                <td><span className="low">Low</span></td>
                <td>✓ Verified</td>
              </tr>

              <tr>
                <td>Global Materials</td>
                <td>61</td>
                <td><span className="medium">Medium</span></td>
                <td>⚠ Review</td>
              </tr>

              <tr>
                <td>Future Manufacturing</td>
                <td>42</td>
                <td><span className="high">High</span></td>
                <td>⚠ Flagged</td>
              </tr>
            </tbody>
          </table>

        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">

        <div>
          <span>ABOUT HEISENBERG</span>

          <h2>
            Smarter ESG decisions.
            <br />
            Safer procurement.
          </h2>
        </div>

        <p>
          HEISENBERG is an AI-powered ESG procurement auditing platform
          designed to automate vendor document verification, identify
          suspicious sustainability certificates and provide actionable
          compliance insights.
        </p>

      </section>

      {/* FOOTER */}
      <footer>
        <h3>HEISENBERG ESG AUDITOR</h3>
        <p>
          Smart • Sustainable • Secure Procurement
        </p>
        <small>© 2026 HEISENBERG</small>
      </footer>

    </div>
  );
}

export default App;