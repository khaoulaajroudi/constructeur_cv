import React, { useState } from 'react';
import HeaderSection from './HeaderSection';
import Section from './Section';
import ExperienceItem from './ExperienceItem';
import EducationItem from './EducationItem';
import HobbyItem from './HobbyItem';
import AddButton from './AddButton';
import './Styletemplate.css'

const MainContent = () => {
  const [languages, setLanguages] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [hobbies, setHobbies] = useState([]);

  const addLanguage = () => {
    setLanguages([...languages, { name: '', rating: 0 }]);
  };

  const addWorkExperience = () => {
    setWorkExperience([...workExperience, { role: '', company: '', duration: '', location: '' }]);
  };

  const addEducation = () => {
    setEducation([...education, { degree: '', institution: '', period: '' }]);
  };

  const addHobby = () => {
    setHobbies([...hobbies, '']);
  };

  return (
    <main className="col-9 h-100">
      <HeaderSection />
      <Section title="Work Experience">
        {workExperience.map((experience, i) => (
          <ExperienceItem key={i} experience={experience} />
        ))}
        <AddButton onClick={addWorkExperience} />
      </Section>
      <Section title="Education">
        {education.map((edu, i) => (
          <EducationItem key={i} education={edu} />
        ))}
        <AddButton onClick={addEducation} />
      </Section>
      <Section title="Hobbies">
        {hobbies.map((hobby, i) => (
          <HobbyItem key={i} hobby={hobby} />
        ))}
        <AddButton onClick={addHobby} />
      </Section>
      <Section title="Languages">
        {languages.map((language, i) => (
          <div key={i} contentEditable>{language.name}</div>
        ))}
        <AddButton onClick={addLanguage} />
      </Section>
    </main>
  );
};

export default MainContent;