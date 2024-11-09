import React from 'react';
import './Styletemplate.css'


const SkillsSection = () => (
  <div>
    <div className="position-relative mb-3">
      <div contentEditable>Skills</div>
    </div>
    <div className="d-flex gap-2 flex-wrap">
      {/* Map over skills */}
      <div>SEO</div>
    </div>
  </div>
);

export default SkillsSection;