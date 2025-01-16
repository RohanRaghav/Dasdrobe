import React from 'react'

const Aboutus = () => {
  return (
    <div className='aboutstyle' style={{height:'75vh'}}>
      <div className='large'>
        <div className='side'>
       <b> About us</b>
        <svg className='bigsvg' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#CEA89C"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M12 11a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5zm-6.712 3.006a6.983 6.983 0 0 0-.28 1.65L5 16v6H2v-4.5a3.5 3.5 0 0 1 3.119-3.48l.17-.014zm13.424 0A3.501 3.501 0 0 1 22 17.5V22h-3v-6c0-.693-.1-1.362-.288-1.994zM5.5 8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"></path> </g> </g></svg>
       </div>
       <div className='para'>Dashdrobe; Your ultimate solution for fast, reliable, and hassle- free fashion delivery. Whether you're in need of a last-minute outfit or just want to refresh your wardrobe with no time to spare, we've got you covered! With our express delivery service, you can shop the latest trends and have your selected items delivered to your doorstep in just 60 minutes.</div>
       <div className='abc'>Contact Us</div>
     </div>
     <div className='about'>
      <div className='def' style={{
  justifyContent: 'center',
  textAlign: 'center'}}>
        <div className='imagea'>
      <img src='/Inderkiran.png' alt='lead1' className='imageabout' /></div><div>

      INDERKIRAN</div>
      </div><div className='defg'>
        <div><img src='/Jatin.png' alt='lead2' className='imageabout2' /></div><div>JATIN</div></div>
     </div>
    </div>
  )
}

export default Aboutus
