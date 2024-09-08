// import React from 'react';
import './About.css'; // Assuming you create CSS styles to complement the sections
import teamImage from '../assets/team.jpg'; // Placeholder for team photo
// import checkoutImage from '../assets/checkout.jpg'; // Placeholder for checkout functionality
// import navigationImage from '../assets/navigation.jpg'; // Placeholder for navigation system

const About = () => {
  return (
    <div className="about-page">

      {/* Project Title Section */}
      <section className="project-section">
        <h1 className="project-title">Jaldi Cart - Smart Navigation and Checkout System</h1>
        <p className="theme">Hackathon Theme: <strong>Revolutionizing Retail Shopping Experience</strong></p>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        <img src={teamImage} alt="Team working on the project" className="team-image" />
        <ul className="team-list">
          <li>Gurpreet Sarangal</li>
          <li>Yadunandan Bhardwaj</li>
          <li>Akash Gill</li>
          <li>Ankit Partap</li>
          <li>Tushar Anand</li>
        </ul>
      </section>

      {/* Project Overview Section */}
      <section className="overview-section">
        <h2>Project Overview</h2>
        <p>
          Jaldi Cart is a web application designed to transform how people shop in large malls. Our objective is to eliminate long checkout lines and optimize navigation through malls, providing a seamless shopping experience.
        </p>
        {/* <img src={checkoutImage} alt="Checkout process" className="overview-image" /> */}
        <div className="overview-details">
          <h3>Core Problem</h3>
          <p>
            Shoppers face delays in checkout and often struggle to navigate large malls. Jaldi Cart addresses these challenges by enabling users to scan products, add them to a virtual cart, and pay directly via their smartphones. Additionally, the app offers optimized navigation and personalized store recommendations.
          </p>
        </div>
      </section>

      {/* Job Statements Section */}
      <section className="jobs-section">
        <h2>Customer Needs</h2>
        <div className="job-statement">
          <h3>Primary Job</h3>
          <p>
            When shopping at a mall, I want to quickly scan and purchase products using my smartphone to avoid long queues and save time.
          </p>
        </div>
        <div className="job-statement">
          <h3>Secondary Jobs</h3>
          <ul>
            <li>Efficiently navigate to the stores of interest through optimized routes.</li>
            <li>Receive relevant recommendations for stores or deals to explore new products and save money.</li>
          </ul>
        </div>
        {/* <img src={navigationImage} alt="Optimized navigation routes" className="jobs-image" /> */}
      </section>

      {/* Functional and Emotional Requirements Section */}
      <section className="requirements-section">
        <h2>Project Requirements</h2>
        <div className="functional-requirements">
          <h3>Functional Features</h3>
          <ul>
            <li>QR/Bar code scanning to add items to a virtual cart.</li>
            <li>Secure online payment integration.</li>
            <li>Optimized navigation routes within the mall.</li>
            <li>Sponsored store recommendations tailored to user behavior.</li>
          </ul>
        </div>
        <div className="emotional-requirements">
          <h3>Emotional Benefits</h3>
          <ul>
            <li>Instant confirmation of transactions for peace of mind.</li>
            <li>Confidence in efficient use of time during shopping.</li>
            <li>Personalized, non-intrusive suggestions that enhance the experience.</li>
          </ul>
        </div>
      </section>

      {/* Outcome Expectations Section */}
      <section className="outcome-section">
        <h2>Expected Outcomes</h2>
        <ul>
          <li>Reduce checkout times to under 10 minutes without queues.</li>
          <li>Decrease time spent searching for stores by 30% with optimized navigation routes.</li>
          <li>Increased engagement with personalized store recommendations, driving higher foot traffic to sponsored stores.</li>
        </ul>
      </section>

      {/* MVP Feature List */}
      <section className="features-section">
        <h2>Minimum Viable Product (MVP) Features</h2>
        <div className="must-have-features">
          <h3>Must-Have Features</h3>
          <ul>
            <li>QR/Bar code scanning and virtual cart management.</li>
            <li>Secure payment integration.</li>
            <li>Basic mall navigation system with route optimization.</li>
            <li>Simple recommendation engine for sponsored stores.</li>
          </ul>
        </div>
        <div className="nice-to-have-features">
          <h3>Nice-to-Have Features</h3>
          <ul>
            <li>AI-driven personalized recommendations.</li>
            <li>Integration with loyalty programs for rewards.</li>
            <li>AR navigation for an immersive shopping experience.</li>
          </ul>
        </div>
      </section>

      {/* Assumptions and Risks Section */}
      <section className="assumptions-section">
        <h2>Assumptions and Risks</h2>
        <div className="assumptions">
          <h3>Key Assumptions</h3>
          <ul>
            <li>Shoppers are familiar with using QR codes and mobile payments.</li>
            <li>Malls will provide access to their floor plans for accurate navigation.</li>
            <li>Sponsored stores are willing to pay for in-app promotion.</li>
          </ul>
        </div>
        <div className="risks">
          <h3>Potential Risks</h3>
          <ul>
            <li>QR code scanning may be difficult in poor lighting conditions.</li>
            <li>Payment delays due to network issues.</li>
            <li>Too many recommendations may overwhelm users and lead to disengagement.</li>
          </ul>
        </div>
      </section>

      {/* Timeline and Milestones Section */}
      <section className="timeline-section">
        <h2>Timeline & Milestones</h2>
        <ul>
          <li><strong>Hour 4:</strong> Finalize UI/UX design and core features.</li>
          <li><strong>Hour 20:</strong> Develop QR/Bar code scanning and payment system.</li>
          <li><strong>Hour 30:</strong> Implement navigation and integrate basic recommendations.</li>
        </ul>
        <p>Post-hackathon, we aim to expand navigation support, enhance recommendations with AI, and onboard more stores.</p>
      </section>

      {/* Final Remarks Section */}
      <section className="final-remarks-section">
        <h2>Final Remarks</h2>
        <p>
          As a team, we have prioritized the core functionality of the QR/Bar code scanning and payment processing to ensure a smooth shopping experience. Expansion into mall navigation and personalized recommendations will follow as we enhance the product.
        </p>
        <p className="open-questions">
          <strong>Open Questions:</strong>
          <br />
          How can we ensure accurate real-time navigation for users in malls? What incentives can we offer to stores for sponsorship?
        </p>
      </section>
    </div>
  );
};

export default About;
