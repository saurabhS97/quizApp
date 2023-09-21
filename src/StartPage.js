import logo from './logo.svg';
import './App.css';
import { Router, useNavigate } from 'react-router-dom';

function StartPage() {
    const navigate = useNavigate();
function goToStart(){
    navigate('/questionPage');
}
  return ( 
  <div className="start-backGround" >
      
      <div style={{padding:"5vh 0vh",display:'flex',flexDirection:'row', alignItems:"center", placeItems:"center",justifyContent:"center"}}>
 <svg xmlns="http://www.w3.org/2000/svg" width="31" height="40" viewBox="0 0 61 70" fill="none">
  <g opacity="0.28">
    <path opacity="0.28" d="M27.0761 55.394C27.0761 54.0685 26.0041 52.994 24.6816 52.994C23.3592 52.994 22.2871 54.0685 22.2871 55.394V67.4C22.2871 68.7255 23.3592 69.8 24.6816 69.8C26.0041 69.8 27.0761 68.7255 27.0761 67.4V55.394Z" fill="#FF7304"/>
    <path opacity="0.28" d="M27.0761 55.394C27.0761 54.0685 26.0041 52.994 24.6816 52.994C23.3592 52.994 22.2871 54.0685 22.2871 55.394V67.4C22.2871 68.7255 23.3592 69.8 24.6816 69.8C26.0041 69.8 27.0761 68.7255 27.0761 67.4V55.394Z" fill="url(#paint0_linear_269_168)" fillOpacity="0.19"/>
  </g>
  <path d="M27.0761 65C27.0761 63.6745 26.0041 62.6 24.6816 62.6C23.3592 62.6 22.2871 63.6745 22.2871 65V67.4C22.2871 68.7255 23.3592 69.8 24.6816 69.8C26.0041 69.8 27.0761 68.7255 27.0761 67.4V65Z" fill="#FF7304"/>
  <path d="M27.0761 65C27.0761 63.6745 26.0041 62.6 24.6816 62.6C23.3592 62.6 22.2871 63.6745 22.2871 65V67.4C22.2871 68.7255 23.3592 69.8 24.6816 69.8C26.0041 69.8 27.0761 68.7255 27.0761 67.4V65Z" fill="url(#paint1_linear_269_168)" fillOpacity="0.19"/>
  <path d="M39.0488 55.394C39.0488 54.0685 37.9767 52.994 36.6543 52.994C35.3318 52.994 34.2598 54.0685 34.2598 55.394V67.4C34.2598 68.7255 35.3318 69.8 36.6543 69.8C37.9767 69.8 39.0488 68.7255 39.0488 67.4V55.394Z" fill="#FF7304"/>
  <path d="M39.0488 55.394C39.0488 54.0685 37.9767 52.994 36.6543 52.994C35.3318 52.994 34.2598 54.0685 34.2598 55.394V67.4C34.2598 68.7255 35.3318 69.8 36.6543 69.8C37.9767 69.8 39.0488 68.7255 39.0488 67.4V55.394Z" fill="url(#paint2_linear_269_168)" fillOpacity="0.19"/>
  <path d="M27.5491 2L1.17349 48.2C0.85399 48.7534 0.708018 49.3904 0.75457 50.0282C0.801121 50.6658 1.03804 51.2747 1.43451 51.7757C1.83099 52.2766 2.36867 52.6464 2.97763 52.8369C3.58661 53.0274 4.23869 53.0299 4.84907 52.844L29.0935 43.556C30.1182 43.2319 31.2176 43.2319 32.2423 43.556L56.4868 52.844C57.0971 53.0299 57.7492 53.0274 58.3582 52.8369C58.9672 52.6464 59.5049 52.2766 59.9014 51.7757C60.2978 51.2747 60.5348 50.6658 60.5813 50.0282C60.6278 49.3904 60.4819 48.7534 60.1624 48.2L33.7868 2C33.4727 1.44881 33.0187 0.990672 32.471 0.67202C31.9233 0.353366 31.3012 0.185532 30.6679 0.185532C30.0346 0.185532 29.4125 0.353366 28.8648 0.67202C28.3171 0.990672 27.8632 1.44881 27.5491 2Z" fill="#FF7304"/>
  <path d="M27.5491 2L1.17349 48.2C0.85399 48.7534 0.708018 49.3904 0.75457 50.0282C0.801121 50.6658 1.03804 51.2747 1.43451 51.7757C1.83099 52.2766 2.36867 52.6464 2.97763 52.8369C3.58661 53.0274 4.23869 53.0299 4.84907 52.844L29.0935 43.556C30.1182 43.2319 31.2176 43.2319 32.2423 43.556L56.4868 52.844C57.0971 53.0299 57.7492 53.0274 58.3582 52.8369C58.9672 52.6464 59.5049 52.2766 59.9014 51.7757C60.2978 51.2747 60.5348 50.6658 60.5813 50.0282C60.6278 49.3904 60.4819 48.7534 60.1624 48.2L33.7868 2C33.4727 1.44881 33.0187 0.990672 32.471 0.67202C31.9233 0.353366 31.3012 0.185532 30.6679 0.185532C30.0346 0.185532 29.4125 0.353366 28.8648 0.67202C28.3171 0.990672 27.8632 1.44881 27.5491 2Z" fill="url(#paint3_linear_269_168)" fillOpacity="0.19"/>
  <defs>
    <linearGradient id="paint0_linear_269_168" x1="24.6816" y1="52.994" x2="24.6816" y2="69.8" gradientUnits="userSpaceOnUse">
      <stop stopColor="white"/>
      <stop offset="1" stopColor="white" stopOpacity="0"/>
    </linearGradient>
    <linearGradient id="paint1_linear_269_168" x1="24.6816" y1="62.6" x2="24.6816" y2="69.8" gradientUnits="userSpaceOnUse">
      <stop stopColor="white"/>
      <stop offset="1" stopColor="white" stopOpacity="0"/>
    </linearGradient>
    <linearGradient id="paint2_linear_269_168" x1="36.6543" y1="52.994" x2="36.6543" y2="69.8" gradientUnits="userSpaceOnUse">
      <stop stopColor="white"/>
      <stop offset="1" stopColor="white" stopOpacity="0"/>
    </linearGradient>
    <linearGradient id="paint3_linear_269_168" x1="30.6679" y1="0.185532" x2="30.6679" y2="52.9817" gradientUnits="userSpaceOnUse">
      <stop stopColor="white"/>
      <stop offset="1" stopColor="white" stopOpacity="0"/>
    </linearGradient>
  </defs>
</svg>
<div style={{fontWeight:900,padding:"0px 5px"}}>
    upraised
    </div></div>
  <div style={{display:"flex",justifyContent:"center", alignContent:"center",alignItems:"center",height:"70vh"}}>
      <div className="start-Circle">
          <div className="quiz-heading">
              <p style={{ color:"#FF3B3C" ,textAlign: "center",fontFamily: "Poppins",fontSize: "30px",fontStyle: "normal",fontWeight: "800",lineHeight: "140px",display:"flex",justifyContent:"center"}}>
                  Quiz</p>
          </div>
      </div>
      </div> <div>
          <button className="startButton" onClick={goToStart}>Start</button>
      
      </div>
  </div>
 );
}

export default StartPage;