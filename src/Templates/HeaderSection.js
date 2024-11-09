import React from 'react';
import './Styletemplate.css'

const HeaderSection = () => (
  <div className="header-section mb-4">
    <div className="userName" contentEditable>
      Jane Roe
    </div>
    <div className="userRole" contentEditable>
      Business Development Manager
    </div>
    <div className="userDescription" contentEditable>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div>
  </div>
);

export default HeaderSection;