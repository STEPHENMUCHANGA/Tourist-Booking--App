import React from "react";
import "./TouristSiteCard.css";

function TouristSiteCard({ site }) {
  return (
    <a 
      href={site.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="site-card-link"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="site-card">
        <div className="site-image-wrapper">
          <img className="site-image" src={site.image} alt={site.name} />
        </div>

        <h3 className="site-title">{site.name}</h3>
        <p className="site-location">{site.location}</p>
        <p className="site-description">
          {site.description.length > 110
            ? site.description.substring(0, 110) + "..."
            : site.description}
        </p>
      </div>
    </a>
  );
}

export default TouristSiteCard;
