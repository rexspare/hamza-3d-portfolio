import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "SwimtoFly",
    category: "Swimming Learning Platform",
    tools: "React Native, JavaScript, Firebase, In-App Purchases",
    image: "/images/swimtofly.png",
    link: "https://play.google.com/store/apps/details?id=com.swimtofly.android",
  },
  {
    title: "Nomadz",
    category: "Outdoor Marketplace App",
    tools: "React Native, TypeScript, Node.js, Firebase, PlatsPay",
    image: "/images/nomadz.png",
    link: "https://apps.apple.com/pk/app/nomadz/id6448633205",
  },
  {
    title: "Plative",
    category: "Driver Communication App",
    tools: "React Native, TypeScript, Firebase",
    image: "/images/plative.png",
    link: "https://play.google.com/store/apps/details?id=com.Plative",
  },
  {
    title: "Acheev Performance",
    category: "Athlete Performance Tracking App",
    tools: "React Native, GraphQL, Node.js, PostgreSQL, Firebase",
    image: "/images/acheev.png",
    link: "https://apps.apple.com/us/app/acheev-performance-app/id1636595346",
  },
  {
    title: "TAS Dating",
    category: "Dating & Social App",
    tools: "React Native, JavaScript, Firebase, HTML5",
    image: "/images/tasdating.png",
    link: "https://play.google.com/store/apps/details?id=com.tasdatingkit",
  },
  {
    title: "Mangia Rewards",
    category: "Dining Rewards App",
    tools: "React Native, JavaScript, Firebase, Stripe",
    image: "/images/mangia.png",
    link: "https://apps.apple.com/us/app/mangia-rewards-dining-offers/id1659785521",
  },
  {
    title: "Winelikes",
    category: "Wine Discovery App",
    tools: "React Native, TypeScript, Laravel, Firebase, Stripe",
    image: "/images/winelikes.png",
    link: "https://apps.apple.com/us/app/winelikes/id1604508326",
  },
  {
    title: "Pehchaan Balochistan",
    category: "Service Provider Platform",
    tools: "Android, Java, OneSignal",
    image: "/images/pehchaan.png",
    link: "https://play.google.com/store/apps/details?id=org.psca.pehchaanbalochistan",
  },
  {
    title: "ICR - IT Centre RYK",
    category: "E-Learning App",
    tools: "React Native, JavaScript, Laravel, OneSignal",
    image: "/images/icr.png",
    link: "https://play.google.com/store/apps/details?id=com.itcentre",
  },
  {
    title: "Roskalava",
    category: "Social Charity App",
    tools: "React Native, TypeScript, Node.js",
    image: "/images/roskalava.png",
    link: "https://play.google.com/store/apps/details?id=com.roskalava.app",
  },
  {
    title: "Barcelona Guide",
    category: "Travel Guide App",
    tools: "React Native, JavaScript, PHP, Firebase",
    image: "/images/barcelona.png",
    link: "https://play.google.com/store/apps/details?id=com.cityguide.barcelonacityguideapp",
  },
  {
    title: "CRBO Inc.",
    category: "Ride-Hailing App",
    tools: "React Native, JavaScript, Firebase, Stripe",
    image: "/images/crbo.png",
    link: "https://apps.apple.com/us/app/crbo/id1642157751",
  },
  {
    title: "Quran Urdu Audio Translation",
    category: "Islamic Audio App",
    tools: "React Native, CodeIgniter, Audio Streaming",
    image: "/images/quran.png",
    link: "https://play.google.com/store/apps/details?id=com.quran_only_urdu_audio",
  },
  {
    title: "Luxurian KW",
    category: "Luxury Shopping App",
    tools: "React Native, CodeIgniter, OneSignal",
    image: "/images/luxurian.png",
    link: "https://apps.apple.com/pk/app/luxurian-kw/id6449488950",
  },
  {
    title: "Dialed Resistance",
    category: "IoT Fitness App",
    tools: "Android, Java, OneSignal, In-App Purchases",
    image: "/images/dialed.png",
    link: "https://play.google.com/store/apps/details?id=com.stationaryblenew",
  },
  {
    title: "Tern Rewards",
    category: "Rental Rewards App",
    tools: "React Native, TypeScript, Node.js, Stripe",
    image: "/images/tern.png",
    link: "https://play.google.com/store/apps/details?id=com.ternrewards",
  },
  {
    title: "FMHero",
    category: "HVAC Documentation App",
    tools: "React Native, TypeScript, Firebase",
    image: "/images/fmhero.png",
    link: "https://apps.apple.com/us/app/fmhero/id1570918942",
  },
  {
    title: "PlanLocal",
    category: "Local Events App",
    tools: "React Native, JavaScript, Firebase",
    image: "/images/planlocal.png",
    link: "https://play.google.com/store/apps/details?id=com.EventZone",
  },
  {
    title: "Glowvia: AI Glow Up",
    category: "AI Beauty & Wellness App",
    tools: "React Native, TypeScript, AI / ML",
    image: "/images/glowvia.png",
    link: "https://apps.apple.com/us/app/glowvia/id6760437185",
  },
  {
    title: "Goal'in",
    category: "Sports Prediction App",
    tools: "React Native, JavaScript, Firebase",
    image: "/images/goalin.png",
    link: "https://play.google.com/store/apps/details?id=com.magrillefoot",
  },
  {
    title: "Qalbi: Soulmate & Healing",
    category: "Emotional Wellness App",
    tools: "React Native, TypeScript, Firebase",
    image: "/images/qalbi.png",
    link: "https://apps.apple.com/us/app/qalbi-soulmate-healing/id6758221871",
  },
  {
    title: "ClearPast: AI Photo Enhancer",
    category: "AI Photo Enhancer App",
    tools: "React Native, TypeScript, AI / ML",
    image: "/images/clearpast.png",
    link: "https://apps.apple.com/ye/app/clearpast-ai-photo-enhancer/id6480299547",
  },
  {
    title: "1Earth",
    category: "Charity Web Platform",
    tools: "Next.js, TypeScript, Stripe",
    image: "/images/1earth.png",
    link: "https://www.1earth.site",
  },
  {
    title: "D12 Solutions",
    category: "Software Agency Website",
    tools: "Next.js, TypeScript, React",
    image: "/images/d12.png",
    link: "https://d12-solutions.com/",
  },
  {
    title: "Italian Organic",
    category: "E-commerce Storefront",
    tools: "Next.js, TypeScript, E-commerce",
    image: "/images/italianorganic.png",
    link: "https://www.italianorganic.store/",
  },
  {
    title: "Roskalava Marketplace",
    category: "Charity Marketplace Web",
    tools: "React, Node.js, WordPress",
    image: "/images/roskalava-marketplace.png",
    link: "https://www.roskalava.net/",
  },
  {
    title: "Kohinoor Bazar",
    category: "Grocery Store App",
    tools: "React Native, TypeScript, Node.js, Firebase",
    image: "/images/kohinoorbazar.png",
    link: "https://play.google.com/store/apps/details?id=com.rsdtech.kohinoorbazar",
  },
];

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const Work = () => {
  const [shuffledProjects] = useState(() => {
    const pinned = projects.filter((p) => p.title === "Acheev Performance");
    const rest = projects.filter((p) => p.title !== "Acheev Performance");
    return [...pinned, ...shuffle(rest)];
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? shuffledProjects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide, shuffledProjects.length]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === shuffledProjects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide, shuffledProjects.length]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {shuffledProjects.map((project, index) => (
                <div className="carousel-slide" key={project.title}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{String(index + 1).padStart(2, "0")}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="carousel-progress">
            <span className="carousel-progress-count">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <div className="carousel-progress-bar">
              <div
                className="carousel-progress-fill"
                style={{
                  width: `${((currentIndex + 1) / shuffledProjects.length) * 100
                    }%`,
                }}
              />
            </div>
            <span className="carousel-progress-total">
              {String(shuffledProjects.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
