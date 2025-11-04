import React, { useState } from 'react';

// --- KUVIEN SIJAINNIT (KORJATTU IMPORT-MENETELMÄLLÄ) ---
import heroBaseImg from './assets/karo-base.png';
import heroSuitImg from './assets/karo-suit.png';
import heroJetpackImg from './assets/karo-jetpack.png';
import heroRobotImg from './assets/karo-robot.png';

// --- UUDET KARTTAKUVAT ---
import cityMap1 from './assets/city-map-1.png'; // Kaikki punaisena
import cityMap2 from './assets/city-map-2.png'; // 1. alue vihreä
import cityMap3 from './assets/city-map-3.png'; // 2. aluetta vihreä
import cityMap4 from './assets/city-map-4.png'; // Kaikki vihreänä

const heroImages = {
  base: heroBaseImg,
  suit: heroSuitImg,
  jetpack: heroJetpackImg,
  robot: heroRobotImg,
};

// Luodaan taulukko karttakuvista "paperinukke"-logiikkaa varten
const mapImages = [cityMap1, cityMap2, cityMap3, cityMap4];

// --- VANHA DATA (Käytetään modaaleissa) ---
const skillData = [
  { name: "Customer-Driven Development & Co-Creation", level: 95, description: "Ability to facilitate high-impact workshops, lead co-creation processes, and transform customer needs into tangible applied research objectives." },
  { name: "Stakeholder Relations & Partnership Building", level: 90, description: "Proven B2B client engagement expertise and a business-driven approach to research. Specialized in managing complex internal stakeholders (Sydänliitto, Aalto, VTT background) to align research content perfectly with external funding and partnership proposal needs." },
  { name: "Project Management & Data Utilization", level: 93, description: "Strong track record of leading projects (e.g., CRM project at Sydänliitto) and also a Foundation Certificate in Project management by PRY/IPMA from 2025." },
  { name: "Applied Research & Communication", level: 80, description: "Proven ability to produce academic text and distill complex ideas. You may contact Hanna-Maija Määttä or Johanna Leväsluoto for more information" }
];
const missionData = [
  { id: 1, title: "Mission 001: CRM & Data Initiative", period: "2023–Present", role: "Project Manager (Sydänliitto)", icon: '💡', achievement: "Leading a comprehensive CRM and data modernization project to leverage data more effectively in fundraising, government-funded projects, customer services and customer relations." },
  { id: 2, title: "Mission 002: Customer-Driven Student Projects", period: "2014–2015", role: "Project Specialist (Aalto University)", icon: '🔗', achievement: "Managed all aspects of customized student projects. Selling and negotiating consultancy-style projects to companies. Understanding customers' challenges and scoping the projects" },
  { id: 3, title: "Mission 003: Entrepreneur-mindset", period: "2016–2021", role: "CEO & Entrepreneur (Tammeka)", icon: '⚙️', achievement: "Managed a furniture company for six years. Built B2B/B2C sales processes from scratch, growing the business to nearly €300k in revenue." },
  { id: 4, title: "Mission 004: Foundation @ VTT (Homecoming)", period: "2011–2013", role: "Research Trainee (VTT)", icon: '🔬', achievement: "Worked as a research trainee in innovation and service studies, combining applied research, business consultation, and scientific publishing." }
];
const publicationData = [
  { 
    id: 1, 
    title: "Envisioning e-Justice for Criminal Justice Chain in Finland", 
    source: "The Electronic Journal of e-Government, 2015",
    url: "https://cris.vtt.fi/en/publications/envisioning-e-justice-for-criminal-justice-chain-in-finland/"
  },
  { 
    id: 2, 
    title: "Innovation with effectuation: an opportunity for the public sector", 
    source: "XXIV International RESER Conference, 2014",
    url: "https://cris.vtt.fi/en/publications/innovation-with-effectuation-an-opportunity-for-the-public-sector/"
  },
  { 
    id: 3, 
    title: "Co-innovation in public services: planning or experimenting with users?", 
    source: "The Innovation Journal, 2013",
    url: "https://cris.vtt.fi/en/publications/co-innovation-in-public-services-planning-or-experimenting-with-u/"
  },
  { 
    id: 4, 
    title: "Modeling the dynamics of service: the creation of customer value", 
    source: "1st Int. Conference on Serviceology, 2013 (Best Paper Award)",
    url: "https://cris.vtt.fi/en/publications/modeling-the-dynamics-of-service-the-creation-of-customer-value/"
  }
];

// --- UUSI TEHTÄVÄDATA (Sijainnit sommiteltu uusille kartoille) ---
const cityChallenges = [
  {
    id: 'challenge1',
    name: 'Critical System Failure: Profile Integrity',
    position: { top: '55%', left: '30%' },
    challenge: 'Our future-proof society is at danger. We need someone experienced in research and innovation, who can combine customer work with applied research to create real-world impact. And to make this even more tricky: that someone needs to be highly motivated to work in EU-funded projects and multidisciplinary teams.',
    solution: 'Solution Deployed: Your hero has a VTT background and his academic publications confirm core research experience. Aalto University experience proves the ability to merge client-driven demands with research goals, and his Project Manager role (CRM, data-platform) confirms the capability to lead complex, multidisciplinary initiatives required for the mission. Core challenges neutralized.',
  },
  {
    id: 'challenge2',
    name: 'Enhancement Required: Research-to-Client Pipeline',
    position: { top: '40%', left: '60%' }, // Alue 2 (Oikea etu)
    challenge: 'To secure future-proof society, VTT must intensify its efforts to turn groundbreaking research findings into value-creating outcomes for the client. We need expertise especially in qualitative research methods (interviews, fieldwork) to accurately meet research and client requirements.',
    // KORJATTU TÄMÄ KOHTA (hero's -> hero\'s)
    solution: 'Activate Partnership Protocols: At Aalto University, your hero managed corporate relations, successfully selling and negotiating consultancy student projects that solved real business challenges. The hero\'s implementation capability reached a new level at the Finnish Heart Association, where he transformed the Association\'s services into compelling value propositions for corporations, successfully negotiating mutually beneficial partnerships. Qualitative research methods are on a good level due to work experience as research trainee. ',
  },
  {
    id: 'challenge3',
    name: 'Operational Hazard: Proactivity and Communication',
    position: { top: '60%', left: '80%' },
    challenge: 'Multidisciplinary projects and international collaborations demand an intensely proactive, hands-on approach and strong communication skills to harmonize diverse stakeholders. Can the candidate demonstrate the autonomy and linguistic capability (English/Finnish) required to lead project execution?',
    solution: 'Leadership & Agility activated: Hero has years of experience in dynamic environments and he has collaborated with academic and company leaders in various projects. He naturally takes initiative, is a highly engaging presenter who can handle any situation, and is always focused on solving client problems. He possesses excellent command of both English and Finnish, ensuring clear, decisive, and collegial collaboration across all stakeholder groups.'
  }
];

// --- Yhteystiedot (CV:stäsi) ---
const contactDetails = {
  email: "kjtammela@gmail.com",
  phone: "0400 234 711",
  linkedin: "linkedin.com/in/karo-tammela/",
  address: "Uudenkaupungintie 3 A 9, Helsinki"
};

// --- UUDET PELIKOMPONENTIT ---

// 1. MODAALI (Pop-up ikkuna)
const Modal = ({ children, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={onClose} 
    >
      <div 
        className="bg-gray-800 max-w-3xl w-full rounded-xl shadow-2xl border border-gray-700 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} 
      >
        {children}
      </div>
    </div>
  );
};

// 2. HAAMOKUVA (Paperinukke-logiikka)
const HeroAvatar = ({ armorLevel, gearLevel, brainLevel }) => {
  
  let currentImage = heroImages.base;
  if (brainLevel > 0) {
    currentImage = heroImages.robot; 
  } else if (gearLevel > 0) {
    currentImage = heroImages.jetpack; 
  } else if (armorLevel > 0) {
    currentImage = heroImages.suit; 
  }

  return (
    <div className="relative w-64 h-96 mx-auto flex-shrink-0">
      <img
        src={heroImages.base}
        alt="Base Character"
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${currentImage === heroImages.base ? 'opacity-100' : 'opacity-0'}`}
      />
      <img
        src={heroImages.suit}
        alt="Spacesuit"
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${currentImage === heroImages.suit ? 'opacity-100' : 'opacity-0'}`}
      />
      <img
        src={heroImages.jetpack}
        alt="Jetpack"
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${currentImage === heroImages.jetpack ? 'opacity-100' : 'opacity-0'}`}
      />
      <img
        src={heroImages.robot}
        alt="Robot companion"
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${currentImage === heroImages.robot ? 'opacity-100' : 'opacity-0'}`}
      />
      <div 
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-cyan-400 rounded-full blur-2xl transition-opacity duration-500 ${brainLevel > 0 ? 'opacity-50' : 'opacity-0'}`}
      />
    </div>
  );
};

// 3. VANHAT KOMPONENTIT (Nyt modaalien sisällä)
const ProgressBar = ({ name, level, description }) => (
  <div className="mb-6">
    <div className="flex justify-between items-end mb-2">
      <span className="font-bold text-lg text-white">{name}</span>
      <span className="font-mono text-lg text-blue-300">{level}%</span>
    </div>
    <div className="w-full bg-black/30 rounded-full h-4 p-0.5 border border-gray-700">
      <div 
        className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full transition-all duration-1000 ease-out shadow-lg shadow-blue-500/30"
        style={{ width: `${level}%` }} 
        title={`${name}: ${level}%`}
      ></div>
    </div>
    <p className="text-xs text-gray-400 mt-2 italic">{description}</p>
  </div>
);

const MissionCard = ({ mission }) => (
  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-0.5 rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.01] hover:shadow-blue-500/40">
    <div className="bg-gray-800 p-4 md:p-6 rounded-lg h-full">
      <div className="flex items-start mb-3">
        <div className="flex-shrink-0 w-12 h-12 bg-gray-900 border-2 border-blue-500/50 rounded-full flex items-center justify-center mr-4 shadow-inner">
          <span className="text-3xl">{mission.icon}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-300">{mission.title}</h3>
          <p className="text-xs text-gray-400 uppercase tracking-wider">{mission.period} · {mission.role}</p>
        </div>
      </div>
      <p className="text-sm text-gray-200 mt-4 pt-4 border-t border-gray-700">
        <span className="font-semibold text-blue-200">Log Entry: </span>{mission.achievement}
      </p>
    </div>
  </div>
);

// --- PELIN NÄKYMÄT (SCENES) ---

// ALOITUSRUUTU
const StartScreen = ({ onStart }) => (
  <div className="min-h-screen w-full flex flex-col justify-center items-center text-center p-4 bg-gray-900 text-white">
    <div className="max-w-2xl">
      <h1 className="text-5xl md:text-7xl font-extrabold text-blue-400 mb-4">
        Future-Proof Societies
      </h1>
      <p className="text-xl text-gray-300 mb-12">
        The VTT Recruitment Challenge
      </p>
      <p className="text-base text-gray-300 mb-12">
        <span className="block italic mb-2">Attention, Research Team Leader Kirsi-Maria Hyytinen!</span>
        The future is unstable. Execute this challenge by November 16, 2025, or societal resilience levels may drop below critical thresholds.
      </p>
      <button
        onClick={onStart}
        className="py-4 px-10 bg-blue-600 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
      >
        Start Game
      </button>
    </div>
  </div>
);

// INTRO-RUUTU
const IntroScreen = ({ onNext }) => (
  <div className="min-h-screen w-full flex flex-col justify-center items-center text-center p-4 bg-gray-900 text-white">
    <div className="max-w-2xl animate-fade-in"> 
      <h2 className="text-3xl font-bold text-white mb-6">A HERO IS NEEDED...</h2>
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        VTT is seeking a catalyst who thrives at the intersection of applied research and real-world implementation. The core mission of the Research Scientist is to take scientific insights and translate them into actionable solutions that enhance societal resilience and sustainable growth.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed mb-12">
        This demands a customer-driven approach, requiring agility in preparing research proposals, and mastering co-creation methods like workshops and interviews to directly engage decision-makers and corporate partners.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed mb-12">
        Your new hero needs to drive proactive impact through science-based innovation. VTT is looking for... the missing piece to secure a future-proof society.
      </p>
      <button
        onClick={onNext}
        className="py-3 px-8 bg-gray-700 text-white font-bold rounded-lg shadow hover:bg-gray-600 transition duration-300"
      >
        Continue...
      </button>
    </div>
  </div>
);

// HAHMONLUONTI-RUUTU
const HeroCreationScreen = ({ onStartMission, armorLevel, setArmorLevel, gearLevel, setGearLevel, brainLevel, setBrainLevel }) => {
  const [activeModal, setActiveModal] = useState(null);
  const allEquipped = armorLevel > 0 && gearLevel > 0 && brainLevel > 0;

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-white mb-4">Meet Your Hero: Karo Tammela</h2>
      <p className="text-gray-400 mb-8">Equip the candidate with his core competencies to begin the mission.</p>

      {/* KORJATTU ASETTELU */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row md:items-center md:justify-center md:gap-12">
        <HeroAvatar armorLevel={armorLevel} gearLevel={gearLevel} brainLevel={brainLevel} />
        
        <div className="flex flex-col items-center md:items-start gap-4 mt-8 md:mt-0">
          
          {/* KORJATTU KORKEUS (min-h-[14rem]) PAINIKKEILLE */}
          <div className="flex flex-col items-center md:items-start gap-4 min-h-[14rem]"> 
            <button
              onClick={() => setActiveModal('toolkit')}
              disabled={armorLevel > 0} 
              className={`py-3 px-6 rounded-lg font-semibold transition duration-300 w-64
                ${armorLevel > 0 
                  ? 'bg-green-600 text-white cursor-default' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
            >
              {armorLevel > 0 ? '✓ Armour Equipped' : '1. Equip Armour'}
            </button>
            {armorLevel > 0 && (
              <button
                onClick={() => setActiveModal('missions')}
                disabled={gearLevel > 0} 
                className={`py-3 px-6 rounded-lg font-semibold transition duration-300 w-64 animate-fade-in
                  ${gearLevel > 0 
                    ? 'bg-green-600 text-white cursor-default' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
              >
                {gearLevel > 0 ? '✓ Gear Equipped' : '2. Equip Gear'}
              </button>
            )}
            {gearLevel > 0 && (
              <button
                onClick={() => setActiveModal('research')}
                disabled={brainLevel > 0} 
                className={`py-3 px-6 rounded-lg font-semibold transition duration-300 w-64 animate-fade-in
                  ${brainLevel > 0 
                    ? 'bg-green-600 text-white cursor-default' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
              >
                {brainLevel > 0 ? '✓ Brainpower Equipped' : '3. Equip Brainpower'}
              </button>
            )}
          </div>
          
          {/* KORJATTU LOGIIKKA "Equip all gear..." -TEKSTILLE */}
          <div className="h-16 mt-4"> 
            {allEquipped ? (
              <button
                onClick={onStartMission}
                className="py-4 px-10 text-xl font-bold rounded-lg shadow-lg transition duration-300 transform bg-red-600 text-white hover:bg-red-700 hover:scale-105 animate-fade-in"
              >
                START MISSION
              </button>
            ) : (
              // Näytä teksti vain, jos KAIKKIA varusteita EI OLE kerätty
              <p className="text-gray-500 italic text-center md:text-left">Equip all gear to start...</p>
            )}
          </div>
        </div>
      </div>

      {activeModal === 'toolkit' && (
        <Modal onClose={() => setActiveModal(null)}>
          <div className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">My Toolkit (Competencies)</h2>
            {skillData.map(skill => <ProgressBar key={skill.name} {...skill} />)}
            <button 
              onClick={() => { setArmorLevel(1); setActiveModal(null); }}
              className="w-full py-3 mt-4 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition" 
            >
              Add to Armour
            </button>
          </div>
        </Modal>
      )}
      {activeModal === 'missions' && (
        <Modal onClose={() => setActiveModal(null)}>
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">Previous Missions (Projects)</h2>
            {missionData.map(mission => <MissionCard key={mission.id} mission={mission} />)}
            <button 
              onClick={() => { setGearLevel(1); setActiveModal(null); }}
              className="w-full py-3 mt-4 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition" 
            >
              Add Gear
            </button>
          </div>
        </Modal>
      )}
      {activeModal === 'research' && (
        <Modal onClose={() => setActiveModal(null)}>
          <div className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Brain Power (Academic Record)</h2>
            <div className="space-y-3">
              {publicationData.map(pub => (
                <div key={pub.id} className="bg-gray-900/70 p-4 rounded-lg border-l-4 border-blue-500/50 hover:bg-gray-800">
                  <h3 className="font-semibold text-blue-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 flex-shrink-0"><path fillRule="evenodd" d="M15.988 3.012A2.25 2.25 0 0 1 18 5.25v9.5A2.25 2.25 0 0 1 15.75 17h-11.5A2.25 2.25 0 0 1 2 14.75v-9.5A2.25 2.25 0 0 1 4.25 3h11.5A2.25 2.25 0 0 1 15.988 3.012ZM14.5 7.5a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 .75.75Zm0 4a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 .75.75Z" clipRule="evenodd" /></svg>
                    {pub.title}
                  </h3>
                  <p className="text-sm text-gray-400 italic pl-7">{pub.source}</p>
                  <a 
                    href={pub.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300 hover:underline pl-7 mt-2 block"
                  >
                    Link to VTT publication page
                  </a>
                  {/* --- LISÄYS LOPPUU --- */}
                </div>
              ))}
            </div>
            <button 
              onClick={() => { setBrainLevel(1); setActiveModal(null); }}
              className="w-full mt-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition"
            >
              Add to Brainpower
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};


// --- VAIHE 4: TEHTÄVÄKARTTA (PÄIVITETTY KARTTA-LOGIIKALLA) ---
const MissionMapScreen = ({ onAllMissionsComplete }) => {
  const [missionLevel, setMissionLevel] = useState(0); // 0=map1, 1=map2, 2=map3, 3=map4
  const [activeMission, setActiveMission] = useState(null); // Mikä modaali on auki

  const completeMission = (missionId) => {
    // Etsi haasteen indeksi ja siirry seuraavalle tasolle
    const challengeIndex = cityChallenges.findIndex(c => c.id === missionId);
    const nextLevel = challengeIndex + 1; // 0 -> 1, 1 -> 2, 2 -> 3
    
    setMissionLevel(nextLevel);
    setActiveMission(null); // Sulje modaali

    // Tarkista, onko kaikki suoritettu (taso 3 on viimeinen suoritus)
    if (nextLevel === 3) {
      // Viimeinen vaihe: näytä täysin vihreä kartta (mapImages[3])
      setMissionLevel(3);
      setTimeout(() => {
        onAllMissionsComplete();
      }, 1700); // Viive, jotta pelaaja näkee lopullisen vihreän kartan
    }
  };

  const allDone = missionLevel === 3;

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-white mt-8 mb-2">Mission Hub: Future-Proof Society</h2>
      <p className="text-gray-400 mb-8">
        {allDone ? "All challenges solved. The city is future-proofed!" : "Address the city's critical challenges."}
      </p>

      {/* Karttakontti */}
      <div className="relative w-full max-w-3xl aspect-video overflow-hidden rounded-lg shadow-2xl border-4 border-gray-700">
        {/* Karttakerrokset (vain yksi näkyy kerrallaan) */}
        {mapImages.map((map, index) => (
          <img
            key={index}
            src={map}
            alt={`City map state ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
              ${missionLevel === index ? 'opacity-100' : 'opacity-0'}
            `}
          />
        ))}

        {/* Tehtäväpisteet (Näkyvät vain oikealla kartalla) */}
        <div className="absolute inset-0">
          {cityChallenges.map((challenge, index) => {
            // Näytä painike vain, jos se on nykyinen aktiivinen tehtävä (missionLevel vastaa indeksiä)
            if (missionLevel === index) {
              return (
                <button
                  key={challenge.id}
                  onClick={() => setActiveMission(challenge.id)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 animate-pulse"
                  style={{ top: challenge.position.top, left: challenge.position.left }}
                >
                  <div className="w-12 h-12 rounded-full bg-red-600 border-4 border-red-300 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-xl">!</span>
                  </div>
                  <span className="relative -bottom-2 w-max bg-black/70 text-white text-xs rounded px-2 py-0.5">
                    {challenge.name}
                  </span>
                </button>
              );
            }
            return null; // Älä näytä painiketta, jos se ei ole aktiivinen
          })}
        </div>
      </div>

      {/* Tehtävämodaali */}
      {activeMission && (
        <Modal onClose={() => setActiveMission(null)}>
          {(() => {
            const challenge = cityChallenges.find(c => c.id === activeMission);
            return (
              <div className="p-8">
                <h2 className="text-2xl font-bold text-blue-300 mb-4">{challenge.name}</h2>
                <h3 className="text-lg font-semibold text-white mb-2">The Challenge:</h3>
                <p className="text-gray-300 mb-6 border-l-4 border-red-500 pl-4">{challenge.challenge}</p>

                <h3 className="text-lg font-semibold text-white mb-2">The Hero's Solution:</h3>
                <p className="text-gray-300 mb-8 border-l-4 border-green-500 pl-4">{challenge.solution}</p>

                <button
                  onClick={() => completeMission(challenge.id)}
                  className="w-full py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition"
                >
                  Accomplish Mission
                </button>
              </div>
            );
          })()}
        </Modal>
      )}
    </div>
  );
};

// --- VAIHE 5: LOPPURUUTU (UUSI KOMPONENTTI) ---
const EndScreen = ({ onRestart }) => {
  const [formStatus, setFormStatus] = useState(''); // '', 'sending', 'sent', 'error'

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('sent');
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center text-center p-4 bg-gray-900 text-white">
      <div className="max-w-2xl animate-fade-in">
        <h1 className="text-5xl font-extrabold text-green-400 mb-4">MISSION COMPLETE</h1>
        <p className="text-xl text-gray-300 mb-8">
          You have successfully secured a future-proof society.
        </p> 
        <p className="text-6xl font-bold text-white mb-12">Final Score: 98,750</p>
        
        {/* Yhteydenotto-osio */}
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 text-left max-w-lg w-full mx-auto">
          {formStatus === 'sent' ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Message Transmitted!</h3>
              <p className="text-gray-300 mb-6">Thank you for playing. Your message and confirmation email are on their way.</p>
              <button
                onClick={onRestart}
                className="py-3 px-8 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition"
              >
                Play Again
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Contact the Hero</h3>
              <div className="text-sm text-gray-400 space-y-2 mb-6 border-b border-gray-700 pb-4">
                <p><strong>Email:</strong> {contactDetails.email}</p>
                <p><strong>Phone:</strong> {contactDetails.phone}</p>
                <p><strong>LinkedIn:</strong> <a href={`https://${contactDetails.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{contactDetails.linkedin}</a></p>
                <p><strong>Address:</strong> {contactDetails.address}</p>
              </div>
              
              <form 
                action="https://formspree.io/f/mwpwdapv" // <-- SINUN FORMSPREE-URL
                method="POST"
                onSubmit={handleFormSubmit}
              >
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400">Your Name</label>
                    <input type="text" name="name" id="name" required className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-white focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">Your Email</label>
                    <input type="email" name="email" id="email" required className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-white focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                    <textarea name="message" id="message" rows="3" required className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-white focus:ring-blue-500 focus:border-blue-500"></textarea>
                  </div>
                  {/* Piilotettu kenttä Formspree-vastausviestiä varten */}
                  <input type="hidden" name="_replyto" value="email" />
                  <input type="hidden" name="_subject" value="New Message from Future-Proof CV Game!" />
                  
                  <button 
                    type="submit" 
                    disabled={formStatus === 'sending'}
                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg shadow hover:from-blue-600 hover:to-blue-700 transition disabled:opacity-50"
                  >
                    {formStatus === 'sending' ? 'Transmitting...' : 'Send Message'}
                  </button>
                  {formStatus === 'error' && <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>}
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};


// --- PÄÄSOVELLUS ---
function App() {
  // Pelin päälogiikka
  const [gameState, setGameState] = useState('START_SCREEN'); // START_SCREEN, INTRO, HERO_CREATION, MISSION_MAP, END_SCREEN
  
  // Hahmon varustetaso
  const [armorLevel, setArmorLevel] = useState(0); 
  const [gearLevel, setGearLevel] = useState(0);   
  const [brainLevel, setBrainLevel] = useState(0); 

  // Pelin nollausfunktio
  const restartGame = () => {
    setArmorLevel(0);
    setGearLevel(0);
    setBrainLevel(0);
    setGameState('START_SCREEN');
  };

  // Päärenderöijä, joka vaihtaa näkymää pelitilan mukaan
  const renderGameScene = () => {
    switch (gameState) {
      case 'START_SCREEN':
        return <StartScreen onStart={() => setGameState('INTRO')} />;
      case 'INTRO':
        return <IntroScreen onNext={() => setGameState('HERO_CREATION')} />;
      case 'HERO_CREATION':
        return (
          <HeroCreationScreen 
            onStartMission={() => setGameState('MISSION_MAP')}
            armorLevel={armorLevel}
            setArmorLevel={setArmorLevel}
            gearLevel={gearLevel}
            setGearLevel={setGearLevel}
            brainLevel={brainLevel}
            setBrainLevel={setBrainLevel}
          />
        );
      case 'MISSION_MAP':
        return (
          <MissionMapScreen 
            onAllMissionsComplete={() => setGameState('END_SCREEN')}
          />
        );
      case 'END_SCREEN': // <-- LISÄTTY LOPPURUUTU
        return (
          <EndScreen 
            onRestart={restartGame}
          />
        );
      default:
        return <StartScreen onStart={() => setGameState('INTRO')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {renderGameScene()}
    </div>
  );
}

export default App;

