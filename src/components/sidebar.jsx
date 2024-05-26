import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <br/> <br/>
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/about_old.jpg)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Swapnil More</a>
              </h1>
              <span className="email">
                <i className="icon-mail"></i> <font size="3">yogesh.amore@gmail.com</font>
              </span>
            </div>
            
              <br/> <br/>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <br/>
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      <font size="3">
                      Introduction
                      </font>
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      <font size="3">
                      About
                      </font>
                    </a>
                  </li>
                  <li>
                    <a href="#timeline" data-nav-section="timeline">
                      <font size="3">
                      Timeline
                      </font>
                    </a>
                  </li>
                  <li>
                    <a href="#blog" data-nav-section="blog">
                      <font size="3">
                      Blog
                      </font>
                    </a>
                  </li>
                  <li>
                    <a href="#projects" data-nav-section="projects">
                      <font size="3">
                      Projects
                      </font>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/swapnilamore"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-facebook2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https:/www.linkedin.com/in/swapnilamore"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-linkedin2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/swapnilamore"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-github"></i>
                  </a>
                </li>
              </ul>
            </nav>
            {/* <div className="colorlib-footer">
              <p>
                <small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and{" "}
                  <i className="icon-beer" aria-hidden="true"></i>
                  <br></br>
                  Thanks{" "}
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colorlib
                  </a>{" "}
                  for inspiration
                </small>
              </p>
              <p>
                <small>Something coming soon !!</small>
              </p>
            </div> */}
          </aside>
        </div>
      </div>
    );
  }
}
