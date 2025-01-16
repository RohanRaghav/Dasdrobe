import React from 'react';

const TieUp = () => {
  return (
    <div className="back">
      <div className="content">
        <div className="newtieup">
          <div className='sixtys'>
            Partner with <br />Dashdrobe
            <p>"AND GROW YOUR BUSINESS"</p>
            <div style={{display:'flex', gap:'20px',padding:'20px 0px'}}>
              <img src="/insta.png" alt="handles" className="handlesfakes" />
              <img src="/facebook.png" alt="handles" className="handlesfakes" />
              <img src="/twitter.png" alt="handles" className="handlesfakes" />
              <img src="/linkedin.png" alt="handles" className="handlesfakes" />
            </div>
            <div className='download'>
              <svg fill="#000000" width="26px" height="26px" viewBox="0 0 24 24" id="cursor-2" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" className="icon flat-line"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="secondary" d="M20,5.28l-2.18,9.21a1,1,0,0,1-1.85.16L14.62,12.2l-7.5,7.51a1,1,0,0,1-1.41,0L4.29,18.29a1,1,0,0,1,0-1.41l7.51-7.5L9.35,8.06a1,1,0,0,1,.16-1.85L18.72,4A1.05,1.05,0,0,1,20,5.28Z" style={{fill: '#E6CCB9' , strokeWidth: 2}}></path><path id="primary" d="M20,5.28l-2.18,9.21a1,1,0,0,1-1.85.16L14.62,12.2l-7.5,7.51a1,1,0,0,1-1.41,0L4.29,18.29a1,1,0,0,1,0-1.41l7.51-7.5L9.35,8.06a1,1,0,0,1,.16-1.85L18.72,4A1.05,1.05,0,0,1,20,5.28Z" style={{fill: 'none', stroke: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2}}></path></g></svg>
              Download the app to experience Dashdrobe
            </div>
          </div>
          <form className='formadjust'>
            <div className="def">
              <label>Name</label>
              <input className="tieup" type="text" />
            </div>
            <div className="def">
              <label>Business Name</label>
              <input className="tieup" type="text" />
            </div>
            <div className="def">
              <label>Contact Number</label>
              <input className="tieup" type="text" />
            </div>
            <div className="def">
              <label>Email</label>
              <input className="tieup" type="text" />
            </div>
            <div className="def">
              <label>Storage Location</label>
              <input className="tieup" type="text" />
            </div>
            <div className="def">
              <label>Message</label>
              <input className="tieup" type="text" />
            </div>
          </form>
        </div>
        </div>
      </div>
  );
};

export default TieUp;
