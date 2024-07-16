import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState, useEffect, useRef } from 'react';
import Login from "../components/login";
import Signup from "../components/signup";
import "../styles/lander.css"
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: 'How does it work?',
    answer: 'Our application uses advanced algorithms to analyze your spending patterns and predict future budget management.',
  },
  {
    question: 'Is it accurate?',
    answer: 'Yes, our predictions are highly accurate based on historical data and real-time financial trends.',
  },
  {
    question: 'Can I customize predictions?',
    answer: 'Absolutely! You can tailor predictions to fit your unique financial goals and preferences.',
  },
  {
    question: 'Is it secure?',
    answer: 'Rest assured, we prioritize data security and use encryption to protect your financial information.',
  },
  {
    question: 'How to get started?',
    answer: 'Simply download the app, link your accounts, and let our prediction engine do the rest.',
  },
];

export default function LanderPage() {
  const [showSignup,setShowSignup] = useState(false)
  const [showLogin,setShowLogin] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false);
  const [open, setOpen] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleToggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const slidesRef = useRef(null);
  const slideWidth = 400; // Adjust according to your image size
  const autoplayInterval = 2500; // Autoplay interval in milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      slideTo(currentIndex + 1);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideTo = (index) => {
    const totalSlides = slidesRef.current.children.length / 3; // Divide by 3 to account for duplicated slides

    // Calculate the new index within the bounds of the total slides
    let newIndex = index;
    if (newIndex >= totalSlides * 3) {
      newIndex = 0;
    }

    // Calculate the translateX position
    const newPosition = -(newIndex * slideWidth);

    // Apply the transition for smooth sliding effect
    slidesRef.current.style.transition = 'transform 0.5s ease-in-out';
    slidesRef.current.style.transform = `translateX(${newPosition}px)`;

    // Update the currentIndex state
    setCurrentIndex(newIndex);
  };
  return (
    <div>
  <section className="menu menu2 w-full absolute flex justify-center" id="menu-5-uhgOFZHjRh">
    <nav className={`bg-white border-b border-gray-200 w-[90%] ${showNavbar ? '' : 'rounded-full'}`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center ">
      <div className="flex items-center">
        <span className="flex-shrink-0">
          <img
            src="https://i.ibb.co/V34yYZT/removal-ai-ca41a68d-d9a3-42f5-8111-14f6f72bbcb8-planmybucks.png"
            className="h-20 pr-4"
            alt="Logo"
          />
        </span>
      </div>
      <div className="flex md:hidden">
        <button
          className="text-gray-500 hover:text-black focus:outline-none focus:text-black"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarSupportedContent"
          aria-expanded={showNavbar}
          aria-label="Toggle navigation"
        >
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className="hidden md:flex md:items-center gap-4">
        <a className="text-black no-underline text-lg hover:text-gray-700" href="https://mobiri.se">
          Home
        </a>
        <a className="text-black no-underline text-lg hover:text-gray-700" href="https://mobiri.se">
          About
        </a>
        <a className="text-black no-underline text-lg hover:text-gray-700" href="https://mobiri.se">
          Contact Us
        </a>
        <button
          onClick={() => setShowLogin(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Login
        </button>
        {showLogin && <Login onClose={() => setShowLogin(false)} />}
      </div>
    </div>
    {showNavbar && (
      <div className="md:hidden">
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <li>
            <a className="text-black text-lg hover:text-gray-700 block" href="https://mobiri.se">
              Home
            </a>
          </li>
          <li>
            <a className="text-black text-lg hover:text-gray-700 block" href="https://mobiri.se">
              About
            </a>
          </li>
          <li>
            <a className="text-black text-lg hover:text-gray-700 block" href="https://mobiri.se">
              Contact Us
            </a>
          </li>
          <li>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
            >
              Login
            </button>
            {showLogin && <Login onClose={() => setShowLogin(false)} />}
          </li>
        </ul>
      </div>
    )}
  </nav>

      
    </section>
  <section className="header16 flex flex-col justify-center">
    <div className="container-fluid mb-[-10%]">
      <div className="row">
        <div className="content-wrap ">
          <h1 className="mb-4 flex text-7xl justify-center">
            <strong>Plan my Bucks</strong>
          </h1>
          <p className="mb-4 flex justify-center text-xl">Unleash the Magic of Budget Prediction - Let Your Finances Flourish!</p>
          <div className='d-flex justify-content-center w-100'>
            {/* <a className="btn btn-white-outline display-7" href="https://mobiri.se">Get Started</a> */}
            <button onClick={() => setShowSignup(true)} className="px-4 py-3 bg-slate-200 border border-black font-semibold rounded-full hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-opacity-50">Get Started</button>
            {showSignup && <Signup onClose={()=> {setShowSignup(false)}}/>}
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="article01 py-8" id="about-us-1-uhgOFZJgyX">
  <div className="container mx-auto">
    <div className="flex justify-center">
      <div className="card w-full lg:w-10/12">
        <div className="card-wrapper">
          <div className="flex flex-wrap">
            <div className="image-wrapper w-full sm:w-1/2 flex justify-center p-4">
              <img src="https://r.mobirisesite.com/537752/assets/images/photo-1623911380860-a6bd045003dc.jpeg" alt="Budget Mastery" />
            </div>
            <div className="image-wrapper w-full sm:w-1/2 flex justify-center p-4">
              <img src="https://r.mobirisesite.com/537752/assets/images/photo-1454165804606-c3d57bc86b40.jpeg" alt="Budget Mastery" />
            </div>
          </div>
          <div className="card-box text-left mb-3 card-content-text p-4">
            <h4 className="card-title font-bold text-2xl mb-4">
              <strong>Our Mission: Budget Mastery</strong>
            </h4>
            <p className="mbr-text text-base mb-2">Welcome to BudgetPro, where we revolutionize the way you manage your finances by predicting your budget like never before.</p>
            <p className="mbr-text text-base mb-2">Our cutting-edge application uses advanced algorithms to forecast your financial future, giving you the power to make informed decisions and secure your financial well-being.</p>
            <p className="mbr-text text-base mb-2">Join us on this exciting journey to financial freedom and take control of your budget with confidence.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="w-full py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full md:w-10/12">
            <div className="text-center mb-8">
              <h4 className="text-3xl font-bold">Budget Management Prediction FAQs</h4>
            </div>
            <div className="space-y-4" id="accordion">
              {faqData.map((faq, index) => (
                <div className="border border-gray-200 rounded" key={index}>
                  <div
                    className="bg-gray-100 cursor-pointer p-4 flex justify-between items-center"
                    onClick={() => handleToggle(index)}
                    id={`heading${index}`}
                  >
                    <h6 className="text-xl font-semibold">{faq.question}</h6>
                    <ChevronDown />
                  </div>
                  <div
                    id={`collapse${index}`}
                    className={`overflow-hidden transition-all duration-300 ${open === index ? 'max-h-screen' : 'max-h-0'}`}
                    aria-labelledby={`heading${index}`}
                  >
                    <div className="p-4">
                      <p className="text-base">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  <section className="news08 py-8" id="blog-3-uhgOFZKq80">
  <div className="container mx-auto">
    <div className="flex justify-center mb-5">
      <div className="w-full">
        <div className="mbr-section-head text-center">
          <h4 className="mbr-section-title font-bold text-4xl mb-0">
            <strong>Insightful Finance Articles</strong>
          </h4>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <div className="item features-image">
        <div className="item-wrapper">
          <div className="item-img mb-3">
            <img src="https://r.mobirisesite.com/537752/assets/images/photo-1500496733680-167c3db69389.jpeg" alt="Budgeting Like a Pro" className="w-full object-cover" style={{"height": "300px"}}/>
          </div>
          <div className="item-content text-left">
            <h5 className="item-title text-base mb-2">June 25, 2024</h5>
            <h6 className="item-subtitle font-bold text-xl mb-2">
              <strong>Mastering Budgeting Like a Pro</strong>
            </h6>
            <p className="mbr-text text-base">Learn expert tips on optimizing your budget and achieving financial freedom.</p>
          </div>
        </div>
      </div>
      <div className="item features-image">
        <div className="item-wrapper">
          <div className="item-img mb-3">
            <img src="https://r.mobirisesite.com/537752/assets/images/photo-1669951584304-8da02ea5a54f.jpeg" alt="Future of Financial Planning" className="w-full object-cover" style={{"height": "300px"}}/>
          </div>
          <div className="item-content text-left">
            <h5 className="item-title text-base mb-2">June 18, 2024</h5>
            <h6 className="item-subtitle font-bold text-xl mb-2">
              <strong>The Future of Financial Planning</strong>
            </h6>
            <p className="mbr-text text-base">Learn expert tips on optimizing your budget and achieving financial freedom.</p>
          </div>
        </div>
      </div>
      <div className="item features-image">
        <div className="item-wrapper">
          <div className="item-img mb-3">
            <img src="https://r.mobirisesite.com/537752/assets/images/photo-1574607383476-f517f260d30b.jpeg" alt="Unlocking Wealth" className="w-full object-cover" style={{"height": "300px"}}/>
          </div>
          <div className="item-content text-left">
            <h5 className="item-title text-base mb-2">June 10, 2024</h5>
            <h6 className="item-subtitle font-bold text-xl mb-2">
              <strong>Unlocking Wealth: Smart Investments</strong>
            </h6>
            <p className="mbr-text text-base">Discover the secrets to growing your wealth through strategic investments.</p>
          </div>
        </div>
      </div>
      <div className="item features-image">
        <div className="item-wrapper">
          <div className="item-img mb-3">
            <img src="https://r.mobirisesite.com/537752/assets/images/photo-1623911380537-730d0e2403bd.jpeg" alt="Budgeting for Beginners" className="w-full object-cover" style={{"height": "300px"}}/>
          </div>
          <div className="item-content text-left">
            <h5 className="item-title text-base mb-2">June 3, 2024</h5>
            <h6 className="item-subtitle font-bold text-xl mb-2">
              <strong>Budgeting for Beginners</strong>
            </h6>
            <p className="mbr-text text-base">Essential guide for newcomers to budget management and financial planning.</p>
          </div>
        </div>
      </div>
      <div className="item features-image">
        <div className="item-wrapper">
          <div className="item-img mb-3">
            <img src="https://r.mobirisesite.com/537752/assets/images/photo-1520607162513-77705c0f0d4a.jpeg" alt="Power of Saving" className="w-full object-cover" style={{"height": "300px"}}/>
          </div>
          <div className="item-content text-left">
            <h5 className="item-title text-base mb-2">May 27, 2024</h5>
            <h6 className="item-subtitle font-bold text-xl mb-2">
              <strong>The Power of Saving: Building Wealth</strong>
            </h6>
            <p className="mbr-text text-base">Explore the impact of saving habits on long-term financial success.</p>
          </div>
        </div>
      </div>
      <div className="item features-image">
        <div className="item-wrapper">
          <div className="item-img mb-3">
            <img src="https://r.mobirisesite.com/537752/assets/images/photo-1544761634-dc512f2238a3.jpeg" alt="Financial Freedom" className="w-full object-cover" style={{"height": "300px"}}/>
          </div>
          <div className="item-content text-left">
            <h5 className="item-title text-base mb-2">May 20, 2024</h5>
            <h6 className="item-subtitle font-bold text-xl mb-2">
              <strong>Financial Freedom: Your Path to Independence</strong>
            </h6>
            <p className="mbr-text text-base">Learn how to break free from financial constraints and achieve true independence.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section  data-bs-version="5.1" className="header14 relative bg-cover bg-center" style={{ backgroundImage: 'url(https://r.mobirisesite.com/537752/assets/images/photo-1544377193-33dcf4d68fb5.jpeg)', "backgroundAttachment":"fixed"}}>
  <div className="container mx-auto">
    <div className="flex justify-center items-center h-screen">
      <div className="card w-full md:w-3/4 lg:w-1/2">
        <div className="card-wrapper">
          <div className="card-box text-center p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <strong>Take Control of Your Finances Today!</strong>
            </h1>
            <div className="mt-4">
              <a className="btn btn-primary text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded" href="https://mobiri.se">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="slider4 w-full overflow-hidden mt-5" id="gallery-13-uhgOFZKc3i">
      <div className="container-fluid mx-auto">
        <div className="row">
          <div className="col-12">
            <div className="embla relative" data-skip-snaps="true" data-align="center" data-contain-scroll="trimSnaps" data-loop="true" data-auto-play="false" data-auto-play-interval={0} data-draggable="true">
              <div className="embla__viewport overflow-hidden">
                <div ref={slidesRef} className="embla__container flex transition-transform duration-500 ease-in-out">
                  {/* Render slides dynamically */}
                  {[
                    "https://r.mobirisesite.com/537752/assets/images/photo-1553729459-efe14ef6055d.jpeg",
                    "https://r.mobirisesite.com/537752/assets/images/photo-1579532582937-16c108930bf6.jpeg",
                    "https://r.mobirisesite.com/537752/assets/images/photo-1589556763393-59ab0f56b811.jpeg",
                    "https://r.mobirisesite.com/537752/assets/images/photo-1620887125006-39190e58fbe4.jpeg",
                    "https://r.mobirisesite.com/537752/assets/images/photo-1542744173-05336fcc7ad4.jpeg",
                  ].map((imageUrl, index) => (
                    <div key={index} className="embla__slide flex-shrink-0 mx-4">
                      <div className="slide-content">
                        <div className="item-img">
                          <div className="item-wrapper">
                            <img
                              src={imageUrl}
                              alt={`Slide ${index + 1}`}
                              className="w-full h-64 object-cover rounded"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Duplicate of slides for continuous sliding */}
                  {[
                    "https://r.mobirisesite.com/537752/assets/images/photo-1553729459-efe14ef6055d.jpeg",
                    "https://r.mobirisesite.com/537752/assets/images/photo-1579532582937-16c108930bf6.jpeg",
                    "https://r.mobirisesite.com/537752/assets/images/photo-1589556763393-59ab0f56b811.jpeg",
                    "https://r.mobirisesite.com/537752/assets/images/photo-1620887125006-39190e58fbe4.jpeg",
                    "https://r.mobirisesite.com/537752/assets/images/photo-1542744173-05336fcc7ad4.jpeg",
                  ].map((imageUrl, index) => (
                    <div key={index + 5} className="embla__slide flex-shrink-0 mx-4">
                      <div className="slide-content">
                        <div className="item-img">
                          <div className="item-wrapper">
                            <img
                              src={imageUrl}
                              alt={`Slide ${index + 1}`}
                              className="w-full h-64 object-cover rounded"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Another set of duplicate slides for continuous sliding */}
                  {[
                    "https://r.mobirisesite.com/537752/assets/images/photo-1553729459-efe14ef6055d.jpeg",
                    "https://r.mobirisesite.com/537752/assets/images/photo-1579532582937-16c108930bf6.jpeg",
                    "https://r.mobirisesite.com/537752/assets/images/photo-1589556763393-59ab0f56b811.jpeg",
                    "https://r.mobirisesite.com/537752/assets/images/photo-1620887125006-39190e58fbe4.jpeg",
                    "https://r.mobirisesite.com/537752/assets/images/photo-1542744173-05336fcc7ad4.jpeg",
                  ].map((imageUrl, index) => (
                    <div key={index + 10} className="embla__slide flex-shrink-0 mx-4">
                      <div className="slide-content">
                        <div className="item-img">
                          <div className="item-wrapper">
                            <img
                              src={imageUrl}
                              alt={`Slide ${index + 1}`}
                              className="w-full h-64 object-cover rounded"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  <section className="gallery07 py-8" id="gallery-16-uhgOFZNK93">
  <div className="container-fluid gallery-wrapper flex flex-col items-center">
    <div className="flex justify-center">
      <div className="w-full">
        <div className="mbr-section-head mb-5 text-center">
          <h4 className="mbr-section-title font-semibold text-5xl mb-0 leading-normal">
            <strong>Dive into Financial<br></br> Wonderland</strong>
          </h4>
        </div>
      </div>
    </div>
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 transform ">
      <div className="grid-item">
        <img src="https://r.mobirisesite.com/537752/assets/images/photo-1624953187665-7d41d0ade16e.jpeg" alt="Financial Wonderland 1" />
      </div>
      <div className="grid-item">
        <img src="https://r.mobirisesite.com/537752/assets/images/photo-1623911381078-f95cba6d9f6f.jpeg" alt="Financial Wonderland 2" />
      </div>
      <div className="grid-item">
        <img src="https://r.mobirisesite.com/537752/assets/images/photo-1620202304757-2be2ae73784d.jpeg" alt="Financial Wonderland 3" />
      </div>
      <div className="grid-item">
        <img src="https://r.mobirisesite.com/537752/assets/images/photo-1603777953913-d4bace4bf01c.jpeg" alt="Financial Wonderland 4" />
      </div>
    </div>
  </div>
</section>
<section  data-bs-version="5.1" className=" form5 py-12 bg-gray-100" id="contact-form">
  <div className="container mx-auto px-4">
    <div className="flex justify-center">
      <div className="w-full text-center mb-8">
        <h3 className="text-3xl font-bold mb-0">Get in Touch</h3>
      </div>
    </div>
    <div className="form5 flex justify-center">
      <div className="w-full lg:w-2/3">
        <form action="https://mobirise.eu/" method="POST" className="bg-white p-8 shadow-lg rounded-lg">
          <input type="hidden" name="email" data-form-email="true" defaultValue="O2pou8/3zB9ITs25QV7QsIYtFzTNIbfobbRs1LMcv1oPSfieO9PRtUmqxBvcJES4auyUtKycK2MopJhUx8M7r3KSqL5ejasFJ9nkN9UJMSJq4n9XIK0QETQMDgzvV6p5" />
          <div className="hidden" data-form-alert>
            <div className="alert alert-success">Thanks for filling out the form!</div>
          </div>
          <div className="hidden" data-form-alert-danger>
            <div className="alert alert-danger">Oops...! Some problem!</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-group">
              <input type="text" name="name" placeholder="Name" data-form-field="name" className="form-control w-full p-2 border border-gray-300 rounded" id="name-contact-form" />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" data-form-field="email" className="form-control w-full p-2 border border-gray-300 rounded" id="email-contact-form" />
            </div>
          </div>
          <div className="form-group mt-4">
            <textarea name="textarea" placeholder="Message" data-form-field="textarea" className="form-control w-full p-2 border border-gray-300 rounded" id="textarea-contact-form"></textarea>
          </div>
          <div className="text-center mt-6">
            <button type="submit" className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
<section  data-bs-version="5.1"  className="footer3 bg-gray-800 py-12" id="footer">
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <ul className="flex space-x-4">
          <li className="text-white text-lg">
            <a href="#">Home</a>
          </li>
          <li className="text-white text-lg">
            <a href="#">About</a>
          </li>
          <li className="text-white text-lg">
            <a href="#">Contact</a>
          </li>
          <li className="text-white text-lg">
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
      <div className="flex space-x-4 mt-4">
        <a href="https://mobiri.se/" target="_blank" rel="noreferrer" className="text-white text-2xl">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://mobiri.se/" target="_blank" rel="noreferrer" className="text-white text-2xl">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://mobiri.se/" target="_blank" rel="noreferrer" className="text-white text-2xl">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://mobiri.se/" target="_blank" rel="noreferrer" className="text-white text-2xl">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://mobiri.se/" target="_blank" rel="noreferrer" className="text-white text-2xl">
          <i className="fab fa-twitch"></i>
        </a>
      </div>
      <div className="mt-5 text-center">
        <p className="text-white text-sm">© 2024 Budget Wizard. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</section>
</div>
  );
}