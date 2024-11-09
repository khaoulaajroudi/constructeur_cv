import React from 'react';
import ContactItem from './ContactItem';
import SkillsSection from './SkillsSection';
import LanguagesSection from './LanguagesSection';
import './Styletemplate.css'

const Sidebar = () => {
  return (
    <aside className="col-3 h-100 p-3">
      {/* Picture and Upload Logic */}
      <ul className="list-unstyled">
        <ContactItem  text="jane.roe@gmail.com" />
        <ContactItem  text="202-555-0166" />
        <ContactItem  text="01/05/1996" />
        <ContactItem  text="New York, USA" />
        <ContactItem  text="linkedin.com/in/jane.roe" />
        <ContactItem  text="jane.roe" />
        <ContactItem  text="jane.roe" />
        <ContactItem  text="jane.roe.com" />
        <ContactItem  text="Polish" />
        <ContactItem  text="Married" />
      </ul>
      <SkillsSection />
      <LanguagesSection />
    </aside>
  );
};

export default Sidebar;