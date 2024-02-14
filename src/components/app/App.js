import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Nav from './nav';
import github from './github.png';
import linkedin from './linkedin.png';

function App() {
  // const [navItemClass, setNavItemClass] = useState("nav-item-normal");
  // const [hoveredNav, setHoveredNav] = useState(null);
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setSmallScreen(state => window.innerWidth >= 1024);
    }
    handleResize();
    //add event listener when component mounts
    window.addEventListener('resize', handleResize);
    // Clean up event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //add when screen is at section, trigger on hover for that nav part
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
                  <foreignObject  width="24" height="24">
                    <img src={github} alt="Image" width="100%" height="100%" />
                  </foreignObject>
                </svg>
              </a></li>
              <li><a href='https://www.linkedin.com/in/jashan-brar/' className='external-links-link'><span>LinkedIn</span>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <foreignObject  width="24" height="24">
                    <img src={linkedin} alt="Image" width="100%" height="100%" />
                  </foreignObject>
                </svg>
              </a></li>
            </ul>
          </header>
          <main className='content'>
            <section id="about">
              <div className={!smallScreen ? "content-div-visible" : "content-div-hidden"}>
                <h2>About</h2>
              </div>
              <div>
                <p>About para 1</p>
                <p>About para 2</p>
                <p>About para 3</p>
              </div>
            </section>
            <section id="experience">
              <div className={!smallScreen ? "content-div-visible" : "content-div-hidden"}>
                <h2>Experience</h2>
              </div>
              <div className='experience-container'>
                <ol className='group-list'>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      {/*Around list item, greater than dimensions, show on hover*/}
                      <div className='absolute-inset'></div>
                      <header className='date-list-item'>2020-2021</header>
                      <div className='list-item-main'>
                        <h3 className='list-item-header'><span>Full Stack Developer &#183; Twenty Billion Neurons</span></h3>
                        <p>Experience at TBN description</p>
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
                      <div className='absolute-inset'></div>
                      <header className='date-list-item'>2019-2020</header>
                      <div className='list-item-main'>
                        <h3 className='list-item-header'><span>Jr Software Engineer &#183; CarltonOne Engagement</span></h3>
                        <p>Experience at CarltonOne description</p>
                        <ul className='tech-stack-flex-box'>
                          <li className='tech-item'><div className="tech-item-div">Python</div></li>
                          <li className='tech-item'><div className="tech-item-div">SQL Management Server</div></li>
                          <li className='tech-item'><div className="tech-item-div">Navicat GUI</div></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
                <div className='resume'>
                  <a href=""><span>View Full Resume</span></a>
                </div>
              </div>
            </section>
            <section id="projects">
              {/*only show div with media dimensions <1024 - opacity to 0*/}
              <div className={!smallScreen ? "content-div-visible" : "content-div-hidden"}>
                <h2>Projects</h2>
              </div>
              <div>
                <ul className='group-list'>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      <div className='absolute-inset'></div>
                      <div className='list-item-main'>
                        <h3 className='list-item-header'><span>Social Site</span></h3>
                        <p>Instagram clone describe more</p>
                        <ul className='tech-stack-flex-box'>
                          <li className='tech-item'><div className="tech-item-div">React</div></li>
                          <li className='tech-item'><div className="tech-item-div">Node.js</div></li>
                          <li className='tech-item'><div className="tech-item-div">PostgreSQL</div></li>
                          <li className='tech-item'><div className="tech-item-div">RESTful API</div></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      <div className='absolute-inset'></div>
                      <div className='list-item-main'>
                        <h3 className='list-item-header'><span>Bettr Trip</span></h3>
                        <p>A web tool to plan your trip itinerary while referencing an interactive map. Weather, travel duration, and nearby interesting points are also shown for locations. A RESTful back-end server allows users to save trips and create multiple trips at once.</p>
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
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      <div className='absolute-inset'></div>
                      <div className='list-item-main'>
                        <h3 className='list-item-header'><span>Weather App</span></h3>
                        <p>Weather Forecasts for your favourite locations. Hourly forecasts for the next 48 hours and weekly and historical comparisons. WeatherApp is a mobile optimized app that uses a RESTful back-end server that saves the user's searched locations, allowing for personalized usage and reduced API calls.</p>
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
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      <div className='absolute-inset'></div>
                      <div className='list-item-main'>
                        <h3 className='list-item-header'><span>Newton</span></h3>
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
              </div>
            </section>
            <section id="publications">
              {/*only show div with media dimensions <1024 - opacity to 0*/}
              <div className={!smallScreen ? "content-div-visible" : "content-div-hidden"}>
                <h2>Publications</h2>
              </div>
              <div>
                <ul className='group-list'>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      <div className='absolute-inset'></div>
                      <div className='list-item-main'>
                        <h3 className='list-item-header'><span>Dalhousie Research Day (2023)</span></h3>
                        <p>Assessing Burnout in Medical Learners</p>
                      </div>
                    </div>
                  </li>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      <div className='absolute-inset'></div>
                      <div className='list-item-main'>
                        <h3 className='list-item-header'><span>International Journal of Stroke (2016)</span></h3>
                        <p>Technological Trends in Stroke Rehabilitation for Motor Function Recovery (Vol 11 Pg 68-68).</p>
                      </div>
                    </div>
                  </li>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      <div className='absolute-inset'></div>
                      <div className='list-item-main'>
                        <a href="https://www.archives-pmr.org/article/S0003-9993(16)30883-8/fulltext"></a>
                        <h3 className='list-item-header'><span>Archives of Physical Medicine and Rehabilitation (2016)</span></h3>
                        <p>Using Theta Burst Stimulation (TBS) to Improve Upper Limb Motor Function Following a Stroke: A Systematic Review.</p>
                      </div>
                    </div>
                  </li>
                  <li className='list-item'>
                    <div className='list-item-grid'>
                      <div className='absolute-inset'></div>
                      <div className='list-item-main'>
                        <a href="https://www.archives-pmr.org/article/S0003-9993(16)30883-8/fulltext"></a>
                        <h3 className='list-item-header'><span>Evidence-Based Review of Stroke Rehabilitation (2016)</span></h3>
                        <p>Chapter 13: Perceptual Disorders. Evidence-Based Review of Stroke Rehabilitation. Chapter 21: The Rehabilitation of Younger Stroke Patients. Evidence-Based Review of Stroke Rehabilitation. Chapter 14: Aphasia and Apraxia. Evidence-Based Review of Stroke Rehabilitation.</p>
                      </div>
                    </div>

                  </li>
                </ul>
              </div>
            </section>
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
