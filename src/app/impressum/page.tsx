import React from 'react'

export default function Impressum() {
  return (
    <div className="page">
      <h1>Impressum</h1>
      <div className="impressum-content">
        <p>
          <strong>Essentis GmbH</strong><br />
          Lorenzweg 5<br />
          12099 Berlin
        </p>
        
        <p>
          <strong>Geschäftsführer:</strong> Tobias Grimm
        </p>
        
        <p>
          <strong>Handelsregister:</strong> Amtsgericht Berlin-Charlottenburg, HRB 121910 B
        </p>
        
        <p>
          <strong>Kontakt:</strong><br />
          E-Mail: <a href="mailto:info@essentis.de">info@essentis.de</a>
        </p>
      </div>
    </div>
  )
}
