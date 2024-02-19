import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Nav from './nav';
import github from './github.png';
import linkedin from './linkedin.png';
import newton from "./Newton1.png";
import weather from './weather.png';
import bettr from './bettr.png';

function App() {
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

  //add scroll to for nav
  //add when screen is at section, trigger on hover for that nav part
  //fix inset for publications
  //add resume
  //add footer 
  //add code woars

  return (
    <div className="App">
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
              <div>
                <p>About para 1</p>
                <p>About para 2</p>
                <p>About para 3</p>
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

                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier" >
                          <path d="M7 17L17 7M17 7H8M17 7V16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
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
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                              <g id="SVGRepo_iconCarrier" >
                                <path d="M7 17L17 7M17 7H8M17 7V16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
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
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                              <g id="SVGRepo_iconCarrier" >
                                <path d="M7 17L17 7M17 7H8M17 7V16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
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
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                              <g id="SVGRepo_iconCarrier" >
                                <path d="M7 17L17 7M17 7H8M17 7V16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
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
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier" >
                          <path d="M7 17L17 7M17 7H8M17 7V16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
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
                      <div className='list-item-main'>
                        <h3 className='list-item-header'><span>Dalhousie Research Day (2023)</span></h3>
                        <p>Assessing Burnout in Medical Learners</p>
                      </div>
                    </div>
                  </li>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      <div className={smallScreen ? "absolute-inset-experience-visible" : "absolute-inset-experience-hidden"}></div>
                      <div className='list-item-main'>
                        <h3 className='list-item-header'><span>International Journal of Stroke (2016)</span></h3>
                        <p>Technological Trends in Stroke Rehabilitation for Motor Function Recovery (Vol 11 Pg 68-68).</p>
                      </div>
                    </div>
                  </li>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      <div className={smallScreen ? "absolute-inset-experience-visible" : "absolute-inset-experience-hidden"}></div>
                      <div className='list-item-main'>
                        <a href="https://www.archives-pmr.org/article/S0003-9993(16)30883-8/fulltext"></a>
                        <h3 className='list-item-header'><span>Archives of Physical Medicine and Rehabilitation (2016)</span></h3>
                        <p>Using Theta Burst Stimulation (TBS) to Improve Upper Limb Motor Function Following a Stroke: A Systematic Review.</p>
                      </div>
                    </div>
                  </li>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      <div className={smallScreen ? "absolute-inset-experience-visible" : "absolute-inset-experience-hidden"}></div>
                      <div className='list-item-main'>
                        <a href="https://www.archives-pmr.org/article/S0003-9993(16)30883-8/fulltext"></a>
                        <h3 className='list-item-header'><span>Evidence-Based Review of Stroke Rehabilitation (2016)</span></h3>
                        <p>Chapter 13: Perceptual Disorders. Evidence-Based Review of Stroke Rehabilitation. Chapter 21: The Rehabilitation of Younger Stroke Patients. Evidence-Based Review of Stroke Rehabilitation. Chapter 14: Aphasia and Apraxia. Evidence-Based Review of Stroke Rehabilitation.</p>
                      </div>
                    </div>

                  </li>
                </ul>
              </div>
            </Element>
          </main>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="App">
  //     <div className='body'>
  //       <header>Jashan Brar</header>
  //       <div className='start-div'>
  //         <img src={start} className='start-here' alt="my-star" onClick={() => modalClick()}></img>
  //       </div>
  //     </div>
  //     <div className={modal}>
  //       <div className='modal-body'></div>
  //     </div>
  //   </div>
  // );
}

export default App;
