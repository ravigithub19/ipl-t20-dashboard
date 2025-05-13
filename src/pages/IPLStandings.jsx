import { useEffect, useState } from 'react';
import kkrLogo from "../components/images/kkr.png";
import rrLogo from "../components/images/rr.png";
import cskLogo from "../components/images/csk.png";
import srhLogo from "../components/images/srh.png";
import dcLogo from "../components/images/dc.png";
import rcbLogo from "../components/images/rcb.png";
import lsgLogo from "../components/images/lsg.png";
import gtLogo from "../components/images/gt.png";
import pbksLogo from "../components/images/pk.png";
import miLogo from "../components/images/mi.png";
import pointsTable from "../data/pointsTable.json";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader">
        {/* ... existing loader SVG ... */}
      </div>
    </div>
  );
};

const IPLStandings = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamsData = async () => {
      try {
        setTeams(pointsTable);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching teams data:", error);
      }
    };

    fetchTeamsData();
  }, []);

  const teamLogos = {
    "KKR": kkrLogo,
    "RR": rrLogo,
    "CSK": cskLogo,
    "SRH": srhLogo,
    "DC": dcLogo,
    "RCB": rcbLogo,
    "LSG": lsgLogo,
    "GT": gtLogo,
    "PBKS": pbksLogo,
    "MI": miLogo,
  };

  return (
    <div className="p-4 mt-24">
      {loading ? (
        <Loader />
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-md overflow-hidden shadow-lg">
            <thead className="bg-gradient-to-r from-blue-400 to-blue-900 text-white text-sm">
              <tr>
                <th className="px-6 py-4 text-left">POS</th>
                <th className="px-6 py-4 text-left">TEAM</th>
                <th className="px-6 py-4 text-center">P</th>
                <th className="px-6 py-4 text-center">W</th>
                <th className="px-6 py-4 text-center">L</th>
                <th className="px-6 py-4 text-center">NR</th>
                <th className="px-6 py-4 text-center">PTS</th>
                <th className="px-6 py-4 text-center">NRR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              {teams.map((team, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-50 ${index < 4 ? 'bg-green-50' : ''
                    }`}
                >
                  <td className="px-6 py-4">
                    <span className={`
                      inline-flex items-center justify-center w-8 h-8 rounded-full 
                      ${index < 4 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                      font-bold
                    `}>
                      {team.position}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={teamLogos[team.team]}
                        alt={`${team.team} Logo`}
                        className="w-8 h-8 object-contain"
                      />
                      <span className="font-medium">{team.team}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">{team.played}</td>
                  <td className="px-6 py-4 text-center text-green-600 font-medium">{team.won}</td>
                  <td className="px-6 py-4 text-center text-red-600 font-medium">{team.lost}</td>
                  <td className="px-6 py-4 text-center font-bold">{team.nr}</td>
                  <td className="px-6 py-4 text-center font-bold">{team.points}</td>
                  <td className="px-6 py-4 text-center font-medium" style={{
                    color: parseFloat(team.nrr) > 0 ? '#16a34a' : '#dc2626'
                  }}>
                    {team.nrr}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default IPLStandings;