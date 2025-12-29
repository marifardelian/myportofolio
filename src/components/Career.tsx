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
                <h4>Mentor & Facilitator</h4>
                <h5>Chumbaka-Kulim, Kedah</h5>
              </div>
              <h3>2024-2025</h3>
            </div>
            <p>
              Mentoring students on bridging the gap between hardware and artificial intelligence, 
              teaching concepts of collecting sensor data for Machine Learning model training.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Mentor National Competition</h4>
                <h5>Chumbaka-Alor Setar, Kedah</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Mentored the "Neural Alert" team 
              (students from Maktab Mahmud Alor Setar) in 
              developing a microsleep detection helmet.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Lead Developer</h4>
                <h5>Delive</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Founded a digital services agency specializing in modern web design and templates.
              Developed responsive web solutions using Node.js and Firebase, 
              focusing on user authentication and interactive UI effects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
