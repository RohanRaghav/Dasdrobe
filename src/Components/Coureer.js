import React from 'react'

const Coureer = () => {
  return (
    <div className='contactcontainer'>
    <div className='divisioning'>
       <div>
    <img src='/Coureer.png' alt='career' className='career' />
  </div>
      <div className="form-container">
    <form>
      <div className="form-group">
        <label>
          First Name
          <input type="text" />
        </label>
        <label>
          Last Name
          <input type="text" />
        </label>
      </div>
      <div className="form-group">
        <label style={{width:'100%'}}>
          Email Address
          <input type="email" />
          
        </label> </div>
        <div className="form-group">
        <label>
          Phone Number
          <input type="tel" />
        </label>
        <label>
          Role Interested
          <input type="text" />
        </label>
      </div>
      <div className="form-group upload">
        <label>
          Resume Upload
          <input type="file" className='upload' />
        </label>
        <label>
          Cover Letter
          <input type="file" className='upload' />
        </label>
      </div>
      <div className="form-button">
        <button type="submit">APPLY NOW!</button>
      </div>
    </form>
  </div>
    </div>
    </div>
  )
}

export default Coureer
