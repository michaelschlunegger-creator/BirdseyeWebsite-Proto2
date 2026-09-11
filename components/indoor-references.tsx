"use client";

import { useState } from "react";
import styles from "./indoor-references.module.css";

// Original artwork from Flyability's published technology references.
// Keep source colours, proportions and complete marks unchanged.
const references = [
  {
    "name": "ArcelorMittal",
    "src": "https://www.flyability.com/hubfs/2021/Logos/Arcelormittal-logo.svg"
  },
  {
    "name": "Bureau Veritas",
    "src": "https://www.flyability.com/hubfs/2021/Logos/Bureau_Veritas_Logo.svg"
  },
  {
    "name": "Cargill",
    "src": "https://www.flyability.com/hubfs/2021/Logos/Cargill_logo.svg"
  },
  {
    "name": "Chevron",
    "src": "https://www.flyability.com/hubfs/2021/Logos/Chevron_Logo.svg"
  },
  {
    "name": "Cyberhawk",
    "src": "https://www.flyability.com/hubfs/2021/Logos/Cyberhawk.svg"
  },
  {
    "name": "Dow",
    "src": "https://www.flyability.com/hubfs/2021/Logos/Dow_Chemical_Company_logo.svg"
  },
  {
    "name": "Duke Energy",
    "src": "https://www.flyability.com/hubfs/2021/Logos/Duke_Energy_logo.svg"
  },
  {
    "name": "EDF",
    "src": "https://www.flyability.com/hubfs/2021/Logos/e%CC%82lectricitC%CC%A7_de_France_logo.svg"
  },
  {
    "name": "Enel",
    "src": "https://www.flyability.com/hubfs/2021/Logos/Enel_Group_logo.svg"
  },
  {
    "name": "Constellation",
    "src": "https://www.flyability.com/hs-fs/hubfs/Home%20Page/constellation%20logo.png?height=400&name=constellation+logo.png&width=1767"
  },
  {
    "name": "ExxonMobil",
    "src": "https://www.flyability.com/hubfs/2021/Logos/Exxon_Mobil_Logo.svg"
  },
  {
    "name": "Holcim",
    "src": "https://www.flyability.com/hubfs/holcim_logo_color.svg"
  },
  {
    "name": "Pfizer",
    "src": "https://www.flyability.com/hubfs/2021/Logos/Pfizer.svg"
  },
  {
    "name": "Aramco Services Company",
    "src": "https://www.flyability.com/hs-fs/hubfs/Home%20Page/aramco-services-company-logo-web.png?height=36&name=aramco-services-company-logo-web.png&width=118"
  },
  {
    "name": "Shell",
    "src": "https://www.flyability.com/hubfs/2021/Logos/Shell_logo-white-1.svg"
  },
  {
    "name": "U.S. Department of Energy",
    "src": "https://www.flyability.com/hs-fs/hubfs/Home%20Page/Seal_of_the_United_States_Department_of_Energy_white.png?height=600&name=Seal_of_the_United_States_Department_of_Energy_white.png&width=600"
  },
  {
    "name": "SUEZ",
    "src": "https://www.flyability.com/hubfs/2021/Logos/Suez_Environnement.svg"
  },
  {
    "name": "Glencore",
    "src": "https://www.flyability.com/hs-fs/hubfs/Home%20Page/Glencore_logo_PNG2.png?height=645&name=Glencore_logo_PNG2.png&width=3691"
  },
  {
    "name": "TotalEnergies",
    "src": "https://www.flyability.com/hubfs/Total-Energies-logo.svg"
  },
  {
    "name": "Veolia",
    "src": "https://www.flyability.com/hubfs/2021/Logos/Veolia_logo.svg"
  }
];

export function IndoorReferences({ compact = false }: { compact?: boolean }) {
  const [paused, setPaused] = useState(false);
  return (
    <section className={`${styles.section}${compact ? ` ${styles.compact}` : ""}`} id="indoor-references" aria-labelledby="indoor-references-title">
      <div className="container">
        <div className={styles.heading}>
          <div>
            {!compact && <p className="eyebrow">Flyability technology references</p>}
            <h2 id="indoor-references-title">{compact ? "Flyability technology references" : "Indoor inspection technology used across industry."}</h2>
          </div>
          <button type="button" className={styles.toggle} aria-pressed={paused}
            aria-controls="indoor-reference-track" onClick={() => setPaused(!paused)}>
            {paused ? "Play logo animation" : "Pause logo animation"}
          </button>
        </div>
        <div className={styles.viewport} tabIndex={0} role="region" aria-label="Industry reference logos; scroll to explore when animation is paused">
          <div id="indoor-reference-track" className={styles.track} data-paused={paused}>
            {[0, 1].map((copy) => (
              <ul key={copy} className={styles.group} aria-hidden={copy === 1 ? true : undefined}>
                {references.map(({name, src}) => (
                  <li key={name} className={styles.logo}>
                    <img src={src} alt={copy === 0 ? name : ""} width="118" height="72" decoding="async" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <p className={styles.source}>Organisations featured by Flyability as users of its confined-space inspection drones. <a href="https://www.flyability.com/" target="_blank" rel="noreferrer">View technology references</a>.</p>
      </div>
    </section>
  );
}
