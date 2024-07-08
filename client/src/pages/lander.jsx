import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import Login from "../components/login";
import Signup from "../components/signup";
import "../styles/lander.css"


export default function LanderPage() {
  const [showSignup,setShowSignup] = useState(false)
  const [showLogin,setShowLogin] = useState(false)
  return (
    <div>
  {/* Site made with Mobirise Online Website Builder v5.9.13, https://a.mobirise.com */}
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="generator" content="Mobirise v5.9.13, a.mobirise.com" />
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
  <link rel="shortcut icon" href="https://r.mobirisesite.com/537752/assets/images/photo-1618487327695-db3012405065.jpeg" type="image/x-icon" />
  <meta name="description" content="Create accurate budget predictions with our innovative application. Manage your finances like never before." />
  <title>Budget Prediction Pro</title>
  <link rel="stylesheet" href="https://r.mobirisesite.com/537752/assets/web/assets/mobirise-icons2/mobirise2.css?rnd=1719830122196" />
  <link rel="stylesheet" href="https://r.mobirisesite.com/537752/assets/bootstrap/css/bootstrap.min.css?rnd=1719830122196" />
  <link rel="stylesheet" href="https://r.mobirisesite.com/537752/assets/bootstrap/css/bootstrap-grid.min.css?rnd=1719830122196" />
  <link rel="stylesheet" href="https://r.mobirisesite.com/537752/assets/bootstrap/css/bootstrap-reboot.min.css?rnd=1719830122196" />
  <link rel="stylesheet" href="https://r.mobirisesite.com/537752/assets/parallax/jarallax.css?rnd=1719830122196" />
  <link rel="stylesheet" href="https://r.mobirisesite.com/537752/assets/dropdown/css/style.css?rnd=1719830122196" />
  <link rel="stylesheet" href="https://r.mobirisesite.com/537752/assets/socicon/css/styles.css?rnd=1719830122196" />
  <link rel="stylesheet" href="https://r.mobirisesite.com/537752/assets/theme/css/style.css?rnd=1719830122196" />
  <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;700&display=swap&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'" />
  <noscript>&lt;link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;700&amp;display=swap&amp;display=swap"&gt;</noscript>
  <link rel="stylesheet" href="https://r.mobirisesite.com/537752/assets/css/mbr-additional.css?rnd=1719830122196" type="text/css" />
  <style dangerouslySetInnerHTML={{__html: "\n.navbar-fixed-top {\n  top: auto;\n}\n#mobiriseBanner.container-banner {\n  height: 8rem;\n  opacity: 1;\n  -webkit-animation: 4s linear animationHeight;\n  -moz-animation: 4s linear animationHeight;\n    -o-animation: 4s linear animationHeight;\n       animation: 4s linear animationHeight;\n       transition: all  0.5s;\n}\n#mobiriseBanner.container-banner.container-banner-closing {\n  pointer-events: none;\n  height: 0;\n  opacity: 0;\n  -webkit-animation: 0.5s linear animationClosing;\n  -moz-animation:  0.5s linear animationClosing;\n    -o-animation:  0.5s linear animationClosing;\n       animation:  0.5s linear animationClosing;\n}\n#mobiriseBanner .banner {\n  min-height: 8rem;\n  position:fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: #fff;\n  padding: 10px;\n  opacity:1;\n  -webkit-animation: 4s linear animationBanner;\n  -moz-animation: 4s linear animationBanner;\n    -o-animation: 4s linear animationBanner;\n       animation: 4s linear animationBanner;\n  z-index: 1031;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n#mobiriseBanner .banner p {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  animation: none;\n  visibility: visible;\n}\n#mobiriseBanner .buy-license {\n  text-decoration: underline;\n}\n#mobiriseBanner .banner .btn {\n  margin: 0.3rem 0.5rem;\n  animation: none;\n  visibility: visible;\n}\n.navbar.opened {\n    z-index: 1032;\n}\n@-webkit-keyframes animationBanner { 0% { opacity: 0; top: -8rem; } 75% { opacity: 0; top: -8rem; } 100% { opacity: 1; top: 0; } }\n@-moz-keyframes animationBanner { 0% { opacity: 0; top: -8rem; } 75% { opacity: 0; top: -8rem; } 100% { opacity: 1; top: 0; } }\n@-o-keyframes animationBanner { 0% { opacity: 0; top: -8rem; } 75% { opacity: 0; top: -8rem; } 100% { opacity: 1; top: 0; } }\n   @keyframes animationBanner { 0% { opacity: 0; top: -8rem; } 75% { opacity: 0; top: -8rem; } 100% { opacity: 1; top: 0; } }\n@-webkit-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 8rem; } }\n@-moz-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 8rem; } }\n@-o-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 8rem; } }\n   @keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 8rem; } }\n   \n@-webkit-keyframes animationClosing { 0% { height: 8rem; opacity: 1; } 30% { height: 8rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n@-moz-keyframes animationClosing { 0% { height: 8rem; opacity: 1; } 30% { height: 8rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n@-o-keyframes animationClosing { 0% { height: 8rem; opacity: 1; } 30% { height: 8rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n@keyframes animationClosing { 0% { height: 8rem; opacity: 1; } 30% { height: 8rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n\n@media(max-width: 767px) {\n  #mobiriseBanner.container-banner {\n    height: 12rem;\n  }\n  #mobiriseBanner .banner {\n    min-height: 12rem;\n  }\n  @-webkit-keyframes animationBanner { 0% { opacity: 0; top: -12rem; } 75% { opacity: 0; top: -12rem; } 100% { opacity: 1; top: 0; } }\n  @-moz-keyframes animationBanner { 0% { opacity: 0; top: -12rem; } 75% { opacity: 0; top: -12rem; } 100% { opacity: 1; top: 0; } }\n  @-o-keyframes animationBanner { 0% { opacity: 0; top: -12rem; } 75% { opacity: 0; top: -12rem; } 100% { opacity: 1; top: 0; } }\n    @keyframes animationBanner { 0% { opacity: 0; top: -12rem; } 75% { opacity: 0; top: -12rem; } 100% { opacity: 1; top: 0; } }\n  @-webkit-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 12rem; } }\n  @-moz-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 12rem; } }\n  @-o-keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 12rem; } }\n    @keyframes animationHeight { 0% { height: 0; } 75% { height: 0; } 100% { height: 12rem; } }\n\n  @-webkit-keyframes animationClosing { 0% { height: 12rem; opacity: 1; } 30% { height: 12rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n  @-moz-keyframes animationClosing { 0% { height: 12rem; opacity: 1; } 30% { height: 12rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n  @-o-keyframes animationClosing { 0% { height: 12rem; opacity: 1; } 30% { height: 12rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n  @keyframes animationClosing { 0% { height: 12rem; opacity: 1; } 30% { height: 12rem; opacity: 0.5;} 100% { height: 0; opacity: 0;} }\n}\n" }} />
  {/* <div class="container-banner" id="mobiriseBanner">
  <div class="banner align-center">
    <button type="button" onclick="document.getElementById('mobiriseBanner').classList.add('container-banner-closing')" class="btn-close" aria-label="Close" style="position: fixed;top: 16px;right: 16px;"></button>
    <p class="mbr-text mbr-fonts-style display-7">The site was created with Mobirise Free <a href="https://mobirise.com/" class="mbr-black">Website Builder Software</a></p>
    <div class="mbr-section-btn">
<a class="btn btn-sm btn-primary display-4" href="https://mobirise.com/">Create Your Website!</a>
<a class="btn btn-sm btn-secondary display-4" href="https://mobirise.com/p/?u=3306867">Remove This Banner</a>
    </div>
  </div>
</div> */}
  <section data-bs-version="5.1" className="menu menu2 cid-uhgOFZHjRh" once="menu" id="menu-5-uhgOFZHjRh">
  <nav className="navbar navbar-dropdown navbar-expand-lg">
    <div className="container">
      <div className="navbar-brand">
        <span className="navbar-logo">
          <img src="https://i.ibb.co/V34yYZT/removal-ai-ca41a68d-d9a3-42f5-8111-14f6f72bbcb8-planmybucks.png" style={{ height: '5rem', paddingRight: '1rem' }} alt="Logo" />
        </span>
        {/* <span className="navbar-caption-wrap"><a className="navbar-caption text-black display-4" href="https://mobiri.se">BudgetPro</a></span> */}
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <div className="hamburger">
          <span />
          <span />
          <span />
          <span />
        </div>
      </button>
      <div className="navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
          <li className="nav-item">
            <a className="nav-link link text-black display-4" href="https://mobiri.se">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link text-black display-4" href="https://mobiri.se" aria-expanded="false">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link text-black display-4" href="https://mobiri.se">Contact Us</a>
          </li>
        </ul>
        <div className="">
          <button onClick={() => setShowLogin(true)} className="btn btn-primary display-4 rounded-pill">Login</button>
          {showLogin && <Login onClose={() => { setShowLogin(false) }} />}
        </div>
      </div>
    </div>
  </nav>
</section>
  <section data-bs-version="5.1" className="header16 cid-uhgOFZIoWj mbr-fullscreen mbr-parallax-background" id="hero-17-uhgOFZIoWj">
    <div className="container-fluid">
      <div className="row">
        <div className="content-wrap col-12 col-md-12">
          <h1 className="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">
            <strong>Plan my Bucks</strong>
          </h1>
          <p className="mbr-fonts-style mbr-text mbr-white mb-4 display-7">Unleash the Magic of Budget Prediction - Let Your Finances Flourish!</p>
          <div className='d-flex justify-content-center w-100'>
            {/* <a className="btn btn-white-outline display-7" href="https://mobiri.se">Get Started</a> */}
            <button onClick={() => setShowSignup(true)} className="btn btn-outline border-black display-7 bg-light rounded-pill">Get Started</button>
            {showSignup && <Signup onClose={()=> {setShowSignup(false)}}/>}
            
          </div>
        </div>
      </div>
    </div>
  </section>
  <section data-bs-version="5.1" className="article01 cid-uhgOFZJgyX" id="about-us-1-uhgOFZJgyX">
    <div className="container">
      <div className="row justify-content-center">
        <div className="card col-md-12 col-lg-12">
          <div className="card-wrapper">
            <div className="row">
              <div className="image-wrapper col-12 col-sm-6 justify-content-center">
                <img src="https://r.mobirisesite.com/537752/assets/images/photo-1623911380860-a6bd045003dc.jpeg" alt="Mobirise Website Builder" />
              </div>
              <div className="image-wrapper col-12 col-sm-6 justify-content-center">
                <img src="https://r.mobirisesite.com/537752/assets/images/photo-1454165804606-c3d57bc86b40.jpeg" alt="Mobirise Website Builder" />
              </div>
            </div>
            <div className="card-box align-left mb-3 card-content-text">
              <h4 className="card-title mbr-fonts-style mbr-white mb-0 display-5">
                <strong>Our Mission: Budget Mastery</strong>
              </h4>
              <p className="mbr-text mbr-fonts-style mt-3 mb-0 display-7">Welcome to BudgetPro, where we revolutionize the way you manage your finances by predicting your budget like never before.</p>
              <p className="mbr-text mbr-fonts-style mt-3 mb-0 display-7">Our cutting-edge application uses advanced algorithms to forecast your financial future, giving you the power to make informed decisions and secure your financial well-being.</p>
              <p className="mbr-text mbr-fonts-style mt-3 mb-0 display-7">Join us on this exciting journey to financial freedom and take control of your budget with confidence.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <section data-bs-version="5.1" class="people05 cid-uhgOFZJbgv" id="testimonials-5-uhgOFZJbgv">
	

	
	
	<div class="container">
		<div class="row mb-5 justify-content-center">
			<div class="col-12 mb-0 content-head">
				<h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
					<strong>Rave</strong>
				</h3>
				
			</div>
		</div>
		<div class="row">
			<div class="item features-without-image col-12 col-md-6 col-lg-4 active">
				<div class="item-wrapper">
					<div class="card-box align-left">
						<p class="card-text mbr-fonts-style display-7">BudgetPro is a game-changer! It accurately predicted my budget fluctuations, saving me from financial stress. Highly recommended!</p>
						<div class="img-wrapper mt-4 mb-3">
							<img src="https://r.mobirisesite.com/537752/assets/images/photo-1564564244660-5d73c057f2d2.jpeg" alt="" data-slide-to="0" data-bs-slide-to="0">
						</div>
						<h5 class="card-title mbr-fonts-style display-7">
							<strong>John Smith</strong>
						</h5>
					</div>
				</div>
			</div>
			<div class="item features-without-image col-12 col-md-6 col-lg-4">
				<div class="item-wrapper">
					<div class="card-box align-left">
						<p class="card-text mbr-fonts-style display-7">I never thought budget management could be this easy. BudgetPro's predictions are spot on, making my life stress-free.</p>
						<div class="img-wrapper mt-4 mb-3">
							<img src="https://r.mobirisesite.com/537752/assets/images/photo-1545386673-7723f55e5490.jpeg" data-slide-to="1" data-bs-slide-to="1" alt="">
						</div>
						<h5 class="card-title mbr-fonts-style display-7">
							<strong>Emily Johnson</strong>
						</h5>
					</div>
				</div>
			</div>
			<div class="item features-without-image col-12 col-md-6 col-lg-4">
				<div class="item-wrapper">
					<div class="card-box align-left">
						<p class="card-text mbr-fonts-style display-7">BudgetPro transformed the way I handle my finances. Its predictions are unbelievably accurate, giving me peace of mind.</p>
						<div class="img-wrapper mt-4 mb-3">
							<img src="https://r.mobirisesite.com/537752/assets/images/photo-1492288991661-058aa541ff43.jpeg" data-slide-to="2" data-bs-slide-to="2" alt="">
						</div>
						<h5 class="card-title mbr-fonts-style display-7">
							<strong>Michael Brown</strong>
						</h5>
					</div>
				</div>
			</div>
			<div class="item features-without-image col-12 col-md-6 col-lg-4">
				<div class="item-wrapper">
					<div class="card-box align-left">
						<p class="card-text mbr-fonts-style display-7">Thanks to BudgetPro, I can now plan ahead with confidence. Its budget forecasts have been a lifesaver for me.</p>
						<div class="img-wrapper mt-4 mb-3">
							<img src="https://r.mobirisesite.com/537752/assets/images/photo-1510274642460-65a8de5e52fd.jpeg" data-slide-to="4" data-bs-slide-to="4" alt="">
						</div>
						<h5 class="card-title mbr-fonts-style display-7">
							<strong>Sophia Davis</strong>
						</h5>
					</div>
				</div>
			</div>
			<div class="item features-without-image col-12 col-md-6 col-lg-4">
				<div class="item-wrapper">
					<div class="card-box align-left">
						<p class="card-text mbr-fonts-style display-7">I'm amazed by BudgetPro's accuracy in predicting my budget. It's like having a financial wizard in my pocket!</p>
						<div class="img-wrapper mt-4 mb-3">
							<img src="https://r.mobirisesite.com/537752/assets/images/photo-1522091066250-665186289043.jpeg" data-slide-to="6" data-bs-slide-to="6" alt="">
						</div>
						<h5 class="card-title mbr-fonts-style display-7">
							<strong>David Wilson</strong>
						</h5>
					</div>
				</div>
			</div>
			<div class="item features-without-image col-12 col-md-6 col-lg-4">
				<div class="item-wrapper">
					<div class="card-box align-left">
						<p class="card-text mbr-fonts-style display-7">BudgetPro exceeded all my expectations. Its budget predictions are so precise, it's like having a crystal ball for my finances.</p>
						<div class="img-wrapper mt-4 mb-3">
							<img src="https://r.mobirisesite.com/537752/assets/images/photo-1541385767762-a55c33eb0c80.jpeg" data-slide-to="7" data-bs-slide-to="7" alt="">
						</div>
						<h5 class="card-title mbr-fonts-style display-7">
							<strong>Jessica Martinez</strong>
						</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
</section> */}
  <section data-bs-version="5.1" className="list1 cid-uhgOFZJDuA" id="faq-1-uhgOFZJDuA">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-10 m-auto">
          <div className="content">
            <div className="row justify-content-center mb-5">
              <div className="col-12 content-head">
                <div className="mbr-section-head">
                  <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                    <strong>Budget Management Prediction FAQs</strong>
                  </h4>
                </div>
              </div>
            </div>
            <div id="bootstrap-accordion_5" className="panel-group accordionStyles accordion" role="tablist" aria-multiselectable="true">
              <div className="card">
                <div className="card-header" role="tab" id="headingOne">
                  <a role="button" className="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core href="#collapse1_5" aria-expanded="false" aria-controls="collapse1">
                    <h6 className="panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-5">How does it work?</h6>
                    <span className="sign mbr-iconfont mobi-mbri-arrow-down" />
                  </a>
                </div>
                <div id="collapse1_5" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_5">
                  <div className="panel-body">
                    <p className="mbr-fonts-style panel-text display-7">Our application uses advanced algorithms to analyze your spending patterns and predict future budget management.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingOne">
                  <a role="button" className="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core href="#collapse2_5" aria-expanded="false" aria-controls="collapse2">
                    <h6 className="panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-5">Is it accurate?</h6>
                    <span className="sign mbr-iconfont mobi-mbri-arrow-down" />
                  </a>
                </div>
                <div id="collapse2_5" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_5">
                  <div className="panel-body">
                    <p className="mbr-fonts-style panel-text display-7">Yes, our predictions are highly accurate based on historical data and real-time financial trends.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingOne">
                  <a role="button" className="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core href="#collapse3_5" aria-expanded="false" aria-controls="collapse3">
                    <h6 className="panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-5">Can I customize predictions?</h6>
                    <span className="sign mbr-iconfont mobi-mbri-arrow-down" />
                  </a>
                </div>
                <div id="collapse3_5" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_5">
                  <div className="panel-body">
                    <p className="mbr-fonts-style panel-text display-7">Absolutely! You can tailor predictions to fit your unique financial goals and preferences.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingOne">
                  <a role="button" className="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core href="#collapse4_5" aria-expanded="false" aria-controls="collapse4">
                    <h6 className="panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-5">Is it secure?</h6>
                    <span className="sign mbr-iconfont mobi-mbri-arrow-down" />
                  </a>
                </div>
                <div id="collapse4_5" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_5">
                  <div className="panel-body">
                    <p className="mbr-fonts-style panel-text display-7">Rest assured, we prioritize data security and use encryption to protect your financial information.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingOne">
                  <a role="button" className="panel-title collapsed" data-toggle="collapse" data-bs-toggle="collapse" data-core href="#collapse5_5" aria-expanded="false" aria-controls="collapse5">
                    <h6 className="panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-5">How to get started?</h6>
                    <span className="sign mbr-iconfont mobi-mbri-arrow-down" />
                  </a>
                </div>
                <div id="collapse5_5" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" data-bs-parent="#bootstrap-accordion_5">
                  <div className="panel-body">
                    <p className="mbr-fonts-style panel-text display-7">Simply download the app, link your accounts, and let our prediction engine do the rest.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <section data-bs-version="5.1" class="features10 cid-uhgOFZK7mS" id="metrics-2-uhgOFZK7mS">
  

  
  
  <div class="container">
    
    <div class="row justify-content-center">
<div class="item features-without-image col-12 col-md-6 col-lg-4">
  <div class="item-wrapper">
    <div class="card-box align-left">
      
      <p class="card-title mbr-fonts-style mb-3 display-1">
        <strong>98%</strong>
      </p>
      <p class="card-text mbr-fonts-style mb-3 display-7">Prediction Accuracy</p>
      
    </div>
  </div>
</div>
<div class="item features-without-image col-12 col-md-6 col-lg-4">
  <div class="item-wrapper">
    <div class="card-box align-left">
      
      <p class="card-title mbr-fonts-style mb-3 display-1">
        <strong>$1.5M</strong>
      </p>
      <p class="card-text mbr-fonts-style mb-3 display-7">Total Savings Forecast</p>
      
    </div>
  </div>
</div>
<div class="item features-without-image col-12 col-md-6 col-lg-4">
  <div class="item-wrapper">
    <div class="card-box align-left">
      
      <p class="card-title mbr-fonts-style mb-3 display-1">
        <strong>500K+</strong>
      </p>
      <p class="card-text mbr-fonts-style mb-3 display-7">Happy Users</p>
      
    </div>
  </div>
</div>
    </div>
  </div>
</section> */}
  <section data-bs-version="5.1" className="news08 cid-uhgOFZKq80" id="blog-3-uhgOFZKq80">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-12 content-head">
          <div className="mbr-section-head">
            <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
              <strong>Insightful Finance Articles</strong>
            </h4>
          </div>
        </div>
      </div>
      <div className="row mbr-masonry" data-masonry="{&quot;percentPosition&quot;: true }">
        <div className="item features-image col-12 col-md-6 col-lg-6 active">
          <div className="item-wrapper">
            <div className="item-img mb-3">
              <img src="https://r.mobirisesite.com/537752/assets/images/photo-1500496733680-167c3db69389.jpeg" alt="Mobirise Website Builder" title />
            </div>
            <div className="item-content align-left">
              <h5 className="item-title mbr-fonts-style display-7">June 25, 2024</h5>
              <h6 className="item-subtitle mbr-fonts-style display-5">
                <strong>Mastering Budgeting Like a Pro</strong>
              </h6>
              <p className="mbr-text mbr-fonts-style display-7">Learn expert tips on optimizing your budget and achieving financial freedom.</p>
            </div>
          </div>
        </div>
        <div className="item features-image col-12 col-md-6 col-lg-6">
          <div className="item-wrapper">
            <div className="item-img mb-3">
              <img src="https://r.mobirisesite.com/537752/assets/images/photo-1669951584304-8da02ea5a54f.jpeg" alt="Mobirise Website Builder" title />
            </div>
            <div className="item-content align-left">
              <h5 className="item-title mbr-fonts-style display-7">June 18, 2024</h5>
              <h6 className="item-subtitle mbr-fonts-style display-5">
                <strong>The Future of Financial Planning</strong>
              </h6>
              <p className="mbr-text mbr-fonts-style display-7">Learn expert tips on optimizing your budget and achieving financial freedom.</p>
            </div>
          </div>
        </div>
        <div className="item features-image col-12 col-md-6 col-lg-6">
          <div className="item-wrapper">
            <div className="item-img mb-3">
              <img src="https://r.mobirisesite.com/537752/assets/images/photo-1574607383476-f517f260d30b.jpeg" alt="Mobirise Website Builder" title />
            </div>
            <div className="item-content align-left">
              <h5 className="item-title mbr-fonts-style display-7">June 10, 2024</h5>
              <h6 className="item-subtitle mbr-fonts-style display-5">
                <strong>Unlocking Wealth: Smart Investments</strong>
              </h6>
              <p className="mbr-text mbr-fonts-style display-7">Discover the secrets to growing your wealth through strategic investments.</p>
            </div>
          </div>
        </div>
        <div className="item features-image col-12 col-md-6 col-lg-6">
          <div className="item-wrapper">
            <div className="item-img mb-3">
              <img src="https://r.mobirisesite.com/537752/assets/images/photo-1623911380537-730d0e2403bd.jpeg" alt="Mobirise Website Builder" title />
            </div>
            <div className="item-content align-left">
              <h5 className="item-title mbr-fonts-style display-7">June 3, 2024</h5>
              <h6 className="item-subtitle mbr-fonts-style display-5">
                <strong>Budgeting for Beginners</strong>
              </h6>
              <p className="mbr-text mbr-fonts-style display-7">Essential guide for newcomers to budget management and financial planning.</p>
            </div>
          </div>
        </div>
        <div className="item features-image col-12 col-md-6 col-lg-6">
          <div className="item-wrapper">
            <div className="item-img mb-3">
              <img src="https://r.mobirisesite.com/537752/assets/images/photo-1520607162513-77705c0f0d4a.jpeg" alt="Mobirise Website Builder" title />
            </div>
            <div className="item-content align-left">
              <h5 className="item-title mbr-fonts-style display-7">May 27, 2024</h5>
              <h6 className="item-subtitle mbr-fonts-style display-5">
                <strong>The Power of Saving: Building Wealth</strong>
              </h6>
              <p className="mbr-text mbr-fonts-style display-7">Explore the impact of saving habits on long-term financial success.</p>
            </div>
          </div>
        </div>
        <div className="item features-image col-12 col-md-6 col-lg-6">
          <div className="item-wrapper">
            <div className="item-img mb-3">
              <img src="https://r.mobirisesite.com/537752/assets/images/photo-1544761634-dc512f2238a3.jpeg" alt="Mobirise Website Builder" title />
            </div>
            <div className="item-content align-left">
              <h5 className="item-title mbr-fonts-style display-7">May 20, 2024</h5>
              <h6 className="item-subtitle mbr-fonts-style display-5">
                <strong>Financial Freedom: Your Path to Independence</strong>
              </h6>
              <p className="mbr-text mbr-fonts-style display-7">Learn how to break free from financial constraints and achieve true independence.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section data-bs-version="5.1" className="header14 cid-uhgOFZKYH3 mbr-parallax-background" id="call-to-action-1-uhgOFZKYH3">
    <div className="container">
      <div className="row justify-content-center">
        <div className="card col-12 col-md-12 col-lg-8">
          <div className="card-wrapper">
            <div className="card-box align-center">
              <h1 className="card-title mbr-fonts-style mb-4 display-1">
                <strong>Take Control of Your Finances Today!</strong>
              </h1>
              <div className="mbr-section-btn mt-4">
                <a className="btn btn-primary display-7" href="https://mobiri.se">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section data-bs-version="5.1" className="slider4 mbr-embla cid-uhgOFZKc3i" id="gallery-13-uhgOFZKc3i">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="embla position-relative" data-skip-snaps="true" data-align="center" data-contain-scroll="trimSnaps" data-loop="true" data-auto-play="true" data-auto-play-interval={5} data-draggable="true">
            <div className="embla__viewport">
              <div className="embla__container">
                <div className="embla__slide slider-image item" style={{"margin-left":"1rem","margin-right":"1rem"}}>
                  <div className="slide-content">
                    <div className="item-img">
                      <div className="item-wrapper">
                        <img src="https://r.mobirisesite.com/537752/assets/images/photo-1553729459-efe14ef6055d.jpeg" alt="Mobirise Website Builder" title />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="embla__slide slider-image item" style={{"margin-left":"1rem","margin-right":"1rem"}}>
                  <div className="slide-content">
                    <div className="item-img">
                      <div className="item-wrapper">
                        <img src="https://r.mobirisesite.com/537752/assets/images/photo-1579532582937-16c108930bf6.jpeg" alt="Mobirise Website Builder" title />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="embla__slide slider-image item" style={{"margin-left":"1rem","margin-right":"1rem"}}>
                  <div className="slide-content">
                    <div className="item-img">
                      <div className="item-wrapper">
                        <img src="https://r.mobirisesite.com/537752/assets/images/photo-1589556763393-59ab0f56b811.jpeg" alt="Mobirise Website Builder" title />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="embla__slide slider-image item" style={{"margin-left":"1rem","margin-right":"1rem"}}>
                  <div className="slide-content">
                    <div className="item-img">
                      <div className="item-wrapper">
                        <img src="https://r.mobirisesite.com/537752/assets/images/photo-1620887125006-39190e58fbe4.jpeg" alt="Mobirise Website Builder" title />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="embla__slide slider-image item" style={{"margin-left":"1rem","margin-right":"1rem"}}>
                  <div className="slide-content">
                    <div className="item-img">
                      <div className="item-wrapper">
                        <img src="https://r.mobirisesite.com/537752/assets/images/photo-1542744173-05336fcc7ad4.jpeg" alt="Mobirise Website Builder" title />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="embla_button embla_button--prev">
              <span className="mobi-mbri mobi-mbri-arrow-prev" aria-hidden="true" />
              <span className="sr-only visually-hidden visually-hidden">Previous</span>
            </button>
            <button className="embla_button embla_button--next">
              <span className="mobi-mbri mobi-mbri-arrow-next" aria-hidden="true" />
              <span className="sr-only visually-hidden visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <section data-bs-version="5.1" class="gallery10 cid-uhgOFZNt9J" id="features-69-uhgOFZNt9J">
  


  <div class="container-fluid">

<div class="loop-container">
  <div class="item display-1" data-linewords="Master budget predictions with precision! * Unleash the power of financial foresight! * " data-direction="-1" data-speed="0.05">☁ Best offers ☁ Free delivery ☁ Perfect design ☁ Comfort ☁ Support 24/7 ☁ Vibes</div>

  <div class="item display-1" data-linewords="Master budget predictions with precision! * Unleash the power of financial foresight! * " data-direction="-1" data-speed="0.05">☁ Best offers ☁ Free delivery ☁ Perfect design ☁ Comfort ☁ Support 24/7 ☁ Vibes</div>
</div>
    
  </div>
</section> */}
  <section data-bs-version="5.1" className="image02 cid-uhgOFZNMEf mbr-fullscreen mbr-parallax-background" id="image-13-uhgOFZNMEf">
    <div className="container">
      <div className="row" />
    </div>
  </section>
  <section data-bs-version="5.1" className="gallery07 cid-uhgOFZNK93" id="gallery-16-uhgOFZNK93">
    <div className="container-fluid gallery-wrapper">
      <div className="row justify-content-center">
        <div className="col-12 content-head">
          <div className="mbr-section-head mb-5">
            <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
              <strong>Dive into Financial Wonderland</strong>
            </h4>
          </div>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-container-3 moving-left" style={{"-webkit-transform":"translate3d(-200px, 0px, 0px)","-ms-transform":"translate3d(-200px, 0px, 0px)","transform":"translate3d(-200px, 0px, 0px)"}}>
          <div className="grid-item">
            <img src="https://r.mobirisesite.com/537752/assets/images/photo-1624953187665-7d41d0ade16e.jpeg" alt="Mobirise Website Builder" />
          </div>
          <div className="grid-item">
            <img src="https://r.mobirisesite.com/537752/assets/images/photo-1623911381078-f95cba6d9f6f.jpeg" alt="Mobirise Website Builder" />
          </div>
          <div className="grid-item">
            <img src="https://r.mobirisesite.com/537752/assets/images/photo-1620202304757-2be2ae73784d.jpeg" alt="Mobirise Website Builder" />
          </div>
          <div className="grid-item">
            <img src="https://r.mobirisesite.com/537752/assets/images/photo-1603777953913-d4bace4bf01c.jpeg" alt="Mobirise Website Builder" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <section data-bs-version="5.1" class="social05 cid-uhgOFZO1d9" id="follow-us-2-uhgOFZO1d9">
    

    

    <div class="container">
  <div class="row">
      <h3 class="mbr-section-title align-center mb-5 mbr-fonts-style display-2">
          <strong>Join Our Money Tribe</strong>
      </h3>
      <div class="col-12">
          <div class="social-row">
              <div class="soc-item">
                  <a href="https://mobiri.se/" target="_blank">
                      <span class="mbr-iconfont socicon socicon-facebook"></span>
                  </a>
              </div>
              <div class="soc-item">
                  <a href="https://mobiri.se/" target="_blank">
                      <span class="mbr-iconfont socicon-twitter socicon"></span>
                  </a>
              </div>
              <div class="soc-item">
                  <a href="https://mobiri.se/" target="_blank">
                      <span class="mbr-iconfont socicon-instagram socicon"></span>
                  </a>
              </div>
              <div class="soc-item">
                  <a href="https://mobiri.se/" target="_blank">
                      <span class="mbr-iconfont socicon socicon-linkedin"></span>
                  </a>
              </div>
              <div class="soc-item">
                  <a href="https://mobiri.se/" target="_blank">
                      <span class="mbr-iconfont socicon socicon-twitch"></span>
                  </a>
              </div>
          </div>
      </div>
  </div>
    </div>
</section> */}
  <section data-bs-version="5.1" className="form5 cid-uhgOFZP8Mc" id="contact-form-2-uhgOFZP8Mc">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 content-head">
          <div className="mbr-section-head mb-5">
            <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
              <strong>Get in Touch</strong>
            </h3>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
          <form action="https://mobirise.eu/" method="POST" className="mbr-form form-with-styler" data-form-title="Form Name"><input type="hidden" name="email" data-form-email="true" defaultValue="O2pou8/3zB9ITs25QV7QsIYtFzTNIbfobbRs1LMcv1oPSfieO9PRtUmqxBvcJES4auyUtKycK2MopJhUx8M7r3KSqL5ejasFJ9nkN9UJMSJq4n9XIK0QETQMDgzvV6p5" />
            <div className="row">
              <div hidden="hidden" data-form-alert className="alert alert-success col-12">Thanks for filling out the form!</div>
              <div hidden="hidden" data-form-alert-danger className="alert alert-danger col-12">
                Oops...! some problem!
              </div>
            </div>
            <div className="dragArea row">
              <div className="col-md col-sm-12 form-group mb-3" data-for="name">
                <input type="text" name="name" placeholder="Name" data-form-field="name" className="form-control" defaultValue id="name-contact-form-2-uhgOFZP8Mc" />
              </div>
              <div className="col-md col-sm-12 form-group mb-3" data-for="email">
                <input type="email" name="email" placeholder="Email" data-form-field="email" className="form-control" defaultValue id="email-contact-form-2-uhgOFZP8Mc" />
              </div>
              <div className="col-12 form-group mb-3" data-for="textarea">
                <textarea name="textarea" placeholder="Message" data-form-field="textarea" className="form-control" id="textarea-contact-form-2-uhgOFZP8Mc" defaultValue={""} />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn">
                <button type="submit" className="btn btn-primary display-7">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* <section data-bs-version="5.1" class="contacts03 cid-uhgOFZPM9f" id="contacts-11-uhgOFZPM9f">
  

  
  <div class="container">
    <div class="row justify-content-center">
<div class="col-lg-4">
  <div class="col-12 col-md-12">
    <h5 class="mbr-section-title mbr-fonts-style mt-0 mb-4 display-2">
      <strong>Connect Now</strong>
    </h5>
    <p class="mbr-section-subtitle mbr-fonts-style mt-0 mb-4 display-7">
      Phone: +1-800-MONEY-APP
      <br>Email: info@budgetwizard.com
      <br>Address:  India
      <br>Working Hours: Mon-Fri: 9am-6pm
    </p> 

    
  </div>
</div>
  <div class="col-lg-8 side-features">
  <div class="google-map"><iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6045.3003145248895!2d-73.9884657!3d40.7477229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9ac1f1b85%3A0x7e33d1c0e7af3be4!2zMzUwIDV0aCBBdmUsIE5ldyBZb3JrLCBOWSAxMDExOCwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1689597362021!5m2!1sen!2sen" allowfullscreen=""></iframe></div>
</div>
    </div>
  </div>
</section> */}
  <section data-bs-version="5.1" className="footer3 cid-uhgOFZPFqn" once="footers" id="footer-3-uhgOFZPFqn">
    <div className="container">
      <div className="row">
        <div className="row-links">
          <ul className="header-menu">
            <li className="header-menu-item mbr-fonts-style display-5">
              <a href="#" className="text-white">Home</a>
            </li><li className="header-menu-item mbr-fonts-style display-5">
              <a href="#" className="text-white">About</a>
            </li><li className="header-menu-item mbr-fonts-style display-5">
              <a href="#" className="text-white">Contact</a>
            </li><li className="header-menu-item mbr-fonts-style display-5">
              <a href="#" className="text-white">Blog</a>
            </li></ul>
        </div>
        <div className="col-12 mt-4">
          <div className="social-row">
            <div className="soc-item">
              <a href="https://mobiri.se/" target="_blank">
                <span className="mbr-iconfont socicon socicon-facebook display-7" />
              </a>
            </div>
            <div className="soc-item">
              <a href="https://mobiri.se/" target="_blank">
                <span className="mbr-iconfont socicon-twitter socicon" />
              </a>
            </div>
            <div className="soc-item">
              <a href="https://mobiri.se/" target="_blank">
                <span className="mbr-iconfont socicon-instagram socicon" />
              </a>
            </div>
            <div className="soc-item">
              <a href="https://mobiri.se/" target="_blank">
                <span className="mbr-iconfont socicon socicon-linkedin" />
              </a>
            </div>
            <div className="soc-item">
              <a href="https://mobiri.se/" target="_blank">
                <span className="mbr-iconfont socicon socicon-twitch" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 mt-5">
          <p className="mbr-fonts-style copyright display-7">© 2024 Budget Wizard. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </section>
</div>
  );
}