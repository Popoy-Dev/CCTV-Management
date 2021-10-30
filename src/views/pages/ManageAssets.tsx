import React from 'react'

const ManageAssets = () => {


    return (
       <>
              <div id="page-wrapper">
                              <div className="container-fluid">
                              <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Assets</h1>
                        </div>
                    </div>
        <div className="row">
  
        <div className="col-lg-4">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <i className="fa fa-bell fa-fw"></i>List of Assets
                </div>
                <div className="panel-body">
                    <div className="list-group">
                   <h5>AID Camera - 21632</h5>
                   <p>Geylang</p>
                   <h5>AID Camera - 21052</h5>
                   <p>Toa Payoh</p>
                </div>
            </div>


        </div>
    </div>

    <div className="col-lg-8">
            <div className="panel panel-default ">
                <div className="panel-heading">
                    <i className="fa fa-bar-chart-o fa-fw"></i>  New Assets
         
                </div>
                <div className="panel-body">
                <input className="form-control " placeholder="Assets Serial Number" required /> <br/>
                <input className="form-control " placeholder="Assets Name" required /> <br/>
                <label>Select Location</label>
                <select className="form-control">
                    <option>Asset Location</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select> <br/>
                <input className="form-control" placeholder="Assets Model" required /> <br/>
                <input className="form-control" placeholder="Assets Manufacturer" required /> <br/>

                <label>Asset Year</label>
                <select className="form-control">
                    <option>Select Year</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <br/>
                <label>Teams in Charge</label> <br/>
                <select className="form-control">
                    <option>Select Team</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <br/>
                <input className="form-control" placeholder="Asset Type" required /> <br/>
                <input className="form-control" placeholder="Asset Vendor" required /> <br/>
                <div>
                <button className="btn btn-default">Cancel</button> 
            <button className="btn btn-primary float-right">Submit</button> 
                </div>

                </div>
            </div>
          
        </div>
    </div>
    </div>
    </div>
       </>
    )
}

export default ManageAssets