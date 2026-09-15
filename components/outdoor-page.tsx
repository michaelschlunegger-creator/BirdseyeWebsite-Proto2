import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { assetPath } from "@/lib/asset-path";
import type { ContentSection, SitePage } from "@/lib/site-content";
import layout from "./indoor-capability-page.module.css";
import styles from "./outdoor-page.module.css";

const outdoorRoute = "/solutions/outdoor-asset-intelligence/";
const returnHref = `${outdoorRoute}#capabilities`;
const capabilities = [
  { route:"/aerial/", label:"Aerial survey & terrain mapping", title:"Map the terrain.\nPlan with confidence.", image:"capability-photogrammetry.webp", alt:"Aerial capture of a quarry illustrated with overlapping images and a digital surface", detail:"capability-erosion.webp", detailAlt:"Terrain mapping illustration showing drainage and erosion context", copy:"Current maps, terrain models and site measurements for engineering and planning." },
  { route:"/route-mapping/", label:"Corridor & route mapping", title:"One route.\nOne connected record.", image:"capability-corridor.webp", alt:"A utility corridor illustrated with mapped assets and surrounding terrain", detail:"solution-outdoor.webp", detailAlt:"Surveying illustration of a pipeline and utility corridor", copy:"Connect roads, pipelines and utilities with a consistent georeferenced record." },
  { route:"/volumetric-analysis/", label:"Stockpiles & volumes", title:"Measure materials.\nTrack what changes.", image:"capability-volumetric.webp", alt:"Stockpile measurement illustration combining a material pile with a digital surface", detail:"industry-mining.webp", detailAlt:"An open-pit mine illustrating the scale of material and earthworks operations", copy:"Repeatable stockpile and earthworks measurements with a clear reference base." },
  { route:"/project-progress-monitoring/", label:"Project progress monitoring", title:"See progress.\nKeep teams aligned.", image:"capability-progress.webp", alt:"A construction site illustrated with a digital model overlay", detail:"insight-planning.webp", detailAlt:"Project specialists reviewing site information and planning requirements", copy:"Dated imagery and comparison views that keep project teams working from the same evidence." },
];

export function isOutdoorPage(route:string) {
  return route === outdoorRoute || capabilities.some(item => item.route === route);
}

function Picture({name,alt,caption,className=""}:{name:string;alt:string;caption?:string;className?:string}) {
  return <figure className={`${styles.picture} ${className}`}><img src={assetPath(`/visuals/${name}`)} alt={alt} loading="lazy" width="1672" height="941" />{caption && <figcaption>{caption}</figcaption>}</figure>;
}

function Items({section}:{section:ContentSection}) {
  return <>{section.items.filter(i=>i.type!=="bullet").map((i,n)=><p key={n}>{i.text}</p>)}{section.items.some(i=>i.type==="bullet") && <ul>{section.items.filter(i=>i.type==="bullet").map(i=><li key={i.text}><Check size={17} aria-hidden="true"/><span>{i.text}</span></li>)}</ul>}</>;
}

function ReturnLink() {
  return <a href={assetPath(returnHref)} className={layout.back}><ArrowLeft size={18} aria-hidden="true"/>Back to Outdoor Asset Intelligence</a>;
}

export function OutdoorPage({page}:{page:SitePage}) {
  const capability = capabilities.find(item=>item.route===page.route);
  const overview = !capability;
  const section = (title:string) => page.sections.find(s=>s.title===title)!;
  return <main className={`${layout.page} ${styles.page}`}>
    {!overview && <nav className={layout.returnBar} aria-label="Return to outdoor asset intelligence"><div className={`container ${layout.returnInner}`}><ReturnLink/><span>Explore capabilities</span></div></nav>}
    <section className={layout.hero}>
      <div className={`container ${layout.heroGrid}`}>
        <div className={layout.heroCopy}>
          {overview && <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/solutions/">Solutions</Link> / Outdoor asset intelligence</nav>}
          <p className="eyebrow">{capability?.label ?? "Outdoor asset intelligence"}</p>
          <h1>{capability?.title ?? "Capture the\nbigger picture."}</h1>
          <p className={layout.lead}>{page.heroText}</p>
          <Link className="button" href="/contact-us/#enquiry">{overview ? "Discuss Your Site Challenge" : "Discuss Your Requirement"}<ArrowRight size={18} aria-hidden="true"/></Link>
        </div>
        <figure className={styles.heroPicture}><img src={assetPath(`/visuals/${capability?.image ?? "solution-outdoor.webp"}`)} alt={capability?.alt ?? "Industrial corridor with pipelines, utilities and spatial survey information"} width="1672" height="941" fetchPriority="high"/><figcaption>{capability?.label ?? "Map · Measure · Monitor"}</figcaption></figure>
      </div>
    </section>
    <div className={`container ${layout.body}`}>
      <section className={layout.context} aria-label="Your challenge and our approach">
        <article><p className="eyebrow">The customer challenge</p><h2>{overview ? "Sites change. Information falls behind." : "The Customer Challenge"}</h2>{overview ? <p>Large sites and long corridors are difficult to survey consistently. Outdated records slow decisions and create unnecessary repeat visits.</p> : <Items section={section("The Customer Challenge")}/>}</article>
        <article><p className="eyebrow">How Birdseye helps</p><h2>{overview ? "A current view your team can use." : "Our approach"}</h2>{overview ? <p>We combine aerial, mobile and ground capture to turn site conditions into clear maps, models and measurements—at the scale and frequency your operation needs.</p> : <Items section={section("How Birdseye Helps")}/>}</article>
      </section>
      {overview ? <>
        <section id="capabilities" className={styles.capabilities} aria-label="Outdoor capabilities">
          <p className="eyebrow">What we provide</p><h2>The right view for your next decision.</h2>
          <div className={styles.cards}>{capabilities.map((item,i)=><article key={item.route}>
            <Picture name={item.image} alt={item.alt}/><div className={styles.cardBody}><span className="eyebrow">0{i+1}</span><h3>{item.label}</h3><p>{item.copy}</p><a href={assetPath(item.route)} className="text-link" aria-label={`Explore ${item.label}`}>Explore capability <ArrowRight size={16} aria-hidden="true"/></a></div>
          </article>)}</div>
          <p className={styles.assets}><strong>Typical assets</strong> Roads & utilities · Plants, ports & yards · Mines & quarries · Construction & earthworks · Coastal & environmental areas</p>
        </section>
        <section className={layout.delivery}>
          <Picture name="capability-progress.webp" alt="A construction site paired with a digital representation of the installed structures" caption="Connect the physical site with a usable digital record."/>
          <div><p className="eyebrow">What you receive</p><h2>Maps, measurements and records that work together.</h2><Items section={section("What You Receive")}/></div>
        </section>
        <section className={layout.value}><div><p className="eyebrow">Value for your business</p><h2>Less uncertainty. Better coordination.</h2></div><ul>{["Cover more area with fewer site hours.","Recognise change and focus follow-up work.","Plan people, materials and equipment with consistent evidence."].map(t=><li key={t}><Check size={17} aria-hidden="true"/><span>{t}</span></li>)}</ul></section>
        <section className={styles.workflow}>
          <Picture name="insight-planning.webp" alt="Specialists reviewing site information and capture requirements"/>
          <div><p className="eyebrow">How the work is delivered</p><h2>A clear scope. A consistent record.</h2><div className={styles.steps}>{[
            ["Define","Agree the area, accuracy, coordinate system and outputs."],
            ["Capture","Plan access and permissions, then record the site."],
            ["Check","Process the data and check coverage and positioning."],
            ["Deliver","Hand over maps, models and measurements in the agreed format."],
          ].map(([title,copy],i)=><article key={title}><h3><span>0{i+1}</span> {title}</h3><p>{copy}</p></article>)}</div></div>
        </section>
        <section className={styles.stories}><div><p className="eyebrow">Relevant customer stories</p><h2>See the work in practice.</h2></div><div className={styles.storyGrid}>
          <Link href="/casestudies/inspect-your-stockpiles-with-birdseye-drone/"><Picture name="industry-mining.webp" alt="Mining and stockpile operations"/><div><h3>Stockpile measurement</h3><p>Spatial information for inventory and material planning.</p><span className="text-link">Read the story <ArrowRight size={16}/></span></div></Link>
          <Link href="/casestudies/elevated-inspection-of-power-station-with-birdseye/"><Picture name="industry-power.webp" alt="Power infrastructure illustrating an outdoor asset inspection environment"/><div><h3>Power-station inspection</h3><p>Inspection evidence from a complex operating site.</p><span className="text-link">Read the story <ArrowRight size={16}/></span></div></Link>
        </div></section>
      </> : <>
        <section className={layout.delivery} aria-label="Capture and deliverables">
          <Picture name={capability.detail} alt={capability.detailAlt} caption="Site context and the decisions the survey supports."/>
          <div className={layout.scope}><article><p className="eyebrow">Capture</p><h2>What We Provide</h2><Items section={section("What We Provide")}/></article><article><p className="eyebrow">Deliverables</p><h2>What You Receive</h2><Items section={section("What You Receive")}/></article></div>
        </section>
        <section className={layout.value}><div><p className="eyebrow">The outcome</p><h2>Value for Your Business</h2></div><Items section={section("Value for Your Business")}/></section>
      </>}
      <section className={layout.enquiry}><div><p className="eyebrow">Let’s define your scope</p><h2>Discuss your site or corridor challenge.</h2><Items section={page.sections[page.sections.length-1]}/></div><div className={layout.actions}><Link className="button" href="/contact-us/#enquiry">Discuss Your Site Challenge <ArrowRight size={18}/></Link>{!overview && <ReturnLink/>}</div></section>
      {!overview && <nav className={layout.related} aria-label="Related outdoor capabilities">{capabilities.map(item=><a key={item.route} href={assetPath(item.route)} aria-current={item.route===page.route?"page":undefined}>{item.label}<ArrowRight size={15} aria-hidden="true"/></a>)}</nav>}
      <p className={styles.credit}>Visuals illustrate the service and site context. Project outputs are agreed for each assignment.</p>
    </div>
  </main>;
}
