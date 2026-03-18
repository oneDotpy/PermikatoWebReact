import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MembershipSteps.css';

function MembershipSteps() {
  const navigate = useNavigate();

  const steps = [
    {
      number: '01',
      title: 'Submit Your Application',
      description:
        'Fill out the membership form to begin your journey with Permikato.',
      action: 'Open Form',
      onClick: () =>
        window.open(
          'https://docs.google.com/forms/d/e/1FAIpQLSfiITgSGltBr0DSf6GkNlid6dp1KhVoumtZU9iEKexg7_nfAw/viewform?usp=header',
          '_blank'
        ),
      status: 'Start here',
    },
    {
      number: '02',
      title: 'Join the WhatsApp Group',
      description:
        'Connect with the community and wait for the verification process.',
      action: 'Join Group',
      onClick: () =>
        window.open(
          'https://chat.whatsapp.com/EzJvTS4xRgT3OFEtybw5dS',
          '_blank'
        ),
      status: 'Community access',
    },
    {
      number: '03',
      title: 'Become an Official Member',
      description:
        'Once verified, you are officially part of the Permikato family.',
      action: 'You’re In',
      status: 'Membership complete',
      finalStep: true,
    },
  ];

  return (
    <section className="membership-steps-section">
      <div className="membership-background-glow glow-one" />
      <div className="membership-background-glow glow-two" />

      <div className="membership-container">
        <div className="membership-hero">
          <span className="membership-badge">Permikato Membership</span>
          <h1 className="membership-title">
            Become <span>a Member</span>
          </h1>
          <p className="membership-subtitle">
            Join a welcoming Indonesian student community in Toronto through a
            simple and modern 3-step process.
          </p>
        </div>

        <div className="membership-timeline">
          {steps.map((step, index) => (
            <div className="timeline-item" key={step.number}>
              <div className="timeline-line-wrap">
                <div className="timeline-number">{step.number}</div>
                {index !== steps.length - 1 && <div className="timeline-line" />}
              </div>

              <div
                className={`timeline-card ${step.finalStep ? 'timeline-card-final' : ''}`}
              >
                <div className="timeline-card-top">
                  <span className="timeline-status">{step.status}</span>
                </div>

                <h2 className="timeline-title">{step.title}</h2>
                <p className="timeline-description">{step.description}</p>

                {!step.finalStep ? (
                  <button className="timeline-btn" onClick={step.onClick}>
                    {step.action}
                  </button>
                ) : (
                  <div className="timeline-final-badge">{step.action}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="membership-extra-card">
          <div>
            <p className="extra-label">New in Toronto?</p>
            <h3 className="extra-title">Explore the Survival Guide</h3>
            <p className="extra-text">
              Discover practical tips and resources for student life in Toronto.
            </p>
          </div>

          <button
            className="guide-btn"
            onClick={() => navigate('/survival-guide')}
          >
            View Survival Guide
          </button>
        </div>
      </div>
    </section>
  );
}

export default MembershipSteps;