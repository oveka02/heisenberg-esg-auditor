import { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [auditing, setAuditing] = useState(false);
  const [audited, setAudited] = useState(false);

  const [auditData, setAuditData] = useState({
    environment: 86,
    social: 78,
    governance: 91,
    confidence: 94,
    risk: "LOW",
  });

  const handleFile = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setAudited(false);
    }
  };

  const startAudit = () => {
    if (!file) {
      alert("Please upload a vendor document first.");
      return;
    }

    setAuditing(true);

    setTimeout(() => {
      setAuditing(false);
      setAudited(true);

      setAuditData({
        environment: 86,
        social: 78,
        governance: 91,
        confidence: 94,
        risk: "LOW",
      });
    }, 2000);
  };

  const compositeScore = Math.round(
    (auditData.environment +
      auditData.social +
      auditData.governance) /
      3
  );

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">
          <div className="brand-icon">H</div>
          <div>
            <h2>HEISENBERG</h2>
            <span>ESG AUDITOR</span>
          </div>
        </div>

        <div className="nav-links">
          <a href="#dashboard">Dashboard</a>
          <a href="#audit">Audit</a>
          <a href="#evidence">Evidence</a>
          <a href="#history">History</a>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          System Online
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="dashboard">
        <div className="hero-text">
          <p className="eyebrow">CORPORATE SUSTAINABLE PROCUREMENT</p>

          <h1>
            Vendor ESG
            <br />
            <span>Compliance Auditor</span>
          </h1>

          <p className="hero-description">
            AI-powered vendor document verification, ESG claim analysis,
            compliance scoring and evidence-based procurement intelligence.
          </p>

          <div className="hero-buttons">
            <a href="#audit" className="primary-btn">
              Start New Audit →
            </a>

            <a href="#dashboard" className="secondary-btn">
              View Dashboard
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-top">
            <span>LIVE AUDIT STATUS</span>
            <span className="live">● LIVE</span>
          </div>

          <div className="score-circle">
            <strong>{compositeScore}</strong>
            <span>/ 100</span>
          </div>

          <p>Composite ESG Score</p>

          <div className="mini-stats">
            <div>
              <b>{auditData.environment}</b>
              <span>Environment</span>
            </div>

            <div>
              <b>{auditData.social}</b>
              <span>Social</span>
            </div>

            <div>
              <b>{auditData.governance}</b>
              <span>Governance</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="section-heading">
          <p className="eyebrow">AUTOMATED VERIFICATION PIPELINE</p>
          <h2>From document to decision</h2>
        </div>

        <div className="process-grid">
          <ProcessCard number="01" title="Document Upload" text="Upload vendor certificates and reports." />
          <ProcessCard number="02" title="OCR Extraction" text="Extract text and document information." />
          <ProcessCard number="03" title="ESG Claims" text="Identify ESG claims using NLP." />
          <ProcessCard number="04" title="Rule Evaluation" text="Verify claims against compliance rules." />
          <ProcessCard number="05" title="ESG Scoring" text="Calculate Environment, Social and Governance scores." />
          <ProcessCard number="06" title="Risk Dashboard" text="Generate risk tier, alerts and audit evidence." />
        </div>
      </section>

      {/* AUDIT */}
      <section className="audit-section" id="audit">
        <div className="section-heading">
          <p className="eyebrow">NEW VENDOR AUDIT</p>
          <h2>Upload vendor evidence</h2>
          <p>
            Submit a certificate, ESG report or compliance document for
            automated verification.
          </p>
        </div>

        <div className="audit-container">

          <div className="upload-card">
            <div className="upload-icon">↑</div>

            <h3>
              {file ? file.name : "Upload Vendor Document"}
            </h3>

            <p>
              PDF, DOCX, JPG or PNG
            </p>

            <label className="upload-btn">
              Choose Document
              <input
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={handleFile}
              />
            </label>

            {file && (
              <div className="file-info">
                <span>✓</span>
                {file.name}
              </div>
            )}

            <button
              className="audit-btn"
              onClick={startAudit}
              disabled={auditing}
            >
              {auditing ? "Analyzing Document..." : "Run ESG Audit →"}
            </button>
          </div>

          <div className="pipeline-card">
            <h3>Audit Pipeline</h3>

            <PipelineStep
              number="01"
              title="OCR Text Extraction"
              active={auditing || audited}
            />

            <PipelineStep
              number="02"
              title="NLP ESG Claim Extraction"
              active={audited}
            />

            <PipelineStep
              number="03"
              title="Confidence Scoring"
              active={audited}
            />

            <PipelineStep
              number="04"
              title="Compliance Rule Evaluation"
              active={audited}
            />

            <PipelineStep
              number="05"
              title="E / S / G Weighted Scoring"
              active={audited}
            />
          </div>

        </div>
      </section>

      {/* RESULTS */}
      {audited && (
        <section className="results-section">
          <div className="section-heading">
            <p className="eyebrow">AUDIT RESULT</p>
            <h2>Vendor Compliance Analysis</h2>
          </div>

          <div className="results-grid">

            <ScoreCard
              title="Environment"
              score={auditData.environment}
              icon="E"
            />

            <ScoreCard
              title="Social"
              score={auditData.social}
              icon="S"
            />

            <ScoreCard
              title="Governance"
              score={auditData.governance}
              icon="G"
            />

            <div className="result-card">
              <span className="result-label">RISK TIER</span>
              <div className="risk-value">{auditData.risk}</div>
              <p>Based on current ESG evidence.</p>
            </div>

          </div>

          <div className="compliance-panel">
            <div>
              <span>COMPOSITE ESG SCORE</span>
              <strong>{compositeScore}/100</strong>
            </div>

            <div>
              <span>DOCUMENT CONFIDENCE</span>
              <strong>{auditData.confidence}%</strong>
            </div>

            <div>
              <span>CLAIMS VERIFIED</span>
              <strong>18 / 20</strong>
            </div>

            <div>
              <span>EXPIRY STATUS</span>
              <strong className="valid">VALID</strong>
            </div>
          </div>
        </section>
      )}

      {/* EVIDENCE */}
      <section className="evidence-section" id="evidence">
        <div className="section-heading">
          <p className="eyebrow">EVIDENCE-BASED VERIFICATION</p>
          <h2>Audit evidence trail</h2>
        </div>

        <div className="evidence-table">

          <div className="table-header">
            <span>ESG CLAIM</span>
            <span>EVIDENCE</span>
            <span>CONFIDENCE</span>
            <span>STATUS</span>
          </div>

          <EvidenceRow
            claim="Renewable Energy Usage"
            evidence="Energy Certificate #ESG-2041"
            confidence="96%"
            status="Verified"
          />

          <EvidenceRow
            claim="Employee Safety Standard"
            evidence="ISO 45001 Certificate"
            confidence="94%"
            status="Verified"
          />

          <EvidenceRow
            claim="Environmental Management"
            evidence="ISO 14001 Certificate"
            confidence="97%"
            status="Verified"
          />

          <EvidenceRow
            claim="Carbon Reduction Target"
            evidence="Sustainability Report 2026"
            confidence="82%"
            status="Review"
          />

        </div>
      </section>

      {/* HISTORY */}
      <section className="history-section" id="history">
        <div className="history-card">

          <div>
            <p className="eyebrow">AUDIT HISTORY</p>
            <h2>Permanent audit record</h2>
            <p>
              Every evaluation is recorded with evidence, score,
              verification status and timestamp.
            </p>
          </div>

          <div className="history-number">
            <strong>128</strong>
            <span>Audits Recorded</span>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <strong>HEISENBERG</strong>
          <span> Corporate Sustainable Procurement Auditor</span>
        </div>

        <p>
          AI-powered ESG compliance verification and procurement intelligence.
        </p>
      </footer>

    </div>
  );
}


/* COMPONENTS */

function ProcessCard({ number, title, text }) {
  return (
    <div className="process-card">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function PipelineStep({ number, title, active }) {
  return (
    <div className={`pipeline-step ${active ? "active" : ""}`}>
      <span>{number}</span>
      <p>{title}</p>
      <b>{active ? "✓" : "○"}</b>
    </div>
  );
}

function ScoreCard({ title, score, icon }) {
  return (
    <div className="result-card">
      <div className="score-icon">{icon}</div>
      <span className="result-label">{title}</span>
      <strong className="result-score">{score}</strong>
      <div className="progress">
        <div style={{ width: `${score}%` }}></div>
      </div>
      <p>Verified ESG performance</p>
    </div>
  );
}

function EvidenceRow({ claim, evidence, confidence, status }) {
  return (
    <div className="table-row">
      <span>{claim}</span>
      <span>{evidence}</span>
      <span>{confidence}</span>
      <span className={status === "Verified" ? "verified" : "review"}>
        {status}
      </span>
    </div>
  );
}

export default App;