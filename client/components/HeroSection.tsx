import PCTPresale from "./PCTPresale";

export default function HeroSection() {
    return(
        <section
        className="relative min-h-screen pt-[180px] overflow-hidden"
        
        style={{
          background: 'linear-gradient(201deg, #EAEEFE 43.73%, #183EC2 95.83%)'
        }}
      >
        {/* Decorative Cylinder */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6acfc660e052c5cc941c26ceb0aa6a3672d6133c?width=432"
          alt=""
          className="absolute top-[100px] left-1/2 w-[160px] md:w-[200px] lg:w-[216px] h-auto pointer-events-none opacity-80"
          aria-hidden="true"
        />
         <img
          src="/images/half-torus.png?width=432"
          alt="ddd"
          className="absolute  top-[-10px] left-[88.5%] w-[160px] md:w-[200px] lg:w-[216px] h-auto pointer-events-none opacity-80"
          aria-hidden="true"
        />
       
        
        {/* Grid Overlay */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 1024" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="gridGradient" x1="1440" y1="0" x2="0" y2="1024" gradientUnits="userSpaceOnUse">
              <stop stopColor="#183EC2"/>
              <stop offset="1" stopColor="white"/>
            </linearGradient>
          </defs>
          <path 
            d="M103.5 0L103.5 1024M206.5 0L206.5 1024M309.5 0L309.5 1024M411.5 0L411.5 1024M514.5 0L514.5 1024M617.5 0L617.5 1024M720.5 0L720.5 1024M823.5 0L823.5 1024M926.5 0L926.5 1024M1029.5 0V1024M1131.5 0V1024M1234.5 0V1024M1337.5 0V1024M0 922.5L1440 922.5M0 820.5L1440 820.5M0 717.5L1440 717.5M0 614.5L1440 614.5M0 511.5L1440 511.5M0 408.5L1440 408.5M0 305.5L1440 305.5M0 202.5L1440 202.5M0 100.5L1440 100.5" 
            stroke="url(#gridGradient)" 
            strokeOpacity="0.2"
            strokeWidth="1"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-[72px] py-12 md:py-20">
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-12 xl:gap-8">
            
            {/* Left Column - Hero Text */}
            <div className="flex flex-col items-start gap-4 w-full xl:w-[656px] flex-shrink-0">
              {/* Tag */}
              <div className="flex h-[29px] px-[13px] py-[10px] justify-center items-center gap-2.5 rounded-[10px] border border-black/10">
                <span className="text-black font-medium text-[13px] leading-[31px] tracking-[-0.325px]">
                  Join the Presale
                </span>
              </div>

              {/* Main Heading with Gradient */}
              <h1 
                className="self-stretch font-bold text-[40px] md:text-[60px] lg:text-[90px] leading-[40px] md:leading-[60px] lg:leading-[90px] tracking-[-3px] md:tracking-[-4px] lg:tracking-[-5.85px]"
                style={{
                  fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif',
                  background: 'linear-gradient(180deg, #000 0%, #001354 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                World's First Crypto Based Job Market
              </h1>

              {/* Body Text */}
              <p 
                className="w-full xl:w-[510px] text-[#010D3E] text-base md:text-lg lg:text-[22px] font-normal leading-[24px] md:leading-[28px] lg:leading-[31px] tracking-[-0.5px] lg:tracking-[-0.792px]"
                style={{
                  fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif',
                }}
              >
                The PCT Token powers the first decentralized work ecosystem connecting individuals, professionals, and companies through real-world value and rewards.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[17px] mt-2">
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/assets/Whitepaper ProConnect .pdf';
                    link.download = 'Whitepaper ProConnect.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="flex px-[15px] py-[10px] justify-center items-center gap-1 rounded-[10px] bg-black text-white text-base md:text-xl font-medium leading-normal tracking-[-0.4px] hover:bg-black/90 transition-colors"
                >
                  View Whitepaper
                </button>
                <button className="flex px-0 py-[10px] justify-center items-center gap-1 rounded-[10px] text-black text-base md:text-xl font-medium leading-normal tracking-[-0.4px] hover:opacity-80 transition-opacity">
                  Buy PCT Coming Soon..
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0306 10.5306L11.5306 15.0306C11.3897 15.1715 11.1986 15.2507 10.9994 15.2507C10.8001 15.2507 10.609 15.1715 10.4681 15.0306C10.3272 14.8897 10.2481 14.6986 10.2481 14.4994C10.2481 14.3001 10.3272 14.109 10.4681 13.9681L13.6875 10.75H4.5C4.30109 10.75 4.11032 10.671 3.96967 10.5303C3.82902 10.3897 3.75 10.1989 3.75 9.99999C3.75 9.80108 3.82902 9.61031 3.96967 9.46966C4.11032 9.329 4.30109 9.24999 4.5 9.24999H13.6875L10.4694 6.02999C10.3285 5.88909 10.2493 5.69799 10.2493 5.49874C10.2493 5.29948 10.3285 5.10838 10.4694 4.96749C10.6103 4.82659 10.8014 4.74744 11.0006 4.74744C11.1999 4.74744 11.391 4.82659 11.5319 4.96749L16.0319 9.46749C16.1018 9.53726 16.1573 9.62016 16.1951 9.71142C16.2329 9.80269 16.2523 9.90052 16.2522 9.99931C16.252 10.0981 16.2324 10.1959 16.1944 10.2871C16.1564 10.3782 16.1007 10.461 16.0306 10.5306Z" fill="black"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column - Countdown Card */}
            <div
              className="flex flex-col justify-center xl:items-start sm:items-center gap-8 p-6 md:p-10 rounded-2xl border border-black/8 backdrop-blur-[6px] w-full xl:w-auto xl:max-w-[520px] flex-shrink-0"
              style={{
                background: 'rgba(255, 255, 255, 0.50)',
                boxShadow: '0 0 16px 0 rgba(36, 38, 43, 0.08)',
              }}
            >
              {/* Card Header */}
              <div className="flex flex-col items-start gap-4 self-stretch">
                <h2 className="text-black font-medium text-xl leading-normal tracking-[-0.4px]">
                  Presale Countdown
                </h2>
                <p className="self-stretch text-[#010D3E] text-base font-normal leading-[23px] tracking-[-0.16px]">
                  The ProConnect (PCT) Token presale officially launches soon. Join early to secure your spot in the world's first crypto-powered work ecosystem.
                </p>
              </div>

              {/* PCTsale field */}
              <PCTPresale />
    
            </div>

          </div>
        </div>
      </section>
    )
}
