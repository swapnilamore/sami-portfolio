import React, { Component } from 'react'
import ProjectItem from './projectitem'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent DIY Projects</h2>
							</div>
						</div>
						<div className="row">
							<ProjectItem
								link = "https://play.google.com/store/apps/details?id=appinventor.ai_yogesh_amore.ElectricalTripTimeCalci"
								title = "Electrical Protection calci"
								subtitle = "Android App"
								imagesrc = "url(images/EPC.png)"
							/>

							<ProjectItem
								link = "https://play.google.com/store/apps/details?id=appinventor.ai_thinkingsami15.RPL_EMD"
								title = "Power Manage"
								subtitle = "Android App"
								imagesrc = "url(images/PowerManage.png)"
							/>

							<ProjectItem
								link = "https://play.google.com/store/apps/details?id=com.swapnilamore.sunshinehub"
								title = "Sunshine Kids Hub"
								subtitle = "Android App"
								imagesrc = "url(images/Sunshine.png)"
							/>				
						</div>
					</div>
				</section>
      </div>
    )
  }
}
