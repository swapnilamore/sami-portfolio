import React from "react";

const TimelineItem = ({title, time, description, color}) =>{
  return(
    <article
    className="timeline-entry animate-box"
    data-animate-effect="fadeInLeft"
  >
    <div className="timeline-entry-inner">
      <div className={`timeline-icon ${color}`}>
        <i className="icon-pen2" />
      </div>
      <div className="timeline-label">
        <h2>
          {title}
          <span>{time}</span>
        </h2>
        <p>
          <font size="4">{description}</font>
        </p>
      </div>
    </div>
  </article>
  );
}

export default TimelineItem;