import React, {useState, } from 'react'
import { Table, Button } from 'antd';



const ScheduleWorkOrder = () => {
    const [isEditData, setIsEditData] = useState<boolean>(false)

    const editUser = (record :any) => {
        setIsEditData(true)

    }
    const columns = [
        {
          title: 'Asset Serial Number',
          dataIndex: 'asset_serial_number',
          key: 'asset_serial_number',
          render: (text: any, record: any) =>  <Button type="link" onClick={() => editUser(record)} className="pr-2">
          {record.asset_serial_number}
        </Button>,
        },
        {
          title: 'Asset Name',
          dataIndex: 'asset_name',
          key: 'asset_name',
        },
        {
          title: 'Asset Location',
          dataIndex: 'asset_location',
          key: 'asset_location',
        },
        {
          title: 'Teams in Charge',
          key: 'team_charge',
          dataIndex: 'team_charge',
    
        },
      ];
      
      const data = [
        {
          key: '1',
          asset_serial_number: '21608',
          asset_name: 'AID Camera-21608',
          asset_location: 'Geylang',
          team_charge: 'C',
        },
        {
          key: '2',
          asset_serial_number: '21602',
          asset_name: 'AID Camera-21602',
          address: 'London No. 1 Lake Park',
          team_charge: 'D',
        },
        {
          key: '3',
          asset_serial_number: '21604',
          asset_name: 'AID Camera-21604',
          asset_location: 'Toa Payoh',
          team_charge: 'B',
        },
      ];
    return (
       <>
              <div id="page-wrapper">
                              <div className="container-fluid">
                              <div className="row">
                        <div className="col-lg-12">
                            <h5 className="page-header">Select an Asset to Schedule Work Order</h5>
                        
                        </div>
                    </div>
        <div className="row">
  
 

    <div className="col-lg-12">
            <div className="panel panel-default ">
            {isEditData ? (
                   <>
                        <div className="panel-heading">
                        <i className="fa fa-bar-chart-o fa-fw"></i>  Create Form
                    </div>
                    <div className="panel-body">
                    <p>Asset Serial Number: 21604</p>
                    <p>Date Submitted: 27-Oct-2021</p>
                   <span className="inline">Maintenance Date: </span> <input className="form-control inline" type="date"/>
                    <p>Team in Charge</p>
                    <div>
                        <Button type="default" className="float-left" onClick={ () => setIsEditData(false)}>Cancel</Button>
                        <Button type="primary" className="float-right">Submit</Button>
                        </div>
                </div>
                  
                   </>
            ) : 
            
            <>
                <div className="panel-heading">
                    <i className="fa fa-bar-chart-o fa-fw"></i>  New Assets
                </div>
                <div className="panel-body">
                      
                      <Table columns={columns} dataSource={data} />
                  </div>
            </>
            }
    
            
        
               
            </div>
          
        </div>
    </div>
    </div>
    </div>
       </>
    )
}

export default ScheduleWorkOrder