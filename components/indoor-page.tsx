import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { IndoorReferences } from "./indoor-references";
import { assetPath } from "@/lib/asset-path";
import styles from "./indoor-page.module.css";

const capabilities = [
  ["01", "Visual & thermal inspection", "Review surface condition, deposits and visible defects. Thermal imagery adds temperature context where the inspection conditions allow.", "/visual-thermal-imaging/", "/visuals/indoor-thermal-cinematic-v2.webp", "Caged inspection drone examining corrosion and a thermal anomaly inside an industrial vessel"],
  ["02", "LiDAR & 3D mapping", "Light Detection and Ranging (LiDAR) captures spatial context, helping teams locate findings and understand inspection coverage.", "/slam/", "/visuals/indoor-lidar-cinematic-v2.webp", "Indoor inspection drone mapping pipes and vessel geometry as a coloured point cloud"],
  ["03", "Ultrasonic thickness", "Targeted ultrasonic testing (UT) provides wall-thickness readings on suitable surfaces, using the appropriate payload and measurement procedure.", "/ndt-ut-drone-inspection-services/", "/visuals/elios3-ut-official.png", "Elios 3 ultrasonic testing payload making contact with an asset wall"],
  ["04", "Specialist sensing", "Radiation or gas sensing can be scoped where the approved payload, operating conditions and project requirements support it.", "/radiation/", "/visuals/elios3-rad-map-official.jpg", "Radiation survey trajectory located within a three-dimensional asset model"],
];
const workflow = [
  ["Define", "Agree the asset, inspection questions, coverage and deliverables."],
  ["Prepare", "Confirm isolation, atmosphere, access, temperature and site controls."],
  ["Inspect", "Capture the agreed evidence and review data quality and coverage."],
  ["Deliver", "Hand over located findings, measurements and documented limitations."],
];

export function IndoorPage() {
  return <main className={styles.page}>
    <section className={styles.hero}>
      <figure className={styles.heroMedia}>
        <img src={assetPath("/visuals/indoor-hero-cinematic-v2.webp")} alt="Caged indoor inspection drone flying inside a large corroded steel tank" width="1672" height="941" fetchPriority="high" />
        <figcaption>Indoor inspection concept visual</figcaption>
      </figure>
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/solutions/">Solutions</Link> / Indoor inspection</nav>
          <p className="eyebrow">Indoor & confined-space inspection</p>
          <h1>See more.<br />Enter less.</h1>
          <p className={styles.lead}>Inspect tanks, silos, ducts and other difficult internal spaces with the Flyability Elios 3. Give your team clear evidence while reducing unnecessary human entry.</p>
          <Link className="button" href="/contact-us/#enquiry">Discuss Your Inspection Challenge <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
    <IndoorReferences compact />
    <div className={`container ${styles.body}`}>
      <img className={styles.flightBackdrop} src={assetPath("/visuals/elios3-action-official.jpg")} alt="" aria-hidden="true" width="1021" height="900" loading="lazy" />
      <section className={styles.challenge}>
        <article><p className="eyebrow">The customer challenge</p><h2>Access takes time.<br />Condition cannot wait.</h2><p>Scaffolding, rope access and confined-space entry can extend preparation and shutdown windows. Maintenance teams still need to know where damage, deposits or deterioration require attention.</p></article>
        <article><p className="eyebrow">How Birdseye helps</p><h2>Bring the evidence<br />back to your team.</h2><p>We plan and operate the inspection around your asset and the decision you need to make. The Elios 3 captures visual and spatial evidence; additional sensing is selected to suit the task.</p><p className={styles.emphasis}>Less access preparation. Clearer findings. Better maintenance planning.</p></article>
      </section>
      <section className={styles.section} id="capabilities" aria-label="Indoor inspection capabilities">
        <div className={styles.heading}><div><p className="eyebrow">What we provide</p><h2>The right inspection scope.</h2></div><p>One platform, with the capture method and payload agreed for your project.</p></div>
        <div className={styles.cards}>{capabilities.map(([n,title,copy,url,image,alt])=><article key={n}>
          <Link className={styles.cardVisual} href={url} aria-label={`Explore ${title}`}><img src={assetPath(image)} alt={alt} loading="lazy" /></Link>
          <div className={styles.cardCopy}><span className={styles.number}>{n}</span><h3>{title}</h3><p>{copy}</p><Link className="text-link" href={url} aria-label={`Explore ${title}`}>Explore capability <ArrowRight size={16}/></Link></div>
        </article>)}</div>
        <div className={styles.assets}><strong>Typical assets</strong><span>Tanks & vessels</span><span>Silos & hoppers</span><span>Ducts & chimneys</span><span>Boilers & kilns</span><span>Tunnels & pipelines</span></div>
      </section>
      <section className={`${styles.section} ${styles.deliverables}`}>
        <figure><img src={assetPath("/visuals/elios3-reporting-official.png")} alt="Flyability Inspector 4.0 interface showing inspection imagery and a 3D asset record" loading="lazy"/><figcaption>Inspector 4.0 interface · Flyability</figcaption></figure>
        <div><p className="eyebrow">What you receive</p><h2>Findings you can locate.<br />Information you can use.</h2><ul>{["Annotated inspection imagery and video", "Located points of interest with 3D context", "Point clouds and agreed sensor measurements", "A structured report with coverage and limitations"].map(t=><li key={t}><Check size={17}/><span>{t}</span></li>)}</ul><p className={styles.muted}>Deliverables depend on the agreed scope and payload. Your inspection and engineering teams use the evidence to plan follow-up examination and maintenance.</p></div>
      </section>
      <section className={styles.value}><div><p className="eyebrow">Value for your business</p><h2>Make the shutdown count.</h2></div><ul><li>Reduce unnecessary entry and work at height.</li><li>Focus follow-up access on identified areas.</li><li>Build a traceable record for future comparison.</li></ul></section>
      <section className={styles.section}>
        <p className="eyebrow">How the work is delivered</p><h2>A clear plan, from scope to report.</h2>
        <div className={styles.workflow}>{workflow.map(([title,copy],i)=><article key={title}><span className={styles.number}>0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <p className={styles.note}>Site readiness matters: Elios 3 is not explosion-proof. Atmosphere, isolation and other site safety controls must be agreed before deployment; remote inspection does not replace required safety procedures.</p>
      </section>
      <section className={styles.section}>
        <div className={styles.heading}><div><p className="eyebrow">Relevant customer stories</p><h2>Inspection in practice.</h2></div><Link className="text-link" href="/case-studies/">All customer stories <ArrowRight size={16}/></Link></div>
        <div className={styles.stories}>
          <Link href="/casestudies/tank-wall-thickness-assessment-with-birdseye-drones-and-ut-technology/"><span>Tank inspection</span><h3>Remote wall-thickness assessment</h3><p>See how ultrasonic measurements supported the inspection.</p><ArrowRight size={20}/></Link>
          <Link href="/casestudies/inspection-of-flue-ducts-and-silo-cones-with-birdseye/"><span>Cement assets</span><h3>Flue ducts and silo cones</h3><p>Visual and measurement evidence from difficult internal areas.</p><ArrowRight size={20}/></Link>
          <Link href="/casestudies/stormwater-pipeline-inspection-with-birdseye/"><span>Enclosed infrastructure</span><h3>Stormwater pipeline inspection</h3><p>Review the approach to inspecting a restricted-access asset.</p><ArrowRight size={20}/></Link>
        </div>
      </section>
      <section className={styles.enquiry}><div><p className="eyebrow">Discuss your inspection challenge</p><h2>What do you need to see inside?</h2><p>Tell us the asset, location, access constraints and planned inspection window. We will help define the capture scope and useful deliverables.</p></div><Link className="button" href="/contact-us/#enquiry">Discuss Your Inspection Challenge <ArrowRight size={18}/></Link></section>
      <p className={styles.credit}>Elios 3 product and reporting imagery: <a href="https://www.flyability.com/elios-3" target="_blank" rel="noreferrer">Flyability</a>. Concept visuals are illustrative.</p>
    </div>
  </main>;
}
