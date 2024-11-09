import React from 'react';
import './Styletemplate.css'

const EducationItem = ({ education }) => (
  <div className="education-item mb-2">
    <div contentEditable>MSc in Economics and Business Administration</div>
    <div contentEditable>The University of Chicago</div>
    <div contentEditable>09/2008-06/2010</div>
  </div>
);

export default EducationItem;