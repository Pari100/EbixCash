import React from 'react'
import image from '../assets/image.jpg'
import './header.css'
import logo from '../assets/Logo.png'
import user from '../assets/user.png'
import circle from '../assets/circle.png'
import { useEffect } from 'react'
import business from '../assets/business.png'
import elearning from '../assets/e-learning.png'
import travel from '../assets/travel.png'
import finance from '../assets/finance.png'
import bitcoin from '../assets/bitcoin.png'
import technology from '../assets/technology.png'
import service from '../assets/Insurance.png'
import backgroundVideo from '../assets/image.mp4'
import telecom from '../assets/telecom.png'
import card from '../assets/service.jpg'
import investors from '../assets/investors.png'
import icon from '../assets/icon.png'
import consumers from '../assets/consumers.png'
import businessimg from '../assets/business91.png'
import swipe from '../assets/swipe.png'
import About from '../assets/About.png'
import ebix from '../assets/ebix.jpg'
import youtube from '../assets/youtube.png'
import arrow from '../assets/arrow.png'
import employees from '../assets/employees.png'
import residential from '../assets/residential.png'
import globe from '../assets/globe.png'
import award from '../assets/award.png'
import winner from '../assets/trophy.png'
import Testimonial from './Testimonial.jsx'
import Mobile from '../assets/Mobile.png'
import checkmark from '../assets/checkmark.png'
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import coin from '../assets/coin.png'
import { IoBusinessSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { Contact } from 'lucide-react'
import contact from '../assets/contact.jpg'
import { FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logos from "../assets/logos.png"
import { IoIosSend } from "react-icons/io";
import playstore from '../assets/playstore.png'
import appstore from '../assets/appstore.jpg'
import taxlogo from '../assets/taxlogo.png'
import { MdCopyright } from "react-icons/md";
import contact91 from "../assets/contact91.jpg"
import menu from "../assets/menu.png"
import AirIndia from '../assets/AirIndia.png'
import Airtel from '../assets/Airtel.png'
import asian from '../assets/asian.jpg'
import carrier from '../assets/carrier.png'
import ICIC from '../assets/ICIC.png'
import HDFC from '../assets/HDFC.png'
import hp from '../assets/hp.png'
import Kotak from '../assets/Kotak.png'
import LIC from '../assets/LIC.png'
import mahindra from '../assets/mahindra.png'
import Samsung from '../assets/Samsung.jpg'
import Sony from '../assets/Sony.png'
import standardchartered from '../assets/standardchartered.png'
import TheTimes from '../assets/TheTimes.png'
import BBC from '../assets/BBC.jpg'
import MotherDiary from '../assets/MotherDiary.jpg'

function Header() {
  const imageprop = {
     backgroundImage: `url(${image})`,
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     position: 'relative',
     overflow: 'hidden',
  }

  const Herobtnitems = [
    "Ebix Cash",
    "Investors",
    "Consumers",
    "Business"
  ];

  let [btnitems, setBtnitems] = React.useState(Herobtnitems[0]);
  const serviceTabs = [
    { label: 'Investors', accent: 'linear-gradient(135deg, #0f4cff 0%, #1b7bff 100%)', shadow: '0 10px 30px rgba(15, 76, 255, 0.28)' },
    { label: 'Consumers', accent: 'linear-gradient(135deg, #14823a 0%, #2fc35b 100%)', shadow: '0 10px 30px rgba(20, 130, 58, 0.25)' },
    { label: 'Businesses', accent: 'linear-gradient(135deg, #7b3fe4 0%, #b349ff 100%)', shadow: '0 10px 30px rgba(123, 63, 228, 0.25)' },
  ];
  const [activeTab, setActiveTab] = React.useState(serviceTabs[0].label);
  const [hoveredTab, setHoveredTab] = React.useState(serviceTabs[0].label);
  const displayedTab = hoveredTab || activeTab;
  const activeIndex = serviceTabs.findIndex((tab) => tab.label === displayedTab);
  const sliderStyle = {
    transform: `translateX(${activeIndex * 100}%)`,
    width: 'calc((100% - 12px) / 3)',
  };
  const companyLogos = [
    { src: AirIndia, alt: 'Air India', width: '120px', height: '40px' },
    { src: Airtel, alt: 'Airtel', width: '120px', height: '40px' },
    { src: asian, alt: 'Asian Paints', width: '80px', height: '40px' },
    { src: carrier, alt: 'Carrier', width: '80px', height: '40px' },
    { src: ICIC, alt: 'ICIC Bank', width: '110px', height: '30px' },
    { src: HDFC, alt: 'HDFC Bank', width: '150px', height: '30px' },
    { src: hp, alt: 'HP', width: '120px', height: '40px' },
    { src: Kotak, alt: 'Kotak', width: '120px', height: '40px' },
    { src: LIC, alt: 'LIC', width: '120px', height: '40px' },
    { src: mahindra, alt: 'Mahindra', width: '80px', height: '40px' },
    { src: Samsung, alt: 'Samsung', width: '120px', height: '40px' },
    { src: Sony, alt: 'Sony', width: '80px', height: '40px' },
    { src: standardchartered, alt: 'Standard Chartered', width: '180px', height: '40px' },
    { src: TheTimes, alt: 'The Times of India', width: '120px', height: '40px' },
    { src: BBC, alt: 'BBC', width: '200px', height: '40px' },
    { src: MotherDiary, alt: 'Mother Dairy', width: '80px', height: '40px' },
  ];

  useEffect( () => {
    let index = 0;
    const interval = setInterval(() => {
      setBtnitems(Herobtnitems[index]);
      index = (index + 1) % Herobtnitems.length;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = serviceTabs.findIndex((tab) => tab.label === current);
        return serviceTabs[(currentIndex + 1) % serviceTabs.length].label;
      });
      setHoveredTab((current) => {
        if (!current) return serviceTabs[0].label;
        const currentIndex = serviceTabs.findIndex((tab) => tab.label === current);
        return serviceTabs[(currentIndex + 1) % serviceTabs.length].label;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

 
  
  return (
     <div>
      <div className="w-full animate-marqee border-b-2 border-blue-600">
        <div className="marqee-content">
          <p className='font-semibold'>Important Update: Download the latest EbixCash Wallet &amp;
            Payments App to use seamless &amp; secure UPI services.
            Update now for hassle-free payments. App available for Android &amp; iOS devices.
          </p>
          <p className='font-semibold'>Important Update: Download the latest EbixCash Wallet &amp;
            Payments App to use seamless &amp; secure UPI services.
            Update now for hassle-free payments. App available for Android &amp; iOS devices.
          </p>
        </div>
      </div>
      
      <div className="w-full h-140 md:h-170 flex justify-center" style={imageprop}>
        <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(8, 0, 113, 0.8)', zIndex: 1}}></div>
        <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover" style={{zIndex: 0, opacity: 1}}>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <nav className="w-full md:w-4xl relative h-15 md:h-20 flex gap-8 mt-0 md:mt-7 px-0 md:px-10  md:rounded-xl p-1 md:p-3 bg-white" style={{zIndex: 40}}>
            <div className="logo flex">
                  <img src={logo} alt="logo"  />
            </div>
    
            <div className="navbar-items hidden md:flex">
              <ul className='flex gap-6'>
                <li className="flex flex-col">Home<span className="hidden absolute w-[400px] h-[200px] rounded-2xl bg-white mt-10 left-0 z-20">Hi, John</span></li> 
                <li>Discover</li>
                <li>Company</li>
                <li>Services</li>
              </ul>
            </div>

            <div className="hidden md:flex">
              <ul className='flex gap-4 navbar-user-items'>
                <li><img src={user} alt="User" className="m-2" style={{width: '40px'}}/></li>
                <li><img src={circle} alt="logo" className="m-2" style={{width: '40px'}}/></li>
              </ul>
            </div>

            <div className="w-10 h-10 absolute ml-88 mt-2 md:hidden">
               <img src={menu} alt="menu"  />
            </div>
        </nav>

        <div className="absolute top-30 md:top-40 text-center flex justify-center items-center flex-col" style={{zIndex: 10}}>
          <div className=" w-[250px] md:w-[300px] mb-5 rounded-full m-auto py-1 text-white font-medium text-[12px] md:text-sm" style={{border: '1px solid white'}}>
          <span 
                  className="glowing-dot" 
                  style={{
                    backgroundColor: "#00D4FF",
                    boxShadow: `0 0 10px #00D4FF, 0 0 20px #00D4FF`
                  }}
                ></span>Enough for every happiness</div>
          <h1 className='flex justify-center items-center w-[30rem] md:w-full mt-2 md:mt-0 text-[22px] md:text-5xl text-white text-wrap md:text-nowrap font-extrabold'>India’s Largest End-to-End Financial Exchange</h1>
          <p className="mt-2 md:mt-2 w-[30rem] md:w-full text-[11px] md:text-xl  text-white font-extralight text-wrap md:text-nowrap">Powering payments, travel, forex, remittance,
             and financial technology through a vast<br></br> phygital network of 650,000+ outlets across India.
          </p>

          <div className="flex gap-4 justify-center mt-6 md:mt-8 ">
              <button className="tracking-wider border-b-2 border-white text-nowrap italic text-center rounded-4xl herobtn font-bold text-white  w-40 md:w-48">
                {btnitems}
              </button>
              <button className="tracking-wide text-nowrap text-center font-extrabold px-5 py-2 rounded-4xl bg-white outline-offset-8 outline-amber-800">Explore</button>
          </div>
          
          <div>
          </div>
          
          <div className="w-[24rem] md:w-full max-w-[1200px] h-[170px] rounded-2xl m-auto movingCards flex justify-center items-center gap-8 overflow-hidden mt-[-10px]" style={{zIndex: 10}}>
             <div className="bg-blue-700 rounded-2xl  w-40 h-22 md:h-25  gradient-border px-4 flex-shrink-0 bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${business})`}}><span className='cardtext'>FinTech</span></div>
             <div className="bg-blue-700 rounded-2xl  w-40 h-22 md:h-25  gradient-border px-4 flex-shrink-0 bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${elearning})`}}><span className='cardtext'>E-Learning</span></div>
             <div className="bg-blue-700 rounded-2xl  w-40 h-22 md:h-25  gradient-border px-4 flex-shrink-0 bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${travel})`}}><span className='cardtext'>Travel</span></div>
             <div className="bg-blue-700 rounded-2xl  w-40 h-22 md:h-25  gradient-border px-4 flex-shrink-0 bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${finance})`}}><span className='cardtext'>Finance</span></div>
             <div className="bg-blue-700 rounded-2xl  w-40 h-22 md:h-25  gradient-border px-4 flex-shrink-0 bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${bitcoin})`}}><span className='cardtext'>Forex</span></div>
             <div className="bg-blue-700 rounded-2xl  w-40 h-22 md:h-25  gradient-border px-4 flex-shrink-0 bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${technology})`}}><span className='cardtext'>Business</span></div>
             <div className="bg-blue-700 rounded-2xl  w-40 h-22 md:h-25  gradient-border px-4 flex-shrink-0 bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${service})`}}><span className='cardtext'>Insurance</span></div>
             <div className="bg-blue-700 rounded-2xl  w-40 h-22 md:h-25  gradient-border px-4 flex-shrink-0 bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${telecom})`}}><span className='cardtext'>Telecom</span></div>
          </div>
          
         <div className="mt-8 md:mt-7 text-center text-blue-100  ">We Strengthen India's Biggest Brands </div>
        </div>
       

        
      </div>

      <div className="w-full mt-5 h-10">
        <div className="company-logos">
          {companyLogos.map((logo, index) => (
            <img
              key={`${logo.alt}-${index}`}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              style={{ width: logo.width, height: logo.height }}
            />
          ))}
          {companyLogos.map((logo, index) => (
            <img
              key={`${logo.alt}-dup-${index}`}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              style={{ width: logo.width, height: logo.height }}
            />
          ))}
        </div>
      </div>

      <div className="w-full mt-10 flex flex-col gap-15">
       <div><p className="text-center top-0  text-4xl md:text-5xl font-bold service">Ebix <span className="everywhere">Everywhere...</span></p></div>
       <div className=" w-[400px] md:w-[770px] mt-[-50px] h-auto py-1 px-1 m-auto flex rounded-full border border-blue-600 serviceoptions">
         <div className="service-slider " style={sliderStyle}></div>
         {serviceTabs.map((tab) => {
          const isActive = activeTab === tab.label;

          return (
            <button
              key={tab.label}
              type="button"
              className={`service-option ${isActive ? 'active' : ''}`}
              style={isActive ? { background: tab.accent, boxShadow: tab.shadow } : undefined}
              onMouseEnter={() => setHoveredTab(tab.label)}
              onMouseLeave={() => setHoveredTab(activeTab)}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="bg-gray-400 w-1/2 md:w-full mt-[-20px] md:mt-0 flex justify-center mx-auto ">
        <div className=" md:ml-10 md:mr-10 absolute flex flex-col md:flex-row justify-center items-center gap-1 md:gap-8 w-full max-w-[1400px]">
          <div className="m-2 rounded-xl h-[18rem] md:w-[44%] md:min-w-[200px] bg-cover bg-center card-shine investors-shine" style={{borderBottom: `#10169f 5px solid`, backgroundImage: `linear-gradient(135deg, #193cb8 0%, #155dfc 100%)`}}>
            <div className="float-right mt-15 mr-0 text-justify" style={{width: `160px`}}><img src={investors} /></div>
            <div className="p-6">
              <h2 className="pl-2 text-3xl text-white border-l-2" style={{fontFamily: "Italianno", cursive: 'true'}}>Investors</h2>
              <p className="mt-3 font-semibold text-left text-justify text-white servicetext" style={{fontSize: `14px`}}> Driving sustainable growth through innovation, transparency, and disciplined execution.
              Committed to creating long-term value for our investors and stakeholders.</p>
            </div>
            <div className="mt-[-4px]">
              <ul className="flex flex-wrap gap-2 ml-6 font-bold text-white text-center investors">
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[13px]">Investors Home</li>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[13px]">Quarterly Results</li>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[13px]">Leadership</li>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[13px]">Announcements</li><br></br>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[13px]">More Services</li>
              </ul>
              <button className="float-right mt-[-16px] mr-7 rotate-180"><img src={swipe} width="40px" height="40px" /></button>
            </div>
          </div>

          <div className="m-2 rounded-xl h-[18rem] md:w-[44%] md:min-w-[300px] card-shine consumers-shine" style={{ borderBottom: `#1e4a1d 5px solid`, backgroundImage: `linear-gradient(135deg, #1e4a1d 0%, #40ae39 100%)`}}>
           <div className="float-right mt-14 mb-0 text-justify" style={{width: `150px`}}><img src={consumers} /></div>
            <div className="p-6">
              <h2 className="pl-2 text-3xl text-white border-l-2" style={{fontFamily: "Italianno", cursive: 'true'}}>Consumers</h2>
              <p className="mt-3 font-semibold text-left text-justify text-white servicetext" style={{fontSize: `14px`}}>Everything You Need. One Trusted Platform.
               From travel and payments to insurance and healthcare, experience smarter everyday services in one seamless ecosystem.</p>
            </div>
            <div className="mt-[-4px]">
              <ul className="flex flex-wrap gap-2 ml-6 font-bold text-white investors">
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[13px]">Transport</li>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[13px]">Hotels & Flight</li>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[13px]">Insurance</li>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[13px]">Bill Payment</li>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[13px]">Money Transfer</li>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[13px]">Forex </li>
                <div style={{ width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[13px]">More Services</li>
              </ul>
            </div>
            <button className="float-right mt-[-16px] mr-7 rotate-180 "><img src={swipe} width="40px" height="40px" /></button>
          </div>

          <div className="m-2 rounded-xl h-[18rem] md:w-[45%] md:min-w-[300px] card-shine business-shine" style={{ borderBottom: `oklch(51.8% 0.253 323.949) 5px solid`, backgroundImage: `linear-gradient(135deg, oklch(43.2% 0.232 292.759) 0%, oklch(55.8% 0.288 302.321) 100%)`}}>
            <div className="float-right mt-14 mb-0 text-justify" style={{width: `130px`}}><img src={businessimg} /></div>
            <div className="p-6">
              <h2 className="pl-2 text-3xl text-white border-l-2" style={{fontFamily: "Italianno", cursive: 'true'}}>Business</h2>
              <p className="mt-3 font-semibold text-left text-justify text-white servicetext" style={{fontSize: `14px`}}>Powering Businesses with Intelligent Digital Solutions.
              Payments, travel, fintech and telecom, we help enterprises simplify operations, accelerate growth, and deliver exceptional customer experiences.</p>
            </div>
            <div className="mt-[-4px]">
              <ul className="flex flex-wrap gap-2 ml-6 font-bold text-white investors">
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[13px]">Payment Solutions</li>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[13px]">Travel Services</li>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[13px]">Financial Technology<span></span></li><br></br>
                <div style={{width: `17px`, height: `17px`, backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div><li className="text-[12px]">More Services</li>
              </ul>
            </div>
            <button className="float-right mt-[-16px] mr-7 rotate-180 "><img src={swipe} width="40px" height="40px" /></button>
          </div>
        </div>
         </div>
       </div>
       
      
      
     


    <section className="w-full h-[70rem] md:h-[40rem] relative mt-[60rem] md:mt-[400px] flex flex-col">
    <div className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${About})` }}>
    <div className="flex flex-col-reverse md:flex-row">   
      <div className="w-[25rem] md:w-[30rem] mt-24 mx-auto "> 
     <img className="rounded-2xl" src={ebix} style={{width: `35rem`, height: `15rem`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}/>
     
     <div className="flex  flex-nowrap border mt-7 rounded-2xl border py-2 px-4 bg-blue-100">
      <span className="border-r flex justify-center bg-blue-100 w-[12rem] h-[3rem] white bottom-75 text-center  font-bold text-black  px-1 py-1" ><img className="" src={employees} style={{width: `26px`, height: `26px`}} />10,431<br></br> Employees</span>
      <span className="border-r flex justify-center  bg-blue-100 w-[12rem] h-[3rem] top-20 left-10 text-center font-bold text-black px-1 py-1" ><img className="" src={residential} style={{width: `26px`, height: `26px`}} /> 22+ years<br></br> in Business</span>
      <span className=" flex justify-center  bg-blue-100 w-[12rem] h-[3rem] top-20 left-10 text-center font-bold text-black px-1 py-1" ><img className="" src={globe} style={{width: `25px`, height: `25px`}} /> 196 countries<br></br>offices</span>
     </div>

    </div>
  
    
    <div className="w-full md:w-1/2 m-0 mt-6 md:m-15 md:mt-20 aboutheading ">
    <h1 className="abouttext border-b border-white px-7 md:p-0">About EbixCash</h1>
    <ul className="aboutdescription text-3xl md:text-2xl p-3 md:p-0">
      <li>EbixCash, has today emerged as India’s largest end-to-end financial exchange, that includes a last mile network of over 650,000 physical distribution outlets besides an omni-channel online digital platform. 
           EbixCash converges front-end distribution channels with back-end technology functions, across the payments solutions, travel, insurance and financial technology industries.</li>
      <li>The EbixCash Exchange employs more than 10,431 employees across different sectors with 196 offices across the Asia Pacific region. 
          The leadership team of the Company is ingrained in the ethos of Customer First, a genuine need to excel, a bias for action and delivering results.</li>
      <li>With a clear leadership position in the areas of international remittance and foreign exchange, as well as leadership positions in other areas such as digital payments solutions, domestic money remittance, prepaid cards, travel, insurance and corporate & incentive solutions, EbixCash, is pioneering convergence end-to-end play.
         EbixCash portfolio of products can be accessed digitally anywhere as well as across its distribution outlets spread over 4,000 cities and 75,000 villages.</li>

      <li>EbixCash business encompasses four primary business segments - (1) Payments Solutions (2) Travel (3) Financial Technologies (4) BPO and Startups.</li>
      <div className="mt-2 flex gap-6 text-xl md:text-[14px]">
      <button className="border flex px-8 py-1 bg-white text-black rounded-full font-bold outline-outset" style={{boxShadow: `-3px 4px 0px oklch(62.3% 0.214 259.815)`}}> Watch Now <img className="ml-2" src={youtube} style={{width: `22px`, height: `22px`}}/></button>
      <button className="border flex px-7 py-1 bg-white text-black rounded-full font-bold"> Explore Now <img className="ml-2" src={arrow} style={{width: `22px`, height: `22px`}}/></button>
      </div>
    
      <div className="absolute ml-[60px] mt-125 md:ml-[25rem] md:mt-66 mx-auto text-justify ">
      <span className="flex m-auto text-left gap-2 text-white font-bold text-[15px]">
      <img src={winner} style={{width: `30px`, height: `40px`}}/><img className="flex" src={award} style={{width: `35px`, height: `40px`}} />The Economic Times Recognizes <br></br>EbixCash as the Best Brand 2020-21</span>
      </div>
     
    </ul>
    </div>
    </div>
    
    

     </div>

    
    </section>

    <section >
      <p className="text-center text-4xl md:text-5xl text-blue-700 font-semibold mt-10" style={{fontFamily: "Space Grotesk"}}>Client Endorsements </p>
      <Testimonial />
    </section>

    <section className="mt-20 " >
      <div className="border flex flex-col md:flex-row absolute w-full h-[34rem] md:h-[20rem] bg-blue-800 gap-10" >
        <div className="relative w-[25rem] md:w-[30rem] ">
  
          <img className="relative bottom-35 md:bottom-15 left-8 md:left-18 z-40 " src={Mobile}/>
          <div className="relative w-15 ml-[18rem] md:ml-[24rem] mt-[-27rem] md:mt-[-25rem] z-100"><img src={coin}/></div>
          <div className="relative w-25 ml-[17rem] md:ml-[26rem] mt-[3rem] md:mt-[2rem] z-100"><img src="../src/assets/send.png" className="w-30" /></div>
          <div className="relative w-15 ml-[5rem] md:ml-[8rem] mt-2 md:mt-0  z-100"><img src={coin}/></div>
        </div>
       
        
        
        <div  className=" text-white w-[100vw] md:w-full ml-0 mt-[-30px] md:ml-20 md:mt-10  p-2 md:p-0 ">
          <p className="font-medium text-[23px] md:text-[34px]  mt-1 md:mt-0" style={{fontFamily: "Space Grotesk"}}>EbixCash - UPI, Wallet and Payments</p>
          <p className=" text-[13px] md:text-[14px] mt-2 text-white text-justify">One App. Every Essential. From instant payments and seamless money transfers to forex, gift cards, and travel bookings, EbixCash brings all your everyday financial services together in one secure, intelligent experience.</p>
          <ul className="mt-2 ">
            <li className="flex text-[13px]
             mb-2" ><img src={icon} className="w-5 h-5 mr-1"/> Instant UPI Payments & Money Transfers</li>
            <li className="flex text-[13px] mb-2"><img src={icon} className="w-5 h-5 mr-1"/> Travel & Forex at Your Fingertips</li>
            <li className="flex text-[13px] mb-2"><img src={icon} className="w-5 h-5 mr-1"/> Rewards, Gift Cards & More</li>
            <li className="flex flex-col md:flex-row mt-5 md:mx-auto text-center" >Download Ebix App on Your Phone !
            <div className="relative flex ml-0 md:ml-10 top-[-10px] gap-10 mt-6 md:mt-0 px-3 md:px-0">
              <div className="flex border-black rounded-full px-5 py-2 bg-white" style={{boxShadow: `-3px 4px 0px oklch(62.3% 0.214 259.815)`}}><FaApple size="1.75rem" color="oklch(48.8% 0.243 264.376)"/><p className=" ml-2 text-[15px] font-bold py-1 text-blue-800">Get on Appstore</p></div>
              <div className="flex border-black rounded-full px-5 py-2 bg-white" style={{boxShadow: `-3px 4px 0px oklch(62.3% 0.214 259.815)`}}><BiLogoPlayStore size="1.75rem"color="oklch(48.8% 0.243 264.376)" /><p className=" ml-2 text-[15px] font-bold py-1 text-blue-800">Get on Playstore</p></div>
            </div>
            </li>
            
          </ul> 

        </div>



      </div>


    </section>

    <section >
       <div className="absolute mt-130 md:mt-140 w-full h-[85rem] flex flex-col md:flex-row md:flex-row-reverse ">

        <div className="flex flex-col relative mt-10 md:mt-20 ml-2 md:ml-20">
          <div>
            <p className="flex font-medium text-[50px] text-blue-700" style={{fontFamily: "Space Grotesk", letterSpacing: `-0.01cm` }}>Contact Us<img src="../src/assets/send.png" className="w-20 ml-1" /></p>
            <p className="text-[18px] text-bold">Write to us and we'll get back to you soon. Promise!</p>
          </div>
          
          <div>
            <form className='w-full md:w-[40rem] h-[45rem] rounded-2xl mt-2 flex justify-center items-center'>
              <div className='flex w-full md:w-[40rem] h-[50rem] md:h-[40rem] pt-1 flex-wrap flex-col gap-6 font-bold mx-auto' >
              
              <div className='flex flex-col md:flex-row gap-4  mt-10'>
              <label>First Name<input
              type="text"
              name="firstName"
              id="firstName"
              required
              className="bg-blue-100 rounded w-[20rem] md:w-[11rem] h-7  px-1  ml-2 md:ml-0 border-b-2 border-blue-600"
              /></label>
              

              <label>Last Name<input
              type="text"
              name="LastName"
              id="LastName"
              required
              className="bg-blue-100 rounded w-[20rem] md:w-[11rem] h-7 px-1  ml-2 md:ml-0 border-blue-600 border-b-2"
              /></label>
              
              
              </div>


              <div className='flex flex-col md:flex-row gap-5 '>
              <label>Phone<input
              type="number"
              name="mobile"
              id="mobile"
              required
              className="bg-blue-100 rounded w-[20rem] md:w-[11rem] h-7 px-1  ml-8 md:ml-0 border-b-2 border-blue-600"
              /></label>
              

              <label>Category<select className="bg-blue-100 rounded w-[20rem] md:w-[11rem] h-7 px-1  ml-4 md:ml-[-30px] border-b-2 border-blue-600">
                <option value="Jobs"></option>
                <option value="Jobs">Jobs</option>
                <option value="Complaints">Complaints</option>
                <option value="Offers">Offers</option>
              </select></label>
              
              

              </div>
             
              <div className='flex flex-col md:flex-row gap-5'>
              <label>Email <input
              type="email"
              name="email"
              id="email"
              required
              className="bg-blue-100 rounded w-[20rem] md:w-[11rem] h-7 px-1  ml-8 md:ml-0 border-b-2  border-blue-600"
              /></label>
             

              <label>Country<select className="bg-blue-100 rounded w-[20rem] md:w-[11rem] h-7 px-1  ml-5 w-[11rem] md:ml-[-31px] border-b-2 border-blue-600">
                <option value="Jobs"></option>
                <option value="Jobs">India</option>
                <option value="Complaints">USA</option>
                <option value="Offers">America</option>
              </select></label>
              

              </div>

              <div className='flex  flex-col md:flex-row gap-5  '>
              <label>Product<select className="bg-blue-100 rounded h-7 px-1  ml-5 w-[20rem] md:w-[11rem] md:ml-3 border-b-2 border-blue-600">
                <option value="Jobs"></option>
                <option value="Jobs">ATM</option>
                <option value="Complaints">Payment</option>
                <option value="Offers">Travel</option>
              </select></label>
              
              </div>

              <div  className='flex  flex-col gap-1  h-[18rem]'>
                <label>Query <div>
                <textarea className="bg-blue-100 rounded h-30 px-1 w-[25rem] md:w-[20rem]"/>
                </div></label>
               

                <label>Additional Information<div>
                <textarea className="bg-blue-100 rounded h-18 px-1 w-[25rem] md:w-[35rem]"/>
                </div>  </label>
                           
              </div>
              
              <div className="mt-[-30px] mx-auto mx-0 "><button className=" rounded-full px-5 py-2 text-black bg-yellow-400">Submit Request</button></div>
             

              

              </div>

              
              

            </form>  

            
            

          </div> 

         

        </div>

        <div
          className="mx-auto relative bg-blue-700 w-[26rem] md:w-1/2  md:m-30 rounded-4xl bg-gradient-to-t from-blue-800 via-blue-700 to-blue-800"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(10, 34, 114, 0.8), rgba(30, 64, 175, 0.8)), url(${contact91})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '24rem',
            overflow: 'hidden',
          }}
        >

        <div className="flex flex-col ml-8 mt-10">
          <p className="text-bolder text-[40px] text-blue-100" style={{fontFamily: "Space Grotesk", letterSpacing: `-0.01cm` }}>Let's Connect</p>
          <p className="text-bolder text-[14px] text-blue-200" style={{fontFamily: "Space Grotesk"}} >Have a question, project idea, or collaboration in mind? We'd love to hear from you.</p>
          <div className="flex mt-5 md:mt-8"><MdPhone size="1.7rem" className='text-blue-200'/><span className="text-[15px] ml-4 text-blue-200" style={{fontFamily: "Space Grotesk", letterSpacing: `-0.01cm` }} >+ 91 - 120 - 4688400</span></div>
          <div className="flex mt-5  md:mt-8"><IoBusinessSharp size="1.7rem" className='text-blue-200'/><span className="text-[15px] ml-4 text-blue-200" style={{fontFamily: "Space Grotesk", letterSpacing: `-0.01cm` }} >+ 91 - 120 - 2460870</span></div>
          <div className="flex mt-5 md:mt-8"><MdMail size="1.7rem" className='text-blue-200'/><span  className="text-[15px] ml-4 text-blue-200" style={{fontFamily: "Space Grotesk", letterSpacing: `-0.01cm` }}>info@ebixcash.com</span></div>
          <div className="flex mt-5 md:mt-8 "><MdLocationOn size="1.7rem" className='text-blue-200'/><span  className="text-[15px] ml-4 text-blue-200" style={{fontFamily: "Space Grotesk", letterSpacing: `-0.01cm` }}>EbixCash Limited Plot No. 122 & 123, NSEZ ,<br></br> Phase - II, Noida - 201305 (Uttar Pradesh)</span></div>
          {/* <div className="w-[13rem] border-t border-blue-200 mt-10 mx-auto" ></div> */}
          <div className="flex gap-15 text-blue-200 justify-center items-center mt-10 md:mt-20 mb-10 md:mb-0">
            <div><FaFacebook size="1.7rem"  /></div>
            <div><FaInstagram size="1.7rem" /></div>
            <div><FaLinkedin size="1.7rem" /></div>
            <div><FaXTwitter size="1.7rem" /></div>
            <div></div>
          </div>


        </div>

      

        </div>
        

       </div>
    </section>

    <footer className="w-full h-[87rem] md:h-[42rem] absolute mt-480 bg-blue-600 bg-gradient-to-t from-blue-600 via-blue-700 to-blue-800" 
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(10, 34, 114, 0.3), rgba(30, 64, 175, 0.4)), url(${contact})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '24rem',
            overflow: 'hidden',
          }}>

     <div className="mt-8 mx-auto flex flex-col md:flex-row" >
          <div className="m-2 md:ml-10 logo flex flex-start flex-col w-full md:w-[100rem]">              
                  <img src={logos} alt="logo"  />
                  <div className="flex-col">
                  <p className="ml-3 text-white text-[20px] md:text-[15px] text-bold ">India’s Largest End-to-End Financial Exchanges</p>
                  <p className="ml-3 text-white text-[14px] md:text-[10px] text-bold italic">Powering payments, travel, forex, remittance, and financial technology<br></br> through a vast
                   phygital network of 650,000+ outlets<br></br> across India.</p>
                  </div>
          </div>

          <div className="flex-end mr-20 w-full md:w-1/4 mt-5">
            <p className="mb-3 ml-5 md:ml-3 text-blue-100 text-[15px] font-bold " style={{letterSpacing: `0.01cm`}}>Subscribe to Newsletter</p>
            <div className="flex ml-5 md:ml-0"><input type="text" placeholder="Enter your email ID" className='w-[16rem] h-[2rem] px-4 bg-white rounded-full'/><IoIosSend size="2rem" className="text-white bg-blue-500 rounded-full relative right-7 p-1"/></div>

          </div>
          

     </div>
     <div className="w-[83rem] border-t border-white mx-auto mt-10 md:mt-4" ></div>


     <div className="px-6 md:px-0 mx-auto flex flex-wrap gap-16 md:gap-20 text-white mt-10">
      
      <div className="hidden md:block">
        <ul className="flex flex-col gap-1 ml-0 md:ml-18 ">
          <li><p className="font-extrabold">Discover EbixCash</p></li>
          <li>Introduction</li>
          <li>Market Overview</li>
          <li>Our Strength</li>
          <li>Global Offices</li>
          <li>Leadership</li>
        </ul>
      </div>

      <div>
        <ul className="flex flex-col gap-1 ml-0">
          <li><p className="font-extrabold">Investors</p></li>
          <li>Investor Home</li>
          <li>Key Financial Data</li>
          <li>Quarterly Results</li>
          <li>Announcement</li>
          <li>Corporate Governance</li>
          <li>Leadership</li>
          <li>Contact Information</li>
        </ul>
      </div>

      <div>
        <ul className="flex flex-col gap-1">
          <li><p className="font-extrabold">EbixCash for Consumer</p></li>
          <li>Flights</li>
          <li>Hotels</li>
          <li>Holidays</li>
          <li>Cabs</li>
          <li>Buses</li>
          <li>Forex</li>
          <li>Money Transfer</li>
          <li>Prepaid & Gift Cards</li>
          <li>Bill Payment & Recharges</li>
        </ul>
      </div>

      <div>
        <ul className="flex flex-col gap-1">
          <li><p className="font-extrabold">EbixCash for Businesss</p></li>
          <li>Payment Solutions</li>
          <li>Travel Services</li>
          <li>Financial Technology</li>
          <li>Travel Technology</li>
          <li>Bus Exchange Solution</li>
          <li>Telecom Services</li>
          <li>Data Services</li>
          <li>BPO Services</li>
          <li>E-Learning</li>
          <li>Logistic Services</li>
          <li>Insurance Services</li>
          <li>Agent Assisted Mode</li>
          <li>EbixCash Cabs</li>
        </ul>
      </div>
      
      <div>
        <ul className="flex flex-col gap-1">
          <li><p className="font-extrabold">Ebixcash (PPI)</p></li>
          <li>Legal Documents</li>
          <li>FAQs</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Code of Conduct</li>
          <li>Contact Us</li>
          <li>Complaint Status</li>
          <li>Media & News</li>
          <li>Acts</li>
          <li>Find Our Agents</li>
        
        </ul>
      </div>

      <div className="w-full flex-col justify-center items-center mt-[-50px]">
      <ul className=" mt-[10px] md:mt-[-80px]">
        <li><p className="font-bold text-center mb-5 md:mb-2 md:ml-3">Download our Apps</p></li>
        <div className="flex gap-2 "> <li><div className="mb-4"><img src={playstore} className="w-[10rem] h-[3rem] mb-0 md:mb-4"/></div></li>
        <li><div className="mb-4"><img src={appstore} className="w-[10rem] h-[3rem] mb-0 md:mb-4"/></div></li>
        <li><div className="mb-4"><img src={taxlogo} className="w-[10rem] h-[3rem]" /></div></li></div>
       
      </ul>
       <div><p className="font-extrabold mb-2 text-center">Connect With Us</p></div>
       <div className="flex gap-7 md:gap-4 text-white justify-center items-center border rounded-full mx-auto px-4 py-2 w-[15rem]">
            <div><FaFacebook size="1.5rem"  /></div>
            <div><FaInstagram size="1.5rem" /></div>
            <div><FaLinkedin size="1.5rem" /></div>
            <div><FaXTwitter size="1.5rem" /></div>
          </div>
     </div>
     

     

      </div>
      <div className="w-[83rem] border-t border-white mx-auto mt-10" ></div>

      <div className="flex mt-4 justify-center items-center flex">
        <div className="flex text-white" ><p><span>&#169;</span> 2025 All rights reserved</p></div>
      </div>

     

    </footer>



    </div>
  )
}

export default Header








