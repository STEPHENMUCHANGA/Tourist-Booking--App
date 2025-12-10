import React from "react";
import { Link } from "react-router-dom";
import TouristSiteCard from "./TouristSiteCard";
import sitesData from "../data/sitesData";
import "./TouristSitesList.css";

function TouristSitesList() {
  return (
    <div className="sites-container">
      {sitesData.map((site) => (
        <Link
          to={`/attractions/${site.id}`}
          key={site.id}
          className="site-link"
        >
          <TouristSiteCard site={site} />
        </Link>
      ))}
    </div>
  );
}

export default TouristSitesList;
