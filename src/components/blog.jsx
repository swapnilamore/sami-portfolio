import React, { Component } from 'react'
import BlogItem from './blogitem'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
					<BlogItem
						date = "December 21, 2023"
						category = "Protection"
						link = "https://blog.swapnilmore.page/2023/12/differential-protection-journey-from.html"
						title = "Differential Protection : The Journey from Relay Settings to Relay Testing"
						imagesrc = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgn_x5uORlyFNVqiYQMEYuB2qZdSCr937-1x6G8k71mq0AiOQy1oSdGYJiXr2DTLG7TECg5B3q6hRuHRusSEeZIJOOcKsPvafuYvswpFWwjDtoY08ICF_hkKyRT8UK8e7Od2KnLIJTXweNJHh-YfLEuoogHYcyA4jSDnhy7SZ_p-Cnl8-CeeSTnVx3f4G2d/s1080/Journey%20of%20Differential%20Protection.gif"
					/>

					<BlogItem
						date = "December 21, 2023"
						category = "Testing"
						link = "https://blog.swapnilmore.page/2023/11/generator-excitation-dummy-load-test-of.html"
						title = "Generator Excitation: Dummy Load test of AVR"
						imagesrc = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVnoEF6-aCPgWYdEUOy_0ipsZDFwA6ZYL_Ic4ou04EePL9m9hAROHHSPyqYrYwz8g949EEFGJB2l3-IjyHZGZoRJLfoenJsa12VpFGaD09WVYFn4Ei3RLfJSgY1WfNFMrmWfFhRv3utHPxxhD_ExmIeYVvL-_npY44EWmC1pXJFnCl2V6khtPVnKob-Jcz/s1024/Designer.gif"
					/>
					
					<BlogItem
						date = "October 24, 2023"
						category = "Programming"
						link = "https://blog.swapnilmore.page/2023/10/node-red-installation-guide-for-windows.html"
						title = "Node-RED Installation Guide for Windows, Linux, and Raspberry Pi"
						imagesrc = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAqv070R-QGpeIF4g0w6VusgkmHhi8TQlF9lEpunMmehpEIABum2Lp1hyphenhyphen9j2s7CdrFBZAutqETSf2QRByxpZqwYc4oXow-ar2InqTx9uyxKLSFD5dlWTqBt3PP0ZvtZx-I6x5c-ZCaDFXdpT4cZmRfGfO5A0tvsupb8ad83qEP9kf68Uo18PRt6nRxTZj3/s771/Untitled.jpg"
					/>
				</div>

				<div className="row">
					<BlogItem
						date = "May 21, 2023"
						category = "Testing"
						link = "https://blog.swapnilmore.page/2023/05/stability-matters-deep-dive-into.html"
						title = "Stability Matters: A Deep Dive into Proving Transformer REF Protection"
						imagesrc = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkqbCqIhQdTGp2FJAIZruTJwI0sGhzcvIhVQvS7m0uVaou98s_JukWqmdoP9gaZVBYUoF3o5Q7DooZ2eRKqgcSTbdeGMX2fQ1xum26pmbVpbtyaxl93Wb8lFlgGX5HMl85Yx_6FPhzeNiKuQuRr_wdR59OtN_XHR7KPoSWDn1EpGsWvo88bEzlx0H_jg/s518/REF%20Protection%20-%20Blog%20Title.png"
					/>

					<BlogItem
						date = "May 13, 2023"
						category = "Analysis"
						link = "https://blog.swapnilmore.page/2023/05/machine-learning-for-motor-current.html"
						title = "Machine Learning for Motor Current Signature Analysis"
						imagesrc = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSKtRbebL-KduPQ2RpvM7chsJwbYbho9u2gvu7VWyO89pvPcg7t_Ox8r9cvl8EOELRf0Acjn6e92zftP5p-otNio4RyG2cIZfBVZ5ZAwG9-enICC4ei0X0gUKt2D0fsE740iDwGflgLc_8BmdmMd3fkhPitDegudE6f5U2cqyqKMErt8n-8qSHwOrwbQ/s947/MCSA_ML%20Flow.png"
					/>

					<BlogItem
						date = "May 13, 2023"
						category = "Analysis"
						link = "https://blog.swapnilmore.page/2023/05/motor-current-signature-analysis.html"
						title = "Motor Current Signature Analysis"
						imagesrc = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWuM-kluefMTmbbVtCtxymEe4hhWldHna4UAK6nMXd-RDQ1DzX07wfxHZ-R0-QXPByQwge6slAhclAa6zNfqB6HucvL7RDtVUM1mZw3ylBknuxy6por1hEVFC5y4R9-p_12FgGBaHXHcEceOQ-cbBlvvnBtcByOBE8Q1yro4nM-Wwe6wECcPvpPmOPUg/s1160/Drawing1.jpg" 
					/>
				</div>
			</div>
			</section>
      </div>
    )
  }
}
