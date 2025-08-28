import React from 'react'
import Link from 'next/link'

export default function PrivacyDE() {
  return (
    <div className="page">
      <div className="language-toggle">
        <Link href="/privacy" className="language-link">English</Link>
        <span className="language-current">Deutsch</span>
      </div>
      
      <h1>Datenschutzerklärung</h1>
      <div className="privacy-content">
        <p>
          Wir nehmen den Schutz Ihrer persönlichen Daten ernst.
        </p>
        
        <h2>Verantwortliche Stelle</h2>
        <p>
          Essentis GmbH<br />
          Lorenzweg 5<br />
          12099 Berlin<br />
          Deutschland<br />
          E-Mail: <a href="mailto:info@essentis.de">info@essentis.de</a>
        </p>
        
        <h2>Datenerfassung</h2>
        <p>
          Beim Besuch dieser Website speichert unser Hosting-Anbieter automatisch sogenannte Server-Log-Dateien (z.B. IP-Adresse, Browser-Typ, Zeitpunkt des Zugriffs). Diese Daten sind notwendig, um die Funktionalität, Sicherheit und Stabilität der Website zu gewährleisten und werden nach kurzer Zeit automatisch gelöscht.
        </p>
        
        <h2>Cookies / Analyse-Tools</h2>
        <p>
          Wir verwenden keine Cookies, Tracking- oder Analyse-Tools.
        </p>
        
        <h2>Ihre Rechte</h2>
        <p>
          Nach der DSGVO haben Sie das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer Daten sowie das Recht, eine Beschwerde bei einer Datenschutzbehörde einzureichen.
        </p>
        
        <h2>Kontakt</h2>
        <p>
          Bei Fragen zum Datenschutz wenden Sie sich bitte an die oben genannte Adresse.
        </p>
      </div>
    </div>
  )
}
