import React from 'react';

const ContactItem = ({ icon, text }) => (
  <li className="mb-1 d-flex align-items-center">
    <div>{icon}</div>
    <div contentEditable>{text}</div>
  </li>
);

export default ContactItem;