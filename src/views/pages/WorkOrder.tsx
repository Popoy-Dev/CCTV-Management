import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { Calendar, Alert, Button } from 'antd';
import moment from 'moment';
import ScheduleWorkOrder from './ScheduleWorkOrder';
import MaintenanceForm from './MaintenanceForm';


const WorkOrder = () => {
    const [selectedValue, setSelectedValue] = useState(moment('2017-01-25'))

    const [selectedDate, setSelectedDate] = useState();


    const  getListData = (value) => {
        let listData;
        switch (value.date()) {
          case 8:
            listData = [
              { content: 'AID Camera - 21602' },
            ];
            break;
          case 10:
            listData = [
                { content: 'AID Camera - 21604' },


            ];
            break;
          case 15:
            listData = [
                { content: 'AID Camera - 21605' },


            ];
            break;
          default:
        }
        return listData || [];
      }

      const editCalendar = (item: any) => {
        setSelectedDate(item)
console.log(item)
      }
      const  dateCellRender =(value) => {
        const listData = getListData(value);
        return (
          <ul className="events">
            {listData.map(item => (
              <li key={item.content}>
                  <Button type="link" className="text-sm" onClick={() => editCalendar(item)}>{item.content} </Button>
              </li>
            ))}
          </ul>
        );
      }
      
      const  getMonthData = (value) => {
        if (value.month() === 8) {
          return 1394;
        }
      }
      
      const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
          <div className="notes-month">
            <section>{num}</section>
            <span>Backlog number</span>
          </div>
        ) : null;
      }

    return (
       <>
        <div id="page-wrapper">
                              <div className="container-fluid">
                              <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Work Orders</h1>
                            <div className="alert alert-info">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <Link to=""  className="alert-link">Alert Link</Link>.
                            </div>
                        </div>
                    </div>
        <div className="row">
    <div className="col-lg-12">
            <div className="panel panel-default ">
                <div className="panel-heading">
                    <i className="fa fa-bar-chart-o fa-fw"></i> {selectedDate ? (
                     <> <span>Maintenance Form</span>  <span className="float-right"><Button type="default" className="float-left" onClick={ () => setSelectedDate(null)}>Cancel</Button></span> </>
                    ) : ' New Assets' } 
         
                </div>
            <div className="panel-body">
       
            <div>
            {/* <Alert
          message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
        /> */}
            </div>
            {selectedDate ? (
        <MaintenanceForm />

            ) : (
                <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />

            )}

                </div>
            </div>
        </div>
    </div>
    </div>    
    </div>
<ScheduleWorkOrder />

       </>
    )
}

export default WorkOrder