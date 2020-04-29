import React from "react";

import "./TemplateCard.css";
const TemplateCard = ({ template, onClick }) => {
  return (
    <div className="template-card" onClick={onClick}>
      <p>{template}</p>
    </div>
  );
};

export default TemplateCard;
