import React, { Component } from "react";
import TimelineItem from "./timelineitem";

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
                  <TimelineItem
                    title="Senior Manager @ RattanIndia Power Ltd, Amravati "
                    time=" May 2014 - Present"
                    description="I joined RattanIndia Power Ltd as Deputy Manager and was responcible for electrical commissioning activities related to 5x270MW. We have successfully commissioned 3 units within 40 days. Then, my role changed from commissioining to maintenance. Currently I am looking after maintenance activities related to Generator & Auxiliaries, Excitation System, Switchgears, Emergency Electrical Systems."
                    color="color-1"
                  />

                  <TimelineItem
                    title = "Entrepreneur @ Synergy Electrical Solutions & Services, Nagpur "
                    time = " Nov 2013 - May 2014"
                    description = "Started Venture which was involved in Testing of Electrical system equipements, MV and LV cable fault location and repairing, Railway OHE erection and commissioning work."
                    color = "color-2"
                  />

                  <TimelineItem
                    title = "Manager @ Reliance Infrastructure Ltd, Butibori "
                    time = " Aug 2008 - Nov 2013"
                    description = "At Reliance Infrastructure Ltd, I joined as GET. Erection and Testing of MV Switchgear was my first assignment which I completed within stipulated time. Then, I looked after erection and commissioning of Generator, Power transformers, MV Switchgears, IPBD and SPBD in all respect."
                    color = "color-3"
                  />

                  <TimelineItem
                    title = "BE in Electrical Engineering @ SRKNEC, Nagpur "
                    time = " 2005-2008"
                    description = "I have completed my Bachlors in Electrical Engineering from SRKNEC, Nagpur. After completion of Graduation, I joined Reliance Infrastructure Ltd through campus recruitment drive."
                    color = "color-4"
                  />

                  <TimelineItem
                    title = "DET @ Larsen & Toubro Ltd, ECC Division "
                    time = " Jul 2004 - Apr 2005"
                    description = "I joined L&T Ltd as Diploma Engineer Trainee. I was assigned vaious responcibilities thourghout my tenure which include Tendering & Contract Management, Tools and Plant Management, Field engineer, Billing Engineer, Assistant Planning Engineer"
                    color = "color-5"
                  />

                  <TimelineItem
                    title = "Diploma in Electrical Engineering @ Government Polytechnic, Nagpur "
                    time = " 2001-2004"
                    description = "I have completed my Diploma in Electrical Engineering from Government Polytechnic, Nagpur with distinction. During this course, I have developed interest in microcontrollers and embedded systems. After completion of Graduation, I joined Larsen & Toubro Ltd through campus recruitment drive."
                    color = "color-1"
                  />

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
