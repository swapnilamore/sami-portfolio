import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Manager @ RattanIndia Power Ltd, Amravati{" "}
                          <span>May 2014 - Present</span>
                        </h2>
                        <p>
                          I joined RattanIndia Power Ltd as Deputy Manager and
                          was responcible for electrical commissioning
                          activities related to 5x270MW. We have successfully
                          commissioned 3 units within 40 days. Then, my role
                          changed from commissioining to maintenance. Currently
                          I am looking after maintenance activities related to
                          Generator & Auxiliaries, Excitation System, Switchgears,
                          Emergency Electrical Systems.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Entrepreneur @ Synergy Electrical Solutions & Services, Nagpur{" "}
                          <span>Nov 2013 - May 2014</span>
                        </h2>
                        <p>
                          Started Venture which was involved in
                          Testing of Electrical system equipements,
                          MV and LV cable fault location and repairing,
                          Railway OHE erection and commissioning work.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Manager @ Reliance Infrastructure Ltd, Butibori{" "}
                          <span>Aug 2008 - Nov 2013</span>
                        </h2>
                        <p>
                          At Reliance Infrastructure Ltd, I joined as GET.
                          Erection and Testing of MV Switchgear was my first
                          assignment which I completed within stipulated
                          time. Then, I looked after erection and commissioning
                          of Generator, Power transformers, MV Switchgears, IPBD
                          and SPBD in all respect.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          BE in Electrical Engineering @ SRKNEC, Nagpur{" "}
                          <span>2005-2008</span>
                        </h2>
                        <p>
                          I have completed my Bachlors in Electrical Engineering
                          from SRKNEC, Nagpur. After completion of Graduation, I
                          joined Reliance Infrastructure Ltd through campus
                          recruitment drive.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          DET @ Larsen & Toubro Ltd, ECC Division{" "}
                          <span>Jul 2004 - Apr 2005</span>
                        </h2>
                        <p>
                          I joined L&T Ltd as Diploma Engineer Trainee. I was
                          assigned vaious responcibilities thourghout my tenure
                          which include Tendering & Contract Management, Tools
                          and Plant Management, Field engineer, Billing
                          Engineer, Assistant Planning Engineer.{" "}
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Diploma in Electrical Engineering @ Government
                          Polytechnic, Nagpur <span>2001-2004</span>
                        </h2>
                        <p>
                          I have completed my Diploma in Electrical Engineering
                          from Government Polytechnic, Nagpur with distinction.
                          During this course, I have developed interest in
                          microcontrollers and embedded systems. After
                          completion of Graduation, I joined Larsen & Toubro Ltd
                          through campus recruitment drive.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
