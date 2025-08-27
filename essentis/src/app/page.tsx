import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="page">
      <h1>Build rock-solid software. Ship useful data products.</h1>
      <p className="intro">
        We help companies deliver reliable software solutions and transform their data into actionable insights. 
        Our expertise spans the full technology stack from development to deployment.
      </p>
      
      <div className="services">
        <section className="service">
          <h2>Software Engineering</h2>
          <p>Clean, maintainable code that scales with your business needs.</p>
        </section>
        
        <section className="service">
          <h2>Data Science</h2>
          <p>Turn your data into competitive advantages with advanced analytics.</p>
        </section>
        
        <section className="service">
          <h2>MLOps</h2>
          <p>Deploy and monitor machine learning models in production reliably.</p>
        </section>
      </div>
      
      <div className="cta">
        <Link href="/contact" className="cta-button">Contact us</Link>
      </div>
    </div>
  )
}
