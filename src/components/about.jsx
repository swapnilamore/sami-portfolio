import React, { Component } from "react";

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
                      <p>
                        I am a Electrical Engineer from SRKNEC, Nagpur. I love
                        exploring new technologies and often amazed by the
                        progress we as a human species have made so far in the
                        recent years
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
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-flash" />
                  </span>
                  <div className="desc">
                    <h3>Generator Commissioning </h3>
                    <p>
                      Done testing of Generators, Dynamic
                      test of Generators, Brushless Excitation System , DAVR Commissioning (Make - BHEL)
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-flash" />
                  </span>
                  <div className="desc">
                    <h3>Electrical Maintenance</h3>
                    <p>
                      Conversant with Best practices of Maintenance, including manpower and spares
                      management
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-flash" />
                  </span>
                  <div className="desc">
                    <h3>Electrical Erection</h3>
                    <p>
                      Carried out Erection of Electrical
                      Equipements like Power Transformers (Make - Areva), MV & LV
                      Switchgears (Make - Areva / L&T), Busducts (Make - BHEL / Powergear / C&S)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-flash" />
                  </span>
                  <div className="desc">
                    <h3>Testing & Commissioning</h3>
                    <p>
                      Hands of experience in testing of various electrical
                      equipements like MV & LV Switchgears, Numerical relays (Micom / SEL / Siprotec), Variable Frequency Drives (Siemens / Yaskawa), Protection Schemes, Instrument Transformers, Power & Distribution
                      Transformers, MV Cables, MV & LV Motors, {" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                  <span className="icon">
                    <i className="icon-code" />
                  </span>
                  <div className="desc">
                    <h3>Programming</h3>
                    <p>
                      Beginer level skills in Java programming language as an
                      hobby. Worked with platforms like VS Code, Arduino IDE,
                      Android Studio, Scratch, App Inventor
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Embedded System</h3>
                    <p>
                      {" "}
                      Love to tinker with microcontrollers and developement boards
                      like Arduino, Raspberry Pi, ESP8266, ESP32, AVR Microcontrollers for various IoT
                      projects like Home Automation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
