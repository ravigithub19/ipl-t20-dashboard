import { useState, useEffect } from "react";
import { GiCricketBat } from "react-icons/gi";
import { GoPrimitiveDot } from "react-icons/go";
import teamCaptains from "../data/teamCaptains.json";
import teamLogos from "../data/teamLogos.json"
import vs from "../components/images/versus.png";
import { GrStatusGood } from "react-icons/gr";

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
//sample API response
const dataSample = [
  {
    "id": "043bb613-d8ee-4287-9ccb-a298a0f9c389",
    "dateTimeGMT": "2024-05-18T14:00:00",
    "matchType": "t20",
    "status": "Chennai Super Kings opt to bowl",
    "ms": "live",
    "t1": "Chennai Super Kings (CSK)",
    "t2": "Royal Challengers Bengaluru (RCB)",
    "t1s": "",
    "t2s": "78/1 (9.4)",
    "t1img": "https://g.cricapi.com/iapi/135-637852956181378533.png?w=48",
    "t2img": "https://g.cricapi.com/iapi/21439-638468478038395955.jpg?w=48",
    "series": "Indian Premier League 2024"
  }
]
const LiveScore = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchLiveScore = async () => {
  //     try {
  //       const response = await fetch("/api/livescore");
  //       const data = await response.json();
  //       setMatches(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching live score:", error);
  //     }
  //   };

  //   fetchLiveScore();
  // }, []);
  useEffect(() => {
    const fetchLiveScore = async () => {
      try {

        setMatches(dataSample);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching live score:", error);
      }
    };

    fetchLiveScore();
  }, []);

  const calculateRunRate = (scoreString) => {
    const [runsString, oversString] = scoreString.split("/");
    const runsScored = parseInt(runsString);

    let oversPlayed;

    if (oversString.includes("(")) {
      const match = oversString.match(/\((\d+(\.\d+)?)\)/);
      oversPlayed = match ? parseFloat(match[1]) : NaN;
    } else {
      oversPlayed = parseFloat(oversString);
    }

    if (isNaN(oversPlayed) || oversPlayed === 0 || isNaN(runsScored)) {
      return "N/A";
    }
    const runRate = runsScored / oversPlayed;
    return runRate.toFixed(2);
  };

  const calculateStrikeRate = (scoreString) => {
    const [runsString, oversString] = scoreString.split("/");
    const runsScored = parseInt(runsString);

    let oversPlayed;

    if (oversString.includes("(")) {
      const match = oversString.match(/\((\d+(\.\d+)?)\)/);
      oversPlayed = match ? parseFloat(match[1]) : NaN;
    } else {
      oversPlayed = parseFloat(oversString);
    }

    if (isNaN(oversPlayed) || oversPlayed === 0 || isNaN(runsScored)) {
      return "N/A";
    }
    const ballsFaced = oversPlayed * 6;
    const strikeRate = (runsScored / ballsFaced) * 100;
    return strikeRate.toFixed(2);
  };

  const handleRefresh = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/aa");
      const data = await response.json();
      setMatches(data);
    } catch (error) {
      console.error("Error fetching live score:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-52 mr-6">
          <div className="lg:flex justify-center flex-wrap gap-4">
            {matches.map((match) => (
              <div
                key={match.id}
                className="relative flex flex-row flex-wrap justify-center items-center gap-4 bg-white dark:bg-secondary-dark-bg p-4 rounded-sm w-full"
              >
                {/* LIVE Badge */}
                <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-sm shadow-lg z-10">
                  LIVE
                </span>

                {/* Team 1 Card */}
                <div className="flex flex-col items-center lg:flex-row w-82 mx-4">
                  <img
                    src={teamCaptains[match.t1]}
                    className="w-32 h-32 drop-shadow-2xl lg:mr-4"
                    alt={match.t1}
                  />
                  <div className="flex flex-col items-start">
                    <p className="font-medium text-black text-md mb-2">{match.t1}</p>
                    <div className="flex items-center mb-2">
                      <div className="rounded-full border-2 border-blue-400 w-12 h-12 flex justify-center items-center mr-2">
                        <img
                          src={teamLogos[match.t1]}
                          className="w-10 h-10 rounded-full"
                          alt="Team Logo"
                        />
                      </div>
                      <div>
                        <p className="text-md font-bold">{match.t1s}</p>
                        <p className="text-gray-600 font-bold text-sm">
                          Run Rate: {match.t1s ? calculateRunRate(match.t1s) : "Yet to bat"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* VS Text */}
                <div className="text-4xl font-bold text-gray-500 mx-4">
                  <img src={vs} alt="VS" />
                </div>

                {/* Team 2 Card */}
                <div className="flex flex-col items-center lg:flex-row w-82 mx-4">
                  <div className="flex flex-col items-start">
                    <p className="font-medium text-black text-md mb-2">{match.t2}</p>
                    <div className="flex items-center mb-2">
                      <div className="rounded-full border-2 border-red-800 w-12 h-12 flex justify-center items-center mr-2">
                        <img
                          src={teamLogos[match.t2]}
                          className="w-10 h-10 rounded-full"
                          alt="Team Logo"
                        />
                      </div>
                      <div>
                        <p className="text-md font-bold">{match.t2s || "Yet to bat"}</p>
                        <p className="text-gray-600 font-bold text-sm">
                          Run Rate: {match.t2s && match.t2s !== "" ? calculateRunRate(match.t2s) : "Yet to bat"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    src={teamCaptains[match.t2]}
                    className="w-32 h-32 drop-shadow-2xl lg:ml-4"
                    alt={match.t2}
                  />
                </div>

                {/* Match Stats */}
                <div className="flex flex-row gap-6 items-center mt-4 lg:mt-0 mx-4">
                  <div className="bg-gray-100 dark:bg-secondary-dark-bg p-4 rounded-sm flex items-center">
                    <GiCricketBat className="text-blue-700 text-xl mr-2" />
                    <div>
                      <p className="text-xs font-semibold">{calculateStrikeRate(match.t2s)}</p>
                      <p className="text-xs font-bold text-gray-800">Strike Rate</p>
                    </div>
                  </div>

                  <div className="bg-gray-100 dark:bg-secondary-dark-bg p-4 rounded-sm flex items-center">
                    <GoPrimitiveDot className="text-blue-700 text-xl mr-2" />
                    <div>
                      <p className="text-xs font-semibold">1</p>
                      <p className="text-xs font-bold text-gray-800">Wickets Lost</p>
                    </div>
                  </div>

                  <div className="bg-gray-100 dark:bg-secondary-dark-bg p-4 rounded-sm flex items-center">
                    <GrStatusGood className="text-blue-700 text-xl mr-2" />
                    <div>
                      <p className="text-xs font-semibold">{match.status}</p>
                      <p className="text-xs font-bold text-gray-800">Match Status</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      )}
    </>
  );
};

export default LiveScore;
