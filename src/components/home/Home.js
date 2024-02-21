import './Home.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Nav from './../app/nav';
import github from './github.png';
import linkedin from './linkedin.png';
import newton from "./Newton1.png";
import weather from './weather.png';
import bettr from './bettr.png';

function Home() {
  const [smallScreen, setSmallScreen] = useState(false);
  const [hoveredObj, setHoveredObj] = useState({
    project1: false,
    project2: false,
    project3: false,
    resume: false,
    github: false
  })
  //***********FUNCTIONS***********

  //trigger css changes on hovering items
  function setObjHovered(section) {
    setHoveredObj((state) => {
      return {
        ...state,
        [section]: true
      }
    })
  }

  //revert css hover changes to standard
  function setOffObjHovered() {
    setHoveredObj((state) => {
      return {
        project1: false,
        project2: false,
        project3: false,
        resume: false,
        github: false
      }
    })
  }

  function handleNavigate(destination) {
    // navigate(`${destination}`);
    window.location.href = destination;
  }

  //trigger state change at 1024 px

  useEffect(() => {

    scrollSpy.update();

    function handleResize() {
      setSmallScreen(state => window.innerWidth >= 1024);
    }
    handleResize();
    //add event listener when component mounts
    window.addEventListener('resize', handleResize);
    // Clean up event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //Styling for hovered items
  const linkStyle = {
    fill: "white",
    stroke: "white",
    color: 'rgb(226 232 240)'
  }
  const hoveredStyle = {
    fill: "rgba(94, 234, 211, 0.9)",
    stroke: "rgba(94, 234, 211, 0.9)",
    color: 'rgba(94, 234, 211, 0.9)'
  }

  //add resume
  //add code woars

  return (
    <div className="Home">
      {/* root = _next, app = _variable, container = mx_auto, body = lg:flex*/}
      {/* <div className='app-insert'></div> */}
      <div className='container'>
        <div className='body'>
          <header className='header'>
            <div className='header-text'>
              <h1>Jashan Brar</h1>
              <h2>Full Stack Developer</h2>
              <p>I build efficient and scaleable digital experiences</p>
              {/* Classname for nav to be changed depending on media dimensions - erase at below certain threshold*/}
              <Nav smallScreen={smallScreen} />
            </div>
            <ul className='external-links'>
              <li><a href='https://github.com/jashanb' className='external-links-link'><span>Github</span>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <foreignObject width="24" height="24">
                    <img src={github} alt="Image" width="100%" height="100%" />
                  </foreignObject>
                </svg>
              </a></li>
              <li><a href='https://www.linkedin.com/in/jashan-brar/' className='external-links-link'><span>LinkedIn</span>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <foreignObject width="24" height="24">
                    <img src={linkedin} alt="Image" width="100%" height="100%" />
                  </foreignObject>
                </svg>
              </a></li>
            </ul>
          </header>
          <main className='content'>
            <Element name="about" className='section'>
              <div className={!smallScreen ? "content-div-visible" : "content-div-hidden"}>
                <h2>About</h2>
              </div>
              <div className='about'>
                 <p className='about-p-1'>My first real exposure to Web Development was through a bootcamp at <a href='https://www.lighthouselabs.ca/'>Lighthouse Labs</a> in 2019. I had just taken a break from Medical School at 
                 <a href='https://www.schulich.uwo.ca/index.html'> Schulich School of Medicine</a> and even though it was daunting to enter a completely new area, I had so much fun being creative and designing real-life things.
                 </p>
                <p className='about-p-1'>Along my coding journey I've had the privelage to work with 1 large company where I re-designed their automation system, and a startup where I was the lead developer of their new sales website.
                I've also had lots of fun participating in extracurricular coding such as hackathons where I made things like a <a href='https://github.com/JashanB/Mintbean-hackathon-number-guesser'>Chrome Extension</a>.
                Web development was a great fit for me but I decided to be responsible and finish my MD degree in 2023.</p>
                <p className='about-p-2'>I recently graduated  <a href='https://www.schulich.uwo.ca/index.html'> Schulich School of Medicine</a> with a MD in the Summer of 2023, and I'm so excited to be
                back designing things I'm passionate about. I also like to keep busy with hiking, yoga, and beating my friends in video games.</p>
              </div>
            </Element>
            <Element name="experience" className='section'>
              <div className={!smallScreen ? "content-div-visible" : "content-div-hidden"}>
                <h2>Experience</h2>
              </div>
              <div>
                {/* <div className='experience-container'> */}
                <ol className='group-list'>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      {/*Around list item, greater than dimensions, show on hover, hide on <1024px*/}
                      <div className={smallScreen ? "absolute-inset-experience-visible" : "absolute-inset-experience-hidden"}></div>
                      <header className='date-list-item'>Nov 2020 - June 2021</header>
                      <div className='list-item-main'>
                        <h3 className='list-item-header'><span>Full Stack Developer &#183; Twenty Billion Neurons</span></h3>
                        <p>Conceptualized, designed, and developed a robust sales website from the ground up which featured over 25,000 products.
                          Collaborated closely with a team of graphic designers to translate their vision into an engaging user interface.
                          Demonstrated exceptional teamwork and communication skills throughout the project, ensuring seamless coordination between different teams.</p>
                        <ul className='tech-stack-flex-box'>
                          <li className='tech-item'><div className="tech-item-div">Javascript</div></li>
                          <li className='tech-item'><div className="tech-item-div">Ruby</div></li>
                          <li className='tech-item'><div className="tech-item-div">HTML & CSS</div></li>
                          <li className='tech-item'><div className="tech-item-div">Ruby on Rails</div></li>
                          <li className='tech-item'><div className="tech-item-div">React</div></li>
                          <li className='tech-item'><div className="tech-item-div">Google Cloud</div></li>
                          <li className='tech-item'><div className="tech-item-div">AWS</div></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      {/*Around list item, greater than dimensions, show on hover*/}
                      <div className={smallScreen ? "absolute-inset-experience-visible" : "absolute-inset-experience-hidden"}></div>
                      <header className='date-list-item'>Mar 2019 - Nov 2020</header>
                      <div className='list-item-main'>
                        <h3 className='list-item-header'><span>Jr Software Engineer &#183; CarltonOne Engagement</span></h3>
                        <p>Designed automations to identify discrepancies in invoices for a multinational retailer.
                          Personally designed and prototyped a revolutionary automation system on my own time that addressed critical inefficiencies in the previous system. Communicated this project in a convincing manner which garnered buy-in from management for its potential effectiveness. This led to the system's full-scale implementation, decreasing the average 8-minute processing time per invoice to near-instantaneous results.
                        </p>
                        <ul className='tech-stack-flex-box'>
                          <li className='tech-item'><div className="tech-item-div">Python</div></li>
                          <li className='tech-item'><div className="tech-item-div">SQL Management Server</div></li>
                          <li className='tech-item'><div className="tech-item-div">Navicat GUI</div></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
                <div className='resume-div' onMouseEnter={() => setObjHovered('resume')} onMouseLeave={setOffObjHovered}>
                  <a className="resume-link" href="" style={hoveredObj['resume'] ? { color: `${hoveredStyle.color}` } : { color: `${linkStyle.color}` }}>
                    <span className='resume-span' color={hoveredObj['resume'] ? hoveredStyle.color : linkStyle.color}>View Full Resume
                      <svg
                        className="arrow-svg" width="16px" height="16px" viewBox="0 0 24 24" fill={hoveredObj['resume'] ? hoveredStyle.fill : linkStyle.fill} stroke={hoveredObj['resume'] ? hoveredStyle.stroke : linkStyle.stroke} xmlns="http://www.w3.org/2000/svg">

                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier" >
                          <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </g>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </Element>
            <Element name="projects" className='section'>
              {/*only show div with media dimensions <1024 - opacity to 0*/}
              <div className={!smallScreen ? "content-div-visible" : "content-div-hidden"}>
                <h2>Projects</h2>
              </div>
              <div>
                <ul className='group-list'>
                  <li className='list-item' onMouseEnter={() => setObjHovered('project1')} onMouseLeave={setOffObjHovered} style={{ cursor: 'pointer' }}
                    onClick={() => handleNavigate("https://github.com/moa-novae/Bettr_Trip")}
                  >
                    <div className='list-item-grid'>
                      <div className={smallScreen ? "absolute-inset-experience-visible" : "absolute-inset-experience-hidden"}></div>
                      <div className='img-container' style={{
                        backgroundImage: `url(${bettr})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '100%',
                        maxHeight: '50%'
                      }}></div>
                      <div className='list-item-main'>
                        <a className="resume-link" href="https://github.com/moa-novae/Bettr_Trip" style={hoveredObj['project1'] ? { color: `${hoveredStyle.color}` } : { color: `${linkStyle.color}` }}>
                          <span className='project-span' color={hoveredObj['project2'] ? hoveredStyle.color : linkStyle.color}>Bettr Trip
                            <svg
                              className="arrow-svg" width="16px" height="16px" viewBox="0 0 24 24" fill={hoveredObj['project1'] ? hoveredStyle.fill : linkStyle.fill} stroke={hoveredObj['project1'] ? hoveredStyle.stroke : linkStyle.stroke} xmlns="http://www.w3.org/2000/svg">
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                              <g id="SVGRepo_iconCarrier" >
                                <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                              </g>
                            </svg>
                          </span></a>
                        <p>A web tool to plan your trip itinerary while referencing an interactive map. Weather, travel duration, and nearby interesting
                          points are also shown for locations. A RESTful back-end server allows users to save trips and create multiple trips at once.</p>
                        <ul className='tech-stack-flex-box'>
                          <li className='tech-item'><div className="tech-item-div">React</div></li>
                          <li className='tech-item'><div className="tech-item-div">Ruby on Rails</div></li>
                          <li className='tech-item'><div className="tech-item-div">PostgreSQL</div></li>
                          <li className='tech-item'><div className="tech-item-div">Google Maps JS</div></li>
                          <li className='tech-item'><div className="tech-item-div">Google Directions Services</div></li>
                          <li className='tech-item'><div className="tech-item-div">Google Distance Matrix</div></li>
                          <li className='tech-item'><div className="tech-item-div">Google Places</div></li>
                          <li className='tech-item'><div className="tech-item-div">Dark Sky API</div></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className='list-item' onMouseEnter={() => setObjHovered('project2')} onMouseLeave={setOffObjHovered} style={{ cursor: 'pointer' }}
                    onClick={() => handleNavigate("https://github.com/JashanB/WeatherApp")}
                  >
                    <div className='list-item-grid'>
                      <div className={smallScreen ? "absolute-inset-experience-visible" : "absolute-inset-experience-hidden"}></div>
                      <div className='img-container' style={{
                        backgroundImage: `url(${weather})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'left',
                        width: '100%',
                        height: '100%',
                        maxHeight: '50%'
                      }}></div>
                      <div className='list-item-main'>
                        <a className="resume-link" href="https://github.com/JashanB/WeatherApp" style={hoveredObj['project2'] ? { color: `${hoveredStyle.color}` } : { color: `${linkStyle.color}` }}>
                          <span className='project-span' color={hoveredObj['project2'] ? hoveredStyle.color : linkStyle.color}>WeatherApp
                            <svg
                              className="arrow-svg" width="16px" height="16px" viewBox="0 0 24 24" fill={hoveredObj['project2'] ? hoveredStyle.fill : linkStyle.fill} stroke={hoveredObj['project2'] ? hoveredStyle.stroke : linkStyle.stroke} xmlns="http://www.w3.org/2000/svg">
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                              <g id="SVGRepo_iconCarrier" >
                                <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                              </g>
                            </svg>
                          </span></a>
                        <p>Weather Forecasts for your favourite locations. Hourly forecasts for the next 48 hours and weekly and historical comparisons.
                          WeatherApp is a mobile optimized app that uses a RESTful back-end server that saves the user's searched locations, allowing for personalized usage
                          and reduced API calls.</p>
                        <ul className='tech-stack-flex-box'>
                          <li className='tech-item'><div className="tech-item-div">React</div></li>
                          <li className='tech-item'><div className="tech-item-div">Ruby on Rails</div></li>
                          <li className='tech-item'><div className="tech-item-div">PostgreSQL</div></li>
                          <li className='tech-item'><div className="tech-item-div">Google Maps JS</div></li>
                          <li className='tech-item'><div className="tech-item-div">Dark Sky API</div></li>
                          <li className='tech-item'><div className="tech-item-div">Canvas.js</div></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className='list-item' onMouseEnter={() => setObjHovered('project3')} onMouseLeave={setOffObjHovered} style={{ cursor: 'pointer' }}
                    onClick={() => handleNavigate("https://github.com/JashanB/Newton")}
                  >
                    <div className='list-item-grid'>
                      <div className={smallScreen ? "absolute-inset-experience-visible" : "absolute-inset-experience-hidden"}></div>
                      <div className='img-container' style={{
                        backgroundImage: `url(${newton})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'left',
                        width: '100%',
                        height: '100%',
                        maxHeight: '50%'
                      }}></div>
                      <div className='list-item-main'>
                        <a className="resume-link" href="https://github.com/JashanB/Newton" style={hoveredObj['project3'] ? { color: `${hoveredStyle.color}` } : { color: `${linkStyle.color}` }}>
                          <span className='project-span' color={hoveredObj['project3'] ? hoveredStyle.color : linkStyle.color}>Newton
                            <svg
                              className="arrow-svg" width="16px" height="16px" viewBox="0 0 24 24" fill={hoveredObj['project3'] ? hoveredStyle.fill : linkStyle.fill} stroke={hoveredObj['project3'] ? hoveredStyle.stroke : linkStyle.stroke} xmlns="http://www.w3.org/2000/svg">
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                              <g id="SVGRepo_iconCarrier" >
                                <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                              </g>
                            </svg>
                          </span></a>
                        <p>Pinterest-like app for learners. Express web app that allows learners to save learning resources like tutorials, blogs and videos
                          in a central place that is publicly available to any user. Search community resources or topics, comment on and rate resources,
                          or upload your own! User signup and authentication is fully supported through cookies.</p>
                        <ul className='tech-stack-flex-box'>
                          <li className='tech-item'><div className="tech-item-div">HTML & CSS</div></li>
                          <li className='tech-item'><div className="tech-item-div">Express</div></li>
                          <li className='tech-item'><div className="tech-item-div">Node.js</div></li>
                          <li className='tech-item'><div className="tech-item-div">PostgreSQL</div></li>
                          <li className='tech-item'><div className="tech-item-div">Material UI</div></li>
                          <li className='tech-item'><div className="tech-item-div">Styled Components</div></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className='resume-div' onMouseEnter={() => setObjHovered('github')} onMouseLeave={setOffObjHovered}>
                  <a className="resume-link" href="" style={hoveredObj['github'] ? { color: `${hoveredStyle.color}` } : { color: `${linkStyle.color}` }}>
                    <span className='resume-span' color={hoveredObj['github'] ? hoveredStyle.color : linkStyle.color}>Check out my latest projects on Github
                      <svg
                        className="arrow-svg" width="16px" height="16px" viewBox="0 0 24 24" fill={hoveredObj['github'] ? hoveredStyle.fill : linkStyle.fill} stroke={hoveredObj['github'] ? hoveredStyle.stroke : linkStyle.stroke} xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier" >
                          <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </g>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </Element>
            <Element name="publications" className='section'>
              {/*only show div with media dimensions <1024 - opacity to 0*/}
              <div className={!smallScreen ? "content-div-visible" : "content-div-hidden"}>
                <h2>Publications</h2>
              </div>
              <div>
                <ul className='group-list'>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      <div className={smallScreen ? "absolute-inset-experience-visible" : "absolute-inset-experience-hidden"}></div>
                      <header className='date-list-item'>Dalhousie Research Day (2023)</header>
                      <div className='list-item-main'>
                        <h3 className='list-item-header'><span></span>Assessing Burnout in Medical Learners</h3>
                        <p>Brar T, Brar J</p>
                      </div>
                    </div>
                  </li>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      <div className={smallScreen ? "absolute-inset-experience-visible" : "absolute-inset-experience-hidden"}></div>
                      <header className='date-list-item'>International Journal of Stroke (2016)</header>
                      <div className='list-item-main'>
                        <h3 className='list-item-header'><span>Technological Trends in Stroke Rehabilitation for Motor Function Recovery (Vol 11 Pg 68-68)</span></h3>
                        <p>Jinah A, Cotoi A, Alibrahm F, McIntyre A, Brar J, Teasell R</p>
                      </div>
                    </div>
                  </li>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      <div className={smallScreen ? "absolute-inset-experience-visible" : "absolute-inset-experience-hidden"}></div>
                      <header className='date-list-item'>Archives of Physical Medicine and Rehabilitation (2016)</header>
                      <div className='list-item-main'>
                        <a href="https://www.archives-pmr.org/article/S0003-9993(16)30883-8/fulltext"></a>
                        <h3 className='list-item-header'><span>Using Theta Burst Stimulation (TBS) to Improve Upper Limb Motor Function Following a Stroke: A Systematic Review</span></h3>
                        <p>Cotoi A, Jinah A, Brar J</p>
                      </div>
                    </div>
                  </li>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      <div className={smallScreen ? "absolute-inset-experience-visible" : "absolute-inset-experience-hidden"}></div>
                      <header className='date-list-item'>ACRM Annual Meeting (2016)</header>
                      <div className='list-item-main'>
                        <h3 className='list-item-header'><span>The efficacy of playing musical instruments for upper limb rehabilitation among individuals with stroke: A systematic review</span></h3>
                        <p>Brar J, McIntyre A, Cotoi A, Jinah A, Iruthayarajah J, Vermeer J, Teasell R</p>
                      </div>
                    </div>
                  </li>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      <div className={smallScreen ? "absolute-inset-experience-visible" : "absolute-inset-experience-hidden"}></div>
                      <header className='date-list-item'>Canadian Stroke Congress (2016)</header>
                      <div className='list-item-main'>
                        <h3 className='list-item-header'><span>Technological trends in stroke rehabilitation for motor function recovery</span></h3>
                        <p>Jinah A, Cotoi A, Alibrahm F, McIntyre A, Brar J, Teasell R</p>
                      </div>
                    </div>
                  </li>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      <div className={smallScreen ? "absolute-inset-experience-visible" : "absolute-inset-experience-hidden"}></div>
                      <header className='date-list-item'>Canadian Stroke Congress (2016)</header>
                      <div className='list-item-main'>
                        <h3 className='list-item-header'><span>The state of stroke rehabilitation research</span></h3>
                        <p>Cotoi A, McIntyre A, Brar J, Jinah A, Anderson R, Teasell R</p>
                      </div>
                    </div>
                  </li>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      <div className={smallScreen ? "absolute-inset-experience-visible" : "absolute-inset-experience-hidden"}></div>
                      <header className='date-list-item'>GTA Rehab: Best Practices Day (2016)</header>
                      <div className='list-item-main'>
                        <h3 className='list-item-header'><span>A systematic review of the efficacy of telerehabilitation interventions available for individuals with stroke</span></h3>
                        <p>Jinah A, Vermeer J, Allen L, Cotoi A, Brar J, McIntyre A, Teasell R</p>
                      </div>
                    </div>
                  </li>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      <div className={smallScreen ? "absolute-inset-experience-visible" : "absolute-inset-experience-hidden"}></div>
                      <header className='date-list-item'>GTA Rehab: Best Practices Day (2016)</header>
                      <div className='list-item-main'>
                        <h3 className='list-item-header'><span>A systematic review of the efficacy of telerehabilitation interventions available for individuals with stroke</span></h3>
                        <p>Jinah A, Vermeer J, Allen L, Cotoi A, Brar J, McIntyre A, Teasell R</p>
                      </div>
                    </div>
                  </li>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      <div className={smallScreen ? "absolute-inset-experience-visible" : "absolute-inset-experience-hidden"}></div>
                      <header className='date-list-item'>GTA Rehab: Best Practices Day (2016)</header>
                      <div className='list-item-main'>
                        <h3 className='list-item-header'><span>The effect of hippotherapy or horseback riding simulation on lower limb motor function in stroke patients: a systematic review</span></h3>
                        <p>Jinah A, Cotoi A, Brar J, McIntyre A, Teasell R</p>
                      </div>
                    </div>
                  </li>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      <div className={smallScreen ? "absolute-inset-experience-visible" : "absolute-inset-experience-hidden"}></div>
                      <header className='date-list-item'>Evidence-Based Review of Stroke Rehabilitation (2016)</header>
                      <div className='list-item-main'>
                        <h3 className='list-item-header'><span>Chapters 13, 14, 21 of the Evidence-Based Review of Stroke Rehabilitation</span></h3>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Element>
            <footer className='footer'>
              <p>Design by <a href="https://brittanychiang.com/">Brittany Chiang,</a> coded in <a href="https://code.visualstudio.com/">Visual Studio Code</a> by myself.
                Built with React and basic CSS, deployed with <a href="https://www.netlify.com/">Netlify.</a>
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;