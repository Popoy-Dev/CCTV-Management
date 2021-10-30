import React, {useState, } from 'react'



const MaintenanceForm = () => {

return (
  <>
    <div className="panel-body">
      <label htmlFor="">Work Order ID</label>
      <input type="text" className="form-control" value="102"/> <br />
      <label htmlFor="">Maintenance Schedule</label>
      <input type="date" className="form-control" value="2020-01-08"/>  <br />
      <label htmlFor="">Asset Serial Number</label>
      <input type="text" className="form-control" value="21602"/>  <br />
      <label htmlFor="">Asset Name</label>
      <input type="text" className="form-control" value="AID Camera - 21602"/>  <br />
      <label htmlFor="">Location</label>
      <input type="text" className="form-control" value="Toa Payoh"/>  <br />
      <label htmlFor="">Assign to team</label>
      <input type="text" className="form-control" value="D "/>  <br />
      <h2>Visual Inspection</h2>
      <p>1. Check that the camera housing window does not have any cracks.</p> 
      <div className="form-check" style={{ display: 'inline' ,  marginRight : '20px' }}>
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" checked value="option1" style={{   marginRight : '10px' }} />
        <label className="form-check-label" >Pass</label>
      </div>
      <div className="form-check" style={{ display: 'inline', marginRight : '20px' }}>
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" style={{   marginRight : '10px' }} />
        <label className="form-check-label"  >Flag</label>
      </div>
      <div className="form-check" style={{ display: 'inline' }}>
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" style={{   marginRight : '10px' }}  />
        <label className="form-check-label">Fail</label>
      </div>

      <p>2. Check for any damages, vandalishm such as graffiti.</p> 
      <div className="form-check" style={{ display: 'inline' ,  marginRight : '20px' }}>
        <input className="form-check-input" type="radio" name="inlineRadioOptions" checked id="inlineRadio1" value="option1" style={{   marginRight : '10px' }} />
        <label className="form-check-label" >Pass</label>
      </div>
      <div className="form-check" style={{ display: 'inline', marginRight : '20px' }}>
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" style={{   marginRight : '10px' }} />
        <label className="form-check-label"  >Flag</label>
      </div>
      <div className="form-check" style={{ display: 'inline' }}>
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" style={{   marginRight : '10px' }}  />
        <label className="form-check-label">Fail</label>
      </div>

      <p>3. Check ground connectivity and tidy up any messy cabling.</p> 
      <div className="form-check" style={{ display: 'inline' ,  marginRight : '20px' }}>
        <input className="form-check-input" type="radio" name="inlineRadioOptions"  id="inlineRadio1" value="option1" style={{   marginRight : '10px' }} />
        <label className="form-check-label" >Pass</label>
      </div>
      <div className="form-check" style={{ display: 'inline', marginRight : '20px' }}>
        <input className="form-check-input" type="radio" name="inlineRadioOptions" checked id="inlineRadio2" value="option2" style={{   marginRight : '10px' }} />
        <label className="form-check-label"  >Flag</label>
      </div>
      <div className="form-check" style={{ display: 'inline' }}>
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" style={{   marginRight : '10px' }}  />
        <label className="form-check-label">Fail</label>
      </div>

      <p>4. Measure the resistance reading.</p> 
      <input type="text" className="form-control" />
    </div>
  </>
)
}

export default MaintenanceForm