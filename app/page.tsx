"use client";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>AirDosa</h1>
          <p className="tagline">Hot dosas, airborne.</p>
          <p className="subtitle">
            Stone-ground batter griddles to golden-crisp perfection. A drone brings it hot to your
            door in minutes.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Order Now</button>
            <button className="btn-secondary">How It Works</button>
          </div>
        </div>
        <div className="drone-container">
          <svg className="drone" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Drone body */}
            <circle cx="100" cy="85" r="18" fill="var(--dark)" />
            {/* Rotor arms */}
            <rect x="50" y="80" width="100" height="10" rx="5" fill="var(--dark)" opacity="0.7" />
            <rect x="92" y="30" width="16" height="100" rx="8" fill="var(--dark)" opacity="0.7" />
            {/* Propellers (animated) */}
            <g className="propeller propeller-1" style={{ transformOrigin: "65px 50px" }}>
              <ellipse cx="65" cy="50" rx="20" ry="3" fill="var(--accent)" opacity="0.8" />
            </g>
            <g className="propeller propeller-2" style={{ transformOrigin: "135px 50px" }}>
              <ellipse cx="135" cy="50" rx="20" ry="3" fill="var(--accent)" opacity="0.8" />
            </g>
            <g className="propeller propeller-3" style={{ transformOrigin: "100px 20px" }}>
              <ellipse cx="100" cy="20" rx="3" ry="20" fill="var(--accent)" opacity="0.8" />
            </g>
            <g className="propeller propeller-4" style={{ transformOrigin: "100px 140px" }}>
              <ellipse cx="100" cy="140" rx="3" ry="20" fill="var(--accent)" opacity="0.8" />
            </g>
            {/* Package below */}
            <rect x="80" y="115" width="40" height="30" rx="3" fill="var(--terracotta)" />
            <text
              x="100"
              y="138"
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
              fill="var(--cream)"
            >
              🍛
            </text>
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Why AirDosa?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🔥</div>
            <h3>Sizzle Guarantee</h3>
            <p>Made fresh to order on a 250°C griddle. Crispy edges, soft center, every time.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>5-Minute Delivery</h3>
            <p>Autonomous drones bypass traffic. Your dosa arrives hot while you're still setting the table.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Climate-Controlled Pod</h3>
            <p>Insulated delivery pod keeps dosas at perfect temperature from griddle to your plate.</p>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="menu">
        <h2>Our Dosas</h2>
        <div className="menu-grid">
          {[
            { name: "Masala", desc: "Potato, onion, spices, ghee", price: "$5.99" },
            { name: "Paneer", desc: "Cottage cheese, green chutney", price: "$6.99" },
            { name: "Mysore", desc: "Chili paste, crispy edges", price: "$6.49" },
            { name: "Rava", desc: "Semolina, traditional style", price: "$5.49" },
          ].map((item) => (
            <div key={item.name} className="menu-item">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <span className="price">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="footer-cta">
        <h2>Ready?</h2>
        <button className="btn-large">Launch AirDosa</button>
        <p>Available in select cities. Coming soon to your area.</p>
      </section>

      <style jsx>{`
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 4rem;
          padding: 5rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          animation: fadeIn 0.8s ease-out;
        }

        .hero-content h1 {
          color: var(--terracotta);
          margin-bottom: 0.5rem;
        }

        .tagline {
          font-size: 1.4rem;
          color: var(--accent);
          font-style: italic;
          margin-bottom: 1.5rem;
        }

        .subtitle {
          font-size: 1.1rem;
          color: var(--dark);
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: var(--accent);
          color: white;
          padding: 1rem 2rem;
          font-size: 1.05rem;
          border-radius: 4px;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(232, 114, 46, 0.3);
          transform: scale(1);
        }

        .btn-primary:hover {
          background: var(--terracotta);
          box-shadow: 0 6px 16px rgba(232, 114, 46, 0.4);
          transform: scale(1.05);
        }

        .btn-secondary {
          background: transparent;
          color: var(--terracotta);
          padding: 1rem 2rem;
          font-size: 1.05rem;
          border: 2px solid var(--terracotta);
          border-radius: 4px;
          font-weight: 600;
        }

        .btn-secondary:hover {
          background: var(--terracotta);
          color: white;
        }

        .drone-container {
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1000px;
        }

        .drone {
          width: 100%;
          max-width: 280px;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
          animation: float 3s ease-in-out infinite;
        }

        .propeller {
          animation: spin 0.3s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .features {
          background: var(--turmeric);
          color: white;
          padding: 4rem 2rem;
          text-align: center;
        }

        .features h2 {
          color: var(--dark);
          margin-bottom: 3rem;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 8px;
          backdrop-filter: blur(10px);
          animation: slideUp 0.6s ease-out backwards;
        }

        .feature-card:nth-child(2) {
          animation-delay: 0.2s;
        }

        .feature-card:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .feature-card h3 {
          color: white;
          margin-bottom: 0.5rem;
        }

        .feature-card p {
          color: rgba(255, 255, 255, 0.9);
        }

        .menu {
          padding: 4rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .menu h2 {
          color: var(--terracotta);
          margin-bottom: 3rem;
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .menu-item {
          background: white;
          padding: 2rem;
          border-left: 4px solid var(--accent);
          border-radius: 4px;
          text-align: left;
          transition: transform 0.3s;
        }

        .menu-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .menu-item h3 {
          color: var(--terracotta);
          margin-bottom: 0.5rem;
        }

        .menu-item p {
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 1rem;
        }

        .price {
          font-family: var(--font-mono);
          font-size: 1.3rem;
          font-weight: bold;
          color: var(--accent);
        }

        .footer-cta {
          background: var(--terracotta);
          color: white;
          padding: 4rem 2rem;
          text-align: center;
        }

        .footer-cta h2 {
          color: white;
          margin-bottom: 2rem;
        }

        .btn-large {
          background: var(--accent);
          color: white;
          padding: 1.2rem 3rem;
          font-size: 1.2rem;
          font-weight: 600;
          border-radius: 4px;
          box-shadow: 0 6px 16px rgba(232, 114, 46, 0.4);
          margin-bottom: 1.5rem;
        }

        .btn-large:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 20px rgba(232, 114, 46, 0.5);
        }

        .footer-cta p {
          color: rgba(255, 255, 255, 0.9);
        }

        @media (max-width: 768px) {
          .hero {
            grid-template-columns: 1fr;
            padding: 3rem 1.5rem;
          }

          .drone-container {
            order: -1;
            margin-bottom: 2rem;
          }

          .hero h1 {
            font-size: 2.5rem;
          }

          .feature-grid {
            grid-template-columns: 1fr;
          }

          .menu-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
