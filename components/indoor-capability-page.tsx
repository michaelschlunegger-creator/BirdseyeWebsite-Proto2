import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { assetPath } from "@/lib/asset-path";
import type { ContentSection, SitePage } from "@/lib/site-content";
import styles from "./indoor-capability-page.module.css";

const indoorHref = "/solutions/indoor-confined-space/#capabilities";

type CapabilityVisual = {
  label: string;
  title: string;
  imageMode: "scene" | "product";
  image: string;
  alt: string;
  caption: string;
  visualTags: string[];
  output: string;
  outputAlt: string;
  outputCaption: string;
  note: string;
  source: string;
  related?: { href: string; label: string };
};

const capabilityContent: Record<string, CapabilityVisual> = {
  "/visual-thermal-imaging/": {
    label: "Visual & thermal inspection",
    title: "See the condition.\nLocate the concern.",
    imageMode: "scene",
    image: "/visuals/indoor-thermal-cinematic-v2.webp",
    alt: "Caged inspection drone examining corrosion and a thermal anomaly inside an industrial vessel",
    caption: "Visual and thermal inspection concept visual",
    visualTags: ["RGB evidence", "Thermal context", "Located findings"],
    output: "/visuals/elios3-reporting-official.png",
    outputAlt: "Flyability Inspector 4.0 displaying a visual inspection alongside a 3D asset record",
    outputCaption: "Inspector 4.0 · Manufacturer example of a visual inspection record",
    note: "Thermal findings are reviewed with surface properties, reflections and operating conditions in mind. Capture and interpretation are agreed for the asset and inspection question.",
    source: "https://www.flyability.com/elios-3",
    related: { href: "/solutions/outdoor-asset-intelligence/", label: "Explore outdoor inspection" },
  },
  "/slam/": {
    label: "LiDAR & 3D mapping",
    title: "Capture\n3D reality.",
    imageMode: "scene",
    image: "/visuals/indoor-lidar-cinematic-v2.webp",
    alt: "Caged indoor inspection drone mapping complex steel geometry as a coloured point cloud",
    caption: "LiDAR and 3D mapping concept visual",
    visualTags: ["LiDAR capture", "Point cloud", "Coverage context"],
    output: "/visuals/elios3-pointcloud-official.jpg",
    outputAlt: "Flyability point-cloud example showing the internal geometry of an enclosed structure and connected passages",
    outputCaption: "LiDAR point cloud · Manufacturer example",
    note: "The platform, LiDAR configuration, survey control and processing are selected around the required accuracy. CAD and BIM modelling are separately scoped engineering outputs.",
    source: "https://www.flyability.com/elios-3-surveying-payload",
    related: { href: "/solutions/reality-capture-digital-engineering/", label: "Explore digital engineering" },
  },
  "/ndt-ut-drone-inspection-services/": {
    label: "Ultrasonic thickness measurement",
    title: "Measure thickness.\nReduce access work.",
    imageMode: "product",
    image: "/visuals/elios3-ut-official.png",
    alt: "Flyability Elios 3 in flight with its ultrasonic probe arm in contact with an asset wall",
    caption: "Elios 3 UT Payload · Contact measurement in action",
    visualTags: ["Contact readings", "Located measurements", "Documented procedure"],
    output: "/visuals/elios3-ut-report-official.png",
    outputAlt: "Flyability UT interface example linking individual wall-thickness readings to a 3D record of pipework",
    outputCaption: "Located UT readings · Manufacturer demonstration data",
    note: "UT requires contact with a suitable surface. Material, coating, surface preparation, couplant, calibration and the measurement procedure are reviewed before deployment.",
    source: "https://www.flyability.com/elios-3-ut-payload",
  },
  "/radiation/": {
    label: "Specialist sensing · Radiation surveys",
    title: "Gather evidence.\nKeep your distance.",
    imageMode: "product",
    image: "/visuals/elios3-rad-official.jpg",
    alt: "Flyability Elios 3 with the Mirion radiation sensor and its flight controller",
    caption: "Elios 3 RAD Payload · Drone, sensor and controller",
    visualTags: ["Dose-rate capture", "3D trajectory", "Survey evidence"],
    output: "/visuals/elios3-rad-map-official.jpg",
    outputAlt: "Flyability example of a 3D turbine-deck model with a flight trajectory coloured by radiation dose rate",
    outputCaption: "Radiation survey trajectory · Manufacturer demonstration data",
    note: "Radiation missions are planned with the site’s radiation-protection specialists. Sensor selection, exposure limits, contamination controls and the data required are agreed for each mission.",
    source: "https://www.flyability.com/elios-3-rad-payload",
  },
};

export function isIndoorCapability(route: string) {
  return Object.hasOwn(capabilityContent, route);
}

function SectionItems({ section }: { section: ContentSection }) {
  const bullets = section.items.filter(item => item.type === "bullet");
  return <>
    {section.items.filter(item => item.type !== "bullet").map((item, index) => <p key={index}>{item.text}</p>)}
    {bullets.length > 0 && <ul>{bullets.map(item => <li key={item.text}><Check size={17} aria-hidden="true" /><span>{item.text}</span></li>)}</ul>}
  </>;
}

export function IndoorCapabilityPage({ page }: { page: SitePage }) {
  const content = capabilityContent[page.route];
  const [challenge, help, provide, receive, value, discuss] = page.sections;
  return <main className={styles.page}>
    <nav className={styles.returnBar} aria-label="Return to indoor inspection">
      <div className={`container ${styles.returnInner}`}>
        <a href={assetPath(indoorHref)} className={styles.back}><ArrowLeft size={18} aria-hidden="true" />Back to Indoor Inspection</a>
        <span>Explore capabilities</span>
      </div>
    </nav>
    <section className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className="eyebrow">Indoor inspection capability</p>
          <h1>{content.label}</h1>
          <p className={styles.heroStatement}>{content.title}</p>
          <p className={styles.lead}>{page.heroText}</p>
          <Link href="/contact-us/#enquiry" className="button">Discuss Your Requirement <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
        <figure className={`${styles.product} ${content.imageMode === "scene" ? styles.scene : styles.productRender}`}>
          <img src={assetPath(content.image)} alt={content.alt} fetchPriority="high" />
          <div className={styles.visualTags}>{content.visualTags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <figcaption>{content.caption}</figcaption>
        </figure>
      </div>
    </section>
    <div className={`container ${styles.body}`}>
      <section className={styles.context} aria-label="Your challenge and our approach">
        <article><p className="eyebrow">01 · The situation</p><h2>{challenge.title}</h2><SectionItems section={challenge}/></article>
        <article><p className="eyebrow">02 · Our approach</p><h2>{help.title}</h2><SectionItems section={help}/></article>
      </section>
      <section className={styles.delivery} aria-label="Capture and deliverables">
        <figure className={styles.output}>
          <img src={assetPath(content.output)} alt={content.outputAlt} loading="lazy" />
          <figcaption>{content.outputCaption}</figcaption>
        </figure>
        <div className={styles.scope}>
          <article><p className="eyebrow">03 · Capture</p><h2>{provide.title}</h2><SectionItems section={provide}/></article>
          <article><p className="eyebrow">04 · Deliverables</p><h2>{receive.title}</h2><SectionItems section={receive}/></article>
        </div>
      </section>
      <p className={styles.note}>{content.note}</p>
      <section className={styles.value}><div><p className="eyebrow">05 · The outcome</p><h2>{value.title}</h2></div><SectionItems section={value}/></section>
      <section className={styles.enquiry}>
        <div><p className="eyebrow">06 · Let’s define your scope</p><h2>Discuss your inspection challenge.</h2><SectionItems section={discuss}/></div>
        <div className={styles.actions}><Link className="button" href="/contact-us/#enquiry">Discuss Your Requirement <ArrowRight size={18} aria-hidden="true" /></Link><a href={assetPath(indoorHref)} className={styles.back}><ArrowLeft size={18} aria-hidden="true" />Back to Indoor Inspection</a></div>
      </section>
      <nav className={styles.related} aria-label="Related inspection capabilities">
        {Object.entries(capabilityContent).map(([route, item]) => <Link key={route} href={route} aria-current={route === page.route ? "page" : undefined}>{item.label.replace("Specialist sensing · ", "")}<ArrowRight size={15} aria-hidden="true" /></Link>)}
      </nav>
      <div className={styles.footnote}>
        {content.related && <Link className="text-link" href={content.related.href}>{content.related.label}<ArrowRight size={16} aria-hidden="true" /></Link>}
        <p>Product imagery and example outputs: <a href={content.source} target="_blank" rel="noreferrer">Flyability</a>. Concept visuals are illustrative.</p>
      </div>
    </div>
  </main>;
}
