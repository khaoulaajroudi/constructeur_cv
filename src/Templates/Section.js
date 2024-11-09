import React from 'react';
import './Styletemplate.css'

const Section = ({ title, children }) => (
  <div className="section mb-4">
    <h2>{title}</h2>
    {children}
  </div>
);

export default Section;