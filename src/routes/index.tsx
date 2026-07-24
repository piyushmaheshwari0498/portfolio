import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Certifications } from "@/components/portfolio/Certifications";

import { CurrentFocus } from "@/components/portfolio/CurrentFocus";
import { FAQ } from "@/components/portfolio/FAQ";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Piyush Maheshwari | Senior Mobile Application Developer" },
      {
        name: "description",
        content:
          "Senior Mobile Application Developer with 6+ years of experience building enterprise Flutter and Native Android applications, offline-first architectures, Firebase real-time systems, POS platforms, and scalable mobile solutions.",
      },
      { property: "og:title", content: "Piyush Maheshwari — Android & Flutter Developer" },
      {
        property: "og:description",
        content:
          "Explore projects, experience and case studies from a mobile engineer specialising in offline-first Flutter and native Android.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      {
        name: "keywords",
        content:
          "Flutter Developer,Android Developer,Mobile Application Developer,Java,Kotlin,Flutter,Firebase,MVVM,Clean Architecture,POS Developer,Enterprise Mobile Apps,Offline First,Mobile Portfolio,Piyush Maheshwari",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.title,
          email: profile.email,
          telephone: profile.phone,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Navi Mumbai",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          sameAs: [profile.github, profile.linkedin],
          knowsAbout: [
            "Android",
            "Flutter",
            "Kotlin",
            "Java",
            "Firebase",
            "Offline-First Architecture",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Certifications />

      <CurrentFocus />
      <FAQ />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
