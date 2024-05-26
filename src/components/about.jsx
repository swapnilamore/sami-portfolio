import React, { Component } from "react";
import AboutItem from "./aboutitem";

export default class About extends Component {
  render() {
    return (
      <div>        
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p><font size="4">
                        I am a seasoned <i>Commissioning & Maintenance Manager </i>  
                        with Over 15 Years of Expertise in Electrical Erection, Testing, Commissioning & Maintenance 
                        in the Power Industry. <br></br>
                        I love exploring new technologies and often amazed by the progress we as a human species have made so far in the recent years.
                        </font>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>

            {/* Row - 1 */}
            <div className="row row-pt-md">

              <AboutItem
                title = "Generator"
                description="Testing & Commissioning of Generators, Dynamic
                test of Generators, Brushless Excitation System, DAVR Commissioning (Make - BHEL)"
                color="color-1"
              />

              <AboutItem
                title = "Maintenance"
                description="Conversant with Best practices of Maintenance, including manpower and spares
                management of Electrical system including emergency system like DC system, Battery and Chargers,
                UPS, Emergency DG Sets"
                color="color-2"
              />

              <AboutItem
                title = "Erection"
                description="Carried out Erection of Electrical
                Equipements like Power Transformers (Make - Areva), MV & LV
                Switchgears (Make - Areva / L&T), Busducts (Make - BHEL / Powergear / C&S)"
                color="color-3"
              />
            </div>

            {/* Row - 2 */}
            <div className="row row-pt-md">

              <AboutItem
                title="Testing & Commissioning"
                description="Hands of experience in testing of various electrical
                equipements like MV & LV Switchgears, Numerical relays (Micom / SEL / Siprotec), Variable Frequency Drives (Siemens / Yaskawa), Protection Schemes, Instrument Transformers, Power & Distribution
                Transformers, MV Cables, MV & LV Motors,"
                color="color-4"
              />

              <AboutItem
                title="Capital / Annual Overhaul"
                description="Preparation and execution of capital and annual overhaul electrical activities, managing spares requirement, ensuring optimal performance and longevity of equipment."
                color="color-5"
              />

              <AboutItem
                title="Budgeting, Service & Material Management"
                description="Contributing to the development and refinement of departmental budgets through meticulous analysis and collaboration with key stakeholders,
                Facilitating seamless operations by efficiently generating service material requisitions to ensure timely procurement and availability of necessary resources,
                Managing the end-to-end process of invoice processing, including verification, approval, and reconciliation, to ensure accuracy and adherence to financial protocols"
                color="color-1"
              />

            </div>

            {/* Row - 3 */}
            <div className="row row-pt-md">

              <AboutItem
                title="A bit of Programming"
                description="Begginer level skills in Java / python programming language as an
                hobby. Worked with platforms like VS Code, Arduino IDE,
                Android Studio, Scratch, App Inventor"
                color="color-2"
              />

              <AboutItem
                title="Embedded System"
                description="ove to tinker with microcontrollers and developement boards
                like Arduino, Raspberry Pi, ESP8266, ESP32, AVR Microcontrollers for various IoT
                projects like Home Automation"
                color="color-3"
              />

            </div>
          </div>
        </section>
      </div>
    );
  }
}
