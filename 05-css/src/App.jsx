import React from "react";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import "./App.css";

const App = () => {
  return (
    <div className="app-shell">
      <Header />
      <main className="hero-section">
        <section className="hero-card">
          <p className="eyebrow">Creative React Styling</p>
          <h1>Build cleaner UI with stronger CSS structure.</h1>
          <p className="hero-copy">
            This version uses a layered background, better spacing, stronger
            typography, and reusable component styling so the page feels like a
            real interface instead of a placeholder.
          </p>
          <div className="hero-actions">
            <Button />
            <a href="#preview" className="secondary-link">
              See preview
            </a>
          </div>
        </section>

        <section id="preview" className="preview-panel">
          <div className="preview-stat">
            <span className="stat-value">01</span>
            <span className="stat-label">Reusable components</span>
          </div>
          <div className="preview-stat">
            <span className="stat-value">02</span>
            <span className="stat-label">Balanced spacing</span>
          </div>
          <div className="preview-stat">
            <span className="stat-value">03</span>
            <span className="stat-label">Modern visual hierarchy</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
