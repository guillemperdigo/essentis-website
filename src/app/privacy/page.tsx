import React from 'react'
import Link from 'next/link'

export default function Privacy() {
  return (
    <div className="page">
      <div className="language-toggle">
        <span className="language-current">English</span>
        <Link href="/privacy/de" className="language-link">Deutsch</Link>
      </div>
      
      <h1>Privacy Policy</h1>
      <div className="privacy-content">
        <p>
          We take the protection of your personal data seriously.
        </p>
        
        <h2>Responsible party</h2>
        <p>
          Essentis GmbH<br />
          Lorenzweg 5<br />
          12099 Berlin<br />
          Germany<br />
          Email: <a href="mailto:info@essentis.de">info@essentis.de</a>
        </p>
        
        <h2>Data collection</h2>
        <p>
          When you visit this website, our hosting provider automatically saves so-called server log files (e.g. IP address, browser type, time of access). This data is necessary to ensure the functionality, security, and stability of the website and is deleted automatically after a short period.
        </p>
        
        <h2>Cookies / analytics</h2>
        <p>
          We do not use cookies, tracking, or analytics tools.
        </p>
        
        <h2>Your rights</h2>
        <p>
          According to the GDPR, you have the right to access, rectify, erase, or restrict the processing of your data, as well as the right to lodge a complaint with a data protection authority.
        </p>
        
        <h2>Contact</h2>
        <p>
          If you have any questions about data protection, please contact us at the above address.
        </p>
      </div>
    </div>
  )
}
