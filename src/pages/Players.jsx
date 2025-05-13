import { useState, useEffect } from "react";
import playerData from "../data/players.json";

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

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const teamname = window.location.pathname.split("/").pop(); // Extract teamname from URL path

  // useEffect(() => {
  //   const fetchPlayers = async () => {
  //     try {
  //       const response = await fetch(
  //         `/api/getteam/${teamname}`
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch player data");
  //       }
  //       const data = await response.json();
  //       setPlayers(data.players);
  //       setLoading(false); // Update loading state once data is fetched

  //     } catch (error) {
  //       console.error("Error fetching players:", error);
  //     }
  //   };

  //   fetchPlayers();
  // }, [teamname]);

  useEffect(() => {
    const fetchPlayers = () => {
      try {
        const teamData = playerData[teamname];
        if (teamData?.players) {
          setPlayers(teamData.players);
        } else {
          setPlayers([]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error loading players:", error);
        setLoading(false);
      }
    };

    fetchPlayers();
  }, [teamname]);

  // Filter players based on roles
  const batters = players.filter(
    (player) =>
      player.role.includes("Batter") ||
      player.role.includes("Wicketkeeper Batter")
  );
  const allRounders = players.filter((player) =>
    player.role.includes("All-Rounder")
  );
  const bowlers = players.filter((player) => player.role.includes("Bowler"));

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container lg:m-6 mt-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold mb-4">Players</h2>
            {[
              { title: 'Batters', players: batters },
              { title: 'All Rounders', players: allRounders },
              { title: 'Bowlers', players: bowlers }
            ].map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-[165vh]">
                  {section.players.map((player, playerIndex) => (
                    <div
                      key={playerIndex}
                      className="relative bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition"
                    >
                      {/* Top-left icons for Captain and Overseas */}
                      {(player.captain === 'Y' || player.overseas) && (
                        <div className="absolute top-2 left-2 flex gap-1">
                          {player.captain === 'Y' && (
                            <img
                              src="https://www.iplt20.com/assets/images/teams-captain-icon.svg"
                              alt="Captain Icon"
                              title="Captain"
                              className="w-5 h-5"
                            />
                          )}
                          {/* Overseas Player Icon */}
                          {player.overseas && (
                            <img
                              src="https://www.iplt20.com/assets/images/teams-foreign-player-icon.svg"
                              alt="Overseas Player Icon"
                              title="Overseas Player"
                              className="w-5 h-5"
                            />
                          )}
                        </div>
                      )}

                      {player.role && (
                        <div className="absolute top-2 right-2">
                          {player.role.toLowerCase().includes('wk') && (
                            <img
                              src="https://www.iplt20.com/assets/images/teams-wicket-keeper-icon.svg"
                              alt="Wicket Keeper Icon"
                              title="Wicket Keeper"
                              className="w-5 h-5"
                            />
                          )}
                          {!player.role.toLowerCase().includes('wk') &&
                            player.role.toLowerCase().includes('batter') && (
                              <img
                                src="https://www.iplt20.com/assets/images/teams-batsman-icon.svg"
                                alt="Batter Icon"
                                title="Batter"
                                className="w-5 h-5"
                              />
                            )}
                          {player.role.toLowerCase().includes('all-rounder') && (
                            <img
                              src="https://www.iplt20.com/assets/images/teams-all-rounder-icon.svg"
                              alt="All Rounder Icon"
                              title="All-Rounder"
                              className="w-5 h-5"
                            />
                          )}
                          {player.role.toLowerCase().includes('bowler') && (
                            <img
                              src="https://www.iplt20.com/assets/images/teams-bowler-icon.svg"
                              alt="Bowler Icon"
                              title="Bowler"
                              className="w-5 h-5"
                            />
                          )}
                        </div>
                      )}

                      {/* Player Image */}
                      <img
                        src={player.image}
                        alt={player.name}
                        className="w-full object-contain px-4 pt-4"
                      />

                      {/* Name and Role */}
                      <div className="text-center px-2 py-3 border border-gray-300">
                        <p className="text-sm font-extrabold uppercase text-gray-800">
                          {player.name}
                        </p>
                        <p className="text-xs text-gray-500">{player.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Players;
