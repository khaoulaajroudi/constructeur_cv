import React from 'react';
import './Styletemplate.css'

const ExperienceItem = ({ experience }) => (
  <div className="experience-item mb-2">
    <div contentEditable>Business Development Manager</div>
    <div contentEditable>AirState Solutions</div>
    <div contentEditable>09/2014-06/2017</div>
    <div contentEditable>New York, USA</div>
    <ul>
      <li contentEditable>Managed sales team and improved revenue by 30%.</li>
    </ul>
  </div>
);

export default ExperienceItem;