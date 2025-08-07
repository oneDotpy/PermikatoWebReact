import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MembershipSteps.css';

function MembershipSteps() {
  const navigate = useNavigate();

  return (
    <section className="membership-steps-section">
      <h1 className="membership-title">Become a Member</h1>

      <div className="steps-column">

        {/* Step 1 */}
        <div className="step-wrapper">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content clickable" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfiITgSGltBr0DSf6GkNlid6dp1KhVoumtZU9iEKexg7_nfAw/viewform?usp=header', '_blank')}>
              <div className="step-title">Form Submission</div>
              <div className="step-description">Application Submitted</div>
            </div>
          </div>
          <div className="dotted-line" />
        </div>

        {/* Step 2 */}
        <div className="step-wrapper">
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content clickable" onClick={() => window.open('https://chat.whatsapp.com/EzJvTS4xRgT3OFEtybw5dS', '_blank')}>
              <div className="step-title">Join WA Group</div>
              <div className="step-description">Wait for verification</div>
            </div>
          </div>
          <div className="dotted-line" />
        </div>

        {/* Step 3 */}
        <div className="step-wrapper">
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content transparent">
              <div className="step-title">Permikato Member</div>
            </div>
          </div>
        </div>

      </div>

      <div className="survival-guide">
        <p>Want to know more about living as a student in Toronto?</p>
        <button className="guide-btn" onClick={() => navigate('/survival-guide')}>
          Survival Guide
        </button>
      </div>
    </section>
  );
}

export default MembershipSteps;
