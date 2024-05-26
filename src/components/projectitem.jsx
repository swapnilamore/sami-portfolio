import React from "react";

const ProjectItem = ({link, title, subtitle, imagesrc}) =>{
  return(
    <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
		<div className="project" style={{backgroundImage: `${imagesrc}`}}>
			<div className="desc">
				<div className="con">
					<h3><a href={`${link}`}>{title}</a></h3>
					<span>{subtitle}</span>
				</div>
			</div>
		</div>
	</div>
  );
}

export default ProjectItem;