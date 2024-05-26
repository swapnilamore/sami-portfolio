import React from "react";

const AboutItem = ({title, description, color}) =>{
  return(
        <div className="col-md-4 text-center animate-box">
                <div className={`services ${color}`}>
                  <span className="icon">
                    <i className="icon-flash" />
                  </span>
                  <div className="desc">
                    <h3>{title}</h3>
                    <p>
                      {description}
                    </p>
                  </div>
                </div>
              </div>
  );
}

export default AboutItem;