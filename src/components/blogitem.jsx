import React from "react";

const BlogItem = ({date, category, link, title, imagesrc}) =>{
  return(
    <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
    <div className="blog-entry">
        <a href={`${link}`} className="blog-img"><img src={`${imagesrc}`} className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
        <div className="desc">
            <span><small> {date} </small> | <small> {category} </small></span>
            <h3><a href={`${link}`}>{title}</a></h3>
        </div>
    </div>
    </div>
  );
}

export default BlogItem;