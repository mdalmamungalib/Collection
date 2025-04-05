import { useState } from 'react';

const NavMenu = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [hoverTab, setHoverTab] = useState(null);

  const tabs = [
    { id: 'home', label: 'Home', color: '39a1f4' },
    { id: 'search', label: 'Search', color: 'f48d4e' },
    { id: 'notification', label: 'Notification', color: '84a91c' },
    { id: 'favorites', label: 'Favorites', color: 'ff6275' },
    { id: 'profile', label: 'Profile', color: '9d74ff' },
  ];

  const getSelectorPosition = () => {
    switch (activeTab) {
      case 'home': return 'left-[23px]';
      case 'search': return 'left-[143px] hue-rotate-[535deg]';
      case 'notification': return 'left-[263px] hue-rotate-[950deg]';
      case 'favorites': return 'left-[383px] hue-rotate-[1580deg]';
      case 'profile': return 'left-[502px] hue-rotate-[1850deg]';
      default: return 'left-[23px]';
    }
  };

  const getActiveColor = () => {
    const tab = tabs.find(t => t.id === activeTab);
    return tab ? tab.color : '39a1f4';
  };

  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden bg-gradient-to-br from-[#e3efe8] to-[#96a7cf]">
      <nav className="relative flex justify-between h-[150px] px-[29px] pb-[10px] items-end w-[600px] bg-transparent">
        {/* Background */}
        <div className="absolute left-0 bottom-0 w-full h-[150px] bg-[#181818] rounded-[20px] z-[-1] shadow-[1px_1px_2px_0px_#fff]" />
        
        {/* Tabs */}
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`relative min-w-[100px] h-[${activeTab === tab.id ? '130' : '100'}px] mx-[10px] mb-[20px] text-center grid items-end text-[#b0bfd8] uppercase text-[14px] font-sans transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] cursor-pointer ${
              activeTab === tab.id 
                ? `text-white text-shadow-[0_0_5px_#${tab.color},0_0_10px_#${tab.color}] h-[130px]`
                : ''
            } ${
              hoverTab === tab.id 
                ? 'text-white text-shadow-[0_0_5px_#fff,0_0_10px_#fff]' 
                : ''
            }`}
            onClick={() => setActiveTab(tab.id)}
            onMouseEnter={() => setHoverTab(tab.id)}
            onMouseLeave={() => setHoverTab(null)}
          >
            {tab.label}
            {/* Icons */}
            <div className={`absolute ${
              tab.id === 'home' ? 'w-[40px] h-[40px] left-[30px] top-[30px]' :
              tab.id === 'search' ? 'w-[40px] h-[40px] left-[20px] top-[17px]' :
              tab.id === 'notification' ? 'w-[50px] h-[42px] left-[25px] top-[20px]' :
              tab.id === 'favorites' ? 'w-[50px] h-[50px] left-[18px] top-[-9px]' :
              'w-[50px] h-[54px] top-[16px] left-[25px]'
            } ${
              (activeTab === tab.id || hoverTab === tab.id) 
                ? 'brightness-150 drop-shadow-[0_0_4px_#fff]' 
                : ''
            }`}>
              {tab.id === 'home' && (
                <>
                  <div className="w-full h-full rounded-[2px] bg-[conic-gradient(from_90deg_at_65%_60%,#b0bfd8_0_25%,transparent_0_100%),conic-gradient(from_180deg_at_35%_60%,#b0bfd8_0_25%,transparent_0_100%),conic-gradient(from_135deg_at_50%_0%,#b0bfd8_0_25%,transparent_0_100%)] bg-no-repeat bg-[length:100%_100%,100%_100%,100%_27px]" />
                  <div className="absolute w-[40px] h-[40px] left-0 top-[-6px] border-[6px] border-[#b0bfd8] border-r-0 border-b-0 rotate-45 rounded-[5px]" />
                </>
              )}
              {tab.id === 'search' && (
                <>
                  <div className="w-full h-full rounded-full border-[6px] border-[#b0bfd8]" />
                  <div className="absolute w-[22px] h-[9px] left-[40px] top-[33px] bg-[#b0bfd8] origin-left-top rotate-45 rounded-r-[10px]" />
                </>
              )}
              {tab.id === 'notification' && (
                <>
                  <div className="w-full h-full rounded-t-[30px] bg-[linear-gradient(90deg,transparent_0_6px,#b0bfd8_0_calc(100%_-_6px),transparent_calc(100%_-_6px)_100%),conic-gradient(from_135deg_at_50%_33%,#b0bfd8_0_25%,transparent_0_100%)] z-[1]" />
                  <div className="absolute w-[10px] h-[57px] left-[20px] top-[-6px] bg-[radial-gradient(circle_at_50%_6px,#b0bfd8_3px,transparent_4px_100%),transparent] origin-left-top border-b-[6px] border-[#b0bfd8] rounded-[5px] z-0" />
                </>
              )}
              {tab.id === 'favorites' && (
                <div className="w-full h-full bg-[radial-gradient(circle_at_16px_16px,#b0bfd8_0_16px,transparent_calc(16px_+_1px)_100%),radial-gradient(circle_at_34px_34px,#b0bfd8_0_16px,transparent_calc(16px_+_1px)_100%),linear-gradient(45deg,#b0bfd8_0_37px,transparent_38px_100%)] rounded-[17px_22px_17px_4px] rotate-[-45deg] origin-right" />
              )}
              {tab.id === 'profile' && (
                <div className="w-full h-full bg-[radial-gradient(circle_at_50%_15px,#b0bfd8_0_12px,transparent_13px_100%),radial-gradient(circle_at_50%_100%,#b0bfd8_0_22px,transparent_23px_100%)] rounded-[8px]" />
              )}
            </div>
          </button>
        ))}
        
        {/* Selector */}
        <div className={`absolute w-[95px] h-[95px] bottom-[47px] z-[-1] transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] border-[19px] border-[#181818] rounded-full ${getSelectorPosition()}`}
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.53) 30px, rgba(255,255,255,0) 45px, #fff 50px, rgba(255,255,255,0) 50px 100%),
                        radial-gradient(circle at 50% 50%, #${getActiveColor()} 0 45px, rgba(255,255,255,0) 50px 100%),
                        radial-gradient(circle at 50% 75px, #181818 0 70px, rgba(255,255,255,0) 71px 100%)`
          }}>
          <div className={`absolute bottom-[-80px] w-[80px] h-[10px] bg-[#181818] left-[calc(50%_-_40px)] rounded-[5px_5px_15px_15px] ${
            activeTab ? `shadow-[0_-17px_35px_8px_#${getActiveColor()}]` : ''
          }`} />
        </div>
      </nav>
    </div>
  );
};

export default NavMenu;