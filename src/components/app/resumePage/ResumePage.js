import React from 'react';
import './ResumePage.css';

function ResumePage () {
  return (
    <div>
      <h1>Resume</h1>
      <embed src="/resume.pdf" type="application/pdf" width="100%" height="800px" />
    </div>
  );
}

export default ResumePage;