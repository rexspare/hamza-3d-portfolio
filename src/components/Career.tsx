import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Mobile App Developer</h4>
                <h5>SitePod · USA (Remote)</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Led a complete mobile UI redesign in a 5-day sprint with React Native
              + Tailwind at a steady 60 FPS, boosting satisfaction by 90%. Built
              Firebase deep linking, push notifications, and real-time analytics,
              driving 25% higher engagement with zero major post-launch crashes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Mobile App Developer</h4>
                <h5>D12 Solutions · Pakistan</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Led a team of 8 engineers to deliver 20+ full-stack mobile projects
              on time using React Native, Node.js/NestJS, and GraphQL. Cut app load
              times by 50% via asset optimization and caching, and drove major React
              Native upgrades for full OS compatibility.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Mobile App Developer</h4>
                <h5>Jeux Developers · Pakistan</h5>
              </div>
              <h3>2022–23</h3>
            </div>
            <p>
              Integrated Sentry for crash reporting, slashing critical crash rates
              by 70%+. Architected optimized state management with Zustand + Context
              API and reached 85%+ unit test coverage with Jest for faster, more
              reliable releases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Native Developer</h4>
                <h5>Hello World Technologies · Pakistan</h5>
              </div>
              <h3>2020–22</h3>
            </div>
            <p>
              Delivered pixel-perfect cross-platform apps with 100% positive client
              feedback. Built a reusable component and hooks library that sped up
              delivery by 30%, and refactored legacy code to TypeScript, cutting
              technical debt by 40%+.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
