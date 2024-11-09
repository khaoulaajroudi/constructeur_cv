import React, { useState } from 'react';
import './Styletemplate.css'

const LanguagesSection = () => {
  const [languages, setLanguages] = useState([]);

  const addLanguage = () => {
    setLanguages([...languages, { name: '', level: '' }]);
  };

  const handleLanguageChange = (index, field, value) => {
    const newLanguages = [...languages];
    newLanguages[index][field] = value;
    setLanguages(newLanguages);
  };

  return (
    <div className="section mb-4">
      <h2>Languages</h2>
      {languages.map((language, i) => (
        <div key={i} className="language-item">
          <input
            type="text"
            placeholder="Language"
            value={language.name}
            onChange={(e) => handleLanguageChange(i, 'name', e.target.value)}
          />
          <input
            type="text"
            placeholder="Proficiency Level"
            value={language.level}
            onChange={(e) => handleLanguageChange(i, 'level', e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default LanguagesSection;