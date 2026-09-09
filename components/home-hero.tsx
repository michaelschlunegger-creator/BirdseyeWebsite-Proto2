"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Pause, Play } from "lucide-react";
import { assetPath } from "@/lib/asset-path";

const paths = [
  {
    title: "Indoor & Confined-Space Solutions",
    benefit: "Understand hard-to-reach assets with less need for human entry.",
    href: "/solutions/indoor-confined-space/",
    image: "/visuals/solution-indoor.webp",
  },
  {
    title: "Outdoor Asset Intelligence",
    benefit: "See the condition of your sites, structures and networks.",
    href: "/solutions/outdoor-asset-intelligence/",
    image: "/visuals/solution-outdoor.webp",
  },
  {
    title: "Reality Capture & Digital Engineering",
    benefit: "Get reliable measurements and models to plan and build with confidence.",
    href: "/solutions/reality-capture-digital-engineering/",
    image: "/visuals/engineering-scan-to-bim.webp",
  },
  {
    title: "Asset Intelligence & Assessment",
    benefit: "Turn findings into clear maintenance priorities and better decisions.",
    href: "/solutions/asset-intelligence-assessment/",
    image: "/visuals/solution-assessment.webp",
  },
];

export function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const start = () => {
      if (preference.matches) {
        video.pause();
      } else {
        if (!video.getAttribute("src")) video.src = assetPath("/media/indoor-inspection.mp4");
        void video.play().catch(() => setPlaying(false));
      }
    };
    start();
    preference.addEventListener("change", start);
    return () => { preference.removeEventListener("change", start); video.pause(); };
  }, []);

  function toggleVideo() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      if (!video.getAttribute("src")) video.src = assetPath("/media/indoor-inspection.mp4");
      void video.play().catch(() => setPlaying(false));
    } else {
      video.pause();
    }
  }

  return (
    <section className="home-opening" aria-labelledby="home-title">
      <div className="home-film" aria-hidden="true">
        <img src={assetPath("/media/indoor-inspection-poster.jpg")} alt="" fetchPriority="high" />
        <video
          ref={videoRef}
          muted loop playsInline preload="none"
          poster={assetPath("/media/indoor-inspection-poster.jpg")}
          onPlaying={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => { setFailed(true); setPlaying(false); }}
        />
      </div>
      <div className="container home-opening-inner">
        <div className="home-opening-copy">
          <p className="eyebrow">Industrial Inspection & Digital Asset Solutions</p>
          <h1 id="home-title">Understand your assets.<br /><span>Improve your decisions.</span></h1>
          <p className="home-opening-intro">We inspect, capture and turn asset information into practical engineering and maintenance decisions—helping you reduce downtime, avoid rework and use resources better.</p>
          <Link className="button" href="/contact-us/#enquiry">Discuss Your Challenge <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className="home-path-heading">
          <h2>What does your team need?</h2>
          {!failed && <button className="film-toggle" type="button" onClick={toggleVideo} aria-label={playing ? "Pause background video" : "Play background video"}>{playing ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}{playing ? "Pause video" : "Play video"}</button>}
        </div>
        <nav className="home-solution-paths" aria-label="Explore our four solution areas">
          {paths.map((path, index) => (
            <Link href={path.href} key={path.href} className="home-solution-path">
              <img src={assetPath(path.image)} alt="" />
              <div className="home-path-copy">
                <span className="home-path-number">0{index + 1}</span>
                <h3>{path.title}</h3>
                <p>{path.benefit}</p>
                <span className="home-path-link">Explore solution <ArrowRight size={16} aria-hidden="true" /></span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
