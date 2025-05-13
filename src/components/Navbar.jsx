
import ipl from "../components/images/ipl-logo-new-old.png"

const teamLogos = {
  "Gujarat Titans": "https://scores.iplt20.com/ipl/teamlogos/GT.png",
  "Royal Challengers Bengaluru": "https://scores.iplt20.com/ipl/teamlogos/aFPMviEPyJ1710927747rcb.png",
  "Punjab Kings": "https://scores.iplt20.com/ipl/teamlogos/PBKS.png",
  "Mumbai Indians": "https://scores.iplt20.com/ipl/teamlogos/MI.png",
  "Delhi Capitals": "https://scores.iplt20.com/ipl/teamlogos/DC.png",
  "Kolkata Knight Riders": "https://scores.iplt20.com/ipl/teamlogos/KKR.png",
  "Lucknow Super Giants": "https://scores.iplt20.com/ipl/teamlogos/gPLvfvSC1X1711457972LSG.png",
  "Sunrisers Hyderabad": "https://scores.iplt20.com/ipl/teamlogos/SRH.png",
  "Rajasthan Royals": "https://scores.iplt20.com/ipl/teamlogos/RR.png",
  "Chennai Super Kings": "https://scores.iplt20.com/ipl/teamlogos/CSK.png",
};

const Navbar = () => {
  // Convert the teamLogos object to an array of [teamName, logoUrl] pairs
  const teamLogosArray = Object.entries(teamLogos);

  return (
    <div className="flex gap-20 justify-center bg-gradient-to-r mb-4 from-blue-400 to-blue-900 p-2 relative">
      {/* IPL logo */}
     
      {/* Left side team logos */}
      <div className="flex gap-12">
        {teamLogosArray.slice(0, 5).map(([teamName, logoUrl]) => (
          <a href="/" key={teamName} title={teamName}>
            <img src={logoUrl} alt={teamName} width={50} height={50} />
          </a>
        ))}
      </div>

      <a href="/" title='IPL'>
        <img src={ipl} alt="IPL Logo" width={100} />
      </a>


      {/* Right side team logos */}
      <div className="flex gap-12">
        {teamLogosArray.slice(5, 11).map(([teamName, logoUrl]) => (
          <a href="/" key={teamName} title={teamName}>
            <img src={logoUrl} alt={teamName} width={50} height={50} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;