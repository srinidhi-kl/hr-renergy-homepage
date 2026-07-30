import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Solutions } from "@/components/site/Solutions";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HR Renergy | Solar & Home Utility Solutions in India" },
      {
        name: "description",
        content:
          "HR Renergy installs solar power plants, solar water heaters, heat pumps, batteries, water softeners and servo stabilizers for homes and industry across India.",
      },
      { property: "og:title", content: "HR Renergy | Solar & Home Utility Solutions in India" },
      {
        property: "og:description",
        content:
          "Cut your electricity bills with expertly engineered solar, water heating and home utility systems. Free site assessment.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Solutions />
        <WhyUs />
        <Process />
        <Projects />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
