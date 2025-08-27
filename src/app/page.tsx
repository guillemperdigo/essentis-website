import React from 'react'
import Link from 'next/link'

// SVG Icons as React components
const CodeIcon = () => (
  <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16,18 22,12 16,6"></polyline>
    <polyline points="8,6 2,12 8,18"></polyline>
  </svg>
)

const ChartIcon = () => (
  <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
)

const ServerIcon = () => (
  <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="4" rx="1"></rect>
    <rect x="2" y="9" width="20" height="4" rx="1"></rect>
    <rect x="2" y="15" width="20" height="4" rx="1"></rect>
    <line x1="6" y1="5" x2="6.01" y2="5"></line>
    <line x1="6" y1="11" x2="6.01" y2="11"></line>
    <line x1="6" y1="17" x2="6.01" y2="17"></line>
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12,5 19,12 12,19"></polyline>
  </svg>
)

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🚀 Professional Software Solutions</span>
          </div>
          <h1 className="hero-title">
            Build rock-solid software.
            <span className="hero-title-accent"> Ship useful data products.</span>
          </h1>
          <p className="hero-description">
            We help companies deliver reliable software solutions and transform their data into actionable insights. 
            Our expertise spans the full technology stack from development to deployment.
          </p>
          <div className="hero-cta">
            <Link href="/contact" className="btn-primary">
              Get Started <ArrowRightIcon />
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-placeholder">
            <div className="floating-card card-1">
              <div className="card-content">
                <div className="metric">99.9%</div>
                <div className="metric-label">Uptime</div>
              </div>
            </div>
            <div className="floating-card card-2">
              <div className="card-content">
                <div className="metric">50+</div>
                <div className="metric-label">Projects</div>
              </div>
            </div>
            <div className="floating-card card-3">
              <div className="card-content">
                <div className="metric">24/7</div>
                <div className="metric-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-subtitle">
            Comprehensive solutions across the entire technology stack
          </p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon-wrapper">
              <CodeIcon />
            </div>
            <h3 className="service-title">Software Engineering</h3>
            <p className="service-description">
              Clean, maintainable code that scales with your business needs. From architecture design to deployment.
            </p>
            <div className="service-features">
              <span className="feature-tag">React & Next.js</span>
              <span className="feature-tag">Node.js</span>
              <span className="feature-tag">TypeScript</span>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-icon-wrapper">
              <ChartIcon />
            </div>
            <h3 className="service-title">Data Science</h3>
            <p className="service-description">
              Turn your data into competitive advantages with advanced analytics and machine learning solutions.
            </p>
            <div className="service-features">
              <span className="feature-tag">Python</span>
              <span className="feature-tag">Analytics</span>
              <span className="feature-tag">ML Models</span>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-icon-wrapper">
              <ServerIcon />
            </div>
            <h3 className="service-title">MLOps</h3>
            <p className="service-description">
              Deploy and monitor machine learning models in production reliably with automated pipelines.
            </p>
            <div className="service-features">
              <span className="feature-tag">Docker</span>
              <span className="feature-tag">CI/CD</span>
              <span className="feature-tag">Monitoring</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-grid">
          <div className="value-item value-fast">
            <div className="value-title">Fast</div>
            <div className="value-description">Reliable delivery</div>
          </div>
          <div className="value-item value-secure">
            <div className="value-title">Secure</div>
            <div className="value-description">Built-in protection</div>
          </div>
          <div className="value-item value-scalable">
            <div className="value-title">Scalable</div>
            <div className="value-description">Grows with your business</div>
          </div>
          <div className="value-item value-direct">
            <div className="value-title">Direct</div>
            <div className="value-description">Clear communication</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to build something amazing?</h2>
          <p className="cta-description">
            Let&apos;s discuss your project and see how we can help you achieve your goals.
          </p>
          <Link href="/contact" className="btn-primary large">
            Start Your Project <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </>
  )
}
