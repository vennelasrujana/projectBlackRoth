import React from 'react';

const VideoCard = () => {
  return (
    <>
      <div className="container-fluid px-0 palantir-card d-flex align-items-center">
        <div className="row w-100 m-0">
          <div className="col-md-7">
            <video autoPlay muted loop playsInline>
              <source src="assets/card video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-md-5 d-flex flex-column justify-content-center align-items-start p-5">
            <h1 className="palantir-title mb-3">There is so much left to build</h1>
            <p className="palantir-text mb-4">
              From building advanced LLMs and developing intelligent AI models to
              crafting AI-powered chatbots and unlocking insights through predictive analysis.
            </p>
            <button className="btn palantir-btn">LEARN MORE</button>
          </div>
        </div>
      </div>
      <hr style={{ margin: 0, height: '1px', backgroundColor: '#ccc', border: 'none' }} />
    </>
  );
};

export default VideoCard;
