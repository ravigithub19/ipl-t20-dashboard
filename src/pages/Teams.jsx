import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import csk from "../components/images/csk.png"
import rcb from "../components/images/rcb.png"
import dc from "../components/images/dc.png"
import gt from "../components/images/gt.png"
import kkr from "../components/images/kkr.png"
import lsg from "../components/images/lsg.png"
import mi from "../components/images/mi.png"
import pk from "../components/images/pk.png"
import rr from "../components/images/rr.png"
import srh from "../components/images/srh.png"

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader"> <svg role="img" aria-label="Mouth and eyes come from 9:00 and rotate clockwise into position, right eye blinks, then all parts rotate and merge into 3:00" class="smiley" viewBox="0 0 128 128" width="128px" height="128px">
        <defs>
          <clipPath id="smiley-eyes">
            <circle class="smiley__eye1" cx="64" cy="64" r="8" transform="rotate(-40,64,64) translate(0,-56)" />
            <circle class="smiley__eye2" cx="64" cy="64" r="8" transform="rotate(40,64,64) translate(0,-56)" />
          </clipPath>
          <linearGradient id="smiley-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#000" />
            <stop offset="100%" stop-color="#fff" />
          </linearGradient>
          <mask id="smiley-mask">
            <rect x="0" y="0" width="128" height="128" fill="url(#smiley-grad)" />
          </mask>
        </defs>
        <g stroke-linecap="round" stroke-width="12" stroke-dasharray="175.93 351.86">
          <g>
            <rect fill="hsl(193,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
            <g fill="none" stroke="hsl(193,90%,50%)">
              <circle class="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
              <circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
            </g>
          </g>
          <g mask="url(#smiley-mask)">
            <rect fill="hsl(223,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
            <g fill="none" stroke="hsl(223,90%,50%)">
              <circle class="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
              <circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
            </g>
          </g>
        </g>
      </svg></div>
    </div>
  )
}

const Teams = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const images = [csk, rcb, dc]; // Add all your image paths here
    const promises = images.map(image => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });

    Promise.all(promises)
      .then(() => {
        setIsLoading(false);
      })
      .catch(error => console.error('Error loading images', error));
  }, []);
  return (
    <>

      {isLoading ? (
        <Loader />
      ) : (
        <div className='container lg:m-6 mt-6 flex flex-wrap lg:gap-6 gap-6 justify-center sm:items-center'
          style={{ marginTop: '120px' }}>
          <Link to="/teams/chennai-super-kings">
            <div className="card csk">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <img src={csk} alt='csk logo' className='h-[60%]' />
                    <strong className='text-sm text-center'>Chennai Super Kings</strong>
                  </div>
                </div>
                <div className="front">

                  <div className="img">
                    <div className="circle">
                    </div>
                    <div className="circle" id="right">
                    </div>
                    <div className="circle" id="bottom">
                    </div>
                  </div>

                  <div className="front-content">
                    <small className="badge">CSK</small>
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          <strong className='text-sm text-center'>Chennai Super Kings</strong>
                        </p>
                      </div>
                      <p className="card-footer text-md">
                        2010&nbsp;|&nbsp;2011&nbsp;|&nbsp;2018&nbsp;|&nbsp;2021&nbsp;|&nbsp;2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> </Link>
          <Link to="/teams/royal-challengers-bengaluru">
            <div className="card rcb">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <img src={rcb} alt='rcb logo' className='h-[60%]' />
                    <strong className='text-sm text-center'>Royal Challengers Bengaluru</strong>
                  </div>
                </div>
                <div className="front">

                  <div className="img">
                    <div className="circle">
                    </div>
                    <div className="circle" id="right">
                    </div>
                    <div className="circle" id="bottom">
                    </div>
                  </div>

                  <div className="front-content">
                    <small className="badge">RCB</small>
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          <strong className='text-sm'>Royal Challengers Bengaluru</strong>
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/teams/delhi-capitals">
            <div className="card dc">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <img src={dc} alt='dc logo' className='h-[60%]' />
                    <strong className='text-sm text-center'>Delhi Capitals</strong>
                  </div>
                </div>
                <div className="front">

                  <div className="img">
                    <div className="circle">
                    </div>
                    <div className="circle" id="right">
                    </div>
                    <div className="circle" id="bottom">
                    </div>
                  </div>

                  <div className="front-content">
                    <small className="badge">DC</small>
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          <strong className='text-sm text-center'>Delhi Capitals</strong>
                        </p>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/teams/gujarat-titans">
            <div className="card gt">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <img src={gt} alt='gt logo' className='h-[60%]' />
                    <strong className='text-sm text-center'>Gujarat Titans</strong>
                  </div>
                </div>
                <div className="front">

                  <div className="img">
                    <div className="circle">
                    </div>
                    <div className="circle" id="right">
                    </div>
                    <div className="circle" id="bottom">
                    </div>
                  </div>

                  <div className="front-content">
                    <small className="badge">GT</small>
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          <strong className='text-sm text-center'>Gujarat Titans</strong>
                        </p>
                      </div>
                      <p className="card-footer text-md">
                        2022 &nbsp;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/teams/kolkata-knight-riders">
            <div className="card kkr">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <img src={kkr} alt='kkr logo' className='h-[60%]' />
                    <strong className='text-sm text-center'>Kolkata Knight Riders</strong>
                  </div>
                </div>
                <div className="front">

                  <div className="img">
                    <div className="circle">
                    </div>
                    <div className="circle" id="right">
                    </div>
                    <div className="circle" id="bottom">
                    </div>
                  </div>

                  <div className="front-content">
                    <small className="badge">KKR</small>
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          <strong className='text-sm text-center'>Kolkata Knight Riders</strong>
                        </p>
                      </div>
                      <p className="card-footer text-md">
                        2012&nbsp;|&nbsp;2014&nbsp;|&nbsp;2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/teams/lucknow-super-giants">
            <div className="card lsg">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <img src={lsg} alt='lsg logo' className='h-[60%]' />
                    <strong className='text-sm text-center text-blue-900'>Lucknow Super Giants</strong>
                  </div>
                </div>
                <div className="front">

                  <div className="img">
                    <div className="circle">
                    </div>
                    <div className="circle" id="right">
                    </div>
                    <div className="circle" id="bottom">
                    </div>
                  </div>

                  <div className="front-content">
                    <small className="badge">LSG</small>
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          <strong className='text-sm text-center'>Lucknow Super Giants</strong>
                        </p>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/teams/mumbai-indians">
            <div className="card mi">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <img src={mi} alt='mi logo' className='h-[60%]' />
                    <strong className='text-sm text-center'>Mumbai Indians</strong>
                  </div>
                </div>
                <div className="front">

                  <div className="img">
                    <div className="circle">
                    </div>
                    <div className="circle" id="right">
                    </div>
                    <div className="circle" id="bottom">
                    </div>
                  </div>

                  <div className="front-content">
                    <small className="badge">MI</small>
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          <strong className='text-sm text-center'>Mumbai Indians</strong>
                        </p>
                      </div>
                      <p className="card-footer text-md">
                        2013&nbsp;|&nbsp;2015&nbsp;|&nbsp;2017&nbsp;|&nbsp;2019&nbsp;|&nbsp;2020
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/teams/punjab-kings">
            <div className="card pk">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <img src={pk} alt='pk logo' className='h-[60%]' />
                    <strong className='text-sm text-center'>Punjab Kings</strong>
                  </div>
                </div>
                <div className="front">

                  <div className="img">
                    <div className="circle">
                    </div>
                    <div className="circle" id="right">
                    </div>
                    <div className="circle" id="bottom">
                    </div>
                  </div>

                  <div className="front-content">
                    <small className="badge">PK</small>
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          <strong className='text-sm'>Punjab Kings</strong>
                        </p>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/teams/rajasthan-royals">
            <div className="card rr">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <img src={rr} alt='rr logo' className='h-[60%]' />
                    <strong className='text-sm text-center'>Rajasthan Royals</strong>
                  </div>
                </div>
                <div className="front">

                  <div className="img">
                    <div className="circle">
                    </div>
                    <div className="circle" id="right">
                    </div>
                    <div className="circle" id="bottom">
                    </div>
                  </div>

                  <div className="front-content">
                    <small className="badge">RR</small>
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          <strong className='text-sm'>Rajasthan Royals</strong>
                        </p>
                      </div>
                      <p className="card-footer text-md">
                        2008 &nbsp;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/teams/sunrisers-hyderabad">
            <div className="card srh">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <img src={srh} alt='srh logo' className='h-[60%]' />
                    <strong className='text-sm text-center'>Sunrisers Hyderabad</strong>
                  </div>
                </div>
                <div className="front">

                  <div className="img">
                    <div className="circle">
                    </div>
                    <div className="circle" id="right">
                    </div>
                    <div className="circle" id="bottom">
                    </div>
                  </div>

                  <div className="front-content">
                    <small className="badge">SRH</small>
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          <strong className='text-sm'>Sunrisers Hyderabad</strong>
                        </p>
                      </div>
                      <p className="card-footer text-md">
                        2016 &nbsp;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

        </div>
      )}
    </>
  );
};

export default Teams;
